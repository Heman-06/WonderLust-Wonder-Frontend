import React, { useState } from 'react';
import './Modal.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode'; // Correct import

function Model({ closeModal }) {
    const [title, setTitle] = useState('');
    const [travelType, setTravelType] = useState('');
    const [detail, setDetail] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleClose = () => closeModal();

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('type', travelType);
        formData.append('content', detail);
        formData.append('image', image);

        const token = localStorage.getItem('token');
        if (!token) {
            setError("Token not found");
            setLoading(false);
            return console.log("hiii");
        }
        try {
            const decodedToken = jwtDecode(token);
            const email = decodedToken.sub;
            const response = await axios.post(`http://localhost:8080/api/posts/create/${email}`, formData, {
                headers: {
                    'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Blog created successfully:', response.data);
            handleClose();
        } catch (error) {
            if (error.response) {
                console.error('Server responded with non 2xx status:', error.response.data);
            } else if (error.request) {
                console.error('No response received:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
            }
            setError('Error creating blog. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Modal centered show={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className='modal1 d-flex flex-column gap-3 m-auto'>
                            <input
                                placeholder='Enter Title of Blog'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <input className='p-1'
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                            <select
                                value={travelType}
                                onChange={(e) => setTravelType(e.target.value)}
                            >
                                <option value="" disabled>Select Travel Type</option>
                                <option value="Solo Travel">Solo Travel</option>
                                <option value="Family Travel">Family Travel</option>
                                <option value="Mount Travel">Mount Travel</option>
                                <option value="Food Travel">Food Travel</option>
                                <option value="Jungle Travel">Jungle Travel</option>
                                <option value="Technology">Technology</option>
                            </select>
                            <textarea
                                placeholder='Enter Detail About Journey'
                                value={detail}
                                onChange={(e) => setDetail(e.target.value)}
                            />
                        </div>
                    </Form>
                    {error && <p className="text-danger">{error}</p>}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit} disabled={loading}>
                        {loading ? 'Submitting...' : 'Save Changes'}
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default Model;
