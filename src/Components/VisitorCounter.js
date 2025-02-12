import React, { useEffect, useState } from 'react';

const VisitorCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let visits = localStorage.getItem("visitorCount");

        if (!visits) {
            visits = 1;
            localStorage.setItem("visitorCount", visits);
        } else {
            visits = parseInt(visits) + 1;
            localStorage.setItem("visitorCount", visits);
        }
        setCount(visits);
    }, []);

    return (
        <div style={{ color: 'white', textAlign: 'center', marginTop: '1rem' }}>
            <h3>Visitor Count: {count}</h3>
        </div>
    );
};

export default VisitorCounter;
