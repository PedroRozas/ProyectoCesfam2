import React, { useEffect } from "react";
import jwt from 'jsonwebtoken';

const quote = () => {
    async function populatedQuoate() {
        const data = await fetch('http://localhost:8000/api/quote', {
            headers: { 
                'x-access-token': localStorage.getItem('token')
            },
        })
        const data1 = data.json();
    }
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwt.decode(token);
            if(!decoded) {
                localStorage.removeItem('token');
                window.location.href = '/';
            }
            else {
                populatedQuoate();
            }
        }

    }, []);
}