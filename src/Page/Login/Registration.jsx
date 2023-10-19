import { Link, useNavigate } from "react-router-dom";

import { useContext, useState } from "react";
import { userContext } from "../../Firebase/LoginContext";

import swal from 'sweetalert';

const Registration = () => {
    const nextPage = useNavigate();
    const [loggedin, setLogin] = useState({})
    const [errorMsg, setErrorMsg] = useState('')
    const createUser = useContext(userContext)
    const { createNewUser } = createUser
    // const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    const passwordRegex = /^ [a - z] + $/;
    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.pass.value;
        console.log(email, password)

        if (password.length < 6) {
            console.log('password should be 6 letter');
            swal("an error occur", " password should be 6 character ", "error");
            return
        }
        else if (!passwordRegex.test(password)) {
            console.log('wrong password');
            swal("an error occur", " should be 6 character a capital letter and a special character", "error");
            return
        }
        createNewUser(email, password)
            .then(async (res) => {
                console.log(res)
                setLogin(res)
                swal("successfull!", "Your Registration success", "success");
                await new Promise(() => {
                    setTimeout(() => {
                        nextPage("/login")
                    }, 1000);
                })


            })
            .catch((error) => {
                console.log(error)
                setErrorMsg(error)
                swal("an error occur", "404 page not found", "error");
            })

    }


    return (
        <div>
            <div>
                <div className=" card card-bordered mx-4 my-4 p-5 md:w-6/12 md:mx-auto">
                    <img src="" alt="" />
                    <h2 className=" text-gray-900  text-4xl font-semibold py-6 text-center">Registration here</h2>
                    <form onSubmit={onSubmit} className="flex flex-col space-y-4 text-xl font-semibold" >
                        <p>Email address</p>
                        <input className="input bg-gray-200 text-white" name="email" type="email" placeholder="enter your email here" />
                        <p>Password</p>
                        <input className="input bg-gray-200 " name="pass" type="password" placeholder="enter your password here" />
                        <input className="btn bg-gray-900 text-white " type="submit" />
                    </form>
                    <Link to={"/login"} className="text-lg py-2 text-slate-700" ><p>Already Have An Account ? Login...</p></Link>
                </div>
            </div>
        </div >
    );
};

export default Registration;