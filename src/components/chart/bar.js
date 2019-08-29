import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['서울', '인천', '경기', '부산', '대구', '대전', '세종'],
  datasets: [
    {
      label: '지역별 분포도',
      backgroundColor: '#1864ab',
      borderColor: '#1864ab',
      borderWidth: 1,
      hoverBackgroundColor: '#1864ab',
      hoverBorderColor: '#1864ab',
      data: [86, 81, 84, 75, 60, 70, 56 ]
    }
  ]
};



function bar (){
    return (
      <div style={{padding:'2rem'}}>
        <h2 style={{fontWeight:'bold'}}>약국 지역별 분포도</h2>
        <div style={{padding:'2rem'}}>
        <Bar
          data={data}
          width={100}
          height={400}
          options={{
            maintainAspectRatio: false
          }}
        />
        </div>
      </div>
    );
  }


  export default bar;
    