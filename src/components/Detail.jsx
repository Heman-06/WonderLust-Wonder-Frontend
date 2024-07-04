import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Detail.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Comments from './Comments';

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {

    const token = localStorage.getItem('token');

    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/post/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
        console.log(item);
      }
    };

    fetchItem();
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="dtl1">
        <div className="dtl2">
          <div className="dtl3">
            <img
              src={`data:image/${item.imageType};base64,${item.image}`}
              alt='Post'
            />
          </div>
          <div className="dtl4">
            <p>{item.type}</p>
          </div>
          <div className="dtl5">
            <h1>{item.title}</h1>
          </div>
          <div className="dtl6">
            <div className='dtl61'>
              <Link to={`/user/${item.user.id}`}>
                <img
                  src={item.user?.image || 'default-user-image-url.jpg'}
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://up.yimg.com/ib/th?id=OIP.F7AAZ51YNslUUrejRKkDeQHaE1&pid=Api&rs=1&c=1&qlt=95&w=168&h=109'; }}
                  alt='User'
                />
              </Link>
            </div>
            <div className="dtl62">
              <h6 className='h6'>{item.user?.name}</h6>
              <p>{item.createdDate ? new Date(item.createdDate).toLocaleDateString() : 'No date'}</p>
            </div>
          </div>
          <div className="dtl7">
            <p>{item.content}</p>
          </div>
          <Comments />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;