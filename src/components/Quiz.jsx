import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Quiz = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);

  // Mock lesson data with enhanced content
  const lessonData = {
    1: {
      title: "HTML Basics",
      history: () => (
        <div className="lesson-history">
          <div className="timeline-item animate-on-scroll">
            <h3>🎯 The Birth of the Web (1989-1991)</h3>
            <p>
              Picture this: You're Tim Berners-Lee, working at CERN in
              Switzerland. You've got this crazy idea to connect all the
              research documents together using "hyperlinks" - links that jump
              between documents. Sound familiar? That's exactly how the World
              Wide Web was born!
            </p>
            <div className="fun-fact">
              <strong>🎪 Fun Fact:</strong> The first website ever created was
              about the World Wide Web project itself! You can still view it at
              the World Wide Web Consortium's website.
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🏷️ HTML Gets Tagged (1991-1993)</h3>
            <p>
              HTML was initially called "SGML for the web" - but that was way
              too complicated! So Tim simplified it into a "markup language" -
              basically adding special tags around text to give it structure and
              meaning.
            </p>
            <div className="code-example">
              <pre>
                <code>
                  &lt;h1&gt;This is a heading&lt;/h1&gt; &lt;p&gt;This is a
                  paragraph&lt;/p&gt;
                </code>
              </pre>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🌟 The Browser Wars Begin (1993-1995)</h3>
            <p>
              Suddenly, everyone wanted to create browsers! Mosaic, Netscape
              Navigator, Internet Explorer - each trying to "interpret" HTML
              their own way. This led to the infamous "Browser Wars" where
              developers had to write different code for different browsers!
            </p>
            <div className="historical-note">
              <strong>📰 Historical Note:</strong> In 1995, both Netscape
              Navigator and Internet Explorer had different implementations of
              the same HTML tags - developers had to choose which browser to
              "break"!
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🚀 Modern HTML (1997-Present)</h3>
            <p>
              HTML has evolved from just basic text structure to supporting
              multimedia, animations, forms, and much more. Today's HTML5 can
              handle everything from simple text to complex web applications!
            </p>
          </div>
        </div>
      ),
      overview:
        "In this lesson, we'll explore the fundamentals of HTML including tags, elements, attributes, and document structure. We'll take a journey through the history of the web and learn how HTML became the backbone of the internet!",
      videoId: "UB1O30fR-EE",
    },
    2: {
      title: "CSS Styling",
      history: () => (
        <div className="lesson-history">
          <div className="timeline-item animate-on-scroll">
            <h3>🎨 The Style Crisis of the 90s</h3>
            <p>
              Imagine being a web designer in 1995. You had HTML for structure,
              but every single piece of styling had to be done with HTML tags.
              Want a red text? You'd use <code>&lt;font color="red"&gt;</code>.
              Wanted bold text? <code>&lt;b&gt;</code>! This was a designer's
              nightmare!
            </p>
            <div className="code-nightmare">
              <pre>
                <code>
                  &lt;font face="Arial" size="12" color="blue"&gt;
                  &lt;b&gt;Styled Text&lt;/b&gt; &lt;/font&gt;
                </code>
              </pre>
              <p className="caption">😱 This was actual web design in 1995!</p>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🧙‍♂️ Håkon's Magic Solution (1994)</h3>
            <p>
              Enter Håkon Wium Lie, a Norwegian computer scientist who had this
              radical idea: "What if we separated content from design?" While
              working with Tim Berners-Lee at CERN, he proposed "Cascading Style
              Sheets" - a way to keep HTML clean and handle all styling
              separately.
            </p>
            <div className="innovation-highlight">
              <strong>💡 The Lightbulb Moment:</strong> Håkon realized that web
              pages could maintain the same HTML structure but look completely
              different through CSS - just like how a newspaper can be printed
              in black & white or full color!
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🔥 Browser Support Drama (1996-2000)</h3>
            <p>
              CSS Level 1 became official in 1996, but browsers were sloooow to
              support it. Internet Explorer 3 had "partial" CSS support that was
              mostly broken! Web developers had to create CSS that worked AND
              create HTML fallbacks for older browsers.
            </p>
            <div className="browser-war">
              <div className="browser-icon">IE3</div>
              <span>vs</span>
              <div className="browser-icon">CSS</div>
              <span>Result:</span>
              <div className="loser">😵 Nightmare Mode Activated</div>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🎯 CSS Gets Super Powers (2000-2010)</h3>
            <p>
              CSS2 in 1998 added positioning and media types. But the real
              game-changer? CSS3 (starting 1999) brought us animations,
              transitions, gradients, and flexbox. Suddenly, web designers could
              create animations without JavaScript!
            </p>
            <div className="evolution-demo">
              <div className="css-box">Basic</div>
              <div className="css-box animated">With Animations!</div>
            </div>
          </div>
        </div>
      ),
      overview:
        "This lesson covers CSS syntax, selectors, properties, and the box model. You'll discover how CSS saved web design from the chaos of HTML styling tags and learn to create beautiful, responsive websites.",
      videoId: "yfoY53QXEnI",
    },
    3: {
      title: "JavaScript Fundamentals",
      history: () => (
        <div className="lesson-history">
          <div className="timeline-item animate-on-scroll">
            <h3>⚡ The 10-Day Miracle (1995)</h3>
            <p>
              Brendan Eich at Netscape had just 10 days to create a programming
              language for the web. He was like, "I'll create something that
              looks like Java but runs in the browser!" - and thus, JavaScript
              was born in a caffeine-fueled coding marathon!
            </p>
            <div className="timeline-wow">
              <strong>🤯 Mind = Blown:</strong> JavaScript was created in about
              10 days, yet it's still powering most of the web today!
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🎭 The Name Game (Mocha → LiveScript → JavaScript)</h3>
            <p>
              First it was called "Mocha," then "LiveScript," but then Netscape
              made a deal with Sun Microsystems. Sun said, "Hey, we have this
              popular language called Java. Why don't you rename it to
              JavaScript?" - even though they're completely different languages!
            </p>
            <div className="confusion-note">
              <div className="lang-comparison">
                <div className="lang-box">
                  <h4>Java</h4>
                  <code>public static void main(String[] args) {"{"}</code>
                </div>
                <div className="vs">VS</div>
                <div className="lang-box">
                  <h4>JavaScript</h4>
                  <code>
                    function main() {"{"} console.log("Hi!"); {"}"}
                  </code>
                </div>
              </div>
              <p className="caption">
                Same family name, totally different languages! 😄
              </p>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🏛️ The Standards Game (1997)</h3>
            <p>
              After Microsoft created their own version called "JScript,"
              everyone realized they needed to standardize. So they created
              ECMAScript - the official standard for JavaScript. Think of
              ECMAScript as the "recipe" and JavaScript as the "dish" different
              companies serve!
            </p>
            <div className="standardization-demo">
              <div className="recipe-box">
                <h4>📋 ECMAScript Standard</h4>
                <p>The official recipe</p>
              </div>
              <div className="chef-box">
                <h4>👨‍🍳 JavaScript Implementation</h4>
                <p>How each browser "cooks" it</p>
              </div>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🚀 The Renaissance (2005-Present)</h3>
            <p>
              From being just "that thing that makes popups," JavaScript
              exploded into everything: Ajax made websites feel instant, Node.js
              brought JavaScript to servers, and modern frameworks like React,
              Vue, and Angular created entire ecosystems!
            </p>
            <div className="evolution-showcase">
              <div className="evolution-stage">
                <span className="stage">1.0</span>
                <span>Popups & Alerts</span>
              </div>
              <div className="evolution-stage">
                <span className="stage">2.0</span>
                <span>AJAX & Dynamic Content</span>
              </div>
              <div className="evolution-stage">
                <span className="stage">3.0</span>
                <span>Node.js & Server-Side</span>
              </div>
              <div className="evolution-stage">
                <span className="stage">4.0</span>
                <span>Frameworks & Apps</span>
              </div>
            </div>
          </div>
        </div>
      ),
      overview:
        "We'll cover JavaScript basics including variables, data types, functions, and control structures. Discover the fascinating story of how a 10-day creation became the backbone of modern web development!",
      videoId: "W6NZfCO5SIk",
    },
    4: {
      title: "React Components",
      history: () => (
        <div className="lesson-history">
          <div className="timeline-item animate-on-scroll">
            <h3>😱 The Facebook Problem (2011-2013)</h3>
            <p>
              Imagine managing Facebook's news feed - millions of users,
              constantly updating content, and you need to re-render everything
              efficiently. Traditional DOM manipulation was getting sloooow and
              complex. Something had to change!
            </p>
            <div className="problem-demo">
              <div className="dom-comparison">
                <div className="old-way">
                  <h4>🚫 The Old Way</h4>
                  <p>Manipulate DOM directly = Slow & Messy</p>
                </div>
                <div className="new-way">
                  <h4>✨ React Way</h4>
                  <p>Describe what you want = Fast & Clean</p>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🎭 The Component Revelation (2013)</h3>
            <p>
              Jordan Walke at Facebook had an epiphany: "What if we broke down
              UI into tiny, reusable pieces?" - like LEGO blocks! Each component
              would be independent, reusable, and easy to test. This was
              revolutionary!
            </p>
            <div className="lego-analogy">
              <div className="lego-piece">Header</div>
              <div className="lego-piece">Button</div>
              <div className="lego-piece">Card</div>
              <div className="lego-piece">Footer</div>
              <p className="caption">Build websites like LEGO! 🧱</p>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🔮 The Virtual DOM Magic</h3>
            <p>
              React introduced the Virtual DOM - basically a "practice version"
              of the real DOM. When data changes, React first updates the
              Virtual DOM, compares it with the previous version, and only
              updates what's actually changed on the real page. It's like a
              smart assistant who only does the necessary work!
            </p>
            <div className="virtual-dom-demo">
              <div className="dom-layer">
                <span className="label">Virtual DOM (Fast Updates!)</span>
                <div className="virtual-content">
                  <div className="content-box">User Name</div>
                  <div className="content-box">Like Count</div>
                </div>
              </div>
              <div className="arrow">⚡</div>
              <div className="dom-layer">
                <span className="label">Real DOM (Minimal Changes!)</span>
                <div className="real-content">
                  <div className="content-box updated">John Doe</div>
                  <div className="content-box">42 Likes</div>
                </div>
              </div>
            </div>
          </div>

          <div className="timeline-item animate-on-scroll">
            <h3>🌟 The Revolution Spreads (2013-Present)</h3>
            <p>
              Once React proved its worth at Facebook and Instagram, other
              companies started adopting it. Airbnb, Netflix, Uber - everyone
              wanted to be "React-friendly." Now React is everywhere, from
              simple websites to complex mobile apps!
            </p>
            <div className="adoption-timeline">
              <div className="adoption-point">2013: React Created</div>
              <div className="adoption-point">2014: Instagram Acquired</div>
              <div className="adoption-point">2015: React Native Launched</div>
              <div className="adoption-point">
                2020: Hooks Revolutionized State
              </div>
              <div className="adoption-point">Today: React Everywhere! 🌍</div>
            </div>
          </div>
        </div>
      ),
      overview:
        "This lesson introduces React concepts including components, JSX, props, state, and hooks. Discover how Facebook's solution to complex UIs became the most popular frontend library in the world!",
      videoId: "Ke90Tje7VS0",
    },
  };

  // Mock quiz data - in a real app, this would come from an API
  const quizData = {
    1: [
      // HTML Basics
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlink and Text Markup Language",
        ],
        correct: 0,
      },
      {
        question: "Which tag is used to create a paragraph in HTML?",
        options: ["<p>", "<para>", "<text>", "<pg>"],
        correct: 0,
      },
      {
        question: "What is the purpose of the <head> tag in HTML?",
        options: [
          "To display the main content",
          "To contain metadata about the document",
          "To create a header section",
          "To define the body",
        ],
        correct: 1,
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1,
      },
      {
        question: "What does the <br> tag do?",
        options: [
          "Creates a bold text",
          "Inserts a line break",
          "Defines a paragraph",
          "Creates a button",
        ],
        correct: 1,
      },
    ],
    2: [
      // CSS Styling
      {
        question: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Creative Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets",
        ],
        correct: 2,
      },
      {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "bg-color"],
        correct: 2,
      },
      {
        question: "How do you select an element with id 'myId' in CSS?",
        options: ["#myId", ".myId", "myId", "*myId"],
        correct: 0,
      },
      {
        question: "What is the difference between margin and padding?",
        options: [
          "Margin is inside the border, padding is outside",
          "Padding is inside the border, margin is outside",
          "They are the same",
          "Margin affects text, padding affects background",
        ],
        correct: 1,
      },
      {
        question: "How do you make text bold in CSS?",
        options: [
          "font-weight: bold;",
          "text-decoration: bold;",
          "font-style: bold;",
          "text-weight: bold;",
        ],
        correct: 0,
      },
    ],
    3: [
      // JavaScript Fundamentals
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correct: 3,
      },
      {
        question: "What is the correct way to write a comment in JavaScript?",
        options: [
          "// This is a comment",
          "/* This is a comment */",
          "# This is a comment",
          "<!-- This is a comment -->",
        ],
        correct: 0,
      },
      {
        question: "What is the output of console.log(typeof null)?",
        options: ["null", "undefined", "object", "boolean"],
        correct: 2,
      },
      {
        question: "How do you declare a function in JavaScript?",
        options: [
          "function myFunction() {}",
          "def myFunction() {}",
          "func myFunction() {}",
          "method myFunction() {}",
        ],
        correct: 0,
      },
      {
        question: "What is an array in JavaScript?",
        options: [
          "A single value",
          "A collection of elements",
          "A type of loop",
          "A conditional statement",
        ],
        correct: 1,
      },
    ],
    4: [
      // React Components
      {
        question: "What is JSX?",
        options: [
          "A JavaScript framework",
          "A syntax extension for JavaScript",
          "A CSS preprocessor",
          "A database query language",
        ],
        correct: 1,
      },
      {
        question:
          "Which hook is used to manage state in functional components?",
        options: ["useEffect", "useState", "useContext", "useReducer"],
        correct: 1,
      },
      {
        question: "What is the purpose of the useEffect hook?",
        options: [
          "To manage state",
          "To handle side effects",
          "To create components",
          "To render JSX",
        ],
        correct: 1,
      },
      {
        question: "How do you pass props to a component?",
        options: [
          "<Component prop={value} />",
          "<Component value />",
          "<Component.prop = value />",
          "<Component setProp(value) />",
        ],
        correct: 0,
      },
      {
        question: "What is the difference between state and props?",
        options: [
          "State is mutable, props are immutable",
          "Props are mutable, state is immutable",
          "They are the same",
          "State is for styling, props for data",
        ],
        correct: 0,
      },
    ],
  };

  useEffect(() => {
    const courseQuestions = quizData[courseId] || [];
    setQuestions(courseQuestions);
    setAnswers(new Array(courseQuestions.length).fill(null));
  }, [courseId]);

  // Show lesson first, then quiz after button click
  const [showQuiz, setShowQuiz] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Save progress to localStorage
      const progress = JSON.parse(
        localStorage.getItem("codelearn-progress") || "{}"
      );
      progress[`quiz-${courseId}-${lessonId}`] = {
        score:
          score +
          (selectedAnswer === questions[currentQuestion].correct ? 1 : 0),
        total: questions.length,
      };
      localStorage.setItem("codelearn-progress", JSON.stringify(progress));

      // Check subscription and redirect premium users to assignments
      const subscription = localStorage.getItem("subscription") || "free";
      if (subscription === "premium") {
        navigate(`/assignments/${courseId}/${lessonId}`);
      } else {
        setShowResult(true);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswers(new Array(questions.length).fill(null));
  };

  useEffect(() => {
    // Add scroll animation when lessons are displayed
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [showQuiz]);

  if (!showQuiz) {
    const lesson = lessonData[courseId];
    if (!lesson) {
      return <div className="container">Loading lesson...</div>;
    }
    return (
      <div className="container" style={{ maxWidth: "800px" }}>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "2rem",
            textAlign: "center",
            background: "linear-gradient(135deg, #207985, #1d4ed8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeInUp 0.8s ease-out",
          }}
        >
          {lesson.title}
        </h1>

        {lesson.image && (
          <div
            className="lesson-hero-image"
            style={{
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            <img
              src={lesson.image}
              alt={`${lesson.title} illustration`}
              style={{
                maxWidth: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            />
          </div>
        )}

        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            📚 The Amazing History
          </h2>
          <div
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            {lesson.history()}
          </div>
        </div>

        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            🎯 What You'll Learn
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            {lesson.overview}
          </p>
        </div>

        <div className="card" style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            🎥 Video Tutorial
          </h2>
          <div
            style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${lesson.videoId}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Tutorial Video"
            />
          </div>
        </div>

        <button
          onClick={() => setShowQuiz(true)}
          className="btn"
          style={{
            width: "100%",
            padding: "1rem",
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #207985, #1d4ed8)",
            animation: "pulse 2s infinite",
          }}
        >
          🚀 Take the Quiz and Test Your Knowledge!
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="container">Loading quiz...</div>;
  }

  if (showResult) {
    return (
      <div className="container" style={{ maxWidth: "600px" }}>
        <h1
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
        >
          Quiz Results
        </h1>
        <div className="card" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Your Score: {score}/{questions.length}
          </h2>
          <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
            {score === questions.length
              ? "Perfect! 🎉"
              : score > questions.length / 2
              ? "Great job! 👍"
              : "Keep practicing! 💪"}
          </p>
          <button
            onClick={resetQuiz}
            className="btn"
            style={{ marginTop: "1rem" }}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: "600px" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Quiz
      </h1>
      <div className="card">
        <div style={{ marginBottom: "1rem" }}>
          <span style={{ fontSize: "0.95rem", color: "#666" }}>
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <h2
          style={{
            fontSize: "1.1rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          {questions[currentQuestion].question}
        </h2>
        <div>
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "0.75rem",
                borderRadius: "8px",
                border:
                  selectedAnswer === index
                    ? "2px solid #2563eb"
                    : "1px solid #ccc",
                background: selectedAnswer === index ? "#e0eaff" : "#fff",
                marginBottom: "0.5rem",
                fontSize: "1rem",
                cursor: "pointer",
                transition: "border-color 0.2s",
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="btn"
          style={{
            marginTop: "1.5rem",
            background: selectedAnswer === null ? "#ccc" : "#2563eb",
            cursor: selectedAnswer === null ? "not-allowed" : "pointer",
          }}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
