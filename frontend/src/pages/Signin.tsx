import AuthForm from "../components/auth/AuthForm"
import Quotes from "../components/auth/Quetes"

const Signin = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="w-1/2">
                    <AuthForm type="signin" />
                </div>
                <div className="w-1/2 ">
                    <Quotes />
                </div>

            </div>
        </div>
    )
}

export default Signin
