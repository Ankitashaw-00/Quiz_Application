"use client";

import { useEffect, useMemo, useState } from "react";
import "./App.css";

/* =========================================================
   QUESTION BANK
========================================================= */

const questions = [
  {
    id: 1,
    question: "What is the time complexity of binary search on a sorted array?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
    level: "Easy",
    explanation:
      "Binary search repeatedly divides the sorted search space into two halves. Therefore, the number of comparisons grows logarithmically with the size of the array, giving O(log n) time complexity.",
  },
  {
    id: 2,
    question: "Which scheduling algorithm uses a time quantum?",
    options: ["FCFS", "SJF", "Round Robin", "Priority Scheduling"],
    answer: "Round Robin",
    level: "Easy",
    explanation:
      "Round Robin scheduling assigns each process a fixed amount of CPU time called a time quantum. After the quantum expires, the process goes to the end of the ready queue if it has not completed.",
  },
  {
    id: 3,
    question:
      "Which protocol is used to translate domain names into IP addresses?",
    options: ["HTTP", "FTP", "DNS", "SMTP"],
    answer: "DNS",
    level: "Easy",
    explanation:
      "DNS stands for Domain Name System. It translates human-readable domain names such as example.com into IP addresses that computers use to communicate over a network.",
  },
  {
    id: 4,
    question: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Linked List", "Stack", "Tree"],
    answer: "Stack",
    level: "Easy",
    explanation:
      "A stack follows LIFO, which means Last In, First Out. The most recently inserted element is the first one removed. Push and pop operations happen at the top of the stack.",
  },
  {
    id: 5,
    question: "How many layers are there in the OSI model?",
    options: ["4", "5", "7", "8"],
    answer: "7",
    level: "Easy",
    explanation:
      "The OSI model has seven layers: Physical, Data Link, Network, Transport, Session, Presentation, and Application.",
  },
  {
    id: 6,
    question: "What is a process?",
    options: [
      "A program stored on disk",
      "A program in execution",
      "A CPU instruction",
      "A memory location",
    ],
    answer: "A program in execution",
    level: "Easy",
    explanation:
      "A process is a program that is currently executing. It contains the program code along with information such as registers, program counter, stack, heap, and allocated resources.",
  },
  {
    id: 7,
    question:
      "Which traversal of a Binary Search Tree gives elements in sorted order?",
    options: ["Preorder", "Postorder", "Level order", "Inorder"],
    answer: "Inorder",
    level: "Easy",
    explanation:
      "Inorder traversal visits the left subtree, root, and then right subtree. Because values in a Binary Search Tree are arranged with smaller values on the left and larger values on the right, inorder traversal produces sorted order.",
  },
  {
    id: 8,
    question: "Which protocol is connection-oriented?",
    options: ["UDP", "TCP", "IP", "ICMP"],
    answer: "TCP",
    level: "Easy",
    explanation:
      "TCP is connection-oriented. It establishes a connection between sender and receiver before transmitting data and provides reliable, ordered delivery.",
  },
  {
    id: 9,
    question:
      "Which memory management technique divides memory into fixed-size blocks?",
    options: ["Paging", "Segmentation", "Swapping", "Fragmentation"],
    answer: "Paging",
    level: "Moderate",
    explanation:
      "Paging divides logical memory into fixed-size pages and physical memory into fixed-size frames. This allows pages to be placed into available frames without requiring contiguous physical memory.",
  },
  {
    id: 10,
    question: "Which data structure is commonly used for implementing BFS?",
    options: ["Stack", "Queue", "Heap", "Array"],
    answer: "Queue",
    level: "Easy",
    explanation:
      "Breadth-First Search explores nodes level by level. A queue is used because nodes are processed in the same order in which they are discovered, following FIFO behavior.",
  },
  {
    id: 11,
    question: "What is the default port number for HTTPS?",
    options: ["20", "53", "80", "443"],
    answer: "443",
    level: "Easy",
    explanation:
      "HTTPS normally uses TCP port 443. HTTPS is HTTP communication secured using TLS encryption.",
  },
  {
    id: 12,
    question: "What is a thread?",
    options: [
      "A lightweight unit of execution",
      "A type of memory",
      "A type of CPU",
      "A storage device",
    ],
    answer: "A lightweight unit of execution",
    level: "Easy",
    explanation:
      "A thread is the smallest unit of CPU execution within a process. Multiple threads in the same process can share resources such as memory while executing independently.",
  },
  {
    id: 13,
    question: "What is the average time complexity of searching in a hash table?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    answer: "O(1)",
    level: "Moderate",
    explanation:
      "With a good hash function and a well-distributed hash table, searching normally takes constant average time, O(1). However, in the worst case, many collisions can cause O(n) searching.",
  },
  {
    id: 14,
    question:
      "Which protocol is generally faster but does not guarantee delivery?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    answer: "UDP",
    level: "Easy",
    explanation:
      "UDP is connectionless and does not guarantee delivery, ordering, or retransmission. Because it has less communication overhead than TCP, it is generally faster and is useful for applications such as streaming and online gaming.",
  },
  {
    id: 15,
    question: "What is a context switch?",
    options: [
      "Switching from one programming language to another",
      "Switching the CPU from one process/thread to another",
      "Switching from RAM to ROM",
      "Switching from HDD to SSD",
    ],
    answer: "Switching the CPU from one process/thread to another",
    level: "Moderate",
    explanation:
      "A context switch occurs when the operating system saves the state of the currently running process or thread and loads the saved state of another process or thread so the CPU can execute it.",
  },
  {
    id: 16,
    question:
      "Which sorting algorithm has an average time complexity of O(n log n)?",
    options: ["Bubble Sort", "Selection Sort", "Merge Sort", "Linear Search"],
    answer: "Merge Sort",
    level: "Moderate",
    explanation:
      "Merge Sort divides the array into smaller parts and merges them in sorted order. Its time complexity is O(n log n) in the best, average, and worst cases.",
  },
  {
    id: 17,
    question:
      "Which device operates primarily at the Network Layer of the OSI model?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    answer: "Router",
    level: "Moderate",
    explanation:
      "Routers primarily operate at Layer 3, the Network Layer, of the OSI model. They use IP addresses to determine how packets should be forwarded between different networks.",
  },
  {
    id: 18,
    question: "Which scheduling algorithm can cause starvation?",
    options: ["FCFS", "Priority Scheduling", "Round Robin", "None"],
    answer: "Priority Scheduling",
    level: "Moderate",
    explanation:
      "Priority Scheduling can cause starvation when low-priority processes wait indefinitely because higher-priority processes continuously receive CPU time. Aging can be used to reduce starvation.",
  },
  {
    id: 19,
    question: "Which data structure follows the FIFO principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "Queue",
    level: "Easy",
    explanation:
      "A queue follows FIFO, meaning First In, First Out. The element inserted first is removed first, similar to people standing in a line.",
  },
  {
    id: 20,
    question: "Which protocol is used to send email?",
    options: ["SMTP", "FTP", "HTTP", "DNS"],
    answer: "SMTP",
    level: "Easy",
    explanation:
      "SMTP stands for Simple Mail Transfer Protocol. It is primarily used for sending email messages between mail clients and mail servers or between mail servers.",
  },
  {
    id: 21,
    question: "What is virtual memory?",
    options: [
      "Memory inside the CPU",
      "A technique that uses disk space as an extension of RAM",
      "Cache memory",
      "ROM",
    ],
    answer: "A technique that uses disk space as an extension of RAM",
    level: "Moderate",
    explanation:
      "Virtual memory allows the operating system to use part of secondary storage as an extension of physical RAM. It enables programs to use more logical memory than the available physical RAM, although disk access is much slower.",
  },
  {
    id: 22,
    question: "What is the worst-case time complexity of Quick Sort?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"],
    answer: "O(n²)",
    level: "High",
    explanation:
      "Quick Sort can have O(n²) worst-case complexity when the pivot repeatedly produces highly unbalanced partitions, such as when the smallest or largest element is consistently selected as the pivot.",
  },
  {
    id: 23,
    question: "What is the default port number for HTTP?",
    options: ["21", "25", "80", "443"],
    answer: "80",
    level: "Easy",
    explanation:
      "HTTP normally uses TCP port 80. HTTPS, which adds TLS security to HTTP, normally uses port 443.",
  },
  {
    id: 24,
    question: "Which of the following is used for process synchronization?",
    options: ["Semaphore", "Compiler", "Loader", "Cache"],
    answer: "Semaphore",
    level: "Moderate",
    explanation:
      "A semaphore is a synchronization mechanism used by operating systems and concurrent programs to control access to shared resources and coordinate the execution of processes or threads.",
  },
  {
    id: 25,
    question:
      "What is the worst-case time complexity of searching for an element in an unsorted array?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
    answer: "O(n)",
    level: "Easy",
    explanation:
      "In an unsorted array, an element may be located at the last position or may not exist. Therefore, in the worst case, every element must be checked, resulting in O(n) time.",
  },
  {
    id: 26,
    question:
      "Which address is used to uniquely identify a network interface at the Data Link layer?",
    options: ["IP address", "MAC address", "Port number", "URL"],
    answer: "MAC address",
    level: "Moderate",
    explanation:
      "A MAC address identifies a network interface at the Data Link Layer. It is used for communication within a local network, while IP addresses operate at the Network Layer.",
  },
  {
    id: 27,
    question: "What is thrashing?",
    options: [
      "Excessive CPU usage",
      "Excessive page swapping between RAM and disk",
      "A type of deadlock",
      "A type of scheduling",
    ],
    answer: "Excessive page swapping between RAM and disk",
    level: "High",
    explanation:
      "Thrashing occurs when a system spends excessive time swapping pages between RAM and disk instead of executing useful work. It commonly happens when processes do not have enough physical memory.",
  },
  {
    id: 28,
    question: "Which data structure is commonly used for implementing DFS?",
    options: ["Queue", "Stack", "Hash Table", "Priority Queue"],
    answer: "Stack",
    level: "Easy",
    explanation:
      "Depth-First Search explores as deeply as possible before backtracking. A stack is used to maintain the nodes that need to be processed next. Recursive DFS also uses the call stack.",
  },
  {
    id: 29,
    question: "Which layer of the OSI model is responsible for routing?",
    options: ["Physical", "Data Link", "Network", "Transport"],
    answer: "Network",
    level: "Moderate",
    explanation:
      "The Network Layer is responsible for logical addressing and routing packets between different networks. IP is a major protocol associated with this layer.",
  },
  {
    id: 30,
    question:
      "Which of the following is NOT a necessary condition for deadlock?",
    options: [
      "Mutual exclusion",
      "Hold and wait",
      "Circular wait",
      "Context switching",
    ],
    answer: "Context switching",
    level: "High",
    explanation:
      "The four necessary conditions for deadlock are mutual exclusion, hold and wait, no preemption, and circular wait. Context switching is not one of the four necessary conditions.",
  },
];

