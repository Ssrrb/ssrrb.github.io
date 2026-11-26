#!/usr/bin/env python3
# Offline copy of the demo with live search by meaning: serves the folder above this one and answers
# /embed?q=... with the query embedded by EmbeddingGemma 2 on this machine (no internet needed).
#   HF_HUB_OFFLINE=1 path/to/.venv/bin/python -I archivo/servir.py      -> http://localhost:4321/archivo/
# Needs sentence-transformers and the model already in the local Hugging Face cache.
import base64
import json
import os
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import parse_qs, urlparse

import numpy as np
import torch
from sentence_transformers import SentenceTransformer

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 4321
MODEL = SentenceTransformer('google/embeddinggemma-2', model_kwargs={'torch_dtype': torch.float32},
    config_kwargs={'vision_config': None, 'audio_config': None})


def embed(q):
    # Same prompt and int8 packing as the precomputed vectors (embed_archivo.py, embed_fotos.py).
    v = MODEL.encode([f'task: search result | query: {q}'], normalize_embeddings=True)[0]
    return base64.b64encode(np.clip(np.round(v * 127), -127, 127).astype(np.int8).tobytes()).decode()


class Handler(SimpleHTTPRequestHandler):
    def do_GET(self):
        url = urlparse(self.path)
        if url.path != '/embed':
            return super().do_GET()
        q = (parse_qs(url.query).get('q') or [''])[0].strip()[:300]
        body = json.dumps({'v': embed(q)}).encode()
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def log_message(self, *args):
        pass


if __name__ == '__main__':
    print(f'Listo: http://localhost:{PORT}/archivo/  (Ctrl+C para cortar)', flush=True)
    ThreadingHTTPServer(('127.0.0.1', PORT), partial(Handler, directory=ROOT)).serve_forever()
