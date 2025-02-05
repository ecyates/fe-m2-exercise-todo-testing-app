// PostForm.jsx
import React, { useState } from 'react';

const PostForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

    const postData = {
        title,
        body,
        userId: parseInt(userId, 10),
    };

    try {
        const response = await fetch('<https://jsonplaceholder.typicode.com/posts>', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const data = await response.json();
        console.log(data);
        // Handle success (e.g., display a message, clear form, etc.)
        } catch (error) {
        console.error('Error posting data:', error);
        // Handle error (e.g., display error message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label htmlFor="body">Body:</label>
        <input id="body" value={body} onChange={(e) => setBody(e.target.value)} />

        <label htmlFor="userId">User ID:</label>
        <input id="userId" type="number" value={userId} onChange={(e) => setUserId(e.target.value)} />

        <button type="submit">Submit Post</button>
        </form>
    );
};

export default PostForm;