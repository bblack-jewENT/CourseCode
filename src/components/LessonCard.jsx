import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPersistedItem } from "../services/persist";

const LessonCard = ({ lesson, courseId }) => {
  const [subscription, setSubscription] = useState("free");

  useEffect(() => {
    getPersistedItem("subscription", "free").then(setSubscription);
  }, []);

  // Function to get MDN documentation URL based on lesson title
  const getMdnUrl = (title) => {
    const urlMap = {
      "Introduction to HTML":
        "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "HTML Elements":
        "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
      "HTML Attributes":
        "https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes",
      "Introduction to CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "CSS Selectors":
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
      "CSS Properties":
        "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference",
      "Introduction to JavaScript":
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      "Variables and Data Types":
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures",
      Functions:
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions",
      "Introduction to React":
        "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started",
      Components:
        "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components",
      "State and Props":
        "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_state_management",
      "Advanced CSS": "https://developer.mozilla.org/en-US/docs/Web/CSS",
      "ES6+ JavaScript":
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
      "React Hooks":
        "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state",
    };

    return urlMap[title] || "https://developer.mozilla.org/en-US/docs/Web";
  };

  // Check if this is a premium course
  // Premium courses: 9, 11, 12, 13, 16
  const premiumCourseIds = [9, 11, 12, 13, 16];
  const isPremiumCourse = premiumCourseIds.includes(parseInt(courseId));
  const canAccess = !isPremiumCourse || subscription === "premium";

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "0.5rem",
        background: canAccess ? "#fafafa" : "#f5f5f5",
        opacity: canAccess ? 1 : 0.7,
      }}
    >
      <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>
        {lesson.title}
        {isPremiumCourse && (
          <span
            style={{
              background: "#fbbf24",
              color: "#000",
              padding: "0.2rem 0.5rem",
              borderRadius: "4px",
              fontSize: "0.8rem",
              marginLeft: "0.5rem",
              fontWeight: "normal",
            }}
          >
            Premium
          </span>
        )}
      </h3>
      <p
        style={{ fontSize: "0.95rem", color: "#666", marginBottom: "0.75rem" }}
      >
        {lesson.content}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href={getMdnUrl(lesson.title)}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#2563eb",
            textDecoration: "underline",
            fontSize: "0.95rem",
          }}
        >
          Read Lesson
        </a>
        {canAccess ? (
          <Link
            to={`/quiz/${courseId}/${lesson.id}`}
            className="btn"
            style={{ background: "#125f42ff", fontSize: "0.95rem" }}
          >
            Start Lesson
          </Link>
        ) : (
          <a
            href="/pricing"
            className="btn"
            style={{
              background: "#fbbf24",
              color: "#000",
              fontSize: "0.95rem",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Upgrade for Access
          </a>
        )}
      </div>
    </div>
  );
};

export default LessonCard;
