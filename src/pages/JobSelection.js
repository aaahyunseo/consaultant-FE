import React, { useState } from "react";
import "./JobSelection.css";

function JobSelection({ onJobSelect }) {
  
  const jobCategories = {
    "공통질문": [],
    "경영관리": ["경영기획", "웹기획PM", "DBA", "ERP"],
    "영업마케팅": ["마케팅", "영업고객상담", "웹마케팅", "서비스"],
    "공공서비스": ["건설", "관광레저", "미디어문화"],
    "연구개발": ["연구개발", "연구", "빅데이터AI", "소프트웨어", "하드웨어"],
    "ICT": [
      "UI",
      "IT강사",
      "QA",
      "게임개발자",
      "네트워크서버보안",
      "시스템프로그래머",
      "웹디자인",
      "웹프로그래머",
      "응용프로그래머",
      "웹운영자",
    ],
    "디자인": ["디자인", "영상제작편집"],
    "생산제조": ["무역유통"],
    "의료": ["의료질문"],
  };

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "공통질문") {
      onJobSelect(category);
    } else {
      setSubcategories(jobCategories[category]);
    }
  };

  return (
    <div className="job-selection">
      <h1>직군을 선택하세요</h1>

      {!selectedCategory && (
        <ul>
          {Object.keys(jobCategories).map((category, index) => (
            <li key={index} onClick={() => handleCategorySelect(category)}>
              {category}
            </li>
          ))}
        </ul>
      )}

      {selectedCategory && (
        <div style={{ textAlign: 'center' }}>
          <h2>{selectedCategory} 직군</h2>
          <ul>
            {subcategories.length > 0 ? (
              subcategories.map((subcategory, index) => (
                <li key={index} onClick={() => onJobSelect(subcategory)}>
                  {subcategory}
                </li>
              ))
            ) : (
              <li onClick={() => onJobSelect(selectedCategory)}>
                {selectedCategory} 질문
              </li>
            )}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
              className="back-button"
              onClick={() => setSelectedCategory(null)}>
              뒤로가기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobSelection;
