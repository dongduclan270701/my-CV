import React, { useState, useEffect, memo } from 'react'
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import 'assets/scss/Page.scss'
import Sign from 'assets/images/signature.png'
import Avatar from 'assets/images/avatar.jpeg'
import Quotes from 'assets/images/icon_quote_refs.png'
import Loading from 'components/en/Page/Loading'
import CountUp from 'react-countup'
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
                                <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Trang chủ</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>Về tôi</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => scrollTo('services')}>Dịch vụ</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => scrollTo('services')}>Kỹ năng</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#education' className={activeLink === 'education' ? 'active' : ''} onClick={() => scrollTo('services')}>Giáo dục</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#feedback' className={activeLink === 'feedback' ? 'active' : ''} onClick={() => scrollTo('services')}>Phản hồi</a>
                            </div>
                            <div className='section-nav'>
                                <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => scrollTo('services')}>Liên hệ</a>
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
                            <a href='#home' className={activeLink === 'home' ? 'active' : ''} onClick={() => { scrollTo('home'); setIsMenu(false) }}>Trang chủ</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#about' className={activeLink === 'about' ? 'active' : ''} onClick={() => { scrollTo('about'); setIsMenu(false) }}>Về tôi</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#services' className={activeLink === 'services' ? 'active' : ''} onClick={() => { scrollTo('services'); setIsMenu(false) }}>Dịch vụ</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#skills' className={activeLink === 'skills' ? 'active' : ''} onClick={() => { scrollTo('skills'); setIsMenu(false) }}>Kỹ năng</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#education' className={activeLink === 'education' ? 'active' : ''} onClick={() => { scrollTo('education'); setIsMenu(false) }}>Giáo dục</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#feedback' className={activeLink === 'feedback' ? 'active' : ''} onClick={() => { scrollTo('feedback'); setIsMenu(false) }}>Phản hồi</a>
                        </div>
                        <div className='section-nav-mobile'>
                            <a href='#contact' className={activeLink === 'contact' ? 'active' : ''} onClick={() => { scrollTo('contact'); setIsMenu(false) }}>Liên hệ</a>
                        </div>
                    </div>
                    <div className='section-content'>
                        <div className='col-10 section-content-home' id='home'>
                            <div className='section-home-title'>
                                <div className='section-home-title-name'>Lân<br />Đồng Đức</div>
                                <div className='section-home-title-desc'>UI-UX designer, developer Front-end & Back-end ( ReactJS, React Navtive )</div>
                            </div>
                            <div className='section-home-img'>
                                <img src={Avatar} alt='' />
                            </div>
                        </div>
                        <div className='col-10 section-content-about' id='about'>
                            <div className='section-about-title'>
                                VỀ TÔI
                            </div>
                            <div className='section-about-infor'>
                                <div className='section-about-infor-left'>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            HỌ VÀ TÊN
                                        </div>
                                        <div className='section-about-infor-content'>
                                            Đồng Đức Lân
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            NGÀY SINH
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
                                            SỐ ĐIỆN THOẠI
                                        </div>
                                        <div className='section-about-infor-content'>
                                            (+84) 37.938.2992
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            WEBSITE
                                        </div>
                                        <div className='section-about-infor-content'>
                                            www.kassdev.com
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            ĐỊA CHỈ
                                        </div>
                                        <div className='section-about-infor-content'>
                                            Ha Noi, Viet Nam
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            HỨNG THÚ
                                        </div>
                                        <div className='section-about-infor-content'>
                                            Games, Books, Movies
                                        </div>
                                    </div>
                                    <div className='section-about-infor-box'>
                                        <div className='section-about-infor-title'>
                                            MẠNG XÃ HỘI
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
                                        <div className='section-about-infor-number-title'>KINH NGHIỆM</div>
                                        <div className='section-about-infor-number-content'><CountUp end={1} />+</div>
                                    </div>
                                    <div className='section-about-infor-number'>
                                        <div className='section-about-infor-number-title'>KHÁCH HÀNG</div>
                                        <div className='section-about-infor-number-content'><CountUp end={3} /></div>
                                    </div>
                                    <div className='section-about-infor-number'>
                                        <div className='section-about-infor-number-title'>DỰ ÁN</div>
                                        <div className='section-about-infor-number-content'><CountUp end={9} /></div>
                                    </div>
                                    <div className='section-about-infor-text'>
                                        <div className='section-about-infor-text-title'>Đến với tôi nếu bạn cần:</div>
                                        <div className='section-about-infor-text-content'>1. Thiết kế hệ thống website hoặc thiết kế giao diện website</div>
                                        <div className='section-about-infor-text-content'>2. Thiết kế cơ sở dữ liệu (từ nhỏ đến lớn).</div>
                                        <div className='section-about-infor-text-content'>3. Công ty bạn đang tuyển người cho Front-end | Back-end.</div>
                                        <div className='section-about-infor-text-content'>4. Bạn đang tìm kiếm một freelancer để thực hiện công việc phát triển hệ thống trang web cho riêng bạn.</div>
                                        <div className='section-about-infor-text-content'>Hãy yên tâm về dịch vụ của tôi, tôi hiểu cảm giác của bạn khi bỏ ra một số tiền để làm ra một sản phẩm chất lượng. Khi tôi nhận được 1$ từ bạn, tôi sẽ làm cho bạn một sản phẩm chất lượng không chỉ có giá trị 1$ mà còn có giá trị lớn hơn 1$.</div>
                                    </div>
                                    <div className='section-about-infor-cv'>
                                        <button type='submit' onClick={() => navigate('/en-US/my-cv')} className='section-about-infor-down'>
                                            CV CỦA TÔI<i className="fa-solid fa-arrow-up-right-from-square" style={{ marginLeft: 5 }} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className='col-10 section-content-services' id='services'>
                            <div className='section-services-title'>
                                Srv.
                            </div>
                            <div className='row section-services-content'>
                                <div className='col-md-6 '>
                                    <div className='section-services-box' onClick={() => handleBoxClick(0)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>THIẾT KẾ</div>
                                            {selectedIndexes.includes(0) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(0) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Thiết kế website và ứng dụng di động</li>
                                                <li>Sử dụng công cụ (Figma & Adobe XD)</li>
                                                <li>Chuyên nghiệp & hiện đại</li>
                                                <li>Nhanh & chi tiết</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='section-services-box' onClick={() => handleBoxClick(1)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>WEBSITE</div>
                                            {selectedIndexes.includes(1) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(1) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Sử dụng thư viện ( ReactJS & more vv.v )</li>
                                                <li>Tối ưu hoá hệ thống</li>
                                                <li>Sử dụng công nghệ mới nhất</li>
                                                <li>Tập trung sử dụng ngôn ngữ (Javascript, HTML, Scss)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6 '>
                                    <div className='section-services-box' onClick={() => handleBoxClick(2)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>ỨNG DỤNG ĐIỆN THOẠI</div>
                                            {selectedIndexes.includes(2) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(2) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Sử dụng thư viện ( React Native & more vv.v )</li>
                                                <li>Tối ưu hoá hệ thống & chạy trên 2 nền tảng (IOS & Android) </li>
                                                <li>Sử dụng công nghệ mới nhất</li>
                                                <li>Tập trung sử dụng ngôn ngữ (Javascript, HTML, Css)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='section-services-box' onClick={() => handleBoxClick(3)}>
                                        <div className='section-services-name'>
                                            <div className='title-head-form'>CƠ SỞ DỮ LIỆU</div>
                                            {selectedIndexes.includes(3) ? <i className="fa-solid fa-angle-down icon-head-form" /> : <i className="fa-solid fa-angle-right icon-head-form" />}
                                        </div>
                                        <div className={`section-services-desc ${selectedIndexes.includes(3) ? 'trans' : ''}`}>
                                            <ul>
                                                <li>Sử dụng NodeJS</li>
                                                <li>Thiết kế cơ sở dữ liệu ( noSQL ) ( MongoDb ) & API design</li>
                                                <li>Tập trung sử dụng ngôn ngữ (Javascript)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 section-content-skills' id='skills'>
                            <div className='section-skills-title'>
                                Sks.
                            </div>
                            <div className='section-skills-infor'>
                                <div className='section-skills-infor-left'>
                                    <div className='section-skills-infor-left-title'>Về kỹ năng chuyên ngành</div>
                                    <div className='section-skills-infor-left-content'>Với kinh nghiệm hơn 1 năm và tham gia 1 số dự án khác nhau. Điều đó đã trau dồi được kỹ năng chuyên ngành tăng lên khá nhiều</div>
                                    <div className='section-skills-infor-left-content'>Những thông số sau đây phản ánh rõ ràng nhất về kỹ năng.</div>
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
                                    <div className='col-5 section-education-infor-box-time'>
                                        Tháng 9, 2019 – 2023
                                    </div>
                                    <div className='col-7 section-education-infor-box-content'>
                                        <div className='section-education-infor-box-text'>Full-Stack Developer ( VTC Academy - Ha Noi / Viet Nam )</div>
                                        <div className='section-education-infor-box-text'>Đã được trang bị tất cả kiến thức về Full-Stack ( M.E.R.N ). Từ Front-end đến Back-end, thiết kế UI-UX cho website ( Figma, AdobeXD ), thiết kể API.</div>
                                        <div className='section-education-infor-box-text'>Ha Noi / Viet Nam</div>
                                    </div>
                                </div>
                                <div className='section-education-infor-box'>
                                    <div className='col-5 section-education-infor-box-time'>
                                        Tháng 4, 2023 – Tháng 12, 2024
                                    </div>
                                    <div className='col-7 section-education-infor-box-content'>
                                        <div className='section-education-infor-box-text'>IELTS band 7+ ( IELTS Fighter - Ha Noi / Viet Nam )</div>
                                        <div className='section-education-infor-box-text'>Hiện tại 4 kỹ năng như Listening, Reading, Writing, Speaking đang ở band 4.5 và đang tiếp tục lộ trình học đến band 7+ trong cuối năm 2024.</div>
                                        <div className='section-education-infor-box-text'>Ha Noi / Viet Nam</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-10 section-content-feedback' id='feedback'>
                            <div className='section-feedback-title'>
                                Phản hồi
                            </div>
                            <div className='section-feedback-infor'>
                                <div className='section-feedback-info-box'>
                                    <div className='section-feedback-info-title'>
                                        <img src={Quotes} alt='' />
                                    </div>
                                    <div className='section-feedback-info-desc'>
                                        Website được thết kế chỉnh chu về mọi mặt lẫn hiệu xuất sử dụng. Thời gian bàn giao sản phẩm không những đúng hạn còn sớm hơn so với mốc thời gian đã bàn bạc trước.
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
                                        Thiết kế hệ thống website dashboard rất hợp lý và phù hợp với doanh nghiệp vừa và nhỏ. Tính toán và thiết kế đúng chuẩn 1 doanh nghiệp cần.
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
                                        Thiết kế hệ thống cơ sở dữ liệu và api một cách chặt chẽ, truy cập và xử lý thông tin nhanh chóng, ít bị gián đoạn
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
                                        Ban đầu tôi chỉ muốn làm 1 website thông thường để quảng cáo dịch. Nhưng sau khi tôi được kết quả sản phẩm hơn mức mong đợi
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
                                Liên hệ
                            </div>
                            <div className='section-contact-infor'>
                                <div className='section-contact-infor-left'>
                                    <div className='section-contact-infor-left-box'>
                                        <div className={`section-contact-infor-left-title ${focusedInput === 'name' ? 'input-focused' : ''}`}>
                                            Họ và Tên
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
                                            Chủ đề
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
                                            Tin nhắn
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
                                        <span>Gửi</span>
                                    </button>
                                </div>
                                <div className='section-contact-infor-right'>
                                    <div className='section-contact-infor-right-title'>Liên hệ với tôi nếu bạn cần:</div>
                                    <div className='section-contact-infor-right-content'>- Thiết kế hệ thống website hoặc thiết kế giao diện website.<br />- Thiết kế cơ sở dữ liệu (từ nhỏ đến lớn).<br />- Công ty bạn đang tuyển người cho Front-end | Back-end.<br />- Bạn đang tìm kiếm một freelancer để thực hiện công việc phát triển hệ thống trang web cho riêng bạn.</div>
                                    <div className='section-contact-infor-right-content'>Hãy yên tâm về dịch vụ của tôi, tôi hiểu cảm giác của bạn khi bỏ ra một số tiền để làm ra một sản phẩm chất lượng. Khi tôi nhận được 1$ từ bạn, tôi sẽ làm cho bạn một sản phẩm chất lượng không chỉ có giá trị 1$ mà còn có giá trị lớn hơn 1$.</div>
                                    <div className='section-contact-infor-right-content'>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Tên: </span>Kass D. Dong</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Địa chỉ: </span>Ha Noi, Viet Nam</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Số điện thoại: </span>(+84) 37.938.2992</div>
                                        <div className='section-contact-infor-right-f'><span className='span-title'>Hoạt động: </span>9:00 am – 9:00 pm</div>
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
