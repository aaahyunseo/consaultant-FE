import React, { useState } from "react";
import "./QuestionUpload.css";

function QuestionUpload({ selectedJob, questionType = "질문", questionContent, onFileUpload }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="question-upload">
      <h2>{selectedJob} 직군 질문</h2>
      <p>
        {questionType}: "{questionContent}"
      </p>
      <label className="file-upload-label" htmlFor="file-upload">
        {file
          ? `🔊 답변 파일이 업로드 되었습니다: ${file.name}`
          : "🔊 답변 파일을 업로드 해주세요."}
      </label>
      <input id="file-upload" type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        업로드
      </button>
    </div>
  );
}

export default QuestionUpload;
