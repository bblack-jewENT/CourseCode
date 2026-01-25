import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const { currentUser, updateProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState(currentUser?.displayName || "");
  const [email, setEmail] = useState(currentUser?.email || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err);
      setMessage("Error logging out: " + err.message);
    }
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = async () => {
    setShowLogoutConfirm(false);
    await handleLogout();
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Update display name
      if (username !== currentUser.displayName) {
        await updateProfile(currentUser, { displayName: username });
      }
      // Email update might require re-authentication, so skip for now
      // Profile picture update - placeholder
      setMessage("Profile updated successfully!");
    } catch (error) {
      setMessage("Error updating profile: " + error.message);
    }
    setLoading(false);
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "2rem" }}
      >
        Settings
      </h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label
            style={{
              display: "block",
              fontWeight: "500",
              marginBottom: "0.5rem",
            }}
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
        </div>
        <div>
          <label
            style={{
              display: "block",
              fontWeight: "500",
              marginBottom: "0.5rem",
            }}
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
            disabled // Since email update is complex
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.75rem",
            background: "#207985",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Updating..." : "Update Profile"}
        </button>
        <button
          type="button"
          onClick={handleLogoutClick}
          style={{
            padding: "0.75rem",
            background: "#d32f2f",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Log Out
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: "1rem",
            color: message.includes("Error") ? "red" : "green",
          }}
        >
          {message}
        </p>
      )}

      {showLogoutConfirm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "8px",
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              maxWidth: "400px",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginBottom: "1rem", fontSize: "1.5rem" }}>
              Confirm Logout
            </h2>
            <p style={{ marginBottom: "2rem", color: "#555" }}>
              Are you sure you want to log out?
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <button
                onClick={cancelLogout}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "#ccc",
                  color: "#333",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: "#d32f2f",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
