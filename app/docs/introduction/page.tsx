
import Layout from "@/components/Layout";
import ReactMarkdown from "react-markdown";

export default function Page() {
  return (
    <Layout title="Introduction">
      <article className="prose dark:prose-invert max-w-none">
        <h1>Introduction</h1>
        <ReactMarkdown>
          {``}
        </ReactMarkdown>
        
        <h2 id="nouvelle%20sous-section">Nouvelle Sous-section</h2>
        <ReactMarkdown>
          {``}
        </ReactMarkdown>
      </article>
    </Layout>
  );
}