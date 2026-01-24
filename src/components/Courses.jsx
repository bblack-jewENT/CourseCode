import { useState, useEffect } from "react";
import { getPersistedItem, setPersistedItem } from "../services/persist";
import LessonCard from "./LessonCard";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [subscription, setSubscription] = useState("free");

  useEffect(() => {
    getPersistedItem("subscription", "free").then(setSubscription);
  }, []);

  const courses = [
    {
      id: 1,
      title: "HTML Basics",
      description: "Learn the foundation of web development",
      isPremium: false,
      lessons: [
        {
          id: 1,
          title: "Introduction to HTML",
          content:
            "HTML is the standard markup language for creating web pages.",
        },
        {
          id: 2,
          title: "HTML Elements",
          content: "Elements are the building blocks of HTML pages.",
        },
        {
          id: 3,
          title: "HTML Attributes",
          content:
            "Attributes provide additional information about HTML elements.",
        },
      ],
      assignments: [
        {
          id: 1,
          title: "Build a Simple Webpage",
          description:
            "Create a basic HTML page with headings, paragraphs, and links.",
        },
      ],
    },
    {
      id: 2,
      title: "CSS Styling",
      description: "Make your websites beautiful with CSS",
      isPremium: false,
      lessons: [
        {
          id: 4,
          title: "Introduction to CSS",
          content: "CSS is used to describe the presentation of a document.",
        },
        {
          id: 5,
          title: "CSS Selectors",
          content:
            "Selectors are used to select the HTML elements you want to style.",
        },
        {
          id: 6,
          title: "CSS Properties",
          content:
            "Properties define how the selected elements should be styled.",
        },
      ],
      assignments: [
        {
          id: 2,
          title: "Style a Portfolio Page",
          description: "Apply CSS to create an attractive portfolio layout.",
        },
      ],
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      description: "Add interactivity to your websites",
      isPremium: false,
      lessons: [
        {
          id: 7,
          title: "Introduction to JavaScript",
          content:
            "JavaScript is a programming language that adds interactivity to web pages.",
        },
        {
          id: 8,
          title: "Variables and Data Types",
          content: "Variables are containers for storing data values.",
        },
        {
          id: 9,
          title: "Functions",
          content:
            "Functions are blocks of code designed to perform a particular task.",
        },
      ],
      assignments: [
        {
          id: 3,
          title: "Create Interactive Elements",
          description: "Build buttons and forms with JavaScript functionality.",
        },
      ],
    },
    {
      id: 4,
      title: "React Components",
      description: "Build modern web applications with React",
      isPremium: false,
      lessons: [
        {
          id: 10,
          title: "Introduction to React",
          content:
            "React is a JavaScript library for building user interfaces.",
        },
        {
          id: 11,
          title: "Components",
          content: "Components are the building blocks of React applications.",
        },
        {
          id: 12,
          title: "State and Props",
          content:
            "State and props are used to manage data in React components.",
        },
      ],
      assignments: [
        {
          id: 4,
          title: "Build a React App",
          description:
            "Create a simple React application with multiple components.",
        },
      ],
    },
    {
      id: 5,
      title: "Advanced CSS & Modern Layout",
      description: "Master Flexbox, Grid, and modern CSS techniques",
      isPremium: false,
      lessons: [
        {
          id: 13,
          title: "Advanced CSS & Modern Layout",
          content: "Learn advanced CSS techniques like Flexbox and Grid.",
        },
      ],
      assignments: [
        {
          id: 5,
          title: "Build a Modern CSS Grid Dashboard",
          description:
            "Create a responsive dashboard layout using CSS Grid with multiple widget areas.",
        },
      ],
    },
    {
      id: 6,
      title: "ES6+ & Modern JavaScript",
      description: "Learn modern JavaScript features and syntax",
      isPremium: false,
      lessons: [
        {
          id: 14,
          title: "ES6+ & Modern JavaScript",
          content:
            "Explore modern JavaScript features including destructuring, modules, async/await.",
        },
      ],
      assignments: [
        {
          id: 6,
          title: "Build a Modern ES6+ Todo Application",
          description:
            "Create an advanced todo application using modern JavaScript features.",
        },
      ],
    },
    {
      id: 7,
      title: "Advanced React & Performance",
      description: "Master React Hooks, Context, and performance optimization",
      isPremium: false,
      lessons: [
        {
          id: 15,
          title: "Advanced React & Performance",
          content:
            "Master React Hooks for state management and performance optimization.",
        },
      ],
      assignments: [
        {
          id: 7,
          title: "Build a Performance-Optimized React Component Library",
          description:
            "Create a set of reusable React components with performance optimizations.",
        },
      ],
    },
    {
      id: 8,
      title: "Backend Development & APIs",
      description: "Learn server-side development and API architecture",
      isPremium: false,
      lessons: [
        {
          id: 16,
          title: "Backend Development & APIs",
          content:
            "Explore backend development with Node.js, databases, REST APIs, and cloud services.",
        },
      ],
      assignments: [
        {
          id: 8,
          title: "Build a RESTful API with Node.js and Express",
          description:
            "Create a complete REST API with user authentication and data validation.",
        },
      ],
    },
    {
      id: 9,
      title: "Database Design & Management",
      description: "Master SQL, NoSQL, and database architecture",
      isPremium: true,
      lessons: [
        {
          id: 9,
          title: "Database Design & Management",
          content:
            "Master database fundamentals including relational design, SQL, NoSQL databases.",
        },
      ],
      assignments: [
        {
          id: 9,
          title: "Design and Implement a Complete Database Schema",
          description:
            "Create a normalized database schema for an e-commerce system with proper relationships.",
        },
      ],
    },
    {
      id: 10,
      title: "Web Security & Best Practices",
      description:
        "Build secure applications and implement security best practices",
      isPremium: false,
      lessons: [
        {
          id: 10,
          title: "Web Security & Best Practices",
          content:
            "Master web security fundamentals including authentication, authorization, data protection.",
        },
      ],
      assignments: [
        {
          id: 10,
          title: "Build a Secure Authentication System",
          description:
            "Create a comprehensive authentication system with multiple security layers.",
        },
      ],
    },
    {
      id: 11,
      title: "Node.js & Express Fundamentals",
      description: "Master Node.js runtime and Express.js framework",
      isPremium: true,
      lessons: [
        {
          id: 11,
          title: "Node.js & Express Fundamentals",
          content:
            "Learn Node.js fundamentals including the event loop, npm ecosystem, Express.js framework.",
        },
      ],
      assignments: [
        {
          id: 11,
          title: "Create a Real-time Notification System",
          description:
            "Build a notification system using WebSocket connections with message queuing.",
        },
      ],
    },
    {
      id: 12,
      title: "Database Integration & ORM",
      description: "Connect applications to databases with ORM frameworks",
      isPremium: true,
      lessons: [
        {
          id: 12,
          title: "Database Integration & ORM",
          content:
            "Master database integration with Node.js including SQL vs NoSQL databases, ORM frameworks.",
        },
      ],
      assignments: [
        {
          id: 12,
          title: "Build a Multi-Database Application",
          description:
            "Create an application that uses both SQL and NoSQL databases for different data needs.",
        },
      ],
    },
    {
      id: 13,
      title: "API Design & Architecture",
      description: "Design scalable and maintainable APIs",
      isPremium: true,
      lessons: [
        {
          id: 13,
          title: "API Design & Architecture",
          content:
            "Design and build RESTful APIs with proper HTTP methods, status codes, error handling.",
        },
      ],
      assignments: [
        {
          id: 13,
          title: "Build a Microservices Architecture Demo",
          description:
            "Create a microservices application with multiple services, API gateway, and service communication.",
        },
      ],
    },
    {
      id: 14,
      title: "User Experience Fundamentals",
      description: "Learn user-centered design principles and UX research",
      isPremium: false,
      lessons: [
        {
          id: 14,
          title: "User Experience Fundamentals",
          content:
            "Learn user experience fundamentals including user research, information architecture.",
        },
      ],
      assignments: [
        {
          id: 14,
          title: "Conduct Comprehensive User Research",
          description:
            "Plan and execute a complete user research study including interviews, surveys, and usability testing.",
        },
      ],
    },
    {
      id: 15,
      title: "Visual Design & Branding",
      description: "Master visual design principles and brand identity",
      isPremium: false,
      lessons: [
        {
          id: 15,
          title: "Visual Design & Branding",
          content:
            "Master visual design principles including color theory, typography, layout, branding.",
        },
      ],
      assignments: [
        {
          id: 15,
          title: "Create a Complete Brand Identity System",
          description:
            "Design a comprehensive brand identity including logo, color palette, typography, and style guide.",
        },
      ],
    },
    {
      id: 16,
      title: "Prototyping & User Testing",
      description: "Build prototypes and conduct user testing studies",
      isPremium: true,
      lessons: [
        {
          id: 16,
          title: "Prototyping & User Testing",
          content:
            "Learn prototyping methodologies and user testing techniques including wireframing, interactive prototyping.",
        },
      ],
      assignments: [
        {
          id: 16,
          title: "Build and Test an Interactive Prototype",
          description:
            "Create a high-fidelity interactive prototype and conduct user testing to validate design decisions.",
        },
      ],
    },
    {
      id: 17,
      title: "Python Fundamentals",
      description: "Master Python programming from basics to advanced concepts",
      isPremium: false,
      lessons: [
        {
          id: 25,
          title: "Introduction to Python",
          content:
            "Python is a versatile, beginner-friendly programming language known for its clean syntax and powerful libraries. Learn why Python is one of the most popular languages for web development, data science, and automation.",
        },
        {
          id: 26,
          title: "Variables and Data Types",
          content:
            "Understand Python variables, data types (strings, integers, floats, booleans), and type casting. Learn how to work with different data types and convert between them.",
        },
        {
          id: 27,
          title: "Operators and Control Flow",
          content:
            "Master arithmetic, comparison, logical, and assignment operators. Learn conditional statements (if, elif, else) and how to control program flow.",
        },
        {
          id: 28,
          title: "Loops and Iterations",
          content:
            "Learn for and while loops, loop control statements (break, continue), and how to iterate over sequences. Practice nested loops and comprehensions.",
        },
        {
          id: 29,
          title: "Functions and Modules",
          content:
            "Create reusable functions with parameters and return values. Understand scope, lambda functions, and how to organize code using modules and packages.",
        },
        {
          id: 30,
          title: "Lists, Tuples, and Dictionaries",
          content:
            "Work with Python collections including lists, tuples, sets, and dictionaries. Learn slicing, unpacking, and common collection methods.",
        },
        {
          id: 31,
          title: "String Manipulation",
          content:
            "Master string operations including concatenation, formatting, methods, and regular expressions for pattern matching.",
        },
        {
          id: 32,
          title: "File I/O and Error Handling",
          content:
            "Learn reading and writing files in different modes. Understand exception handling with try-except blocks and custom exceptions.",
        },
      ],
      assignments: [
        {
          id: 17,
          title: "Build a Personal Calculator Application",
          description:
            "Create a multi-function calculator that handles arithmetic operations, stores history, and provides a user-friendly command-line interface.",
        },
        {
          id: 18,
          title: "Student Grade Management System",
          description:
            "Build a system to manage student records, calculate grades, generate reports, and perform data analysis on student performance.",
        },
        {
          id: 19,
          title: "File-Based Todo Application",
          description:
            "Create a todo application that saves tasks to a file, supports filtering, sorting, and provides a complete CRUD interface.",
        },
      ],
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Group courses by track
  const courseTracks = {
    "Frontend Development": {
      courses: [1, 2, 3, 4, 5, 6, 7],
      color: "#3B82F6",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    "Backend Development": {
      courses: [8, 9, 10, 11, 12, 13],
      color: "#10B981",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="1"></circle>
          <path d="M12 1v6m0 6v6"></path>
          <path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24"></path>
          <path d="M1 12h6m6 0h6"></path>
          <path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path>
        </svg>
      ),
    },
    "UI/UX Design": {
      courses: [14, 15, 16],
      color: "#8B5CF6",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="9"></line>
          <line x1="9" y1="15" x2="15" y2="15"></line>
        </svg>
      ),
    },
    Python: {
      courses: [17],
      color: "#F59E0B",
      icon: (
        <svg viewBox="0 0 24 24" width="40" height="40" fill="currentColor">
          <path d="M12 2c-1.1 0-2 .9-2 2v2.5c-1.5.3-2.8 1.2-3.7 2.4-.8 1.1-1.3 2.5-1.3 4.1 0 2.2.9 4.2 2.4 5.6l-1.8 1.8c-1.7-1.7-2.7-4-2.7-6.4 0-1.9.5-3.7 1.4-5.3.9-1.5 2.2-2.7 3.7-3.5V4c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v2.5c1.5.3 2.8 1.2 3.7 2.4.8 1.1 1.3 2.5 1.3 4.1 0 2.2-.9 4.2-2.4 5.6l1.8 1.8c1.7-1.7 2.7-4 2.7-6.4 0-1.9-.5-3.7-1.4-5.3-.9-1.5-2.2-2.7-3.7-3.5V4c0-1.1-.9-2-2-2h-8zm0 4h8v10c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V6z" />
          <ellipse cx="7" cy="12" rx="1.5" ry="2.5" />
          <path d="M9 15c.5.5 1.2.8 2 .8s1.5-.3 2-.8" />
        </svg>
      ),
    },
  };

  return (
    <div className="container">
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Our Courses
      </h1>

      {/* Search Bar */}
      <div style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            padding: "0.75rem",
            width: "82.5%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "1rem",
          }}
        />
      </div>

      {/* Course Tracks Navigation */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
        }}
      >
        {Object.entries(courseTracks).map(([trackName, trackInfo]) => (
          <div
            key={trackName}
            style={{
              background: `linear-gradient(135deg, ${trackInfo.color}20, ${trackInfo.color}10)`,
              border: `2px solid ${trackInfo.color}40`,
              borderRadius: "12px",
              padding: "1rem 1.5rem",
              flex: "1",
              minWidth: "200px",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => {
              const element = document.getElementById(
                `track-${trackName.replace(/\s+/g, "-").toLowerCase()}`,
              );
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-4px)";
              e.target.style.boxShadow = `0 8px 25px ${trackInfo.color}30`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "0.5rem",
                color: trackInfo.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {trackInfo.icon}
            </div>
            <h3
              style={{
                margin: 0,
                color: trackInfo.color,
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              {trackName}
            </h3>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                color: "#666",
                fontSize: "0.9rem",
              }}
            >
              {trackInfo.courses.length} courses
            </p>
          </div>
        ))}
      </div>

      {/* Course Tracks */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        {Object.entries(courseTracks).map(([trackName, trackInfo]) => {
          const trackCourses = filteredCourses.filter((course) =>
            courseTracks[trackName].courses.includes(course.id),
          );

          if (trackCourses.length === 0) return null;

          return (
            <div
              key={trackName}
              id={`track-${trackName.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <div
                style={{
                  background: `linear-gradient(135deg, ${trackInfo.color}, ${trackInfo.color}CC)`,
                  color: "white",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  textAlign: "center",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    margin: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span style={{ fontSize: "2rem" }}>{trackInfo.icon}</span>
                  {trackName}
                </h2>
                <p style={{ margin: "0.5rem 0 0 0", opacity: 0.9 }}>
                  Master {trackName.toLowerCase()} with hands-on projects and
                  expert guidance
                </p>
              </div>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                {trackCourses.map((course) => (
                  <div
                    key={course.id}
                    className="card"
                    style={{
                      minWidth: "280px",
                      flex: "1",
                      border: `2px solid ${trackInfo.color}20`,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        color: trackInfo.color,
                      }}
                    >
                      {course.title}
                      {course.isPremium && (
                        <span
                          style={{
                            background: "#ffd700",
                            color: "#000",
                            padding: "0.2rem 0.5rem",
                            borderRadius: "4px",
                            fontSize: "0.8rem",
                            marginLeft: "0.5rem",
                          }}
                        >
                          Premium
                        </span>
                      )}
                    </h3>
                    <p style={{ marginBottom: "1rem", color: "#666" }}>
                      {course.description}
                    </p>
                    {course.isPremium && subscription !== "premium" ? (
                      <div
                        style={{
                          background: "#f0f0f0",
                          padding: "1rem",
                          borderRadius: "8px",
                          textAlign: "center",
                        }}
                      >
                        <p style={{ color: "#666", marginBottom: "1rem" }}>
                          This course requires a premium subscription
                        </p>
                        <a href="/pricing" className="btn">
                          Upgrade to Premium
                        </a>
                      </div>
                    ) : (
                      <div>
                        {course.lessons.map((lesson) => (
                          <LessonCard
                            key={lesson.id}
                            lesson={lesson}
                            courseId={course.id}
                          />
                        ))}
                        {course.assignments.length > 0 && (
                          <div style={{ marginTop: "1rem" }}>
                            <h4
                              style={{
                                fontWeight: "bold",
                                marginBottom: "0.5rem",
                                color: trackInfo.color,
                              }}
                            >
                              Assignments:
                            </h4>
                            {course.assignments.map((assignment) => (
                              <div
                                key={assignment.id}
                                style={{
                                  background: `${trackInfo.color}10`,
                                  border: `1px solid ${trackInfo.color}20`,
                                  padding: "0.75rem",
                                  borderRadius: "6px",
                                  marginBottom: "0.5rem",
                                }}
                              >
                                <strong style={{ color: trackInfo.color }}>
                                  {assignment.title}
                                </strong>
                                <p
                                  style={{
                                    fontSize: "0.9rem",
                                    color: "#666",
                                    margin: "0.25rem 0 0 0",
                                  }}
                                >
                                  {assignment.description}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
