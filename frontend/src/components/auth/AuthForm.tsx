import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignupInput } from "@mkadevs/common";
import axios from "axios";
import { BackendUrl } from "./BackendUrl";
import { AppDispatch } from "../../redux/app";
import { useDispatch } from "react-redux";
import { setLoading, setToken, setUser } from "../../redux/slice/AuthSlice";

interface AuthFormProps {
    type: "signup" | "signin";
}

const AuthForm = ({ type }: AuthFormProps) => {

    const dispatch: AppDispatch = useDispatch();
    
    const [formData, setFormData] = useState<SignupInput>({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const isSignup = type === "signup";


    async function submitRequest() {
        try {


            dispatch(setLoading(true));

            const response = await axios.post(`${BackendUrl}/api/v1/user/${isSignup ? "signup" : "signin"}`, formData)
            const jwt = response.data.jwt
            console.log(response.data.data);

            dispatch(setUser(response.data.data));



            console.log(jwt)
            localStorage.setItem("token", jwt)
            dispatch(setToken(jwt));

            dispatch(setLoading(false));
            navigate("/blogs")

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen flex flex-col justify-center items-center p-4">
            {/* Top heading */}
            <div>
                <h1 className="text-2xl font-bold mb-2">
                    {isSignup ? "Create an account" : "Sign in to your account"}
                </h1>
                <p className="text-sm text-muted-foreground mb-6">
                    {isSignup
                        ? "Already have an account? "
                        : "Don't have an account yet? "}
                    <Link to={isSignup ? "/signin" : "/signup"} className="text-primary underline">
                        {isSignup ? "Login" : "Sign Up"}
                    </Link>
                </p>
            </div>

            {/* Form components */}
            <div className="flex flex-col w-[50%]">
                {isSignup && (
                    <LabelInput
                        label="Username"
                        placeholder="username"
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        type="text"
                    />
                )}

                {isSignup && (
                    <LabelInput
                        label="name"
                        placeholder="name"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        type="text"
                    />
                )}


                <LabelInput
                    label="Email"
                    placeholder="khalid@gmail.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                />


                <LabelInput
                    label="Password"
                    placeholder="password"
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    type="password"
                />

                <button type="button" className="bg-blue-500 text-white py-2 rounded-md mt-4" onClick={submitRequest}>
                    {isSignup ? "Sign Up" : "Sign In"}
                </button>
            </div>
        </div>
    );
};

interface InputProps {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

// Reusable Input component
function LabelInput({ label, placeholder, onChange, type }: InputProps) {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder={placeholder}
                onChange={onChange}
                type={type}
            />
        </div>
    );
}

export default AuthForm;
