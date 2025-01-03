import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

export default async function HeroSection() {
  const query = `*[_type == "post"] {
    title,
    mainImage,
    "author": author->name,
    "categories": categories[]->title,
    slug // Fetch the slug for linking
  }`;
  const data = await client.fetch(query);

  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-200 py-24">
      {/* Header Section */}
      <div className="text-center mb-20 px-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight transform transition-all duration-500 hover:scale-110 animate__animated animate__fadeInDown">
          THE BLOG
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mt-4 mx-auto max-w-2xl animate__animated animate__fadeIn animate__delay-1s">
          Stay updated with the latest insights, trends, and ideas in design,
          technology, and beyond.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Featured Post */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative group overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <Image
              src="/hero2.jpg"
              alt="Featured Blog"
              height={600}
              width={900}
              className="rounded-lg w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-lg font-semibold animate__animated animate__fadeIn animate__delay-2s">
                Olivia Rhye • 1 Jan 2023
              </h2>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 group-hover:text-gray-300 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-3s">
                UX Review Presentations
              </h1>
              <p className="text-base mt-4 group-hover:text-gray-300 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-4s">
                Discover how to create compelling UX reviews that leave an
                impact.
              </p>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <Image
              src="/hero1.png"
              alt="Featured Blog"
              height={600}
              width={900}
              className="rounded-lg w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-lg font-semibold animate__animated animate__fadeIn animate__delay-2s">
                Olivia Rhye • 1 Jan 2023
              </h2>
              <h1 className="text-3xl sm:text-4xl font-extrabold mt-2 group-hover:text-gray-300 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-3s">
                UX Review Presentations
              </h1>
              <p className="text-base mt-4 group-hover:text-gray-300 transition-colors duration-300 animate__animated animate__fadeIn animate__delay-4s">
                Discover how to create compelling UX reviews that leave an
                impact.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {data.map((pro: any, index: any) => (
            <div
              key={index}
              className="bg-white shadow-2xl rounded-lg overflow-hidden group transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Blog Post Image */}
              <div className="relative h-60 group overflow-hidden">
                <Image
                  src={urlFor(pro.mainImage.asset).url()}
                  alt={pro.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Blog Post Content */}
              <div className="p-6 group-hover:bg-gray-800 group-hover:text-white transition-all duration-300">
                <Link href={`/blogs/${pro.slug.current}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300 cursor-pointer">
                    {pro.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-700 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  Author: {pro.author || "Unknown"}
                </p>
                <p className="text-sm text-gray-700 group-hover:text-gray-300 transition-colors duration-300">
                  Categories:{" "}
                  {pro.categories?.length > 0
                    ? pro.categories.join(", ")
                    : "Uncategorized"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
