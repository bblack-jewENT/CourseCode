import { useState } from "react";
import { useParams } from "react-router-dom";

const Assignments = () => {
  const { courseId, lessonId } = useParams();
  const [url, setUrl] = useState("");
  const subscription = localStorage.getItem("subscription") || "free";

  const assignments = {
    1: {
      1: {
        title: "Build a Personal Portfolio Website",
        description:
          "Create a simple HTML page that includes your name, a brief bio, and links to your social media or projects. Use proper semantic HTML tags.",
        tasks: [
          "Create an index.html file",
          "Add a header with your name",
          "Include a paragraph about yourself",
          "Add links to external websites",
          "Style it with basic CSS (optional for bonus points)",
        ],
        resources: [
          "HTML tags reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
          "Getting started with HTML: https://www.w3schools.com/html/",
        ],
      },
      2: {
        title: "Create a Recipe Card Layout",
        description:
          "Design and implement a recipe card using HTML structure. Include ingredients list, instructions, and nutritional information.",
        tasks: [
          "Structure the recipe with proper headings",
          "Create an unordered list for ingredients",
          "Use ordered list for cooking steps",
          "Add images or placeholders",
          "Include preparation time and servings",
        ],
        resources: [
          "HTML lists: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul",
          "Semantic HTML: https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
        ],
      },
      3: {
        title: "Build a Contact Form",
        description:
          "Create a contact form with name, email, and message fields using HTML form elements.",
        tasks: [
          "Use the <form> element",
          "Add input fields for text and email",
          "Include a textarea for messages",
          "Add submit button",
          "Consider form validation (optional)",
        ],
        resources: [
          "HTML forms: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
          "Input types: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input",
        ],
      },
    },
    2: {
      1: {
        title: "Style a Blog Post Layout",
        description:
          "Apply CSS styling to create an attractive blog post layout with typography, colors, and spacing.",
        tasks: [
          "Style headings with different font sizes",
          "Add background colors and borders",
          "Implement proper spacing with margins and padding",
          "Style links with hover effects",
          "Make it responsive for different screen sizes",
        ],
        resources: [
          "CSS selectors: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",
          "CSS box model: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model",
        ],
      },
      2: {
        title: "Create a Navigation Menu",
        description:
          "Build a horizontal navigation menu with CSS styling and hover effects.",
        tasks: [
          "Create HTML structure for navigation",
          "Remove default list styling",
          "Style links as inline blocks",
          "Add hover and active states",
          "Make it responsive with media queries",
        ],
        resources: [
          "CSS flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",
          "Media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries",
        ],
      },
      3: {
        title: "Design a Product Card Grid",
        description:
          "Create a grid layout of product cards with images, titles, prices, and buttons.",
        tasks: [
          "Use CSS Grid or Flexbox for layout",
          "Style product cards with shadows and borders",
          "Add hover effects for interactivity",
          "Implement responsive grid",
          "Style buttons and typography",
        ],
        resources: [
          "CSS Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",
          "CSS transitions: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions",
        ],
      },
    },
    3: {
      1: {
        title: "Build an Interactive To-Do List",
        description:
          "Create a JavaScript-powered to-do list where users can add, complete, and delete tasks.",
        tasks: [
          "Create HTML structure for the app",
          "Add event listeners for user interactions",
          "Implement add new task functionality",
          "Add ability to mark tasks as complete",
          "Include delete functionality",
        ],
        resources: [
          "DOM manipulation: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
          "Event handling: https://developer.mozilla.org/en-US/docs/Web/Events",
        ],
      },
      2: {
        title: "Create a Simple Calculator",
        description:
          "Build a basic calculator with addition, subtraction, multiplication, and division operations.",
        tasks: [
          "Design the calculator interface",
          "Add click handlers for number buttons",
          "Implement operation buttons",
          "Create calculation logic",
          "Handle edge cases (division by zero, etc.)",
        ],
        resources: [
          "JavaScript operators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators",
          "Math object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math",
        ],
      },
      3: {
        title: "Build a Weather App Interface",
        description:
          "Create a weather app UI that displays current weather and forecast (focus on JavaScript logic, not API integration).",
        tasks: [
          "Design the weather display layout",
          "Implement temperature conversion functions",
          "Add weather icon logic based on conditions",
          "Create forecast display for multiple days",
          "Add interactive elements like unit toggle",
        ],
        resources: [
          "Date object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date",
          "Array methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",
        ],
      },
    },
    4: {
      1: {
        title: "Build a React Counter Component",
        description:
          "Create a React component that displays a counter with increment and decrement buttons.",
        tasks: [
          "Set up React component with useState",
          "Create increment and decrement functions",
          "Render counter value and buttons",
          "Add styling with CSS-in-JS or classes",
          "Implement reset functionality",
        ],
        resources: [
          "React useState: https://react.dev/reference/react/useState",
          "React components: https://react.dev/learn/your-first-component",
        ],
      },
      2: {
        title: "Create a React Todo App",
        description:
          "Build a complete todo application with React, including add, edit, delete, and toggle functionality.",
        tasks: [
          "Create TodoList and TodoItem components",
          "Implement state management for todos",
          "Add form for creating new todos",
          "Implement edit and delete features",
          "Add local storage persistence",
        ],
        resources: [
          "React forms: https://react.dev/reference/react-dom/components/form",
          "React state management: https://react.dev/learn/managing-state",
        ],
      },
      3: {
        title: "Build a React Weather Dashboard",
        description:
          "Create a weather dashboard component that fetches and displays weather data using React hooks.",
        tasks: [
          "Set up useEffect for data fetching",
          "Implement loading and error states",
          "Display weather information in cards",
          "Add search functionality for cities",
          "Implement temperature unit conversion",
        ],
        resources: [
          "React useEffect: https://react.dev/reference/react/useEffect",
          "Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
        ],
      },
    },
  };

  const assignment = assignments[courseId]?.[lessonId];

  if (!assignment || (subscription === "free" && courseId !== "1")) {
    return (
      <div className="container">
        <h1>Assignment Not Available</h1>
        <p>
          {subscription === "free"
            ? "Assignments are only available for HTML lessons on the free plan. Upgrade to Premium to access all assignments."
            : "The assignment for this lesson is not available yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: "800px" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        {assignment.title}
      </h1>

      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Description
        </h2>
        <p
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          {assignment.description}
        </p>
      </div>

      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Tasks
        </h2>
        <ul style={{ paddingLeft: "1.5rem" }}>
          {assignment.tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginBottom: "0.5rem",
                fontSize: "1rem",
                lineHeight: "1.4",
              }}
            >
              {task}
            </li>
          ))}
        </ul>
      </div>

      <div className="card" style={{ marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Resources
        </h2>
        <ul style={{ paddingLeft: "1.5rem" }}>
          {assignment.resources.map((resource, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              <a
                href={resource}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                {resource}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="card" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Ready to Submit?
        </h2>
        <p style={{ marginBottom: "1rem" }}>
          Once you've completed the assignment, enter the URL path to your
          project and submit it for review.
        </p>
        <input
          type="url"
          placeholder="https://github.com/username/project or https://vercel/username/pen/..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            width: "90%",
            padding: "0.75rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            fontSize: "1rem",
          }}
        />
        <button
          className="btn"
          onClick={() => {
            if (url.trim()) {
              // Save submission to localStorage
              const submissions = JSON.parse(
                localStorage.getItem("assignment-submissions") || "{}"
              );
              submissions[`${courseId}-${lessonId}`] = {
                url: url.trim(),
                submittedAt: new Date().toISOString(),
              };
              localStorage.setItem(
                "assignment-submissions",
                JSON.stringify(submissions)
              );
              alert(
                "Assignment submitted! Your instructor will review it soon."
              );
              setUrl("");
            } else {
              alert("Please enter a valid URL.");
            }
          }}
        >
          Submit Assignment
        </button>
      </div>
    </div>
  );
};

export default Assignments;
