
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/app";
import SkeletonCard from "../components/SkeletonCard";
import { useParams } from "react-router-dom";
import { getBlogById } from "../redux/slice/services/BlogAPI";
import SingleBlog from "../components/blogs/SingleBlog";

interface Blog {
  id: number;
  title: string;
  content: string;
  date: string;
  author : {
    name : string
  }
}

const Blog = () => {

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);

        const response = await getBlogById(token, userId);

        setBlog(response.data);

      } catch (err) {
        console.error(err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [id, token]);

  console.log(blog)

  if (loading) {
    return <div>
      <SkeletonCard />
    </div>;
  }

  if (error) {
    <div>
      {error}
    </div>
  }

  if (!blog) {
    <div>No Blog Found</div>
  }


  return (
    <div className="w-11/12 mx-auto">
      {blog && (
        <SingleBlog
          title={blog.title}
          content={blog.content}
          name={blog.author?.name}
          date={blog.date}
          id={blog.id}
        />
      )}
    </div>
  )
}

export default Blog
