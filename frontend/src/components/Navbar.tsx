import { Link } from "react-router-dom";
import { RootState } from "../redux/app";
import { useSelector } from "react-redux";


const Navbar = () => {

    const { user, token } = useSelector((state: RootState) => state.auth);
    console.log("User Here Before Set Data : ", user);
    console.log("Token Here Before Set Data : ", token);

    return (
        <div className=" bg-slate-500 py-4">
            <div className="max-w-[1080px] mx-auto flex justify-between items-center">
                <div className="text-xl font-semibold uppercase cursor-pointer">Blog Post</div>

                <div className="flex gap-4">
                    {!token &&
                        (<div className="flex gap-8 capitalize">
                            <button className=" bg-slate-400 px-4 py-2 rounded-2xl text-sm font-bold text-center flex uppercase">
                                <Link to="/signin"> Signin</Link>
                            </button>
                            <button className=" bg-slate-400 px-4 py-2 rounded-2xl text-sm font-bold text-center flex uppercase">
                                <Link to="/signup">Signup</Link>
                            </button>
                        </div>)
                    }
                    {token &&
                        (<div className="flex gap-8">
                            <button>
                                <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 cursor-pointer uppercase">
                                        {/* @ts-ignore */}
                                        {user?.name[0]}
                                    </span>
                                </div>
                            </button>
                            <button className=" bg-slate-400 px-4 py-2 rounded-2xl text-sm font-bold text-center flex uppercase">
                                Logout
                            </button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
