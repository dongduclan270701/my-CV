import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Info from 'components/CV/info'
import Aim from 'components/CV/aim'
import Education from 'components/CV/education'
import Skills from 'components/CV/skills'
import Experience from 'components/CV/experience'
import 'assets/scss/myCv.scss'
const Index = () => {
    const [info, setInfo] = useState({
        name: 'Đồng Đức Lân',
        desc: 'Dev Full-Stack ( ReactJS, NodeJS, React-Native )',
        phoneNumber: '0379382992',
        email: 'dongduclan277@gmail.com',
        location: 'Thanh Xuân, Hà Nội'
    })
    const [aim, setAim] = useState('Mong muốn tìm 1 nơi để phát triển kỹ năng chuyên ngành của bản thân, tìm 1 môi trường có thể giúp đỡ lẫn nhau và gắn bó lâu dài trong công việc để có thể làm cho công ty phát triển chứ không riêng bản thân 1 cách toàn diện.')
    const [education, setEducation] = useState([
        {
            timeFirst: '09/2019',
            timeLast: 'nay',
            occupation: 'WEB FULLSTACK',
            school: 'Học viện công nghệ và kĩ thuật số VTC Academy (VietnamTelevision Corporation)',
            desc: 'Web fullstack developer'
        },
        {
            timeFirst: '04/2023',
            timeLast: 'nay',
            occupation: '4 KỸ NĂNG: LISTENING, READING, SPEAKING, WRITTING ( IELTS )',
            school: 'IELTS Fighter',
            desc: 'Đã học xong band 4.5 và đang tiếp tục theo học lên band 7.5'
        }
    ])
    const [skills, setSkills] = useState([
        {
            title: 'Kĩ năng chuyên ngành',
            content: [
                'HTML, CSS, SASS, Javascript',
                'ReactJS, React-native, Express, Mongodb, NodeJS, Postman',
                'Thiết kế UI - UX cho website, mobile',
                'Khả năng nghiên cứu, đọc hiểu tài liệu chuyên ngành ( có khả năng đọc hiểu tiếng anh)'
            ]
        }
    ])
    const [exp, setExp] = useState([
        {
            title: 'Website KTech ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/finalproject ( branch dev-fe)',
                'Link Website: https://ktech-uw1a.onrender.com(Đã đưa sản phẩm lên môi trường thật)',
                'Công nghệ sử dụng : ReactJS (Func component, react hook: useContext, memo, useCallBack,..., axios, bootstrap, thư hiện notification)'
            ]
        },
        {
            title: 'NodeJS Website KTech',
            content: [
                'Link github: https://github.com/dongduclan270701/finalprojectnodejs( branch dev-demo)',
                'Link API: Đã tích hợp vào website  https://ktech-uw1a.onrender.com(Đã đưa sản phẩm lên môi trường thật)',
                'Công nghệ sử dụng : NodeJs, Express, MongoDB, Postman'
            ]
        },
        {
            title: 'Website KTech Admin ( ReactJS)',
            content: [
                'Link github: https://github.com/dongduclan270701/finalprojectadmin( branch test-demo)',
                'Link Website: https://ktech-dashboard.onrender.com/(Đã đưa sản phẩm lên môi trường thật, nếu muốn trải nghiệm hãy liên lạc cho em để cho tài khoản!)',
                'Công nghệ sử dụng : ReactJS (Func component, react hook: useContext, memo, useCallBack,..., axios, bootstrap, thư hiện notification)',
                'Phân quyền theo chức năng, mỗi chức năng sẽ hiển thị khác nhau(thông số dữ liệu, biểu đồ, thông tin, tính doanh số, ....)'
            ]
        },
        {
            title: 'NodeJS Website KTech Admin',
            content: [
                'Link github: https://github.com/dongduclan270701/final-backend-admin( branch code)',
                'Link API: Đã tích hợp vào website https://ktech-dashboard.onrender.com/(Đã đưa sản phẩm lên môi trường thật)',
                'Công nghệ sử dụng : NodeJs, Express, MongoDB, Postman'
            ]
        },
        {
            title: 'App Mobile Ktech ( React-native )',
            content: [
                'Link github: https://github.com/dongduclan270701/appmobile( branch main)',
                'Link app expo: exp://exp.host/@ranconkoyx/app-awesome?release-channel=default(Do vấn đề kinh phí cho nên chỉ có thể đưa sản phẩm lên và chạy trên Android, còn IOS thì chưa thể chạy được các máy khác ngoài tài khoản của dev)',
                'Công nghệ sử dụng : React-native, expo, axios, modal, ...'
            ]
        },
        {
            title: 'Website Lsevn ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/frontend-lsevn',
                'Công nghệ sử dụng : ReactJS (Functional component, react hook, HTML, CSS, SCSS, Javascript, axios (restful api), graphql, một số thư viện UI( table, DataGrid ,chart, sweetalert)'
            ]
        },
        {
            title: 'Website nknx ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/frontend-nknx',
                'Công nghệ sử dụng: backend sử dụng Strapi, front-end dùng ReactJS ( Function component, react hook, HTML, CSS, SCSS, Javascript, axios (restful api), graphql, một số thư viện UI ( sweetalert, armChart)'
            ]
        },
        {
            title: 'Web full - stack ( MERN )',
            content: [
                'Link github: https://github.com/dongduclan270701/website-coza-store',
                'Web full - stack ( NodeJS , MongoDB , Express , EJS )'
            ]
        },
        {
            title: 'Trello ( ReactJS )',
            content: [
                'https://github.com/dongduclan270701/trello-web',
                'https://github.com/dongduclan270701/trello-api'
            ]
        },
        {
            title: 'Web full - stack ( HTML , CSS , JS , PHP )',
            content: [
                'Link github: https://github.com/dongduclan270701/Group5_WD05_OutfitShop_Code',
                'Website outfit shop'
            ]
        },
    ])
    const handleDownloadPDF = () => {
        const element = document.getElementById('cv');

        html2canvas(element).then((canvas) => {
            const imgWidth = 210;
            const pageHeight = 300;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;
            heightLeft -= pageHeight;
            const doc = jsPDF('p', 'mm');
            doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                doc.addPage();
                doc.addImage(canvas, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
                heightLeft -= pageHeight;
            }
            doc.save('CV-ĐỒNG ĐỨC LÂN.pdf');
        });
    };
    return (
        <div id='myCv'>
            <div className='page' >
                <div id="header-viewer" className="non-printable">
                    <h1>Xem CV Online của Đồng Đức Lân</h1>
                    <button onClick={handleDownloadPDF} className="btn-download-cv" data-id="B1AFUgVVA1xVAVpWBARSCldYDwgAVwMOVVZTUAddcb" data-name="Đồng Đức Lân" data-cv-id="c25c105eb9b2e5686980ffa9bb14ddcb">
                        <i className="fa fa-download" />
                        <span> Tải CV PDF</span>
                    </button>
                </div>
                <div id="cv" className='cv'>
                    <Info info={info} />
                    <Aim aim={aim} />
                    <Education education={education} />
                    <Skills skills={skills} />
                    <Experience exp={exp} />
                </div>
            </div>
        </div>
    );
}

export default Index;
