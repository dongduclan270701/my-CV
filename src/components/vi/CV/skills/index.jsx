import React from 'react';

const Index = (props) => {
  const { skills } = props;
  return (
    <div className='por'>
      <div className='title'>
        <div className='title-content'>KỸ NĂNG</div>
        <div className='underline-title'></div>
      </div>
      <div className='underline'></div>
      {skills.map((item, index) => {
        return <div className='content' key={index}>
          <div className='aim-content bold'>{item.title}:</div>
          {item.content.map((content, indexC) => {
            return <div className='aim-content' key={indexC}>- {content}</div>
          })}
        </div>
      })}

    </div>
  );
}

export default Index;
