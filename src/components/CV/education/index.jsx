import React from 'react';

const Index = (props) => {
  const {education} = props;
  return (
    <div className='por'>
      <div className='title'>
        <div className='title-content'>HỌC VẤN</div>
        <div className='underline-title'></div>
      </div>
      <div className='underline'></div>
      {education.map((item,index) => {
        return <div className='content' key={index}>
        <div className='aim-content'>{item.timeFirst} - {item.timeLast}</div>
        <div className='aim-content bold'>{item.occupation}</div>
        <div className='aim-content'>{item.school}</div>
        <div className='aim-content'>{item.desc}</div>
      </div>
      })}
    </div>
  );
}

export default Index;
