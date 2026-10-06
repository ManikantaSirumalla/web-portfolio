import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h2: ({ children }) => (
    <h3 className="mt-16 border-t border-hairline pt-10 text-[28px] font-semibold leading-[1.15] tracking-display first:mt-0 first:border-t-0 first:pt-0 md:text-[32px]">
      {children}
    </h3>
  ),
  h3: ({ children }) => <h4 className="mt-10 text-[21px] font-semibold tracking-headline">{children}</h4>,
  p: ({ children }) => <p className="mt-4 text-[17px] leading-[1.6] text-ink [overflow-wrap:anywhere]">{children}</p>,
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-[17px] leading-[1.6] marker:text-graphite">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-[17px] leading-[1.6] marker:text-graphite">{children}</ol>,
  strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-link [overflow-wrap:anywhere] hover:underline">
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="mt-6 overflow-x-auto rounded-[18px] border border-hairline">
      <table className="w-full border-collapse text-left text-[13px] leading-[1.5] md:text-[15px]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-mist">{children}</thead>,
  th: ({ children }) => <th className="px-3 py-2.5 font-semibold text-ink md:px-5 md:py-3">{children}</th>,
  td: ({ children }) => (
    <td className="border-t border-hairline px-3 py-2.5 align-top text-ink md:px-5 md:py-3">{children}</td>
  ),
  pre: ({ children }) => (
    <pre className="mt-6 overflow-x-auto rounded-[18px] bg-dusk p-4 text-[11px] leading-[1.6] text-white/90 md:p-6 md:text-[13px]">{children}</pre>
  ),
  code: ({ className, children }) =>
    className ? (
      <code className={className}>{children}</code>
    ) : (
      <code className="rounded-md bg-mist px-1.5 py-0.5 font-mono text-[0.88em] text-ink [overflow-wrap:anywhere] [pre_&]:bg-transparent [pre_&]:[overflow-wrap:normal] [pre_&]:p-0 [pre_&]:text-inherit">
        {children}
      </code>
    ),
  img: ({ src, alt }) => (
    <img src={typeof src === "string" ? src : undefined} alt={alt ?? ""} loading="lazy" className="mt-6 h-auto max-h-[520px] w-auto max-w-full rounded-[18px] ring-1 ring-black/5" />
  ),
};

export default function ProjectReadme({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-[880px]">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
