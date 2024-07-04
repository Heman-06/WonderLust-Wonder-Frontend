import React, { useState, useEffect } from 'react';
import './UserProfile.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './MainP.css';
import UserPost from './UserPost';
import Footer from './Footer';


const UserProfile = () => {

    const { userId } = useParams();

    const [userData, setUserData] = useState([]);
    const [data, setData] = useState([]);

    const token = localStorage.getItem('token');

    const fetchUserData = async () => {

        try {
            const response = await axios.get(`http://localhost:8080/api/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserData(response.data);
        } catch (error) {
            console.error('Failed to fetch user profile or decode token:', error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/posts/user/post/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setData(response.data.posts);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);




    return (
        <>
            <Navbar />

            <div className="mp1">
                <div className="mp2 d-flex justify-content-between">
                    <p>PROFILE</p>
                </div>
                <div className="mp3 ms-2">
                    <div className="mp31">
                        <img
                            src=""
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://up.yimg.com/ib/th?id=OIP.F7AAZ51YNslUUrejRKkDeQHaE1&pid=Api&rs=1&c=1&qlt=95&w=168&h=109'; }}
                            alt=""
                        />
                    </div>
                    <div className="mp32">
                        <>
                            <h5>{userData.name}</h5>
                            <p>{userData.address}</p>
                            <p><a href={userData.website} target="_blank" rel="noopener noreferrer">{userData.website}</a></p>
                        </>
                        <div className="mp321">
                            <div className="mp322">
                                <h5>Followers :-</h5>
                                <h4>651</h4>
                            </div>
                            <div className="mp322">
                                <h5>Total Posts :-</h5>
                                <h4>{data.length}</h4>
                            </div>
                            <div className="mp322">
                                <h5>Total Views :-</h5>
                                <h4>651</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upp1">
                <div className="upp11 d-flex">
                    <h4>{userData.name}'s All Posts :-
                        <hr />
                    </h4>
                </div>
                <div className="upp2">
                    <div className="upp3">
                        <UserPost data={data} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default UserProfile;
