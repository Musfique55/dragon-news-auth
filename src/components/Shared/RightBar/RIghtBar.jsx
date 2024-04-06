import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const RightBAr = () => {
    const {googleLogin} = useContext(AuthContext);
    return (
        <div className="border p-4">
            <h3 className="text-xl font-semibold mb-5">Login With</h3>
            <div>
            <button onClick={googleLogin} className="btn w-full bg-transparent border-blue-500 text-blue-500">
                <FaGoogle className="text-blue-500"></FaGoogle>
                Login With Google
            </button>
            <button className="btn w-full bg-transparent border-black mt-3">
                <FaGithub></FaGithub>
                Login With Github
            </button>
            </div>
            <div>
                <h3 className="text-xl font-semibold mt-7 mb-5">Find Us On</h3>

                <div className="flex items-center gap-2 rounded-t-lg border w-full p-4 border-gray-400">
                    <FaFacebookF className="text-[rgb(59,89,156)] "></FaFacebookF>
                    <a href="" className="text-base font-medium text-[rgb(112,111,111)]">Facebook</a>
                </div>
                <div className="flex items-center gap-2 w-full p-4 border-x border-gray-400">
                    <FaTwitter className="text-[rgb(59,89,156)] "></FaTwitter>
                    <a href="" className="text-base font-medium text-[rgb(112,111,111)]">Twitter</a>
                </div>
                <div className="flex items-center gap-2 rounded-b-lg border w-full p-4 border-gray-400">
                    <FaInstagram className="text-[rgb(59,89,156)] "></FaInstagram>
                    <a href="" className="text-base font-medium text-[rgb(112,111,111)]">Instragram</a>
                </div>
            </div>
        </div>
    );
};

export default RightBAr;