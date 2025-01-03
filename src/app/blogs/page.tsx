import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function BlogListPage() {
  const query = `*[_type == "post"] {
    title,
    mainImage,
    "author": author->name,
    "categories": categories[]->title,
    "slug": slug.current
  }`;
  const data = await client.fetch(query);

  return (
    <section className="bg-gray-50 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-gray-800">
          Latest Blog Posts
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Stay updated with the latest insights, trends, and ideas in design,
          technology, and more.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-purple-50 cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative h-48">
                <Image
                  src={urlFor(post.mainImage.asset).url()}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-purple-600 transition-colors duration-300">
                  {post.title}
                </h3>
                {/* Author */}
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Author:</span>{" "}
                  {post.author || "Unknown"}
                </p>
                {/* Categories */}
                <p className="text-sm text-gray-600 mb-4">
                  <span className="font-medium">Categories:</span>{" "}
                  {post.categories?.map((category, idx) => (
                    <span
                      key={idx}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer transition-colors duration-300"
                    >
                      {category}
                      {idx < post.categories.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </p>
                {/* Read More Link */}
                <a
                  href={`/blogs/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
