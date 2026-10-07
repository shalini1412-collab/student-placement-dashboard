import { useState } from "react";
import "./ATSAnalyzer.css";

function ATSAnalyzer() {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeResume = () => {
    if (!resumeText.trim()) {
      alert("Please paste your resume content first.");
      return;
    }

    const text = resumeText.toLowerCase();

    const keywords = [
      "java",
      "python",
      "react",
      "javascript",
      "sql",
      "dsa",
      "git",
      "github",
      "html",
      "css",
      "machine learning",
      "communication",
    ];

    const foundKeywords = keywords.filter((keyword) =>
      text.includes(keyword)
    );

    const missingKeywords = keywords.filter(
      (keyword) => !text.includes(keyword)
    );

    const score = Math.min(
      100,
      Math.round((foundKeywords.length / keywords.length) * 100)
    );

    setResult({
      score,
      foundKeywords,
      missingKeywords,
    });
  };

  return (
    <div className="ats-page">
      <header className="ats-header">
        <div>
          <p className="page-label">RESUME INTELLIGENCE</p>
          <h1>ATS Resume Analyzer 📄</h1>
          <p>
            Check how well your resume matches common placement keywords.
          </p>
        </div>
      </header>

      <section className="ats-layout">
        <div className="ats-input-card">
          <h2>Paste Your Resume</h2>
          <p>
            Paste your resume content below and our analyzer will check
            important technical keywords.
          </p>

          <textarea
            placeholder="Paste your resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />

          <button onClick={analyzeResume}>
            Analyze Resume →
          </button>
        </div>

        <div className="ats-result-card">
          {!result ? (
            <div className="ats-empty">
              <div>🤖</div>
              <h2>Your ATS Score</h2>
              <p>
                Submit your resume to see your placement readiness score.
              </p>
            </div>
          ) : (
            <>
              <p className="page-label">ATS ANALYSIS</p>

              <div className="ats-score-circle">
                <strong>{result.score}%</strong>
                <span>ATS Score</span>
              </div>

              <h2>
                {result.score >= 80
                  ? "Excellent Resume! 🔥"
                  : result.score >= 60
                  ? "Good Start! 👍"
                  : "Needs Improvement 💪"}
              </h2>

              <p className="ats-score-message">
                Your resume contains {result.foundKeywords.length} out of{" "}
                {result.foundKeywords.length +
                  result.missingKeywords.length}{" "}
                important placement keywords.
              </p>

              <div className="keyword-section">
                <h3>✓ Detected Skills</h3>

                <div className="keyword-list">
                  {result.foundKeywords.map((keyword) => (
                    <span className="keyword found" key={keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div className="keyword-section">
                <h3>⚠ Missing Keywords</h3>

                <div className="keyword-list">
                  {result.missingKeywords.map((keyword) => (
                    <span className="keyword missing" key={keyword}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default ATSAnalyzer;