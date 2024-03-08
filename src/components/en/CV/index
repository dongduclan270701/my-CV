import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Info from 'components/en/CV/info'
import Aim from 'components/en/CV/aim'
import Education from 'components/en/CV/education'
import Skills from 'components/en/CV/skills'
import Experience from 'components/en/CV/experience'
import 'assets/scss/myCv.scss'
const Index = () => {
    const [info, setInfo] = useState({
        name: 'Đồng Đức Lân',
        desc: 'Dev Full-Stack ( ReactJS, NodeJS, React-Native )',
        phoneNumber: '0379382992',
        email: 'dongduclan277@gmail.com',
        location: 'Thanh Xuân, Hà Nội'
    })
    const [aim, setAim] = useState('Desire to find a place to develop my own specialized skills, find an environment where I can help each other and have a long-term commitment to work so that I can make the company grow, not just myself. overview.')
    const [education, setEducation] = useState([
        {
            timeFirst: '09/2019',
            timeLast: '2023',
            occupation: 'WEB FULLSTACK',
            school: 'VTC Academy (VietnamTelevision Corporation)',
            desc: 'Web fullstack developer'
        },
        {
            timeFirst: '04/2023',
            timeLast: '12/2024',
            occupation: '4 SKILLS: LISTENING, READING, SPEAKING, WRITTING ( IELTS )',
            school: 'IELTS Fighter',
            desc: '4 skills such as Listening, Reading, Writing, Speaking are at band 4.5 and are continuing their learning path to band 7 by the end of 2024..'
        }
    ])
    const [skills, setSkills] = useState([
        {
            title: 'Specialized skills',
            content: [
                'HTML, CSS, SASS, Javascript',
                'ReactJS, React-native, Express, Mongodb, NodeJS, Postman',
                'Design UI - UX for website, mobile',
                'Ability to research and read specialized documents (can read and understand English)'
            ]
        }
    ])
    const [exp, setExp] = useState([
        {
            title: 'Website CV ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/my-CV',
                'Link Website: https://kassdev.com',
                'Using technology: ReactJS (Func component, react hook, bootstrap, library...)'
            ]
        },
        {
            title: 'Website Xe Ghep ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/compoundCar',
                'Link Website: https://xeghepbacgiangbacninhhanoi.com',
                'Using technology: ReactJS (Func component, react hook , bootstrap, library notification)'
            ]
        },
        {
            title: 'Website Xe Ghep ( NodeJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/compoundapi',
                'Using technology : NodeJs, Express, MongoDB, Postman'
            ]
        },
        {
            title: 'Website KTech ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/finalproject ( branch dev-fe)',
                'Link Website: https://ktech-uw1a.onrender.com',
                'Using technology: ReactJS (Func component, react hook: useContext, memo, useCallBack,..., axios, bootstrap, library notification)'
            ]
        },
        {
            title: 'NodeJS Website KTech',
            content: [
                'Link github: https://github.com/dongduclan270701/finalprojectnodejs( branch dev-demo)',
                'Link API: Integrated into the website  https://ktech-uw1a.onrender.com',
                'Using technology : NodeJs, Express, MongoDB, Postman'
            ]
        },
        {
            title: 'Website KTech Admin ( ReactJS)',
            content: [
                'Link github: https://github.com/dongduclan270701/finalprojectadmin( branch test-demo)',
                'Link Website: https://ktech-dashboard.onrender.com/(If you want to experience it, please contact me to give me an account!!)',
                'Using technology: ReactJS (Func component, react hook: useContext, memo, useCallBack,..., axios, bootstrap, library notification)',
                'Decentralized by function, each function will display differently (data parameters, charts, information, sales calculations, ....)'
            ]
        },
        {
            title: 'NodeJS Website KTech Admin',
            content: [
                'Link github: https://github.com/dongduclan270701/final-backend-admin( branch code)',
                'Link API: Integrated into the website https://ktech-dashboard.onrender.com/',
                'Using technology: NodeJs, Express, MongoDB, Postman'
            ]
        },
        {
            title: 'App Mobile Ktech ( React-native )',
            content: [
                'Link github: https://github.com/dongduclan270701/appmobile( branch main)',
                'Link app expo: exp://exp.host/@ranconkoyx/app-awesome?release-channel=default',
                'Using technology: React-native, expo, axios, modal, ...'
            ]
        },
        {
            title: 'Website Lsevn ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/frontend-lsevn',
                'Using technology: ReactJS (Functional component, react hook, HTML, CSS, SCSS, Javascript, axios (restful api), graphql, library UI( table, DataGrid ,chart, sweetalert)'
            ]
        },
        {
            title: 'Website nknx ( ReactJS )',
            content: [
                'Link github: https://github.com/dongduclan270701/frontend-nknx',
                'Using technology: backend using Strapi, front-end dùng ReactJS ( Function component, react hook, HTML, CSS, SCSS, Javascript, axios (restful api), graphql, một số thư viện UI ( sweetalert, armChart)'
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
