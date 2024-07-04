import './Comments.css';
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import
import { useParams } from 'react-router-dom';

const Comments = () => {
    const [text, setText] = useState('');
    const textareaRef = useRef(null);
    const { id } = useParams();
    const [comments, setComments] = useState([]);


    useEffect(() => {
        // Adjust the height of the textarea to fit its content
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    }, [text]); // Dependency array: run the effect when `text` changes

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = async () => {


        try {
            const token = localStorage.getItem('token');
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;

            // Set up Axios headers with the token
            const headers = {
                Authorization: `Bearer ${token}`,
            'Content-Type': 'text/plain'
            };

            // Make POST request to backend API with headers
            const response = await axios.post(`http://localhost:8080/api/comments/create/${email}/${id}`,
                text
            , {
                headers: headers
            });

            // Clear textarea after successful submission
            setText('');

            // Optionally update state or perform other actions after successful submission
            console.log('Comment created:', response.data);
            // Fetch comments again to update the list
            fetchComments();
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    const fetchComments = async () => {
        try {
            const token = localStorage.getItem('token');

            // Set up Axios headers with the token
            const headers = {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'text/plain'
            };

            // Make GET request to backend API with headers
            const response = await axios.get(`http://localhost:8080/api/comments/posts/${id}/comments`, {
                headers: headers
            });

            // Update state with fetched comments
            setComments(response.data);

            console.log('Fetched comments:', response.data);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <>
            <div className="cmt1">
                <div className="cmt2">
                    <h4>Comments</h4>
                    <hr></hr>
                </div>
                <div className='cmtbox'>
                    <textarea
                        ref={textareaRef}
                        value={text}
                        onChange={handleChange}
                        rows={1}
                        placeholder="Write Your Comments Here...."
                        className="auto-resize-textarea"
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className="cmt3">
                    <h1>All Comments</h1>
                    <div className="ac1">
                        {comments.map(comment => (
                            <div className="ac2" key={comment.id}>
                                <div className="ac21">
                                    <img
                                        src={'default-user-image-url.jpg'}
                                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://up.yimg.com/ib/th?id=OIP.F7AAZ51YNslUUrejRKkDeQHaE1&pid=Api&rs=1&c=1&qlt=95&w=168&h=109'; }}
                                        alt='User'
                                    />
                                </div>
                                <div className="ac22">
                                    <span className='span1'>{comment.user.name}</span>
                                    <span>{comment.comment}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Comments;
