import React from 'react';

const Index = (props) => {
    const { aim } = props
    return (
        <div className='por'>
            <div className='title'>
                <div className='title-content'>CAREER</div>
                <div className='underline-title'></div>
            </div>
            <div className='underline'></div>
            <div className='content'>
                {aim}
            </div>
        </div>
    );
}

export default Index;
