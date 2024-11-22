import React from "react";
import "./FeedbackResult.css";

function FeedbackResult({ feedback, onTailQuestion, onDetailedEvaluation }) {
  return (
    <div className="feedback-result">
      <div className="feedback-container">
        <div className="top-section">
          <div className="overall-score">
            <h3>전체 피드백 점수</h3>
            <div className="score-chart">
              <div className="circle">
                <span className="percentage">75</span>
              </div>
            </div>
          </div>
          <div className="emotion-status">
            <div className="status-header">
              <h3>😳 다소 불안</h3>
            </div>
            <div className="status-details">
              <div>
                <span>말의 속도</span> <strong className="speed">빠름</strong>
              </div>
              <div>
                <span>말의 크기</span> <strong className="size">일정</strong>
              </div>
              <div>
                <span>발음</span> <strong className="pronunciation">정확</strong>
              </div>
              <div>
                <span>유사도</span> <strong className="similarity">높음</strong>
              </div>
              <div>
                <span>간투어</span> <strong className="meaningless">없음</strong>
              </div>
              <div>
                <span>휴지</span> <strong className="break">15.088 초</strong>
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
                <td>1.46</td>
                <td>1.09</td>
                <td>1.62</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ai-question">
          <h4>질문</h4>
          <p className="question">
            프로젝트에서 마주했던 가장 어려운 문제는 무엇이었으며, 어떻게 해결했나요?
          </p>
          <h4>사용자 답변</h4>
          <p className="answer">
            저는 이 회사가 꿈꾸던 곳이라서 지원했습니다. 그리고 이 회사에서 더 나은 사람이
            되기를 원합니다. 또한 제 역량이 이 회사에 잘 맞을 것 같아서 지원하게 되었습니다.
            그런 점에서 회사와 저의 가치가 잘 맞는다고 생각합니다.
          </p>
          <h4>주요 피드백</h4>
          <div className="main-feedback">
            <p>1. 말의 속도는 일정하게 유지되고 있으며 적절한 속도입니다.</p>
            <p>2. 전반적으로 목소리의 크기는 일정하게 유지되고 있습니다.</p>
            <p>3. 발음이 대체적으로 정확합니다.</p>
            <p>4. 총 녹음 시간인 15.088초 동안, 답변 중 약간의 휴지 구간이 있었습니다. 연습을 통해 개선할 수 있습니다.</p>
            <p>5. 간투어가 없습니다. 매우 유창하게 답변하였습니다.</p>
            <p>6. 유사도가 높습니다. 질문과 답변이 의미적으로 유사합니다. (0.8716393113136292)</p>
          </div>
        </div>

        <div className="navigation-buttons">
          <button className="detailed-button" onClick={onDetailedEvaluation}>
            상세 평가 기준 보기
          </button>
          <button className="tail-question-button" onClick={onTailQuestion}>
            꼬리질문으로 이동
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackResult;
