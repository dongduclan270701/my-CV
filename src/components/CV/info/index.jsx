import React from 'react';

const Index = (props) => {
    const {info} = props
    return (
        <div className='row info'>
            <div className='col-7 info-left'>
                <div className='info-name'>{info.name}</div>
                <div className='info-desc'>{info.desc}</div>
            </div>
            <div className='col-5 info-right'>
                <div className='row'>
                    <div><i className="fa fa-phone" />&ensp;<span className='info-right-span'>{info.phoneNumber}</span></div>
                    <div><i className="fa fa-envelope" />&ensp;<span className='info-right-span'>{info.email}</span></div>
                    <div><i className="fa fa-location-dot" />&ensp;<span className='info-right-span'>{info.location}</span></div>
                </div>
            </div>
        </div>
    );
}

export default Index;
