import { Link, useNavigate } from "react-router-dom";



import { useContext } from "react";
import { userContext } from "../../Firebase/LoginContext";
import { FcGoogle } from 'react-icons/fc';
import { useState } from "react";
import swal from 'sweetalert';

import login from "./../../img/Banner/login.png"

const LoginPage = () => {
    const nextPage = useNavigate();
    const google = useContext(userContext)
    const { singInGoogle, singUpUser } = google;
    const googleBtn = (e) => {
        e.preventDefault();
        singInGoogle()
            .then(async (result) => {
                console.log(result);
                await new Promise(() => {
                    setTimeout(() => {
                        nextPage("/")
                    }, 100);
                })
            }).catch((error) => {
                console.log(error);
            })
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(email, password);
    const handelOnChangeEmail = e => {
        const value = e.target.value;
        setEmail(value)

    }
    const handelOnChangePassword = (e) => {
        const pass = e.target.value
        setPassword(pass)

    }
    const handleLogin = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            console.log('password should be 6 letter');
            swal("an error occur", " password doesn't match ", "error");
            return
        }
        singUpUser(email, password)
            .then(async (userInfo) => {
                console.log(userInfo);
                swal("successfull!", "Your Login success", "success");
                await new Promise(() => {
                    setTimeout(() => {
                        nextPage("/")
                    }, 1000);
                })
            })
            .catch((error) => {
                console.log(error.code);
                const err = error.code;
                swal(`An error occur ${err}`)
            })
    }




    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className=" w-3/5 hidden md:block   ">
                <img className="max-h-screen" src={login} alt="" />
            </div>
            <div className=" card card-bordered min-h-fit md:w-2/5 mx-4 my-4 p-5 ">
                <Link to={'/'} > <img src="" alt="" /></Link>
                <h2 className=" text-gray-900  text-4xl font-semibold py-6 text-center">Login your account</h2>
                <form className="flex flex-col space-y-4 text-xl font-semibold" >
                    <p>Email address</p>
                    <input onChange={handelOnChangeEmail} className="input bg-gray-200 text-white" name="email" type="email" placeholder="enter your email here" />
                    <p>Password</p>
                    <input onChange={handelOnChangePassword} className="input bg-gray-200 " name="pass" type="password" placeholder="enter your password here" />
                    <button onClick={handleLogin} className="btn bg-gray-900 text-white " >Login</button>
                    <button onClick={googleBtn} className="btn btn-outline " ><FcGoogle className="text-lg"></FcGoogle> Google </button>

                </form>
                <Link to={"/reg"} className="text-lg py-2 text-slate-700" ><p>Dont’t Have An Account ? Register</p></Link>
            </div>
        </div>
    );
};

export default LoginPage;