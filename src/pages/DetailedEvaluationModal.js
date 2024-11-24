import React from "react";
import "./DetailedEvaluationModal.css";

function DetailedEvaluationModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>상세 평가 기준</h2>
        <div className="criteria-section">
          <h3>✔️ 피드백 항목</h3>
          <table className="criteria-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>기준</th>
                <th>점수</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>말의 빠르기</td>
                <td>
                  <ul>
                    <li>적절: 8점</li>
                    <li>느림: 5점</li>
                    <li>주의: 5점</li>
                    <li>위험: 2점</li>
                  </ul>
                </td>
                <td>총 8점</td>
              </tr>
              <tr>
                <td>말의 크기</td>
                <td>
                  <ul>
                    <li>일정: 8점</li>
                    <li>위험: 5점</li>
                  </ul>
                </td>
                <td>총 8점</td>
              </tr>
              <tr>
                <td>간투어</td>
                <td>
                  <ul>
                    <li>없음: 8점</li>
                    <li>1회: 5점</li>
                    <li>2~3회: 2점</li>
                    <li>4회 이상: 0점</li>
                  </ul>
                </td>
                <td>총 8점</td>
              </tr>
              <tr>
                <td>발음</td>
                <td>
                  <ul>
                    <li>정확: 8점</li>
                    <li>준수: 5점</li>
                    <li>주의: 2점</li>
                    <li>위험: 0점</li>
                  </ul>
                </td>
                <td>총 8점</td>
              </tr>
              <tr>
                <td>휴지</td>
                <td>0~7점</td>
                <td>최대 7점</td>
              </tr>
              <tr>
                <td>유사도</td>
                <td>
                  <ul>
                    <li>높음: 5점</li>
                    <li>낮음: 0점</li>
                  </ul>
                </td>
                <td>총 5점</td>
              </tr>
              <tr>
                <td>감정</td>
                <td>
                  <ul>
                    <li>fear 아님: 5점</li>
                    <li>fear: 0점</li>
                  </ul>
                </td>
                <td>총 5점</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="description-section">
          <p>각 항목에 대한 점수는 주어진 기준을 바탕으로 평가됩니다. 이 페이지에서 확인할 수 있는 기준을 참고하여 피드백을 이해하고 개선할 수 있습니다.</p>
        </div>

        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default DetailedEvaluationModal;
