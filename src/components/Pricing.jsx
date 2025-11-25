import { useState } from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const Pricing = () => {
  const [subscription, setSubscription] = useState(
    localStorage.getItem("subscription") || "free"
  );
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFreeSubscribe = () => {
    localStorage.setItem("subscription", "free");
    setSubscription("free");
    alert("Switched to Free plan!");
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "9.99",
          },
          description: "CourseCode Premium Subscription - Monthly",
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    setIsProcessing(true);
    return actions.order.capture().then((details) => {
      // Payment successful
      localStorage.setItem("subscription", "premium");
      setSubscription("premium");
      setIsProcessing(false);
      alert(
        `Payment successful! Welcome to Premium plan, ${details.payer.name.given_name}!`
      );
    });
  };

  const onError = (err) => {
    setIsProcessing(false);
    console.error("PayPal error:", err);
    alert("Payment failed. Please try again.");
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
            $9.99/month
          </p>
          <ul style={{ textAlign: "left", margin: "1rem 0" }}>
            <li>All free features</li>
            <li>Course assignments and projects</li>
            <li>Completion certificates</li>
            <li>Advanced courses</li>
            <li>Priority support</li>
          </ul>
          {subscription === "premium" ? (
            <button
              className="btn"
              disabled
              style={{
                background: "#ccc",
                cursor: "not-allowed",
              }}
            >
              Current Plan
            </button>
          ) : (
            <div style={{ marginTop: "1rem" }}>
              {isProcessing ? (
                <div style={{ textAlign: "center", padding: "1rem" }}>
                  Processing payment...
                </div>
              ) : (
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                  style={{
                    layout: "vertical",
                    color: "blue",
                    shape: "rect",
                    label: "subscribe",
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
