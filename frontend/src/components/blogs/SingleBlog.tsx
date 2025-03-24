import { formatDate } from "../../utils/dateFormatter";

interface SingleBlogProps {
    id: number;
    title: string;
    content: string;
    date: string;
    name: string;
}

const SingleBlog = ({title, content, date, name }: SingleBlogProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-8 mt-12 p-6 w-11/12 mx-auto justify-between bg-white shadow shadow-slate-600 rounded-lg border border-slate-800">
            {/* Blog content section */}
            <div className="flex-3">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
                <p className="text-gray-500 text-sm mb-4">Posted on <span className="font-medium text-gray-700"> {formatDate(date)}</span></p>
                <p className="text-gray-700 leading-relaxed">{content}</p>
            </div>

            {/* Author section */}
            <div className="flex flex-col items-center md:items-start md:w-1/4">
                <div className="text-gray-500 text-sm mb-2">Author</div>
                <div className="relative inline-flex items-center justify-center w-16 h-16 overflow-hidden bg-gray-200 rounded-full shadow">
                    <span className="text-2xl font-semibold text-gray-600 uppercase cursor-pointer">
                        {name[0]}
                    </span>
                </div>
                <p className="mt-2 text-lg font-medium text-gray-800">{name}</p>
            </div>
        </div>
    );
};

export default SingleBlog;
