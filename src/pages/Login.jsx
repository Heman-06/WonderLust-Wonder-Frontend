// // // import './Login.css'
// // // import { useState } from 'react'
// // // import axios from 'axios'; // Import axios for making HTTP requests

// // // const Login = () => {

// // //     const [isLogin, setIsLogin] = useState(true);
// // //     const [userData, setUserData] = useState({
// // //         name: '',
// // //         email: '',
// // //         phoneNumber: '',
// // //         password: ''
// // //     });

// // //     const switchh = () => {
// // //         setIsLogin(!isLogin)
// // //     }

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             if (isLogin) {
// // //                 // Login
// // //                 const response = await axios.post('http://localhost:8080/api/users/login', {
// // //                     email: userData.email,
// // //                     password: userData.password
// // //                 });
// // //                 if (response.status === 200) {

// // //                     const token = response.data.token;
// // //                     // Store token in localStorage
// // //                     localStorage.setItem('token', token);
// // //                     console.log(token);
// // //                     // Navigate to home page upon successful login
// // //                     window.location.href = '/';
// // //                   }

// // //                 console.log(response.data); // Log the response data if needed
// // //             } else {
// // //                 // Sign Up
// // //                 const response = await axios.post('http://localhost:8080/api/users/signup', {
// // //                     name: userData.name,
// // //                     email: userData.email,
// // //                     address: userData.address,
// // //                     phoneNumber: userData.phoneNumber,
// // //                     password: userData.password
// // //                 });
// // //                 if (response.status === 200) {
// // //                     const token = response.data.token;
// // //                     // Store token in localStorage
// // //                     localStorage.setItem('token', token);
// // //                     // Navigate to home page upon successful login
// // //                     window.location.href = '/';
// // //                   }
// // //                 console.log(response.data); // Log the response data if needed
// // //             }
// // //         } catch (error) {
// // //             console.error('Error:', error);
// // //         }
// // //     };

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setUserData({
// // //             ...userData,
// // //             [name]: value
// // //         });
// // //     };

// // //     return (
// // //         <>
// // //             <div className="lgn1"></div>
// // //             <div className='overlay'></div>
// // //             {isLogin ? (<div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
// // //                 <h4>Login</h4>
// // //                 <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
// // //                 <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
// // //                 <button onClick={handleSubmit}>Login</button>
// // //                 <span className='lgn3'>
// // //                     <h6>Forget Password</h6>
// // //                     <h6 onClick={switchh}>Create a Account</h6>
// // //                 </span>
// // //             </div>)
// // //                 :
// // //                 (
// // //                     <div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
// // //                         <h4>Sign Up Form</h4>
// // //                         <input name="name" placeholder='Enter Your Name' onChange={handleChange} />
// // //                         <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
// // //                         <input name="phoneNumber" placeholder='Enter Your Phone Number' onChange={handleChange} />
// // //                         <input name="address" placeholder='Enter Your Address' onChange={handleChange} />
// // //                         <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
// // //                         <button onClick={handleSubmit}>Sign Up</button>
// // //                         <span className='lgn3'>
// // //                             <h6>Forget Password</h6>
// // //                             <h6 onClick={switchh}>Already a User Login</h6>
// // //                         </span>
// // //                     </div>
// // //                 )
// // //             }
// // //         </>
// // //     )
// // // }

// // // export default Login;

// // import './Login.css';
// // import { useState } from 'react';
// // import axios from 'axios';

// // const Login = () => {
// //     const [isLogin, setIsLogin] = useState(true);
// //     const [userData, setUserData] = useState({
// //         name: '',
// //         email: '',
// //         phoneNumber: '',
// //         address: '',
// //         password: ''
// //     });

// //     const switchh = () => {
// //         setIsLogin(!isLogin);
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             if (isLogin) {
// //                 // Login
// //                 const response = await axios.post('http://localhost:8080/api/users/login', {
// //                     email: userData.email,
// //                     password: userData.password
// //                 });
// //                 if (response.status === 200) {
// //                     const token = response.data.token;
// //                     // Store token in localStorage
// //                     localStorage.setItem('token', token);
// //                     // Navigate to home page upon successful login
// //                     window.location.href = '/';
// //                 }
// //             } else {
// //                 // Sign Up
// //                 const response = await axios.post('http://localhost:8080/api/users/signup', {
// //                     name: userData.name,
// //                     email: userData.email,
// //                     phoneNumber: userData.phoneNumber,
// //                     address: userData.address,
// //                     password: userData.password
// //                 });
// //                 if (response.status === 200) {
// //                     const token = response.data.token;
// //                     // Store token in localStorage
// //                     localStorage.setItem('token', token);
// //                     // Navigate to home page upon successful login
// //                     window.location.href = '/';
// //                 }
// //             }
// //         } catch (error) {
// //             console.error('Error:', error.response);
// //             // Handle token expiration or invalid token
// //             if (error.response && error.response.status === 401) {
// //                 // Log the token expiration message to the console
// //                 console.log("JWT Token has expired");
// //                 // Clear the token from localStorage
// //                 localStorage.removeItem('token');
// //                 // Redirect to login page
// //                 window.location.href = '/login';
// //             }
// //         }
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setUserData({
// //             ...userData,
// //             [name]: value
// //         });
// //     };

// //     return (
// //         <>
// //             <div className="lgn1"></div>
// //             <div className='overlay'></div>
// //             {isLogin ? (
// //                 <div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
// //                     <h4>Login</h4>
// //                     <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
// //                     <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
// //                     <button onClick={handleSubmit}>Login</button>
// //                     <span className='lgn3'>
// //                         <h6>Forget Password</h6>
// //                         <h6 onClick={switchh}>Create an Account</h6>
// //                     </span>
// //                 </div>
// //             ) : (
// //                 <div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
// //                     <h4>Sign Up Form</h4>
// //                     <input name="name" placeholder='Enter Your Name' onChange={handleChange} />
// //                     <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
// //                     <input name="phoneNumber" placeholder='Enter Your Phone Number' onChange={handleChange} />
// //                     <input name="address" placeholder='Enter Your Address' onChange={handleChange} />
// //                     <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
// //                     <button onClick={handleSubmit}>Sign Up</button>
// //                     <span className='lgn3'>
// //                         <h6>Forget Password</h6>
// //                         <h6 onClick={switchh}>Already a User Login</h6>
// //                     </span>
// //                 </div>
// //             )}
// //         </>
// //     );
// // };

// // export default Login;



// import './Login.css';
// import { useState } from 'react';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';

// const Login = () => {
//     const [isLogin, setIsLogin] = useState(true);
//     const [userData, setUserData] = useState({
//         name: '',
//         email: '',
//         phoneNumber: '',
//         address: '',
//         password: ''
//     });

//     const switchh = () => {
//         setIsLogin(!isLogin);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             let response;
//             if (isLogin) {
//                 // Login
//                 response = await axios.post('http://localhost:8080/api/users/login', {
//                     email: userData.email,
//                     password: userData.password
//                 });
//             } else {
//                 // Sign Up
//                 response = await axios.post('http://localhost:8080/api/users/signup', {
//                     name: userData.name,
//                     email: userData.email,
//                     phoneNumber: userData.phoneNumber,
//                     address: userData.address,
//                     password: userData.password
//                 })
//             }

//             if (response.status === 200) {
//                 const token = response.data.token;
//                 // Store token in localStorage
//                 localStorage.setItem('token', token);
//                 window.location.href = '/';
//             }
//         } catch (error) {
//             console.error('Error:', error.response);
//             // Handle token expiration or invalid token
//             if (error.response && (error.response.status === 401 || error.response.status === 403)) {
//                 // Log the token expiration message to the console
//                 console.log("JWT Token has expired");
//                 // Clear the token from localStorage
//                 localStorage.removeItem('token');
//                 // Redirect to login page
//                 window.location.href = '/auth';
//             }
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUserData({
//             ...userData,
//             [name]: value
//         });
//     };

//     return (
//         <>
//             <div className="lgn1"></div>
//             <div className='overlay'></div>
//             {isLogin ? (
//                 <div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
//                     <h4>Login</h4>
//                     <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
//                     <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
//                     <button onClick={handleSubmit}>Login</button>
//                     <span className='lgn3'>
//                         <h6>Forget Password</h6>
//                         <h6 onClick={switchh}>Create an Account</h6>
//                     </span>
//                 </div>
//             ) : (
//                 <div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
//                     <h4>Sign Up Form</h4>
//                     <input name="name" placeholder='Enter Your Name' onChange={handleChange} />
//                     <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
//                     <input name="phoneNumber" placeholder='Enter Your Phone Number' onChange={handleChange} />
//                     <input name="address" placeholder='Enter Your Address' onChange={handleChange} />
//                     <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
//                     <button onClick={handleSubmit}>Sign Up</button>
//                     <span className='lgn3'>
//                         <h6>Forget Password</h6>
//                         <h6 onClick={switchh}>Already a User Login</h6>
//                     </span>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Login;




import './Login.css';
import { useState} from 'react';
import axios from 'axios';
// import {jwtDecode} from 'jwt-decode';


const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: ''
    });

    const switchh = () => {
        setIsLogin(!isLogin);
    };


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response;
            if (isLogin) {
                // Login
                response = await axios.post('http://localhost:8080/api/users/login', {
                    email: userData.email,
                    password: userData.password
                });

                if (response.status === 200) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    window.location.href = '/';
                    console.log(token)
                }
                
            } else {
                // Sign Up
                response = await axios.post('http://localhost:8080/api/users/signup', {
                    name: userData.name,
                    email: userData.email,
                    phoneNumber: userData.phoneNumber,
                    address: userData.address,
                    password: userData.password
                });

                if (response.status === 200) {
                    alert("Please Login to Explore Blogs");
                    window.location.href = '/auth';
                }

            }
        } catch (error) {
            console.error('Error:', error.response);
            // Handle token expiration or invalid token
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                // Log the token expiration message to the console
                console.log("JWT Token has expired");
                // Clear the token from localStorage
                // localStorage.removeItem('token');
                // Redirect to login page
                // window.location.href = '/auth';
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    return (
        <>
            <div className="lgn1"></div>
            <div className='overlay'></div>
            {isLogin ? (
                <div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
                    <h4>Login</h4>
                    <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
                    <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
                    <button onClick={handleSubmit}>Login</button>
                    <span className='lgn3'>
                        <h6>Forget Password</h6>
                        <h6 onClick={switchh}>Create an Account</h6>
                    </span>
                </div>
            ) : (
                <div className='lgn2 d-flex flex-column justify-content-center align-items-center'>
                    <h4>Sign Up Form</h4>
                    <input name="name" placeholder='Enter Your Name' onChange={handleChange} />
                    <input name="email" placeholder='Enter Your Email' onChange={handleChange} />
                    <input name="phoneNumber" placeholder='Enter Your Phone Number' onChange={handleChange} />
                    <input name="address" placeholder='Enter Your Address' onChange={handleChange} />
                    <input name="password" type="password" placeholder='Enter Your Password' onChange={handleChange} />
                    <button onClick={handleSubmit}>Sign Up</button>
                    <span className='lgn3'>
                        <h6>Forget Password</h6>
                        <h6 onClick={switchh}>Already a User Login</h6>
                    </span>
                </div>
            )}
        </>
    );
};

export default Login;
