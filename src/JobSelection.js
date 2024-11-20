import React from 'react';
import './JobSelection.css';

function JobSelection({ onJobSelect }) {
  const jobs = ["공통질문", "경영관리", "영업마케팅", "공공서비스", "ICT", "연구개발", "디자인", "생산제조", "의료"];

  return (
    <div className="job-selection">
      <h1>직군을 선택하세요</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index} onClick={() => onJobSelect(job)}>
            {job}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobSelection;
