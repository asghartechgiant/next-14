import { client } from "@/sanity/lib/client"; // Import your Sanity client
import { urlFor } from "@/sanity/lib/image"; // Helper for handling Sanity images
import Image from "next/image";
import CommentsSection from "./CommentSection";

interface DetailPageProps {
  params: {
    slug: string;
  };
}

// Server-side function to fetch data
export async function generateMetadata({ params }: DetailPageProps) {
  const { slug } = params;

  // Query to fetch the post by slug
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    body, // Assuming the post has a 'body' field
    "author": author->name,
    "categories": categories[]->title,
    description,
  }`;

  const post = await client.fetch(query, { slug });

  // Return metadata for SEO, title, etc.
  return {
    title: post?.title || "Post Details",
    description: post?.description || "Post details page",
  };
}

// Fetch the content from Sanity based on the slug
export default async function DetailPage({ params }: DetailPageProps) {
  const { slug } = params;

  // Query to fetch the post by slug
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    body, // Assuming the post has a 'body' field
    "author": author->name,
    "categories": categories[]->title,
    description
  }`;

  const post = await client.fetch(query, { slug });

  // If no post is found, show a not found message
  if (!post) {
    return <div className="text-center text-gray-500">Post not found!</div>;
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 transition-all duration-300 transform hover:scale-105">
            {post.title}
          </h1>
          <p className="text-gray-600 mb-6 text-lg sm:text-xl">
            By <span className="font-semibold">{post.author || "Unknown"}</span>
            {post.categories?.length > 0 && (
              <span> • Categories: {post.categories.join(", ")}</span>
            )}
          </p>

          {/* Image with Hover Zoom Effect */}
          <div className="w-full h-72 sm:h-96 relative rounded-lg overflow-hidden mb-8 group">
            {post.mainImage && (
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out transform hover:scale-125 group-hover:scale-125"
                />
                {/* The hover zoom effect follows the mouse position */}
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-25"></div>
              </div>
            )}
          </div>
        </div>

        {/* Post Body Section */}
        <div className="text-gray-700 leading-relaxed mb-12 space-y-8">
          <div className="text-xl font-light mb-4">
            {post.description || "No content available for this post."}
          </div>

          {/* Add more post content here (e.g., paragraphs, images, etc.) */}
          <div className="prose prose-lg text-gray-800 dark:text-gray-200 max-w-full">
            {/* Render post body content (like rich text) */}
            {/* This is where you can integrate a rich text renderer if necessary */}
          </div>
        </div>

        {/* Call to Action Section - Comment Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Comments
          </h2>
          <CommentsSection />
        </div>
      </div>
    </div>
  );
}
