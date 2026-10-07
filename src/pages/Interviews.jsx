import { useState } from "react";
import "./Interviews.css";

function Interviews() {
  const [showMockInterview, setShowMockInterview] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const questions = [
    {
      question: "Explain the difference between an array and a linked list.",
      keywords: ["array", "linked list"],
    },
    {
      question: "What is the time complexity of binary search?",
      keywords: ["O(log n)", "log n", "logarithmic"],
    },
    {
      question: "What is the difference between == and === in JavaScript?",
      keywords: ["type", "strict", "equality"],
    },
    {
      question: "Explain the concept of inheritance in Object-Oriented Programming.",
      keywords: ["inheritance", "class", "parent", "child"],
    },
    {
      question: "Why should we hire you for this role?",
      keywords: ["skills", "experience", "learn", "contribute"],
    },
  ];

  const interviews = [
    {
      company: "Google",
      role: "Software Engineer Intern",
      type: "Technical Interview",
      date: "Oct 14, 2026",
      time: "10:00 AM",
      mode: "Online",
      status: "Upcoming",
    },
    {
      company: "Zoho",
      role: "Product Developer",
      type: "Technical + HR",
      date: "Oct 16, 2026",
      time: "2:00 PM",
      mode: "Campus",
      status: "Upcoming",
    },
    {
      company: "Microsoft",
      role: "Frontend Developer",
      type: "Technical Interview",
      date: "Oct 08, 2026",
      time: "11:30 AM",
      mode: "Online",
      status: "Completed",
    },
  ];

  const startMockInterview = () => {
    setShowMockInterview(true);
    setCurrentQuestion(0);
    setAnswer("");
    setScore(0);
    setCompleted(false);
  };

  const submitAnswer = () => {
    if (!answer.trim()) {
      alert("Please enter your answer before submitting.");
      return;
    }

    const currentKeywords = questions[currentQuestion].keywords;

    const answerText = answer.toLowerCase();

    const matchedKeywords = currentKeywords.filter((keyword) =>
      answerText.includes(keyword.toLowerCase())
    );

    if (matchedKeywords.length > 0) {
      setScore((previousScore) => previousScore + 1);
    }

    setAnswer("");

    if (currentQuestion === questions.length - 1) {
      setCompleted(true);
    } else {
      setCurrentQuestion((previousQuestion) => previousQuestion + 1);
    }
  };

  const restartMockInterview = () => {
    setCurrentQuestion(0);
    setAnswer("");
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="interviews-page">
      <header className="interviews-header">
        <div>
          <p className="page-label">INTERVIEW CENTER</p>
          <h1>Interview Schedule 🎯</h1>
          <p>
            Stay prepared, track interviews, and practice before the real
            round.
          </p>
        </div>

        <div className="interview-countdown">
          <span>Next Interview</span>
          <strong>7 Days</strong>
          <small>Google · Technical Round</small>
        </div>
      </header>

      <section className="interview-stats">
        <div className="interview-stat-card">
          <span>🎯</span>
          <div>
            <strong>3</strong>
            <p>Total Interviews</p>
          </div>
        </div>

        <div className="interview-stat-card">
          <span>⏰</span>
          <div>
            <strong>2</strong>
            <p>Upcoming</p>
          </div>
        </div>

        <div className="interview-stat-card">
          <span>✅</span>
          <div>
            <strong>1</strong>
            <p>Completed</p>
          </div>
        </div>

        <div className="interview-stat-card">
          <span>🔥</span>
          <div>
            <strong>82%</strong>
            <p>Interview Readiness</p>
          </div>
        </div>
      </section>

      <section className="interview-layout">
        <div className="interview-list-card">
          <div className="section-heading">
            <div>
              <h2>Upcoming Interviews</h2>
              <p>Your scheduled placement interviews</p>
            </div>
          </div>

          <div className="interview-list">
            {interviews.map((interview) => (
              <article
                className="interview-item"
                key={`${interview.company}-${interview.date}`}
              >
                <div className="interview-company-logo">
                  {interview.company.charAt(0)}
                </div>

                <div className="interview-main">
                  <div className="interview-title">
                    <div>
                      <span>{interview.company}</span>
                      <h3>{interview.role}</h3>
                    </div>

                    <span
                      className={`interview-status ${
                        interview.status === "Upcoming"
                          ? "upcoming"
                          : "completed"
                      }`}
                    >
                      {interview.status}
                    </span>
                  </div>

                  <div className="interview-details">
                    <span>📅 {interview.date}</span>
                    <span>⏰ {interview.time}</span>
                    <span>💻 {interview.mode}</span>
                    <span>🎯 {interview.type}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mock-interview-card">
          {!showMockInterview ? (
            <>
              <div className="mock-icon">🤖</div>

              <p className="mock-label">PLACEMENT AI LAB</p>

              <h2>AI Mock Interview</h2>

              <p>
                Practice realistic interview questions before facing the actual
                interviewer.
              </p>

              <div className="mock-features">
                <span>✓ Technical Questions</span>
                <span>✓ HR Questions</span>
                <span>✓ Instant Feedback</span>
                <span>✓ Readiness Score</span>
              </div>

              <button
                className="mock-button"
                onClick={startMockInterview}
              >
                Start Mock Interview →
              </button>
            </>
          ) : completed ? (
            <div className="mock-result">
              <div className="mock-icon">🎉</div>

              <p className="mock-label">INTERVIEW COMPLETED</p>

              <h2>Great job!</h2>

              <div className="mock-score">
                {Math.round((score / questions.length) * 100)}%
              </div>

              <p>
                You completed all {questions.length} questions.
              </p>

              <p>
                Keyword-based score: {score}/{questions.length}
              </p>

              <button
                className="mock-button"
                onClick={restartMockInterview}
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="mock-question">
              <p className="mock-label">AI MOCK INTERVIEW</p>

              <div className="question-progress">
                Question {currentQuestion + 1} of {questions.length}
              </div>

              <div className="question-progress-bar">
                <div
                  style={{
                    width: `${
                      ((currentQuestion + 1) / questions.length) * 100
                    }%`,
                  }}
                ></div>
              </div>

              <h3>{questions[currentQuestion].question}</h3>

              <textarea
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              <button
                className="submit-answer"
                onClick={submitAnswer}
              >
                Submit Answer →
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="preparation-card">
        <div>
          <p className="page-label">BEFORE YOUR INTERVIEW</p>
          <h2>Quick Preparation Checklist</h2>
        </div>

        <div className="checklist">
          <label>
            <input type="checkbox" />
            Review your resume
          </label>

          <label>
            <input type="checkbox" />
            Practice DSA questions
          </label>

          <label>
            <input type="checkbox" />
            Research the company
          </label>

          <label>
            <input type="checkbox" />
            Prepare HR answers
          </label>
        </div>
      </section>
    </div>
  );
}

export default Interviews;