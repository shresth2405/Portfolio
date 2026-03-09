'use client'
import React from 'react';
import Link from 'next/link';
import { blogs } from '@/utils/blogData';

function Blog() {
    return (
        <div className="font-genesix text-gray-400 text-[8px] md:text-xl lg:text-2xl">
            {/* <div className="text-[#D2B301] mb-4">// Open Source Journey — Blog</div> */}
            <ol className="flex flex-col gap-3">
                {blogs.map((blog, index) => (
                    <li key={blog.slug} className="flex items-start gap-3">
                        <span className="text-gray-600">{index + 1}.</span>
                        <div className="flex flex-col gap-1">
                            <Link
                                href={`/blog/${blog.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-yellow-400 hover:text-[#1a80a5] hover:underline transition-colors"
                            >
                                {blog.title} ↗
                            </Link>
                            <div className="flex gap-2 flex-wrap">
                                <span className="text-gray-600 text-[7px] md:text-sm">[{blog.date}]</span>
                                {blog.tags.map((tag) => (
                                    <span key={tag} className="text-[#D2B301] text-[7px] md:text-sm">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Blog;
