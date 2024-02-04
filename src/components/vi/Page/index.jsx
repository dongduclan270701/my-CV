import React, { useState, useEffect, memo } from 'react';
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import 'assets/scss/Page.scss'
import Sign from 'assets/images/signature.png'
import HomePage from 'components/en/Page/Homepage'
const Index = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('home');
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section-content > div');
            sections.forEach(section => {
                const top = section.getBoundingClientRect().top;
                if (top >= 0 && top <= window.innerHeight) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section-content > div');
            sections.forEach(section => {
                const top = section.getBoundingClientRect().top;
                if (top >= 0 && top <= window.innerHeight) {
                    setActiveLink(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleChangeLanguage = (e) => {
        if (e.target.value === '🇺🇸 English') {
            navigate('/en-US')
        } else {
            navigate('/vi-VN')
        }
    }
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent)
    const zaloLink = isIOS ? 'zalo://qr/p/b0vaft11czp1' : isAndroid ? 'https://zaloapp.com/qr/p/b0vaft11czp1' : 'zalo://conversation?phone=0379382992';
    return (
        <div className='section-page'>
            <div className='section-header'>
                <div className='col-2 section-header-nav'>
                    <img className='login-sign' src={Sign} alt='' />
                    <div className='section-nav'>
                        <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Trang chủ</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>Về tôi</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => scrollTo('services')}>Dịch vụ</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#portfolio' className={activeLink === 'portfolio' ? 'active' : ''} onClick={() => scrollTo('services')}>Danh mục</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => scrollTo('services')}>Kỹ năng</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#experience' className={activeLink === 'experience' ? 'active' : ''} onClick={() => scrollTo('services')}>Kinh nghiệm</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#blog' className={activeLink === 'blog' ? 'active' : ''} onClick={() => scrollTo('services')}>Bài viết</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => scrollTo('services')}>Liên hệ</a>
                    </div>
                    <select name='lang' value={location.pathname === '/en-US' ? '🇺🇸 English':'🇻🇳 Vietnamese'} onChange={(e) => handleChangeLanguage(e)} type="text" className="lang" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" >
                        <option value='🇺🇸 English' >🇺🇸 English</option>
                        <option value='🇻🇳 Vietnamese' >🇻🇳 Vietnamese</option>
                    </select>
                </div>
            </div>
            <div className='section-content'>
                <div className='col-10 section-content-home' id='home'>
                    123123
                </div>
                <div className='col-10 section-content-about' id='about'><HomePage /></div>
                <div className='col-10 section-content-services' id='services'><HomePage /></div>
                <div className='col-10 section-content-portfolio' id='portfolio'><HomePage /></div>
                <div className='col-10 section-content-skills' id='skills'><HomePage /></div>
                <div className='col-10 section-content-experience' id='experience'><HomePage /></div>
                <div className='col-10 section-content-blog' id='blog'><HomePage /></div>
                <div className='col-10 section-content-contact' id='contact'><HomePage /></div>
            </div>
        </div>
    );
}

export default memo(Index);
