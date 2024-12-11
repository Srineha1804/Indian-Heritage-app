import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteMonument = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [monument, setMonument] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMonumentData = async () => {
            try {
                const response = await axios.get(`/api/monuments/${id}`);
                setMonument(response.data);
            } catch (error) {
                console.error('Error fetching monument data:', error);
                setError('Failed to fetch monument details. Please try again later.');
            }
        };

        fetchMonumentData();
    }, [id]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/monuments/${id}`);
            navigate('/monuments');
        } catch (error) {
            console.error('Error deleting monument:', error);
            setError('Failed to delete the monument. Please try again later.');
        }
    };

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    if (!monument) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <h2>Delete Monument</h2>
            <div className="alert alert-danger">
                <strong>Warning!</strong> Are you sure you want to delete the monument
                <strong>{monument.name}</strong>?
            </div>

            <div className="monument-details">
                <h4>{monument.name}</h4>
                <p>{monument.description}</p>
                <img src={monument.imageUrl} alt={monument.name} width="200" />
            </div>

            <button onClick={handleDelete} className="btn btn-danger">
                Delete Monument
            </button>
            <button
                onClick={() => navigate('/monuments')}
                className="btn btn-secondary"
            >
                Cancel
            </button>
        </div>
    );
};

export default DeleteMonument;
