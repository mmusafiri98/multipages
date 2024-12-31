import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div style={{ display: 'flex', gap: '10px', padding: '10px', background: '#ddd' }}>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
        </div>
    );
};

export default Navbar;
