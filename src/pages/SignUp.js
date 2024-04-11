
// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
// import axios from "axios"
// import { useAuth, useUserName } from "../utils/Context"
// import { sweetAlert, showToast } from '../../utils/sweetalert'

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    // // let navigate = useNavigate()
    // const { setToken } = useAuth()
    // const { setUserName } = useUserName()
    // const [ loading, setLoading ] = useState( false )
    // const onSubmit = data => {
    //     setLoading( true )
    //     const { email, password } = data
    //     axios( process.env.REACT_APP_API + '/api/v1/login', {
    //         'email': email,
    //         'password': password
    //     }
    //     ).then( res => {
    //         setToken( res.headers.authorization )
    //         setUserName( res.data.name )
    //         // showToast( 'Login Success', 'success' )
    //         setLoading( false )
    //         // navigate( '/todolist', { replace: true } )
    //     } ).catch( err => {
    //         // sweetAlert( err.response.data.status, 'Email or Password wrong.<br>Or register a new one', 'warning' )
    //         console.log( err.response.data.status );
    //         setLoading( false )
    //     } )
    // }

    const onSubmit = data => console.log( data );

    return (
        <main className="container">
            {/* <form onSubmit={handleSubmit( onSubmit )}> */}
            <form className="col g-2 " onSubmit={handleSubmit( onSubmit )}>
                <h2 className="">Sign Up</h2>
                <div className="col-md-4">
                    <label className="form-label">Nickname：</label>
                    <input
                        type="text"
                        id="nicknameInput"
                        placeholder="請輸入你的暱稱"
                        className="form-control"
                        aria-label="Password type here"
                        {...register( "nickname", {
                            required: {
                                value: true,
                                message: '請輸入暱稱!'
                            },
                            minLength: {
                                value: 8,
                                message: "長度至少2位字元"
                            }
                        } )} />
                    <p className="text-danger">{errors.password?.message}</p>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Email：</label>
                    <input
                        id="emailInput"
                        type="text"
                        className="form-control"
                        placeholder="email"
                        {...register( "email", {
                            required: {
                                value: true,
                                message: '請輸入信箱!'
                            },
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "格式有誤!"
                            }
                        } )} />
                    <p className="text-danger">{errors.email?.message}</p>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Password：</label>
                    <input
                        type="Password"
                        id="passwordInput"
                        placeholder="Password"
                        className="form-control"
                        aria-label="Password type here"
                        {...register( "password", {
                            required: {
                                value: true,
                                message: '請輸入密碼!'
                            },
                            minLength: {
                                value: 8,
                                message: "密碼長度至少8位字元"
                            },
                            // pattern: {
                            //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/i,
                            //     message: "格式有誤!"
                            // }
                        } )} />
                    <p className="text-danger">{errors.password?.message}</p>
                </div>
                <div className="col-md-4">
                    <label className="form-label">PASSWORD AGAIN：</label>
                    <input
                        type="Password"
                        id="passwordInput"
                        placeholder="Enter password again..."
                        className="form-control"
                        aria-label="Password type here"
                        {...register( "checkPassword", {
                            required: {
                                value: true,
                                message: '請輸入密碼!'
                            },
                            minLength: {
                                value: 8,
                                message: "密碼長度至少8位字元"
                            },
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/i,
                                message: "格式有誤!"
                            }
                        } )} />
                    <p className="text-danger">{errors.password?.message}</p>
                </div>
                <div className="col-12 mt-2">
                    <button className="btn btn-primary" type="submit">登入</button>
                </div>
                <br />
                <Link to="/">回首頁</Link>  <Link to="/signup">註冊帳號</Link>
            </form>
        </main >
    );
}

export default SignUp;