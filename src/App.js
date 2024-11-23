import React, { useState } from "react";
import Navbar from "./component/Navbar";
import JobSelection from "./pages/JobSelection";
import QuestionUpload from "./pages/QuestionUpload";
import FeedbackResult from "./pages/FeedbackResult";
import LoadingSpinner from "./component/LoadingSpinner";

function App() {
  const [page, setPage] = useState("jobSelection");
  const [selectedJob, setSelectedJob] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [tailQuestionData, setTailQuestionData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setPage("questionUpload");
  };

  const dummyFeedback = {
    overallScore: 75,
    emotion: "😳 다소 불안",
    speed: "주의",
    size: "위험",
    pronunciation: "정확",
    similarity: "높음",
    meaningless: "주의",
    breakTime: "주의",
    analysis: { expression: 1.46, structure: 1.09, content: 1.62 },
    question: "프로젝트에서 마주했던 가장 어려운 문제는 무엇이었으며, 어떻게 해결했나요?",
    userAnswer: `저는 이 회사가 꿈꾸던 곳이라서 지원했습니다. 
    그리고 이 회사에서 더 나은 사람이 되기를 원합니다. 
    또한 제 역량이 이 회사에 잘 맞을 것 같아서 지원하게 되었습니다. 
    그런 점에서 회사와 저의 가치가 잘 맞는다고 생각합니다.`,
    feedbackDetails: [
      "말의 속도는 일정하게 유지되고 있으며 적절한 속도입니다.",
      "전반적으로 목소리의 크기는 일정하게 유지되고 있습니다.",
      "발음이 대체적으로 정확합니다.",
      "총 녹음 시간인 15.088초 동안, 답변 중 약간의 휴지 구간이 있었습니다. 연습을 통해 개선할 수 있습니다.",
      "간투어가 없습니다. 매우 유창하게 답변하였습니다.",
      "유사도가 높습니다. 질문과 답변이 의미적으로 유사합니다. (0.8716393113136292)",
    ],
    generated_question: "이 문제를 해결하면서 느꼈던 가장 큰 배움은 무엇인가요?",
  };

  const handleFileUpload = async (file) => {
    setLoading(true);
    try {
      setTimeout(() => {
        setFeedback(dummyFeedback);
        setPage("feedbackResult");
        setLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("파일 업로드 중 오류가 발생했습니다.");
    }
  };

  const handleTailQuestion = () => {
    setTailQuestionData(feedback.generated_question);
    setPage("tailQuestion");
  };

  const handleNavigateDetailedEvaluation = () => {
    alert("상세 평가 기준 페이지로 이동합니다");
    // 상세 평가 페이지 추가하기
  };

  const handleEndQuestions = () => {
    alert("모든 질문을 종료합니다. 감사합니다!");
    setPage("jobSelection");
    setSelectedJob(null);
    setFeedback(null);
    setTailQuestionData(null);
  };

  return (
    <div className="App">
      <Navbar />
      {loading && <LoadingSpinner />}
      {!loading && page === "jobSelection" && (
        <JobSelection onJobSelect={handleJobSelect} />
      )}
      {!loading && page === "questionUpload" && (
        <QuestionUpload
          selectedJob={selectedJob}
          questionContent={`${selectedJob} 관련된 질문 예시입니다.`}
          onFileUpload={handleFileUpload}
        />
      )}
      {!loading && page === "feedbackResult" && feedback && (
        <FeedbackResult
        feedback={feedback}
        onDetailedEvaluation={handleNavigateDetailedEvaluation}
        onTailQuestion={handleTailQuestion}
        onEndQuestions={handleEndQuestions}
        >
        <button onClick={handleEndQuestions}>질문 종료</button>
        </FeedbackResult>
      )}
      {!loading && page === "tailQuestion" && tailQuestionData && (
        <QuestionUpload
          selectedJob={selectedJob}
          questionType="꼬리질문"
          questionContent={tailQuestionData}
          onFileUpload={handleFileUpload}
        >
        </QuestionUpload>
      )}
    </div>
  );
}

export default App;
