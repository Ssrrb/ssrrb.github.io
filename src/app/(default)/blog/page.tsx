import LocaleBlogPage from "../../[locale]/blog/page";

export { metadata } from "../../[locale]/blog/page";

export default function BlogPage() {
  return <LocaleBlogPage params={Promise.resolve({ locale: "en" })} />;
}
