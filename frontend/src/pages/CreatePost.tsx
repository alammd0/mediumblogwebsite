import { CreatePostInput } from "@mkadevs/common";
import { useForm } from "react-hook-form";
import { AppDispatch } from "../redux/app";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../redux/slice/AuthSlice";
import { createBlog } from "../redux/slice/services/BlogAPI";
import { useSelector } from "react-redux";
import { RootState } from "../redux/app";
import { setBlog } from "../redux/slice/BlogSlice";


const CreatePost = () => {

    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const { token } = useSelector((state: RootState) => state.auth);
    console.log("Inside create Blog", token)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreatePostInput>();


    const onSubmit = async (data: CreatePostInput) => {
        console.log(data);
        try {
            dispatch(setLoading(true));
            const response = await createBlog(token, data);
            console.log(response);
            dispatch(setBlog(response))
            navigate("/blogs")
        } catch (err) {
            console.error(err);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <div className=" bg-slate-300 mt-6 max-w-[940px] mx-auto px-4 py-4 rounded-2xl flex gap-4 flex-col shadow-amber-900">

            <h1 className="text-xl decoration-lime-900 font-semibold capitalize text-center underline space-x-2 drop-shadow-md tracking-wider">Create New Post</h1>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 pl-4"
                >
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold tracking-wider" htmlFor="title">Title : </label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter Post Title"
                            className="p-2 border border-gray-300 rounded-md bg-slate-200"
                            {...register("title", { required: "Title is required" })}
                        />
                        {errors.title && <span>{errors.title.message}</span>}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold tracking-wider" htmlFor="content">Content : </label>
                        <textarea
                            id="content"
                            typeof="text"
                            className="p-2 border border-gray-300 rounded-md bg-slate-200"
                            placeholder="Enter Post Content"
                            cols={50}
                            rows={10}
                            {...register("content", { required: "Content is required" })}
                        />
                        {errors.content && <span>{errors.content.message}</span>}
                    </div>

                    <button>
                        Create Post
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost
