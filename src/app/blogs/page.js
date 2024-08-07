import BlogOverview from "@/components/blog-overview";


async function fetchListOfBlogs() {
  try {
    const apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-blogs`, {
      method: 'GET',
      cache: 'no-store'
    })

    const result = await apiResponse.json();
    return result?.data;

  } catch (error) {
    throw new Error(error);
  }
}

const Blog = async () => {

  const blogList = await fetchListOfBlogs();
  console.log(blogList, "blogList");

  return (
    <BlogOverview blogList={blogList} />
  )
}

export default Blog
