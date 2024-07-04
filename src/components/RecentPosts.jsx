import './Rp.css'
import Model from '../components/Model'
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'; // Correct import
import axios from 'axios';
import UserPost from './UserPost';


const RecentPosts = ({ openmodal }) => {


    const [showModal, setShowModal] = useState(false);
    const [data, userData] = useState([]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error("Token not found");
                }

                const decodedToken = jwtDecode(token);
                const email = decodedToken.sub;

                const response = await axios.get(`http://localhost:8080/api/posts/user/${email}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });


                console.log(" data", response.data);
                userData(response.data.posts);
                console.log(" data", data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <>
            <div className="rp1">
                <span className='rp0'>
                    <h3>Your Recent Posts:-<hr/></h3>
                    <h5><button onClick={openModal}>+</button></h5>
                    {showModal && <Model closeModal={closeModal} />}
                </span>
                <div className="rp2">
                    <div className="rp3">
                        <UserPost data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecentPosts