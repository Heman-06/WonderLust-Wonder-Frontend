import React, { useState, useEffect } from 'react';
import './MainP.css';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import

const MainP = ({data}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: '',
        address: '',
        website: ''
    });


    const fetchUserData = async () => {
        const token = localStorage.getItem('token');

        try {
            const decodedToken = jwtDecode(token);

            const email = decodedToken.sub;

            const response = await axios.get(`http://localhost:8080/api/users/email/${email}`, {
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

    const handleEditProfile = () => {
        setIsEditing(!isEditing);
    };

    const handleSaveChanges = async () => {
        const token = localStorage.getItem('token');
        if (!token) return console.log("token not found");

        try {
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;

            const response = await axios.put(`http://localhost:8080/api/users/update/${email}`, userData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUserData(response.data);
            setIsEditing(false);
        } catch (error) {
            console.error('Error saving changes:', error);
        }
    };



    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <div className="mp1">
            <div className="mp2 d-flex justify-content-between">
                <p>PROFILE</p>
                {isEditing ? (
                    <button onClick={handleSaveChanges}>Save</button>
                ) : (
                    <button onClick={handleEditProfile}>Edit Profile</button>
                )}
            </div>
            <div className="mp3">
                <div className="mp31">
                    <img
                        src=""
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://up.yimg.com/ib/th?id=OIP.F7AAZ51YNslUUrejRKkDeQHaE1&pid=Api&rs=1&c=1&qlt=95&w=168&h=109'; }}
                        alt=""
                    />
                </div>
                <div className="mp32">
                    {isEditing ? (
                        <>
                            <input
                                type="text"
                                name="name"
                                value={userData.name ?? ''}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="address"
                                value={userData.address ?? ''}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="website"
                                value={userData.website ?? ''}
                                onChange={handleChange}
                                placeholder='Enter your website or portfolio or blog'
                            />
                        </>
                    ) : (
                        <>
                            <h5>{userData.name}</h5>
                            <p>{userData.address}</p>
                            <p><a href={userData.website} target="_blank" rel="noopener noreferrer">{userData.website}</a></p>
                        </>
                    )}
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
    );
};

export default MainP;
