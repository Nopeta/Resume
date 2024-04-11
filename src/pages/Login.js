// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import { useAuth, useUserName } from "../utils/Context"
import { loginAPI, getCSRFToken } from "../utils/APl"
// import axios from "axios"
// import { sweetAlert, showToast } from '../../utils/sweetalert'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    // let navigate = useNavigate()
    const { setToken } = useAuth()
    const { setUserName } = useUserName()
    // const [ loading, setLoading ] = useState( false )
    const onSubmit = async data => {
        // setLoading( true );
        const { email, password } = data;

        await getCSRFToken();
        await loginAPI( email, password ).then( res => {

            console.log( '來到這裡' );
            // console.log( res.data.data );
            // console.log( res.data.data.user.name );
            setToken( res.data.data.authorization.type + ' ' + res.data.data.authorization.token );
            setUserName( res.data.data.user.name );
            // setLoading( false );
            console.log( '都寫進資料了！' );
        } ).catch( err => {
            console.log( err.response );
            // setLoading( false );
        } )

        // axios.post( process.env.REACT_APP_API + '/api/v1/login', {
        //     'email': email,
        //     'password': password,
        // }, {
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // }
        // ).then( res => {
        //     setToken( res.headers.authorization )
        //     setUserName( res.data.name )
        //     setLoading( false )
        // } ).catch( err => {
        //     console.log( err.response.data.status );
        //     setLoading( false )
        // } )
    }

    // const onSubmit = data => console.log( data );

    return (
        <main className="container">
            {/* <form onSubmit={handleSubmit( onSubmit )}> */}
            <form className="col g-2 " onSubmit={handleSubmit( onSubmit )}>
                <h2 className="">Login</h2>
                <div className="col-md-4">
                    <label className="form-label">Email：</label>
                    <input
                        id="emailInput"
                        type="text"
                        className="form-control"
                        placeholder="Email type here"
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
                <div className="col-4">
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
                <div className="col-12 mt-2">
                    <button className="btn btn-primary" type="submit">登入</button>
                </div>
                <br />
                <Link to="/">回首頁</Link>  <Link to="/signup">註冊帳號</Link>
            </form>
        </main >
    );
}

export default Login;