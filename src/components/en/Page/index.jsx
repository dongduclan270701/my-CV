import React, { useState, useEffect, memo } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import 'assets/scss/Page.scss'
import Sign from 'assets/images/signature.png'
import Avatar from 'assets/images/avatar.jpeg'
import Quotes from 'assets/images/icon_quote_refs.png'
import Loading from 'components/en/Page/Loading'
import CountUp from 'react-countup'
import axios from 'axios'
const Index = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [activeLink, setActiveLink] = useState('home')
    const [selectedIndexes, setSelectedIndexes] = useState([])
    const [focusedInput, setFocusedInput] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isMenu, setIsMenu] = useState(false)
    const handleInputFocus = (inputName) => {
        setFocusedInput(inputName)
    }

    const handleInputBlur = () => {
        setFocusedInput(null)
    }
    const handleBoxClick = (index) => {
        const updatedIndexes = [...selectedIndexes]
        const indexPosition = updatedIndexes.indexOf(index)

        if (indexPosition === -1) {
            updatedIndexes.push(index) // Nếu phần tử chưa được chọn, thêm vào danh sách
        } else {
            updatedIndexes.splice(indexPosition, 1) // Nếu phần tử đã được chọn, loại bỏ khỏi danh sách
        }

        setSelectedIndexes(updatedIndexes)
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false) // Kết thúc loading sau 2 giây
        }, 2000)
        if (isLoading === false) {
            const handleScroll = () => {
                const sections = document.querySelectorAll('.section-content > div')
                sections.forEach(section => {
                    const top = section.getBoundingClientRect().top
                    if (top >= 0 && top <= window.innerHeight) {
                        setActiveLink(section.id)
                    }
                })
            }

            window.addEventListener('scroll', handleScroll)

            const observeElements = (selector) => {
                document.querySelectorAll(selector).forEach(card => {
                    observer.observe(card)
                })
            }

            const unobserveElements = (selector) => {
                document.querySelectorAll(selector).forEach(card => {
                    observer.unobserve(card)
                })
            }

            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    const { target } = entry
                    if (entry.isIntersecting) {
                        if (!target.classList.contains('animation-done')) {
                            target.classList.add('active')
                            setTimeout(() => {
                                if (target.classList.contains('active')) {
                                    target.classList.remove('active')
                                    target.classList.add('animation-done')
                                }
                            }, 2000)
                        }
                    } else {
                        if (!target.classList.contains('animation-done')) {
                            target.classList.remove('active')
                        }
                    }
                })
            })

            observeElements('.section-content .section-content-home .section-home-title')
            observeElements('.section-content .section-content-about .section-about-title')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-left .section-about-infor-box')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-number')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-text')
            observeElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-cv')
            observeElements('.section-content .section-content-services .section-services-title')
            observeElements('.section-content .section-content-services .section-services-content .section-services-box')
            observeElements('.section-content .section-content-skills .section-skills-title')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-title')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-content')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no')
            observeElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no .section-skills-infor-right-line .section-skills-infor-right-line-content .section-skills-infor-right-line-color .section-skills-infor-right-line-color2')
            observeElements('.section-content .section-content-education .section-education-title')
            observeElements('.section-content .section-content-education .section-education-infor .section-education-infor-box')
            observeElements('.section-content .section-content-feedback .section-feedback-title')
            observeElements('.section-content .section-content-feedback .section-feedback-infor .section-feedback-info-box')
            observeElements('.section-content .section-content-contact .section-contact-title')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .section-contact-infor-left-box')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .btn-submit-contact')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-title')
            observeElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-content')
            return () => {
                window.removeEventListener('scroll', handleScroll)
                unobserveElements('.section-content .section-content-home .section-home-title')
                unobserveElements('.section-content .section-content-about .section-about-title')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-left .section-about-infor-box')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-number')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-text')
                unobserveElements('.section-content .section-content-about .section-about-infor .section-about-infor-right .section-about-infor-cv')
                unobserveElements('.section-content .section-content-services .section-services-title')
                unobserveElements('.section-content .section-content-services .section-services-content .section-services-box')
                unobserveElements('.section-content .section-content-skills .section-skills-title')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-title')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-left .section-skills-infor-left-content')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no')
                unobserveElements('.section-content .section-content-skills .section-skills-infor .section-skills-infor-right .section-skills-infor-right-no .section-skills-infor-right-line .section-skills-infor-right-line-content .section-skills-infor-right-line-color .section-skills-infor-right-line-color2')
                unobserveElements('.section-content .section-content-education .section-education-title')
                unobserveElements('.section-content .section-content-education .section-education-infor .section-education-infor-box')
                unobserveElements('.section-content .section-content-feedback .section-feedback-title')
                unobserveElements('.section-content .section-content-feedback .section-feedback-infor .section-feedback-info-box')
                unobserveElements('.section-content .section-content-contact .section-contact-title')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .section-contact-infor-left-box')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-left .btn-submit-contact')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-title')
                unobserveElements('.section-content .section-content-contact .section-contact-infor .section-contact-infor-right .section-contact-infor-right-content')
            }
        }
        return () => {
            clearTimeout(timer)
        }
    }, [isLoading])

    useEffect(() => {
        const fetchPostIP = async () => {
            const req = await axios.post('https://ktech-admin.onrender.com/v1/ip/ipUser')
            return req.data
        }
        fetchPostIP()
            .then()
            .catch(error => {
                console.log(error)
            })
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
        <>
            {isLoading ?
                <Loading />
                :
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
                                <a href='#education' className={activeLink === 'education' ? 'active' : ''} onClick={() => scrollTo('services')}>Education</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#feedback' className={activeLink === 'feedback' ? 'active' : ''} onClick={() => scrollTo('services')}>Testimonial</a>
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
                    <div className='container-header-mobile'>
                        <div className='logo'>
                            <img src={Sign} className='svg-logo' alt="Logo" />
                        </div>
                        <div style={{ display: 'flex', gap: 15, alignItems: 'center', paddingRight: 15 }}>
                            <select name='lang' value={location.pathname === '/en-US' ? '🇺🇸 English' : '🇻🇳 Vietnamese'} onChange={(e) => handleChangeLanguage(e)} type="text" className="lang" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search" >
                                <option value='🇺🇸 English' >🇺🇸 English</option>
                                <option value='🇻🇳 Vietnamese' >🇻🇳 Vietnamese</option>
                            </select>
                            <div id="checkbox2" className={isMenu ? 'checked' : ''}></div>
                            <label class="toggle toggle2" for="checkbox2"  onClick={() => { setIsMenu(!isMenu) }}>
                                <div id="bar4" class="bars"></div>
                                <div id="bar5" class="bars"></div>
                                <div id="bar6" class="bars"></div>
                            </label>
                        </div>
                    </div>
                    <div className={isMenu ? 'section-nav-mobile-box active' : 'section-nav-mobile-box deactivate'} >
                        <div className='section-nav-mobile'>
                            <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => { scrollTo('home'); setIsMenu(!isMenu) }}>Home</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => { scrollTo('about'); setIsMenu(!isMenu) }}>About</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => { scrollTo('services'); setIsMenu(!isMenu) }}>Services</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => { scrollTo('skills'); setIsMenu(!isMenu) }}>Skills</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#education' className={activeLink === 'education' ? 'active' : ''} onClick={() => { scrollTo('education'); setIsMenu(!isMenu) }}>Education</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#feedback' className={activeLink === 'feedback' ? 'active' : ''} onClick={() => { scrollTo('feedback'); setIsMenu(!isMenu) }}>Testimonial</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => { scrollTo('contact'); setIsMenu(!isMenu) }}>Contact</a>
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
                                            Website design
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
                                            (+84) 0379382992
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
                                        <div className='section-about-infor-number-content'><CountUp end={3} /></div>
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
                                        <button type='submit' onClick={() => navigate('/en-US/my-cv')} className='section-about-infor-down'>
                                            MY CV<i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: 5 }} />
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
                                            {selectedIndexes.includes(0) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
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
                                            {selectedIndexes.includes(1) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
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
                                            {selectedIndexes.includes(2) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
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
                                            {selectedIndexes.includes(3) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
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
                                    <div className='section-skills-infor-left-title'>About specialized skills</div>
                                    <div className='section-skills-infor-left-content'>With more than 1 year of experience and participating in a number of different projects. That has improved my specialized skills quite a lot.</div>
                                    <div className='section-skills-infor-left-content'>The following parameters most clearly reflect skills.</div>
                                </div>
                                <div className='section-skills-infor-right'>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            80%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                HTML & CSS
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '80%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            70%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                Javascript
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '70%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            75%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                ReactJS
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '75%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            50%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                React Native
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '50%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='section-skills-infor-right-no'>
                                        <div className='section-skills-infor-right-percents'>
                                            70%
                                        </div>
                                        <div className='section-skills-infor-right-line'>
                                            <div className='section-skills-infor-right-line-title'>
                                                NodeJS
                                            </div>
                                            <div className='section-skills-infor-right-line-content'>
                                                <div className='section-skills-infor-right-line-white'>
                                                </div>
                                                <div className='section-skills-infor-right-line-color' style={{ width: '70%' }}>
                                                    <div className='section-skills-infor-right-line-color2 active'>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 section-content-education' id='education'>
                            <div className='section-education-title'>
                                Edc.
                            </div>
                            <div className='section-education-infor'>
                                <div className='section-education-infor-box'>
                                    <div className='col-md-5 section-education-infor-box-time'>
                                        September, 2019 – 2023
                                    </div>
                                    <div className='col-md-7 section-education-infor-box-content'>
                                        <div className='section-education-infor-box-text'>Full-Stack Developer ( VTC Academy - Ha Noi / Viet Nam )</div>
                                        <div className='section-education-infor-box-text'>Equipped with all knowledge about Full-Stack . From Front-end to Back-end, UI-UX design for websites, API design.</div>
                                        <div className='section-education-infor-box-text'>Ha Noi / Viet Nam</div>
                                    </div>
                                </div>
                                <div className='section-education-infor-box'>
                                    <div className='col-md-5 section-education-infor-box-time'>
                                        April, 2023 – December, 2024
                                    </div>
                                    <div className='col-md-7 section-education-infor-box-content'>
                                        <div className='section-education-infor-box-text'>IELTS band 7+ ( ITELS Fighter - Ha Noi / Viet Nam )</div>
                                        <div className='section-education-infor-box-text'>4 skills such as Listening, Reading, Writing, Speaking are at band 4.5 and are continuing their learning path to band 7 by the end of 2024..</div>
                                        <div className='section-education-infor-box-text'>Ha Noi / Viet Nam</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 section-content-feedback' id='feedback'>
                            <div className='section-feedback-title'>
                                Testimonial
                            </div>
                            <div className='section-feedback-infor'>
                                <div className='section-feedback-info-box'>
                                    <div className='section-feedback-info-title'>
                                        <img src={Quotes} alt='' />
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        The website is carefully designed in all aspects and usability. The product delivery time is not only on time but also earlier than the previously discussed timeline.
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        <div style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Kass Dong</div>
                                        <div><a target='_blank' rel="noopener noreferrer" href="https://ktech-uw1a.onrender.com/">ktech-uw1a.onrender.com</a></div>
                                    </div>
                                    <span class="marker"></span>
                                </div>
                                <div className='section-feedback-info-box'>
                                    <div className='section-feedback-info-title'>
                                        <img src={Quotes} alt='' />
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        The design of the website dashboard system is very reasonable and suitable for small and medium businesses. Calculate and design according to the standards a business needs
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        <div style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Kass Dong</div>
                                        <div><a target='_blank' rel="noopener noreferrer" href="https://ktech-dashboard.onrender.com/">ktech-dashboard.onrender.com</a></div>
                                    </div>
                                    <span className="marker"></span>
                                </div>
                                <div className='section-feedback-info-box'>
                                    <div className='section-feedback-info-title'>
                                        <img src={Quotes} alt='' />
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        Design the database system and API strictly, access and process information quickly, with little interruption
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        <div style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>NodeJS</div>
                                    </div>
                                    <span class="marker"></span>
                                </div>
                                <div className='section-feedback-info-box'>
                                    <div className='section-feedback-info-title'>
                                        <img src={Quotes} alt='' />
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        Initially, I just wanted to make a regular website to advertise translations. But after I got the product results beyond my expectations.
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        <div style={{ textTransform: 'uppercase', letterSpacing: '1px' }}>Anh Dong</div>
                                        <div><a target='_blank' rel="noopener noreferrer" href="http://xeghepbacgiangbacninhhanoi.com/">xeghepbacgiangbacninhhanoi.com</a></div>
                                    </div>
                                    <span class="marker"></span>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 section-content-contact' id='contact'>
                            <div className='section-contact-title'>
                                Contact
                            </div>
                            <div className='section-contact-infor'>
                                <div className='section-contact-infor-left'>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'name' ? 'input-focused' : ''}`}>
                                            Name
                                        </div>
                                        <input
                                            type='text'
                                            className='section-contact-infor-left-input'
                                            onFocus={() => handleInputFocus('name')}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'email' ? 'input-focused' : ''}`}>
                                            Email
                                        </div>
                                        <input
                                            type='text'
                                            className='section-contact-infor-left-input'
                                            onFocus={() => handleInputFocus('email')}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'subject' ? 'input-focused' : ''}`}>
                                            Subject
                                        </div>
                                        <input
                                            type='text'
                                            className='section-contact-infor-left-input'
                                            onFocus={() => handleInputFocus('subject')}
                                            onBlur={handleInputBlur}
                                        />
                                    </div>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'message' ? 'input-focused' : ''}`}>
                                            Message
                                        </div>
                                        <textarea
                                            className='section-contact-infor-left-input'
                                            onFocus={() => handleInputFocus('message')}
                                            onBlur={handleInputBlur}
                                            name="Text1"
                                            cols="40"
                                            rows="5" />
                                    </div>
                                    <button type='submit' className='btn-submit-contact'>
                                        <div className="svg-wrapper-1">
                                            <div className="svg-wrapper">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    width="24"
                                                    height="24"
                                                >
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path
                                                        fill="currentColor"
                                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Send</span>
                                    </button>
                                </div>
                                <div className='section-contact-infor-right'>
                                    <div className='section-contact-infor-right-title'>Contact to me if you need:</div>
                                    <div className='section-contact-infor-right-content'>- Website system design or just website interface design.<br />- Database design (from small to large).<br />- Your company is recruiting people for Front-end | Back-end.<br />- You are looking for a freelancer to do your own website system development work for you.</div>
                                    <div className='section-contact-infor-right-content'>Please rest assured about our service, we understand your feelings when spending an amount of money to make a quality product. When I receive 1$ from you, I will make for you a quality product that is not only worth 1$ but has a value even greater than 1$.</div>
                                    <div className='section-contact-infor-right-content'>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Name: </span>Kass D. Dong</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Address: </span>Ha Noi, Viet Nam</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Phone: </span>(+84) 37.938.2992</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Hours: </span>6:00 am – 2:00 am</div>
                                    </div>
                                    <div className='section-contact-infor-right-content'>
                                        <div style={{ display: 'flex', gap: 15 }}>
                                            <a href="https://www.facebook.com/kass277"><i className="fa-brands fa-facebook-f" /></a>
                                            <a href="tel:0379382992"><i className="fa-solid fa-phone fa-sm" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default memo(Index)
