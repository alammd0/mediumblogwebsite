import { useEffect, useState } from "react";
import BlogsCart from "../components/blogs/BlogsCart"
import { getAllBlogs } from "../redux/slice/services/BlogAPI";
import UserNotLogin from "./UserNotLogin";
import { RootState } from "../redux/app";
import { useSelector } from "react-redux";
import SkeletonCard from "../components/SkeletonCard";
import { Link } from "react-router-dom";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const { token } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true);

                const response = await getAllBlogs(token);

                setBlogs(response.data);
            } catch (err) {
                console.error(err);
                setError("Failed to load blogs.");
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) {
        return <div>
            <SkeletonCard />
        </div>;
    }

    if (error) {
        return (
            <div className="flex items-center justify-center flex-col gap-4 h-screen">
                <div className="text-red-400 text-2xl font-semibold capitalize">{error}</div>
                <UserNotLogin />
            </div>
        )
    }

    return (

        <div>
            <div className="flex items-center justify-center mt-6">
                <button className=" bg-slate-400 px-4 py-2 rounded-2xl text-sm font-bold text-center flex uppercase">
                    <Link to={"/create-post"}>Create New Post</Link>
                </button>
            </div>

            <div>
                {blogs.length > 0 ? (
                    blogs.map((blog: any) => (
                        <Link to={`/blog/single-post/${blog.id}`}>
                            <div key={blog._id}>
                                <BlogsCart
                                    name={blog.author.name}
                                    title={blog.title}
                                    content={blog.content}
                                    date={blog.date}
                                />
                            </div>
                        </Link>
                    ))
                ) : (
                    <div>No blogs found.</div>
                )
                }
            </div>
        </div>

    )
}

export default Blogs
