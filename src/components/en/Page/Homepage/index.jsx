import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Index = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/en-US')
    }, []);
    return (
        <>
            
        </>
    );
}

export default Index;