/* =========================================================
   CONSTANTS & HELPERS
========================================================= */

const TEST_DURATION = 40 * 60;

const shuffle = (array) => {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
};

const getResultKey = (email) =>
  `technicalQuizLastResult_${email.toLowerCase()}`;

const getProfileKey = (email) =>
  `technicalQuizProfile_${email.toLowerCase()}`;

const getDefaultName = (email) => {
  if (!email) return "Student";

  const username = email.split("@")[0];

  if (!username) return "Student";

  return username
    .replace(/[._-]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

/* =========================================================
   HEADER
========================================================= */

function Header({ email, onProfile, onDashboard, onLogout, page }) {
  return (
    <header className="quiz-header">
      <div className="header-inner">
        <div
          className="university-brand"
          onClick={onDashboard}
          role="button"
          tabIndex={0}
        >
          <div className="university-logo">Q</div>

          <div className="university-name">
            <strong>Technical Interview Quiz</strong>

            <span>
              DSA • Operating Systems • Computer Networks
            </span>
          </div>
        </div>

        {email && (
          <div className="header-right">
            <div className="header-user">
              <div className="small-avatar">
                {getDefaultName(email).charAt(0)}
              </div>

              <span>{getDefaultName(email)}</span>
            </div>

            <button
              className={`header-nav-button ${
                page === "dashboard" ? "active" : ""
              }`}
              onClick={onDashboard}
            >
              Dashboard
            </button>

            <button
              className={`header-nav-button ${
                page === "profile" ? "active" : ""
              }`}
              onClick={onProfile}
            >
              My Profile
            </button>

            <button
              className="logout-button"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  return (
    <footer className="site-footer">
      © 2026 <strong>Technical Interview Quiz</strong>
    </footer>
  );
}

/* =========================================================
   LOGIN PAGE
========================================================= */

function LoginPage({
  email,
  password,
  setEmail,
  setPassword,
  onLogin,
  loginError,
}) {
  return (
    <div className="login-page">
      <div className="login-background-shape shape-one"></div>
      <div className="login-background-shape shape-two"></div>

      <div className="login-card">
        <div className="login-logo">Q</div>

        <h1>Technical Interview Quiz</h1>

        <p className="login-subtitle">
          Sign in to access your student dashboard and technical
          assessment.
        </p>

        <form onSubmit={onLogin}>
          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              autoComplete="current-password"
            />
          </div>

          {loginError && (
            <div className="login-error">
              {loginError}
            </div>
          )}

          <button type="submit" className="login-button">
            Login to Dashboard
          </button>
        </form>

        <div className="login-note">
          <strong>Demo login:</strong> Enter any valid email and a
          password with at least 4 characters.
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard({
  email,
  lastResult,
  onStartAssessment,
  onProfile,
}) {
  const studentName = getDefaultName(email);

  const easyCount = questions.filter(
    (question) => question.level === "Easy"
  ).length;

  const moderateCount = questions.filter(
    (question) => question.level === "Moderate"
  ).length;

  const highCount = questions.filter(
    (question) => question.level === "High"
  ).length;

  return (
    <div className="app-page">
      <Header
        email={email}
        onProfile={onProfile}
        onDashboard={() => {}}
        onLogout={() => {}}
        page="dashboard"
      />

      <main className="dashboard-container">
        <section className="dashboard-hero">
          <div>
            <span className="welcome-label">
              STUDENT DASHBOARD
            </span>

            <h1>
              Welcome back,{" "}
              <span>{studentName}</span> 👋
            </h1>

            <p>
              Test your technical knowledge with interview-level
              questions covering DSA, Operating Systems and Computer
              Networks.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={onStartAssessment}
              >
                Start Assessment →
              </button>

              <button
                className="secondary-button"
                onClick={onProfile}
              >
                My Profile
              </button>
            </div>
          </div>

          <div className="hero-illustration">
            <div className="hero-circle">
              <span>Q</span>
            </div>
          </div>
        </section>

        <section className="dashboard-stats">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">📝</div>

            <div>
              <span>Total Questions</span>
              <strong>{questions.length}</strong>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">⏱</div>

            <div>
              <span>Test Duration</span>
              <strong>40 Min</strong>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">🎯</div>

            <div>
              <span>Difficulty Levels</span>
              <strong>3</strong>
            </div>
          </div>

          <div className="dashboard-stat-card">
            <div className="dashboard-stat-icon">🏆</div>

            <div>
              <span>Last Score</span>

              <strong>
                {lastResult
                  ? `${lastResult.percentage}%`
                  : "Not attempted"}
              </strong>
            </div>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="dashboard-card">
            <div className="section-title">
              <div>
                <h2>Assessment Details</h2>

                <p>
                  Everything you need to know before starting.
                </p>
              </div>
            </div>

            <div className="detail-list">
              <div className="detail-row">
                <span>Questions</span>
                <strong>30</strong>
              </div>

              <div className="detail-row">
                <span>Duration</span>
                <strong>40 minutes</strong>
              </div>

              <div className="detail-row">
                <span>Question Type</span>
                <strong>Multiple Choice</strong>
              </div>

              <div className="detail-row">
                <span>Question Order</span>
                <strong>Random</strong>
              </div>

              <div className="detail-row">
                <span>Option Order</span>
                <strong>Random</strong>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="section-title">
              <div>
                <h2>Difficulty Distribution</h2>

                <p>
                  Questions are divided into three difficulty
                  levels.
                </p>
              </div>
            </div>

            <div className="difficulty-list">
              <div className="difficulty-item">
                <div className="difficulty-label">
                  <span>Easy</span>
                  <strong>{easyCount}</strong>
                </div>

                <div className="difficulty-bar">
                  <div
                    className="difficulty-fill easy-fill"
                    style={{
                      width: `${
                        (easyCount / questions.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="difficulty-item">
                <div className="difficulty-label">
                  <span>Moderate</span>
                  <strong>{moderateCount}</strong>
                </div>

                <div className="difficulty-bar">
                  <div
                    className="difficulty-fill moderate-fill"
                    style={{
                      width: `${
                        (moderateCount / questions.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="difficulty-item">
                <div className="difficulty-label">
                  <span>High</span>
                  <strong>{highCount}</strong>
                </div>

                <div className="difficulty-bar">
                  <div
                    className="difficulty-fill high-fill"
                    style={{
                      width: `${
                        (highCount / questions.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="last-result-card">
          <div>
            <span className="last-result-label">
              PREVIOUS ASSESSMENT
            </span>

            <h2>
              {lastResult
                ? "Your previous assessment result"
                : "You haven't attempted the assessment yet"}
            </h2>

            {lastResult && (
              <p>
                Completed on {lastResult.date}
              </p>
            )}
          </div>

          {lastResult ? (
            <div className="last-result-score">
              <strong>{lastResult.percentage}%</strong>
              <span>
                {lastResult.correct}/{lastResult.total} Correct
              </span>
            </div>
          ) : (
            <button
              className="primary-button"
              onClick={onStartAssessment}
            >
              Take Test
            </button>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* =========================================================
   PROFILE PAGE
========================================================= */

function ProfilePage({
  email,
  studentName,
  setStudentName,
  lastResult,
  onSaveProfile,
  onDashboard,
  profileSaved,
}) {
  const easyCount = questions.filter(
    (question) => question.level === "Easy"
  ).length;

  const moderateCount = questions.filter(
    (question) => question.level === "Moderate"
  ).length;

  const highCount = questions.filter(
    (question) => question.level === "High"
  ).length;

  const displayName =
    studentName.trim() || getDefaultName(email);

  return (
    <div className="app-page">
      <Header
        email={email}
        onProfile={() => {}}
        onDashboard={onDashboard}
        onLogout={() => {}}
        page="profile"
      />

      <main className="profile-container">
        <div className="profile-page-heading">
          <div>
            <span className="welcome-label">
              STUDENT ACCOUNT
            </span>

            <h1>My Profile</h1>

            <p>
              Manage your student information and view your
              assessment performance.
            </p>
          </div>

          <button
            className="back-dashboard-button"
            onClick={onDashboard}
          >
            ← Dashboard
          </button>
        </div>

        <section className="profile-main-grid">
          <div className="profile-card profile-person-card">
            <div className="profile-cover"></div>

            <div className="profile-avatar-large">
              {displayName.charAt(0).toUpperCase()}
            </div>

            <div className="profile-person-content">
              <h2>{displayName}</h2>

              <p>{email}</p>

              <span className="student-badge">
                Technical Interview Student
              </span>
            </div>

            <div className="profile-divider"></div>

            <div className="profile-info-row">
              <span>Account Type</span>
              <strong>Student</strong>
            </div>

            <div className="profile-info-row">
              <span>Assessment</span>
              <strong>Technical Quiz</strong>
            </div>

            <div className="profile-info-row">
              <span>Questions</span>
              <strong>{questions.length}</strong>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-card-heading">
              <div>
                <h2>Personal Information</h2>

                <p>
                  Update your student name. Your login email is
                  linked to your account.
                </p>
              </div>
            </div>

            <div className="profile-form">
              <div className="profile-field">
                <label>Student Name</label>

                <input
                  type="text"
                  value={studentName}
                  onChange={(event) =>
                    setStudentName(event.target.value)
                  }
                  placeholder={getDefaultName(email)}
                />
              </div>

              <div className="profile-field">
                <label>Email Address</label>

                <input
                  type="email"
                  value={email}
                  readOnly
                />
              </div>

              <button
                className="save-profile-button"
                onClick={onSaveProfile}
              >
                Save Profile
              </button>

              {profileSaved && (
                <div className="profile-success">
                  ✓ Profile updated successfully.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="profile-card">
          <div className="profile-card-heading">
            <div>
              <h2>Assessment Performance</h2>

              <p>
                Your latest technical assessment performance.
              </p>
            </div>
          </div>

          {lastResult ? (
            <>
              <div className="profile-performance-grid">
                <div className="performance-box">
                  <span>Percentage</span>

                  <strong>
                    {lastResult.percentage}%
                  </strong>
                </div>

                <div className="performance-box">
                  <span>Correct</span>

                  <strong className="performance-correct">
                    {lastResult.correct}
                  </strong>
                </div>

                <div className="performance-box">
                  <span>Wrong</span>

                  <strong className="performance-wrong">
                    {lastResult.wrong}
                  </strong>
                </div>

                <div className="performance-box">
                  <span>Total</span>

                  <strong>{lastResult.total}</strong>
                </div>
              </div>

              <div className="profile-result-message">
                <div className="result-message-icon">
                  {lastResult.percentage >= 80
                    ? "🏆"
                    : lastResult.percentage >= 60
                    ? "👍"
                    : "📚"}
                </div>

                <div>
                  <strong>
                    {lastResult.percentage >= 80
                      ? "Excellent performance!"
                      : lastResult.percentage >= 60
                      ? "Good performance!"
                      : "Keep practicing!"}
                  </strong>

                  <p>
                    Your latest assessment was completed on{" "}
                    {lastResult.date}.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="no-result">
              <div className="no-result-icon">📝</div>

              <h3>No assessment completed yet</h3>

              <p>
                Start your technical assessment to see your
                performance here.
              </p>
            </div>
          )}
        </section>

        <section className="profile-card">
          <div className="profile-card-heading">
            <div>
              <h2>Assessment Difficulty</h2>

              <p>
                Current question bank distribution.
              </p>
            </div>
          </div>

          <div className="profile-difficulty-grid">
            <div className="profile-difficulty-card easy-card">
              <span>Easy</span>
              <strong>{easyCount}</strong>
              <small>Questions</small>
            </div>

            <div className="profile-difficulty-card moderate-card">
              <span>Moderate</span>
              <strong>{moderateCount}</strong>
              <small>Questions</small>
            </div>

            <div className="profile-difficulty-card high-card">
              <span>High</span>
              <strong>{highCount}</strong>
              <small>Questions</small>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

/* =========================================================
   ASSESSMENT PAGE
========================================================= */

function AssessmentPage({
  testQuestions,
  currentQuestion,
  selectedAnswer,
  userAnswers,
  timeLeft,
  onAnswer,
  onNext,
  onPrevious,
  onSubmit,
}) {
  const question = testQuestions[currentQuestion];

  const correctAnswers = testQuestions.reduce(
    (total, item, index) => {
      return (
        total +
        (userAnswers[index] === item.answer ? 1 : 0)
      );
    },
    0
  );

  const minutes = Math.floor(timeLeft / 60)
    .toString()
    .padStart(2, "0");

  const seconds = (timeLeft % 60)
    .toString()
    .padStart(2, "0");

  const timerWarning = timeLeft <= 300;

  return (
    <div className="app-page assessment-page">
      <header className="quiz-header">
        <div className="header-inner">
          <div className="university-brand">
            <div className="university-logo">Q</div>

            <div className="university-name">
              <strong>Technical Interview Quiz</strong>

              <span>
                DSA • Operating Systems • Computer Networks
              </span>
            </div>
          </div>

          <div
            className={`timer-box ${
              timerWarning ? "timer-warning" : ""
            }`}
          >
            <span>TIME LEFT</span>

            <strong>
              {minutes}:{seconds}
            </strong>
          </div>
        </div>
      </header>

      <main className="assessment-container">
        <div className="assessment-top">
          <div>
            <span className="assessment-label">
              TECHNICAL ASSESSMENT
            </span>

            <h1>Technical Interview Quiz</h1>
          </div>

          <div className="live-score">
            <span>Current Score</span>
            <strong>{correctAnswers}</strong>
          </div>
        </div>

        <div className="assessment-progress-card">
          <div className="assessment-progress-info">
            <span>
              Question {currentQuestion + 1} of{" "}
              {testQuestions.length}
            </span>

            <span>
              {Math.round(
                ((currentQuestion + 1) /
                  testQuestions.length) *
                  100
              )}
              %
            </span>
          </div>

          <div className="assessment-progress-background">
            <div
              className="assessment-progress-fill"
              style={{
                width: `${
                  ((currentQuestion + 1) /
                    testQuestions.length) *
                  100
                }%`,
              }}
            ></div>
          </div>
        </div>

        <div className="question-card">
          <div className="question-card-top">
            <div className="question-number-large">
              Question {currentQuestion + 1}
            </div>

            <span
              className={`difficulty-badge difficulty-${question.level.toLowerCase()}`}
            >
              {question.level}
            </span>
          </div>

          <h2>{question.question}</h2>

          <div className="options-container">
            {question.options.map((option, index) => {
              const isSelected =
                selectedAnswer === option;

              const isCorrect =
                option === question.answer;

              let optionClass = "assessment-option";

              if (selectedAnswer) {
                if (isCorrect) {
                  optionClass += " answer-correct";
                } else if (isSelected) {
                  optionClass += " answer-wrong";
                }
              }

              return (
                <button
                  key={option}
                  className={optionClass}
                  onClick={() => onAnswer(option)}
                  disabled={Boolean(selectedAnswer)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="option-text">
                    {option}
                  </span>

                  {selectedAnswer && isCorrect && (
                    <span className="option-result-icon">
                      ✓
                    </span>
                  )}

                  {selectedAnswer &&
                    isSelected &&
                    !isCorrect && (
                      <span className="option-result-icon">
                        ✕
                      </span>
                    )}
                </button>
              );
            })}
          </div>

          {selectedAnswer && (
            <div
              className={`explanation-box ${
                selectedAnswer === question.answer
                  ? "explanation-correct"
                  : "explanation-wrong"
              }`}
            >
              <div className="explanation-icon">
                {selectedAnswer === question.answer
                  ? "✓"
                  : "!"}
              </div>

              <div>
                <h3>
                  {selectedAnswer === question.answer
                    ? "Correct Answer!"
                    : "Not quite correct"}
                </h3>

                <p>
                  <strong>
                    Correct answer:{" "}
                  </strong>
                  {question.answer}
                </p>

                <p>
                  <strong>Explanation: </strong>
                  {question.explanation}
                </p>
              </div>
            </div>
          )}

          <div className="question-navigation">
            <button
              className="previous-button"
              onClick={onPrevious}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>

            <button
              className="next-button"
              onClick={onNext}
              disabled={!selectedAnswer}
            >
              {currentQuestion ===
              testQuestions.length - 1
                ? "Finish Test ✓"
                : "Next Question →"}
            </button>
          </div>
        </div>

        <div className="assessment-note">
          <span>💡</span>

          <p>
            Select one answer for each question. The correct
            answer and explanation will appear immediately after
            your selection.
          </p>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   RESULT PAGE
========================================================= */

function ResultPage({
  testQuestions,
  userAnswers,
  onRestart,
  onDashboard,
  onProfile,
}) {
  const correctAnswers = testQuestions.reduce(
    (total, item, index) => {
      return (
        total +
        (userAnswers[index] === item.answer ? 1 : 0)
      );
    },
    0
  );

  const wrongAnswers =
    testQuestions.length - correctAnswers;

  const percentage = Math.round(
    (correctAnswers / testQuestions.length) * 100
  );

  return (
    <div className="app-page">
      <Header
        email=""
        onProfile={onProfile}
        onDashboard={onDashboard}
        onLogout={() => {}}
        page="result"
      />

      <main className="result-container">
        <section className="result-card">
          <div className="result-icon">✓</div>

          <span className="result-label">
            ASSESSMENT COMPLETED
          </span>

          <h1>Test Completed!</h1>

          <p>
            Your technical assessment has been completed
            successfully.
          </p>

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

          <div className="result-stats">
            <div className="result-stat">
              <span>Total Questions</span>
              <strong>{testQuestions.length}</strong>
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

          <div className="result-actions">
            <button
              className="primary-button"
              onClick={onRestart}
            >
              ↻ Restart Test
            </button>

            <button
              className="secondary-button"
              onClick={onDashboard}
            >
              Dashboard
            </button>
          </div>
        </section>

        <section className="review-section">
          <div className="review-heading">
            <span className="assessment-label">
              DETAILED REVIEW
            </span>

            <h2>Answer Review</h2>

            <p>
              Review every question, your selected answer,
              correct answer, and the explanation.
            </p>
          </div>

          {testQuestions.map((item, index) => {
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
                key={item.id}
              >
                <div className="review-top">
                  <div className="review-number">
                    Question {index + 1}
                  </div>

                  <div
                    className={`review-status ${
                      isCorrect
                        ? "status-correct"
                        : "status-wrong"
                    }`}
                  >
                    {isCorrect
                      ? "✓ Correct"
                      : "✕ Wrong"}
                  </div>
                </div>

                <div className="review-question-meta">
                  <span
                    className={`difficulty-badge difficulty-${item.level.toLowerCase()}`}
                  >
                    {item.level}
                  </span>
                </div>

                <h3>{item.question}</h3>

                <div className="answer-review">
                  <div
                    className={`answer-box ${
                      isCorrect
                        ? "selected-correct"
                        : "selected-wrong"
                    }`}
                  >
                    <span>Your Answer</span>

                    <strong>
                      {userAnswer || "Not answered"}
                    </strong>
                  </div>

                  {!isCorrect && (
                    <div className="answer-box correct-answer">
                      <span>Correct Answer</span>

                      <strong>{item.answer}</strong>
                    </div>
                  )}
                </div>

                <div className="review-explanation">
                  <div className="review-explanation-icon">
                    💡
                  </div>

                  <div>
                    <strong>
                      Why is this answer correct?
                    </strong>

                    <p>{item.explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        <div className="bottom-result-actions">
          <button
            className="primary-button"
            onClick={onRestart}
          >
            ↻ Take Test Again
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("technicalQuizLoggedIn") === "true";
  });

  const [email, setEmail] = useState(() => {
    return localStorage.getItem("technicalQuizUserEmail") || "";
  });

  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState("");

  const [page, setPage] = useState("dashboard");

  const [studentName, setStudentName] = useState(() => {
    const savedEmail =
      localStorage.getItem("technicalQuizUserEmail") || "";

    if (!savedEmail) return "";

    return (
      localStorage.getItem(
        getProfileKey(savedEmail)
      ) || ""
    );
  });

  const [profileSaved, setProfileSaved] = useState(false);

  const [lastResult, setLastResult] = useState(() => {
    const savedEmail =
      localStorage.getItem("technicalQuizUserEmail") || "";

    if (!savedEmail) return null;

    try {
      const savedResult = localStorage.getItem(
        getResultKey(savedEmail)
      );

      return savedResult
        ? JSON.parse(savedResult)
        : null;
    } catch {
      return null;
    }
  });

  const [testQuestions, setTestQuestions] = useState([]);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [userAnswers, setUserAnswers] = useState([]);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [timeLeft, setTimeLeft] =
    useState(TEST_DURATION);

  const startNewAssessment = () => {
    const randomizedQuestions = shuffle(
      questions
    ).map((question) => ({
      ...question,
      options: shuffle(question.options),
    }));

    setTestQuestions(randomizedQuestions);
    setCurrentQuestion(0);
    setUserAnswers([]);
    setSelectedAnswer("");
    setTimeLeft(TEST_DURATION);
    setPage("assessment");
  };

  /* =========================================================
     LOGIN
  ========================================================= */

  const handleLogin = (event) => {
    event.preventDefault();

    setLoginError("");

    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) {
      setLoginError("Please enter your email address.");
      return;
    }

    if (!cleanEmail.includes("@")) {
      setLoginError("Please enter a valid email address.");
      return;
    }

    if (password.length < 4) {
      setLoginError(
        "Password must contain at least 4 characters."
      );
      return;
    }

    localStorage.setItem(
      "technicalQuizLoggedIn",
      "true"
    );

    localStorage.setItem(
      "technicalQuizUserEmail",
      cleanEmail
    );

    const savedName =
      localStorage.getItem(
        getProfileKey(cleanEmail)
      ) || "";

    setEmail(cleanEmail);
    setStudentName(savedName);
    setIsLoggedIn(true);
    setPage("dashboard");

    try {
      const savedResult = localStorage.getItem(
        getResultKey(cleanEmail)
      );

      setLastResult(
        savedResult ? JSON.parse(savedResult) : null
      );
    } catch {
      setLastResult(null);
    }

    setPassword("");
  };

  /* =========================================================
     LOGOUT
  ========================================================= */

  const handleLogout = () => {
    localStorage.removeItem(
      "technicalQuizLoggedIn"
    );

    localStorage.removeItem(
      "technicalQuizUserEmail"
    );

    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setStudentName("");
    setLastResult(null);
    setPage("dashboard");
    setTestQuestions([]);
    setUserAnswers([]);
    setCurrentQuestion(0);
    setSelectedAnswer("");
  };

  /* =========================================================
     PROFILE
  ========================================================= */

  const saveProfile = () => {
    const cleanName = studentName.trim();

    if (!cleanName) {
      setStudentName(getDefaultName(email));
      return;
    }

    localStorage.setItem(
      getProfileKey(email),
      cleanName
    );

    setStudentName(cleanName);
    setProfileSaved(true);

    setTimeout(() => {
      setProfileSaved(false);
    }, 2000);
  };

  /* =========================================================
     ANSWER
  ========================================================= */

  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    setUserAnswers((previousAnswers) => {
      const updatedAnswers = [...previousAnswers];

      updatedAnswers[currentQuestion] = option;

      return updatedAnswers;
    });
  };

  /* =========================================================
     NEXT QUESTION
  ========================================================= */

  const nextQuestion = () => {
    if (!selectedAnswer) return;

    if (
      currentQuestion <
      testQuestions.length - 1
    ) {
      const nextIndex = currentQuestion + 1;

      setCurrentQuestion(nextIndex);

      setSelectedAnswer(
        userAnswers[nextIndex] || ""
      );
    } else {
      finishAssessment();
    }
  };

  /* =========================================================
     PREVIOUS QUESTION
  ========================================================= */

  const previousQuestion = () => {
    if (currentQuestion === 0) return;

    const previousIndex =
      currentQuestion - 1;

    setCurrentQuestion(previousIndex);

    setSelectedAnswer(
      userAnswers[previousIndex] || ""
    );
  };

  /* =========================================================
     FINISH ASSESSMENT
  ========================================================= */

  const finishAssessment = () => {
    if (!testQuestions.length) return;

    const correct = testQuestions.reduce(
      (total, item, index) => {
        return (
          total +
          (userAnswers[index] === item.answer
            ? 1
            : 0)
        );
      },
      0
    );

    const wrong =
      testQuestions.length - correct;

    const percentage = Math.round(
      (correct / testQuestions.length) * 100
    );

    const result = {
      correct,
      wrong,
      total: testQuestions.length,
      percentage,
      date: new Date().toLocaleDateString(
        "en-IN",
        {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }
      ),
    };

    localStorage.setItem(
      getResultKey(email),
      JSON.stringify(result)
    );

    setLastResult(result);
    setPage("result");
  };

  /* =========================================================
     TIMER
  ========================================================= */

  useEffect(() => {
    if (
      !isLoggedIn ||
      page !== "assessment"
    ) {
      return;
    }

    if (timeLeft <= 0) {
      finishAssessment();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((previousTime) => {
        if (previousTime <= 1) {
          clearInterval(timer);
          return 0;
        }

        return previousTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [
    isLoggedIn,
    page,
    timeLeft,
  ]);

  /* =========================================================
     AUTO SUBMIT WHEN TIMER REACHES ZERO
  ========================================================= */

  useEffect(() => {
    if (
      page === "assessment" &&
      timeLeft === 0
    ) {
      finishAssessment();
    }
  }, [timeLeft, page]);

  /* =========================================================
     CURRENT ANSWER
  ========================================================= */

  const currentSelectedAnswer = useMemo(() => {
    return (
      userAnswers[currentQuestion] ||
      selectedAnswer ||
      ""
    );
  }, [
    userAnswers,
    currentQuestion,
    selectedAnswer,
  ]);

  /* =========================================================
     LOGIN SCREEN
  ========================================================= */

  if (!isLoggedIn) {
    return (
      <LoginPage
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        onLogin={handleLogin}
        loginError={loginError}
      />
    );
  }

  /* =========================================================
     PROFILE PAGE
  ========================================================= */

  if (page === "profile") {
    return (
      <ProfilePage
        email={email}
        studentName={studentName}
        setStudentName={setStudentName}
        lastResult={lastResult}
        onSaveProfile={saveProfile}
        onDashboard={() => setPage("dashboard")}
        profileSaved={profileSaved}
      />
    );
  }

  /* =========================================================
     ASSESSMENT PAGE
  ========================================================= */

  if (
    page === "assessment" &&
    testQuestions.length > 0
  ) {
    return (
      <AssessmentPage
        testQuestions={testQuestions}
        currentQuestion={currentQuestion}
        selectedAnswer={currentSelectedAnswer}
        userAnswers={userAnswers}
        timeLeft={timeLeft}
        onAnswer={handleAnswer}
        onNext={nextQuestion}
        onPrevious={previousQuestion}
        onSubmit={finishAssessment}
      />
    );
  }

  /* =========================================================
     RESULT PAGE
  ========================================================= */

  if (
    page === "result" &&
    testQuestions.length > 0
  ) {
    return (
      <ResultPage
        testQuestions={testQuestions}
        userAnswers={userAnswers}
        onRestart={startNewAssessment}
        onDashboard={() => setPage("dashboard")}
        onProfile={() => setPage("profile")}
      />
    );
  }

  /* =========================================================
     DASHBOARD
  ========================================================= */

  return (
    <Dashboard
      email={email}
      lastResult={lastResult}
      onStartAssessment={startNewAssessment}
      onProfile={() => setPage("profile")}
    />
  );
}

export default App;