import AuthForm from "../components/auth/AuthForm"
import Quetes from "../components/auth/Quetes"

const Signup = () => {
    return (
        <div className="flex flex-row">
            <div className="w-1/2">
                <AuthForm type="signup"/>
            </div>
            <div className="w-1/2 ">
                <Quetes />
            </div>

        </div>
    )
}

export default Signup