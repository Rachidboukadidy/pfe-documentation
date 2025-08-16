
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

export default function Page() {
  return (
    <Layout title="Nouvelle Section">
      <article className="prose dark:prose-invert max-w-none">
        <h1>Nouvelle Section</h1>
        <ReactMarkdown>
          {``}
        </ReactMarkdown>
        
      </article>
    </Layout>
  );
}