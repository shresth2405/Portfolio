import { blogs } from '@/utils/blogData';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) return {};
    return { title: blog.title, description: `Blog post: ${blog.title}` };
}

export default function BlogPage({ params }) {
    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) notFound();

    // Simple markdown-ish renderer: headings, bold, code, paragraphs
    const renderContent = (raw) => {
        const lines = raw.trim().split('\n');
        const elements = [];
        let i = 0;

        const parseLine = (line) => {
            // bold: **text**
            const parts = line.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
            return parts.map((part, j) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={j}>{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith('`') && part.endsWith('`')) {
                    return <code key={j} className="bg-gray-800 text-yellow-300 px-1 rounded text-sm font-mono">{part.slice(1, -1)}</code>;
                }
                return part;
            });
        };

        while (i < lines.length) {
            const line = lines[i];
            if (line.startsWith('# ')) {
                elements.push(<h1 key={i} className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4 mt-6">{line.slice(2)}</h1>);
            } else if (line.startsWith('## ')) {
                elements.push(<h2 key={i} className="text-xl md:text-2xl font-semibold text-[#D2B301] mb-2 mt-6">{line.slice(3)}</h2>);
            } else if (line.startsWith('- ')) {
                elements.push(<li key={i} className="ml-4 list-disc">{parseLine(line.slice(2))}</li>);
            } else if (/^\d+\. /.test(line)) {
                elements.push(<li key={i} className="ml-4 list-decimal">{parseLine(line.replace(/^\d+\. /, ''))}</li>);
            } else if (line.trim() === '') {
                elements.push(<br key={i} />);
            } else {
                elements.push(<p key={i} className="mb-2">{parseLine(line)}</p>);
            }
            i++;
        }
        return elements;
    };

    return (
        <div className="min-h-screen bg-black text-gray-300 font-mono px-6 py-10 md:px-16 lg:px-32">
            {/* Header bar */}
            <div className="flex items-center gap-2 mb-8 text-xs text-gray-600 font-ethnocentric">
                <Link href="/" className="hover:text-yellow-400 transition-colors">← back to terminal</Link>
                <span>/</span>
                <span className="text-gray-500">blogs</span>
            </div>

            {/* Meta */}
            <div className="border-l-2 border-yellow-400 pl-4 mb-8">
                <h1 className="text-xl md:text-3xl font-bold text-yellow-400 mb-1">{blog.title}</h1>
                <span className="text-gray-600 text-sm">{blog.date}</span>
                <div className="flex gap-2 mt-2 flex-wrap">
                    {blog.tags.map((tag) => (
                        <span key={tag} className="text-[#D2B301] text-xs"># {tag}</span>
                    ))}
                </div>
            </div>

            {/* Content */}
            <article className="leading-relaxed text-sm md:text-base space-y-1">
                {renderContent(blog.content)}
            </article>

            {/* Footer */}
            <div className="mt-16 text-gray-600 text-xs text-center font-ethnocentric">
                [:: END OF POST ::] — <Link href="/" className="hover:text-yellow-400 transition-colors">back to terminal</Link>
            </div>
        </div>
    );
}
