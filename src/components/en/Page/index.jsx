import React, { useState, useEffect, memo } from 'react'
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import 'assets/scss/Page.scss'
import Sign from 'assets/images/signature.png'
import Avatar from 'assets/images/avatar.jpeg'
import HomePage from 'components/en/Page/Homepage'
import CountUp from 'react-countup';
const Index = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeLink, setActiveLink] = useState('home')
    const [selectedIndexes, setSelectedIndexes] = useState([]);

    const handleBoxClick = (index) => {
        const updatedIndexes = [...selectedIndexes];
        const indexPosition = updatedIndexes.indexOf(index);

        if (indexPosition === -1) {
            updatedIndexes.push(index); // Nếu phần tử chưa được chọn, thêm vào danh sách
        } else {
            updatedIndexes.splice(indexPosition, 1); // Nếu phần tử đã được chọn, loại bỏ khỏi danh sách
        }

        setSelectedIndexes(updatedIndexes);
    };
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

        const observeElements = (selector) => {
            document.querySelectorAll(selector).forEach(card => {
                observer.observe(card);
            });
        };

        const unobserveElements = (selector) => {
            document.querySelectorAll(selector).forEach(card => {
                observer.unobserve(card);
            });
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const { target } = entry;
                if (entry.isIntersecting) {
                    if (!target.classList.contains('animation-done')) {
                        target.classList.add('active');
                        setTimeout(() => {
                            if (target.classList.contains('active')) {
                                target.classList.remove('active');
                                target.classList.add('animation-done');
                            }
                        }, 2000);
                    }
                } else {
                    if (!target.classList.contains('animation-done')) {
                        target.classList.remove('active');
                    }
                }
            });
        });

        observeElements('.section-content .section-content-home .section-home-title');
        observeElements('.section-content .section-content-about .section-about-title');
        observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-left .section-about-infor-box');
        observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-number');
        observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-text');
        observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-cv');
        observeElements('.section-content .section-content-services .section-services-title');
        observeElements('.section-content .section-content-services .section-services-content .section-services-box');

        return () => {
            window.removeEventListener('scroll', handleScroll);
            unobserveElements('.section-content .section-content-home .section-home-title');
            unobserveElements('.section-content .section-content-about .section-about-title');
            unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-left .section-about-infor-box');
            unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-number');
            unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-text');
            unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-cv');
            unobserveElements('.section-content .section-content-services .section-services-title');
            unobserveElements('.section-content .section-content-services .section-services-content .section-services-box');
        };
    }, []);


    const scrollTo = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }
    const handleChangeLanguage = (e) => {
        if (e.target.value === '🇺🇸 English') {
            navigate('/en-US')
        } else {
            navigate('/vi-VN')
        }
    }
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent)
    const isAndroid = /Android/.test(navigator.userAgent)
    const zaloLink = isIOS ? 'zalo://qr/p/b0vaft11czp1' : isAndroid ? 'https://zaloapp.com/qr/p/b0vaft11czp1' : 'zalo://conversation?phone=0379382992'
    return (
        <div className='section-page'>
            <div className='section-header'>
                <div className='col-2 section-header-nav'>
                    <img className='login-sign' src={Sign} alt='' />
                    <div className='section-nav'>
                        <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Home</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>About</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => scrollTo('services')}>Services</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => scrollTo('services')}>Skills</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#experience' className={activeLink === 'experience' ? 'active' : ''} onClick={() => scrollTo('services')}>Experience</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#blog' className={activeLink === 'blog' ? 'active' : ''} onClick={() => scrollTo('services')}>Blog</a>
                    </div>
                    <div className='section-nav'>
                        <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => scrollTo('services')}>Contact</a>
                    </div>
                    <select name='lang' value={location.pathname === '/en-US' ? '🇺🇸 English' : '🇻🇳 Vietnamese'} onChange={(e) => handleChangeLanguage(e)} type="text" className="lang" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" >
                        <option value='🇺🇸 English' >🇺🇸 English</option>
                        <option value='🇻🇳 Vietnamese' >🇻🇳 Vietnamese</option>
                    </select>
                </div>
            </div>
            <div className='section-content'>
                <div className='col-10 section-content-home' id='home'>
                    <div className='section-home-title'>
                        <div className='section-home-title-name'>Kass<br />D. DONG</div>
                        <div className='section-home-title-desc'>UI-UX designer, developer Front-end & Back-end ( ReactJS, React Navtive )</div>
                    </div>
                    <div className='section-home-img'>
                        <img src={Avatar} alt='' />
                    </div>
                </div>
                <div className='col-10 section-content-about' id='about'>
                    <div className='section-about-title'>
                        About
                    </div>
                    <div className='section-about-infor'>
                        <div className='section-about-infor-left'>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    NAME
                                </div>
                                <div className='section-about-infor-content'>
                                    Kass D. Dong
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    BIRTHDAY
                                </div>
                                <div className='section-about-infor-content'>
                                    27.07.2001
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    ROLE
                                </div>
                                <div className='section-about-infor-content'>
                                    Freelancer
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    EMAIL
                                </div>
                                <div className='section-about-infor-content'>
                                    dongduclan277@gmail.com
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    PHONE
                                </div>
                                <div className='section-about-infor-content'>
                                    (+84) 37.938.2992
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    Website
                                </div>
                                <div className='section-about-infor-content'>
                                    www.kassdev.com
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    LOCATION
                                </div>
                                <div className='section-about-infor-content'>
                                    Ha Noi, Viet Nam
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    INTERESTS
                                </div>
                                <div className='section-about-infor-content'>
                                    Games, Books, Movies
                                </div>
                            </div>
                            <div className='section-about-infor-box'>
                                <div className='section-about-infor-title'>
                                    SOCIAL
                                </div>
                                <div className='section-about-infor-content'>
                                    <div style={{ display: 'flex', gap: 15 }}>
                                        <a href="https://www.facebook.com/kass277"><i className="fa-brands fa-facebook-f" /></a>
                                        <a href="tel:0379382992"><i className="fa-solid fa-phone fa-sm" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='section-about-infor-right'>
                            <div className='section-about-infor-number'>
                                <div className='section-about-infor-number-title'>XP YEARS</div>
                                <div className='section-about-infor-number-content'><CountUp end={1} />+</div>
                            </div>
                            <div className='section-about-infor-number'>
                                <div className='section-about-infor-number-title'>CLIENTS</div>
                                <div className='section-about-infor-number-content'><CountUp end={6} /></div>
                            </div>
                            <div className='section-about-infor-number'>
                                <div className='section-about-infor-number-title'>PROJECT</div>
                                <div className='section-about-infor-number-content'><CountUp end={9} /></div>
                            </div>
                            <div className='section-about-infor-text'>
                                <div className='section-about-infor-text-title'>Come to me if you need:</div>
                                <div className='section-about-infor-text-content'>1. Website system design or just website interface design</div>
                                <div className='section-about-infor-text-content'>2. Database design (from small to large).</div>
                                <div className='section-about-infor-text-content'>3. Your company is recruiting people for Front-end | Back-end.</div>
                                <div className='section-about-infor-text-content'>4. You are looking for a freelancer to do your own website system development work for you.</div>
                                <div className='section-about-infor-text-content'>Please rest assured about our service, we understand your feelings when spending an amount of money to make a quality product. When I receive 1$ from you, I will make for you a quality product that is not only worth 1$ but has a value even greater than 1$.</div>
                            </div>
                            <div className='section-about-infor-cv'>
                                <button type='submit' onClick className='section-about-infor-down'>
                                    DOWNLOAD CV<i className="fa-solid fa-download" style={{ marginLeft: 5 }} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='col-10 section-content-services' id='services'>
                    <div className='section-services-title'>
                        Srvcs
                    </div>
                    <div className='row section-services-content'>
                        <div className='col-md-6 '>
                            <div className='section-services-box' onClick={() => handleBoxClick(0)}>
                                <div className='section-services-name'>
                                    <div className='title-head-form'>Design</div>
                                    {selectedIndexes.includes(0) ? <i class="fa-solid fa-angle-down icon-head-form" /> : <i class="fa-solid fa-angle-right icon-head-form" />}
                                </div>
                                <div className={`section-services-desc ${selectedIndexes.includes(0) ? 'trans' : ''}`}>
                                    <ul>
                                        <li>Design for website and application mobile</li>
                                        <li>Using tools ( Figma & Adobe XD )</li>
                                        <li>Professional & modern</li>
                                        <li>Faster & detailed</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='section-services-box' onClick={() => handleBoxClick(1)}>
                                <div className='section-services-name'>
                                    <div className='title-head-form'>Website</div>
                                    {selectedIndexes.includes(1) ? <i class="fa-solid fa-angle-down icon-head-form" /> : <i class="fa-solid fa-angle-right icon-head-form" />}
                                </div>
                                <div className={`section-services-desc ${selectedIndexes.includes(1) ? 'trans' : ''}`}>
                                    <ul>
                                        <li>Using library ( ReactJS & more vv.v )</li>
                                        <li>System optimization</li>
                                        <li>Using the latest technology</li>
                                        <li>Mainly used language (Javascript, HTML, Scss)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 '>
                            <div className='section-services-box' onClick={() => handleBoxClick(2)}>
                                <div className='section-services-name'>
                                    <div className='title-head-form'>Application Mobile</div>
                                    {selectedIndexes.includes(2) ? <i class="fa-solid fa-angle-down icon-head-form" /> : <i class="fa-solid fa-angle-right icon-head-form" />}
                                </div>
                                <div className={`section-services-desc ${selectedIndexes.includes(2) ? 'trans' : ''}`}>
                                    <ul>
                                        <li>Using library ( React Native & more vv.v )</li>
                                        <li>Optimized system & running on 2 main platforms (IOS & Android) </li>
                                        <li>Using the latest technology</li>
                                        <li>Mainly used language (Javascript, HTML, Css)</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='section-services-box' onClick={() => handleBoxClick(3)}>
                                <div className='section-services-name'>
                                    <div className='title-head-form'>Database</div>
                                    {selectedIndexes.includes(3) ? <i class="fa-solid fa-angle-down icon-head-form" /> : <i class="fa-solid fa-angle-right icon-head-form" />}
                                </div>
                                <div className={`section-services-desc ${selectedIndexes.includes(3) ? 'trans' : ''}`}>
                                    <ul>
                                        <li>Using NodeJS</li>
                                        <li>Database design ( noSQL ) ( MongoDb ) & API design</li>
                                        <li>Mainly used language (Javascript)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-10 section-content-skills' id='skills'>
                    <div className='section-skills-title'>
                        Skills
                    </div>
                    <div className='section-skills-infor'>
                        <div className='section-skills-infor-left'>
                            <div className='section-skills-infor-left-title'>Nam ultrices ultrices nec tortor pulvinar esteras loremips estorem ipusm</div>
                            <div className='section-skills-infor-left-content'>Mauris volutpat estera phasellus. Varius nec orcina quam augue loremes lines rester pellentesque non estar identiqum pere setarra nunc vulputate id in nullam lorem ipsum dolor setarra nunc vulputateester.</div>
                            <div className='section-skills-infor-left-content'>Mauris volutpat estera phasellus. Varius nec orcina quam augue loremes lines rester pellentesque non estar identiqum pere setarra nunc vulputate id in nullam lorem ipsum dolor setarra nunc vulputateester.</div>
                        </div>
                        <div className='section-skills-infor-right'>
                            <div className='section-skills-infor-right-no'>
                                <div className='section-skills-infor-right-percents'>
                                    75%
                                </div>
                                <div className='section-skills-infor-right-line'>
                                    <div className='section-skills-infor-right-line-title'>
                                        HTML & CSS
                                    </div>
                                    <div className='section-skills-infor-right-line-title'>
                                        123
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-10 section-content-experience' id='experience'>

                </div>
                <div className='col-10 section-content-blog' id='blog'>

                </div>
                <div className='col-10 section-content-contact' id='contact'>

                </div>
            </div>
        </div>
    )
}

export default memo(Index)
