import React from "react";
import "./FeedbackResult.css";

function FeedbackResult({ feedback, onTailQuestion, onDetailedEvaluation, onEndQuestions }) {
  
  const getStatusColor = (value, type) => {
    if (value === "주의") return "#FF9800"; // 주의 - 주황색
    if (value === "위험") return "#F44336"; // 위험 - 빨강색
    return "#000000";
  };

  return (
    <div className="feedback-result">
      <div className="feedback-container">
        <div className="top-section">
          <div className="overall-score">
            <h3>전체 피드백 점수</h3>
            <div className="score-chart">
              <div className="circle">
                <span className="percentage">{feedback.overallScore}</span>
              </div>
            </div>
          </div>
          <div className="emotion-status">
            <div className="status-header">
              <h3>{feedback.emotion}</h3>
            </div>
            <div className="status-details">
              <div>
                <span>말의 속도</span> 
                <strong className="speed" style={{ color: getStatusColor(feedback.speed, "speed") }}>
                  {feedback.speed}
                </strong>
              </div>
              <div>
                <span>말의 크기</span> 
                <strong className="size" style={{ color: getStatusColor(feedback.size, "size") }}>
                  {feedback.size}
                </strong>
              </div>
              <div>
                <span>발음</span> 
                <strong className="pronunciation" style={{ color: getStatusColor(feedback.pronunciation, "pronunciation") }}>
                  {feedback.pronunciation}
                </strong>
              </div>
              <div>
                <span>유사도</span> 
                <strong className="similarity" style={{ color: getStatusColor(feedback.similarity, "similarity") }}>
                  {feedback.similarity}
                </strong>
              </div>
              <div>
                <span>간투어</span> 
                <strong className="meaningless" style={{ color: getStatusColor(feedback.meaningless, "meaningless") }}>
                  {feedback.meaningless}
                </strong>
              </div>
              <div>
                <span>휴지</span> 
                <strong className="break" style={{ color: getStatusColor(feedback.breakTime, "breakTime") }}>
                  {feedback.breakTime}
                </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="detailed-analysis">
          <table>
            <thead>
              <tr>
                <th>표현</th>
                <th>구성</th>
                <th>내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{feedback.analysis.expression}</td>
                <td>{feedback.analysis.structure}</td>
                <td>{feedback.analysis.content}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ai-question">
          <h4>질문</h4>
          <p className="question">{feedback.question}</p>
          <h4>사용자 답변</h4>
          <p className="answer">{feedback.userAnswer}</p>
          <h4>주요 피드백</h4>
          <div className="main-feedback">
            {feedback.feedbackDetails.map((detail, index) => (
              <p key={index}>{detail}</p>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="detailed-button" onClick={onDetailedEvaluation}>
            상세 평가 기준 보기
          </button>
          <button className="tail-question-button" onClick={onTailQuestion}>
            꼬리질문으로 이동
          </button>
          <button className="end-questions-button" onClick={onEndQuestions}>
            질문 종료
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackResult;