import React, { useState } from 'react';
import Navbar from './Navbar';
import JobSelection from './JobSelection';
import QuestionUpload from './QuestionUpload';
import FeedbackResult from './FeedbackResult';

function App() {
  const [page, setPage] = useState("jobSelection");
  const [selectedJob, setSelectedJob] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setPage("questionUpload");
  };

  const handleFileUpload = (file) => {
    const mockFeedback = {
      analysis: "표현력이 뛰어나고 다양한 어휘와 적절한 표현을 사용하여 내용을 잘 전달하고 있습니다. \n구성이 매우 체계적이고 읽기 쉽게 잘 작성되었습니다. \n내용이 충실하며 주제에 대한 이해도가 높음을 보여줍니다. \n전반적으로 훌륭한 글이며, 논리와 표현이 잘 조화를 이루고 있습니다.",
      emotion: "다소 불안함",
      advice: "자신감을 유지하고 대답의 깊이를 높이세요.",
    };
    setFeedback(mockFeedback);
    setPage("feedbackResult");
  };

  const handleNavigateHome = () => {
    setPage("jobSelection");
    setSelectedJob(null);
    setFeedback(null);
  };

  return (
    <div className="App">
      <Navbar onNavigateHome={handleNavigateHome} />
      {page === "jobSelection" && <JobSelection onJobSelect={handleJobSelect} />}
      {page === "questionUpload" && <QuestionUpload selectedJob={selectedJob} onFileUpload={handleFileUpload} />}
      {page === "feedbackResult" && <FeedbackResult feedback={feedback} />}
    </div>
  );
}

export default App;
