import React, { useState, useEffect, memo } from 'react';
import { NavLink } from "react-router-dom";
import 'assets/scss/Header.scss'
const Index = () => {
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            console.log(window.scrollY) 
        };
        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent)
    const zaloLink = isIOS ? 'zalo://qr/p/b0vaft11czp1' : isAndroid ? 'https://zaloapp.com/qr/p/b0vaft11czp1' : 'zalo://conversation?phone=0379382992';
    return (
        <>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
            <div>50</div>
        </>
    );
}

export default memo(Index);
