import { getBlogPosts } from "@/data/blog";
import LocaleBlogPost, {
  generateMetadata,
} from "../../../[locale]/blog/[slug]/page";

export { generateMetadata };

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <LocaleBlogPost params={Promise.resolve({ locale: "en", slug })} />
  );
}
