import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("foodsphere_token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch(`${import.meta.env.VITE_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          localStorage.removeItem("foodsphere_token");
          navigate("/login");
        } else {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(() => {
        localStorage.removeItem("foodsphere_token");
        navigate("/login");
      });
  }, [navigate]);

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-2xl mx-auto mt-20 bg-surface-bright border border-secondary/30 rounded-3xl text-center ambient-warm-card shadow-xl">
      <h1 className="text-display-sm font-display-sm text-on-surface mb-4">
        Welcome to the Dashboard
      </h1>
      <p className="text-body-lg text-on-surface-variant mb-6">
        Hello {user.name}, you are logged in as a <strong>{user.role}</strong>.
      </p>
      <p className="text-body-md text-on-surface-variant mb-8 italic">
        (This is a temporary placeholder for Phase 2 backend verification)
      </p>
      <button
        onClick={() => {
          localStorage.removeItem("foodsphere_token");
          localStorage.removeItem("foodsphere_role");
          navigate("/login");
        }}
        className="inline-flex items-center justify-center px-6 py-3 bg-error-container text-on-error-container rounded-lg font-label-md tracking-wide hover:bg-error hover:text-on-error transition-all"
      >
        Log Out
      </button>
    </div>
  );
}
