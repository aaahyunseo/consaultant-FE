import React from "react";
import "./LoadingSpinner.css";

function LoadingSpinner() {
return (
    <div className="loading-spinner">
    <div className="spinner"></div>
    <p>🧬 분석 중입니다. 잠시만 기다려주세요...</p>
    </div>
);
}

export default LoadingSpinner;
