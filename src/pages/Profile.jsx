import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import MainP from '../components/MainP'
import RecentPosts from '../components/RecentPosts'
import Footer from '../components/Footer'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import

const Profile = () => {

    const [data, setData] = useState([]);

    useEffect(() => {

        const token = localStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        const email = decodedToken.sub;



        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/posts/user/${email}`, {
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
            <div className="prflq container">
                <MainP data={data} />
                <RecentPosts />
            </div>
            <Footer />

        </>
    )
}

export default Profile