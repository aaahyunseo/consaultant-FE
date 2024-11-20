import React from 'react';
import './FeedbackResult.css';

function FeedbackResult({ feedback }) {
  return (
    <div className="feedback-result">
      <div className="feedback-container">
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
              <span>말의 속도</span> <strong>적절</strong>
            </div>
            <div>
              <span>말의 크기</span> <strong>일정</strong>
            </div>
            <div>
              <span>발음</span> <strong>정확</strong>
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
                <th>총점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.46</td>
                <td>1.09</td>
                <td>1.62</td>
                <td>2.21</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="ai-question">
        <h4>질문</h4>
        <p className='question'>고객의 기대를 초과 달성하기 위해 어떤 노력을 하시나요?</p>
            <h4>사용자 답변 부분</h4>
        <p className='answer'>아무래도 약속 장소로 옮기는 게 낫겠지 사람이 많지 않은 곳으로 해야 되겠어</p>
          <h4>전체 피드백</h4>
          <p className='total-feedback'>
            <p>1.말의 속도는 일정하게 유지되고 있으며 적절한 속도입니다.</p>
            <p>2.전반적으로 목소리의 크기는 일정하게 유지되고 있습니다.</p>
            <p>3.발음이 대체적으로 정확합니다.</p>
            <p>4.총 녹음 시간인 5.088 초 동안, 답변 중 약간의 휴지 구간이 있었습니다. 연습을 통해 개선할 수 있습니다.</p>
            <p>5.간투어가 없습니다. 매우 유창하게 답변하였습니다.</p>
            <p>6.유사도가 높습니다. 질문과 답변이 의미적으로 유사합니다. (0.8716393113136292)</p>
            <p>7. 감정 부분은 연결은 했으나 시간 오래걸려서 웹 만들 때는 가라로</p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackResult;
