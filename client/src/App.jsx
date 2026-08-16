import { useState } from "react";
import "./index.css";

const questions = [
  {
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question: "Which scheduling algorithm uses a time quantum?",
    options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
    answer: "Round Robin",
  },
  {
    question:
      "Which protocol is used to translate domain names into IP addresses?",
    options: ["HTTP", "FTP", "DNS", "SMTP"],
    answer: "DNS",
  },
  {
    question: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Linked List", "Stack", "Tree"],
    answer: "Stack",
  },
  {
    question: "How many layers are there in the OSI model?",
    options: ["4", "5", "7", "8"],
    answer: "7",
  },
  {
    question: "What is a process?",
    options: [
      "A program stored on disk",
      "A program in execution",
      "A CPU instruction",
      "A memory location",
    ],
    answer: "A program in execution",
  },
  {
    question:
      "Which traversal of a Binary Search Tree gives elements in sorted order?",
    options: ["Preorder", "Postorder", "Level order", "Inorder"],
    answer: "Inorder",
  },
  {
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "TCP", "IP", "ICMP"],
    answer: "TCP",
  },
  {
    question:
      "Which memory management technique divides memory into fixed-size blocks?",
    options: ["Paging", "Segmentation", "Swapping", "Fragmentation"],
    answer: "Paging",
  },
  {
    question: "Which data structure is commonly used for implementing BFS?",
    options: ["Stack", "Queue", "Heap", "Array"],
    answer: "Queue",
  },
  {
    question: "What is the default port number for HTTPS?",
    options: ["20", "53", "80", "443"],
    answer: "443",
  },
  {
    question: "What is a thread?",
    options: [
      "A lightweight unit of execution",
      "A type of memory",
      "A type of CPU",
      "A storage device",
    ],
    answer: "A lightweight unit of execution",
  },
  {
    question: "What is the average time complexity of searching in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
  },
  {
    question:
      "Which protocol is generally faster but does not guarantee delivery?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    answer: "UDP",
  },
  {
    question: "What is a context switch?",
    options: [
      "Switching from one programming language to another",
      "Switching the CPU from one process/thread to another",
      "Switching from RAM to ROM",
      "Switching from HDD to SSD",
    ],
    answer: "Switching the CPU from one process/thread to another",
  },
  {
    question:
      "Which sorting algorithm has an average time complexity of O(n log n)?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"],
    answer: "Merge Sort",
  },
  {
    question:
      "Which device operates primarily at the Network Layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answer: "Router",
  },
  {
    question: "Which scheduling algorithm can cause starvation?",
    options: ["FCFS", "Priority Scheduling", "Round Robin", "None"],
    answer: "Priority Scheduling",
  },
  {
    question: "Which data structure follows the FIFO principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
  },
  {
    question: "Which protocol is used to send email?",
    options: ["SMTP", "FTP", "HTTP", "DNS"],
    answer: "SMTP",
  },
  {
    question: "What is virtual memory?",
    options: [
      "Memory inside the CPU",
      "A technique that uses disk space as an extension of RAM",
      "Cache memory",
      "ROM",
    ],
    answer: "A technique that uses disk space as an extension of RAM",
  },
  {
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    answer: "O(n²)",
  },
  {
    question: "What is the default port number for HTTP?",
    options: ["21", "25", "80", "443"],
    answer: "80",
  },
  {
    question: "Which of the following is used for process synchronization?",
    options: ["Semaphore", "Compiler", "Loader", "Cache"],
    answer: "Semaphore",
  },
  {
    question:
      "What is the worst-case time complexity of searching for an element in an unsorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(n)",
  },
  {
    question:
      "Which address is used to uniquely identify a network interface at the Data Link layer?",
    options: ["IP address", "MAC address", "Port number", "URL"],
    answer: "MAC address",
  },
  {
    question: "What is thrashing?",
    options: [
      "Excessive CPU usage",
      "Excessive page swapping between RAM and disk",
      "A type of deadlock",
      "A type of scheduling",
    ],
    answer: "Excessive page swapping between RAM and disk",
  },
  {
    question: "Which data structure is commonly used for implementing DFS?",
    options: ["Queue", "Stack", "Hash Table", "Priority Queue"],
    answer: "Stack",
  },
  {
    question: "Which layer of the OSI model is responsible for routing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Network",
  },
  {
    question:
      "Which of the following is NOT a necessary condition for deadlock?",
    options: [
      "Mutual exclusion",
      "Hold and wait",
      "Circular wait",
      "Context switching",
    ],
    answer: "Context switching",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Store all answers selected by the user
  const [userAnswers, setUserAnswers] = useState([]);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  // Select answer
  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    setUserAnswers((previousAnswers) => {
      const updatedAnswers = [...previousAnswers];

      updatedAnswers[currentQuestion] = option;

      return updatedAnswers;
    });
  };

  // Next question
  const nextQuestion = () => {
    if (!selectedAnswer) return;

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true);
    }
  };
  const previousQuestion = () => {
  if (currentQuestion > 0) {
    setCurrentQuestion((previous) => previous - 1);
  }
};

  // Restart test
  const restartTest = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setSelectedAnswer("");
    setShowResult(false);
  };

  // Calculate score
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questions[index].answer
  ).length;

  const wrongAnswers = questions.length - correctAnswers;

  const percentage = Math.round(
    (correctAnswers / questions.length) * 100
  );

  // ============================
  // RESULT PAGE
  // ============================

  if (showResult) {
    return (
      <div className="quiz-page">

        {/* Header */}
        <header className="quiz-header">
          <div className="header-inner">

            <div className="university-brand">

              <div className="university-logo">
                Q
              </div>

              <div className="university-name">
                <strong>Technical Interview Quiz</strong>

                <span>
                  DSA • Operating Systems • Computer Networks
                </span>
              </div>

            </div>

            <div className="header-badge">
              TEST RESULT
            </div>

          </div>
        </header>

        {/* Result */}
        <main className="quiz-container">

          <div className="result-card">

            <div className="result-icon">
              ✓
            </div>

            <h1>Test Completed</h1>

            <p>
              Your technical assessment has been completed.
            </p>

            {/* Percentage */}
            <div className="final-score">
              {percentage}
              <span>%</span>
            </div>

            <p className="result-message">
              {percentage >= 80
                ? "Excellent performance! 🎉"
                : percentage >= 60
                ? "Good performance! Keep practicing. 👍"
                : "Keep learning and try again. 💪"}
            </p>

            {/* Statistics */}
            <div className="result-stats">

              <div className="result-stat">
                <span>Total Questions</span>
                <strong>{questions.length}</strong>
              </div>

              <div className="result-stat correct-stat">
                <span>Correct</span>
                <strong>{correctAnswers}</strong>
              </div>

              <div className="result-stat wrong-stat">
                <span>Wrong</span>
                <strong>{wrongAnswers}</strong>
              </div>

            </div>

          </div>

          {/* ============================
              ANSWER REVIEW
          ============================ */}

          <div className="review-section">

            <div className="review-heading">
              <h2>Answer Review</h2>

              <p>
                Check your answers and compare them with
                the correct answers.
              </p>
            </div>

            {questions.map((item, index) => {

              const userAnswer = userAnswers[index];

              const isCorrect =
                userAnswer === item.answer;

              return (
                <div
                  className={`review-card ${
                    isCorrect
                      ? "review-correct"
                      : "review-wrong"
                  }`}
                  key={index}
                >

                  <div className="review-top">

                    <span className="review-number">
                      Question {index + 1}
                    </span>

                    <span
                      className={`review-status ${
                        isCorrect
                          ? "status-correct"
                          : "status-wrong"
                      }`}
                    >
                      {isCorrect
                        ? "✓ Correct"
                        : "✕ Wrong"}
                    </span>

                  </div>

                  <h3>
                    {item.question}
                  </h3>

                  <div className="answer-review">

                    <div
                      className={
                        isCorrect
                          ? "answer-box selected-correct"
                          : "answer-box selected-wrong"
                      }
                    >
                      <span>Your Answer</span>

                      <strong>
                        {userAnswer || "Not answered"}
                      </strong>
                    </div>

                    {!isCorrect && (
                      <div className="answer-box correct-answer">
                        <span>Correct Answer</span>

                        <strong>
                          {item.answer}
                        </strong>
                      </div>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

          {/* Restart */}
          <div className="restart-container">

            <button
              className="restart-button"
              onClick={restartTest}
            >
              ↻ Restart Test
            </button>

          </div>

        </main>

        <footer className="site-footer">
          © 2026{" "}
          <strong>Technical Interview Quiz</strong>
        </footer>

      </div>
    );
  }

  // ============================
  // QUIZ PAGE
  // ============================

  return (
    <div className="quiz-page">

      {/* Header */}
      <header className="quiz-header">

        <div className="header-inner">

          <div className="university-brand">

            <div className="university-logo">
              Q
            </div>

            <div className="university-name">

              <strong>
                Technical Interview Quiz
              </strong>

              <span>
                DSA • Operating Systems • Computer Networks
              </span>

            </div>

          </div>

          <div className="header-badge">
            INTERVIEW PREPARATION
          </div>

        </div>

      </header>

      {/* Main */}
      <main className="quiz-container">

        <div className="quiz-intro">

          <h1>
            Technical Assessment
          </h1>

          <p>
            Test your knowledge with 30 interview-level
            multiple-choice questions.
          </p>

        </div>

        <div className="quiz-card">

          {/* Top */}
          <div className="quiz-card-top">

            <div className="question-number">
              Question {currentQuestion + 1}
              <span>
                {" "}
                / {questions.length}
              </span>
            </div>

            <div className="score-badge">
              Score:{" "}
              {correctAnswers}
            </div>

          </div>

          {/* Progress */}
          <div className="progress-wrapper">

            <div className="progress-background">

              <div
                className="progress-fill"
                style={{
                  width: `${
                    ((currentQuestion + 1) /
                      questions.length) *
                    100
                  }%`,
                }}
              />

            </div>

          </div>

          {/* Question */}
          <div className="question-content">

            <h2>
              {question.question}
            </h2>

            <div className="options">

              {question.options.map(
                (option, index) => {

                  const isSelected =
                    selectedAnswer === option;

                  const isCorrect =
                    option === question.answer;

                  let className = "option";

                  if (selectedAnswer) {

                    if (isCorrect) {
                      className +=
                        " correct";
                    } else if (
                      isSelected
                    ) {
                      className +=
                        " wrong";
                    }

                  }

                  return (
                    <button
                      key={index}
                      className={className}
                      onClick={() =>
                        handleAnswer(option)
                      }
                      disabled={
                        Boolean(
                          selectedAnswer
                        )
                      }
                    >

                      <span className="option-number">
                        {String.fromCharCode(
                          65 + index
                        )}
                      </span>

                      <span>
                        {option}
                      </span>

                    </button>
                  );
                }
              )}

            </div>

          </div>

          {/* Footer */}
          <div className="quiz-footer">

  <div className="footer-score">
    <span>Current Score</span>

    <strong>
      {correctAnswers}
    </strong>
  </div>

  <div className="navigation-buttons">

  <button
    className="previous-button"
    onClick={previousQuestion}
    disabled={currentQuestion === 0}
  >
    ← Previous
  </button>

  <button
    className="next-button"
    onClick={nextQuestion}
    disabled={!selectedAnswer}
  >
    {currentQuestion === questions.length - 1
      ? "Finish Test"
      : "Next Question →"}
  </button>

</div>
</div>

        </div>

      </main>

      <footer className="site-footer">
        © 2026{" "}
        <strong>
          Technical Interview Quiz
        </strong>
      </footer>

    </div>
  );
}

export default App;