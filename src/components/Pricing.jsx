import { useState } from "react";

const Pricing = () => {
  const [subscription, setSubscription] = useState(
    localStorage.getItem("subscription") || "free"
  );

  const handleFreeSubscribe = () => {
    localStorage.setItem("subscription", "free");
    setSubscription("free");
    alert("Switched to Free plan!");
  };

  const handlePremiumSubscribe = () => {
    localStorage.setItem("subscription", "premium");
    setSubscription("premium");
    alert("Switched to Premium plan!");
  };

  return (
    <div className="container" style={{ padding: "3rem 0" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Choose Your Plan
      </h1>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* Free Plan */}
        <div
          className="card"
          style={{
            minWidth: "300px",
            textAlign: "center",
            border:
              subscription === "free" ? "2px solid #2563eb" : "1px solid #ccc",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Free Plan
          </h2>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb" }}>
            $0/month
          </p>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>Access to basic courses</li>
            <li>Interactive quizzes</li>
            <li>Progress tracking</li>
            <li>Community support</li>
          </ul>
          <button
            className="btn"
            onClick={handleFreeSubscribe}
            disabled={subscription === "free"}
            style={{
              background: subscription === "free" ? "#ccc" : "#2563eb",
              cursor: subscription === "free" ? "not-allowed" : "pointer",
            }}
          >
            {subscription === "free" ? "Current Plan" : "Select Free"}
          </button>
        </div>

        {/* Premium Plan */}
        <div
          className="card"
          style={{
            minWidth: "300px",
            textAlign: "center",
            border:
              subscription === "premium"
                ? "2px solid #2563eb"
                : "1px solid #ccc",
          }}
        >
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Premium Plan
          </h2>
          <p style={{ fontSize: "2rem", fontWeight: "bold", color: "#2563eb" }}>
            $0/month
          </p>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>All free features</li>
            <li>Course assignments and projects</li>
            <li>Completion certificates</li>
            <li>Advanced courses</li>
            <li>Priority support</li>
          </ul>
          <button
            className="btn"
            onClick={handlePremiumSubscribe}
            disabled={subscription === "premium"}
            style={{
              background: subscription === "premium" ? "#ccc" : "#2563eb",
              cursor: subscription === "premium" ? "not-allowed" : "pointer",
            }}
          >
            {subscription === "premium" ? "Current Plan" : "Select Premium"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
