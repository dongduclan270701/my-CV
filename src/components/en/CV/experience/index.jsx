import React from 'react';

const Index = (props) => {
  const { exp } = props;
  return (
    <div className='por'>
      <div className='title'>
        <div className='title-content'>EXPERIENCE</div>
        <div className='underline-title'></div>
      </div>
      <div className='underline'></div>
      <div className='content'>
        {exp.map((item, index) => {
          return <div className='row info-exp' key={index}>
            <div className='col-3 info-exp-left'>
              <div className='info-exp-name'>{item.title}</div>
            </div>
            <div className='col-8 info-exp-right'>
              <div className='row'>
                {item.content.map((content, indexC) => {
                  return <div key={indexC}><span className='info-right-span'>- {content}</span></div>
                })}
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Index;
