import { MdOutlineNoteAdd } from "react-icons/md";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";

interface BlogsCartProps {
    name: string,
    title: string,
    content: string,
    date: string
}

const BlogsCart = ({ name, title, content, date }: BlogsCartProps) => {
    return (
        <div className="lg:max-w-[840px] md:max-w-[600px] max-w-[400px] mx-auto pt-12 border-b-2 border-slate-300 shadow-blue-600 pb-4">
            <div className="flex flex-col gap-2 bg-slate-400 px-8 py-4 rounded-2xl shadow-md shadow-slate-500">

                <div className="flex flex-row items-center gap-2">
                    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                        <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 cursor-pointer">{name[0]}</span>
                    </div>
                    <div className="text-sm font-semibold">
                        {name}
                    </div>
                    <div className=" bg-slate-500 h-1 w-1 rounded-full"></div>
                    <div className="text-sm font-normal text-slate-600">
                        {date}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="text-2xl font-bold">
                        {title}
                    </div>
                    <div className="text-xl font-normal">
                        {content.length > 100 ? content.slice(0, 100) + "..." : content}
                    </div>
                </div>

                <div className="flex flex-row justify-between items-center">
                    <div>
                        {Math.ceil(content.length / 100)} min read
                    </div>
                    <div className="flex flex-row gap-3 font-normal text-xl">

                        <MdOutlineNoteAdd />


                        <IoRemoveCircleOutline />

                        <HiDotsHorizontal />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogsCart
