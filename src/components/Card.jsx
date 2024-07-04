import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Card.css';

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/posts/getAllPost', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const sortedData = response.data.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
                setData(sortedData)
                // setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {data.map((item) => (
                <Link className='text-decoration-none' to={`/details/${item.id}`} key={item.id}>
                    <div className='crd1'>
                        <div className="crd2">
                            <div className='crdpic'>
                                {item.image ? (
                                    <img
                                        src={`data:image/${item.imageType};base64,${item.image}`}
                                        alt='Post'
                                    />
                                ) : (
                                    <img
                                        src='default-image-url.jpg' // Replace with your default image URL
                                        alt='Default'
                                    />
                                )}
                            </div>
                            <div className='crd3'>
                                <p>{item.type || 'No category'}</p>
                            </div>
                            <div className='crd4'>
                                <h4>{item.title || 'No title'}</h4>
                            </div>
                            <div className='crd5'>
                                <div className='uimg'>
                                    <Link to={`/user/${item.user.id}`}>
                                        <img
                                            src={item.user?.image || 'default-user-image-url.jpg'}
                                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://up.yimg.com/ib/th?id=OIP.F7AAZ51YNslUUrejRKkDeQHaE1&pid=Api&rs=1&c=1&qlt=95&w=168&h=109'; }}
                                            alt='User'
                                        />
                                    </Link>
                                    
                                </div>
                                <div style={{fontWeight:"600"}}>
                                    :
                                </div>
                                <div className="uname">
                                    <p>{item.user?.name || 'Unknown author'}</p>
                                </div>
                                <div style={{fontWeight:"600"}}>
                                    :
                                </div>
                                <div className="udate">
                                    <p>{item.createdDate ? new Date(item.createdDate).toLocaleDateString() : 'No date'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default Card;
