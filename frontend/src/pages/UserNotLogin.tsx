import { Link } from "react-router-dom"

const UserNotLogin = () => {
    return (
        <button className=" bg-slate-400 px-4 py-2 rounded-2xl text-sm font-bold text-center flex uppercase">
            <Link to={"/signin"}> Signin</Link>
        </button>

    )
}

export default UserNotLogin
