import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields to continue.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Login failed");
      } else {
        localStorage.setItem("foodsphere_token", data.token);
        localStorage.setItem("foodsphere_role", data.role);
        if (data.name) localStorage.setItem("foodsphere_name", data.name);
        if (data.email) localStorage.setItem("foodsphere_email", data.email);
        
        if (data.role === 'restaurant') {
          navigate("/restaurant");
        } else if (data.role === 'ngo') {
          navigate("/ngo");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-surface overflow-hidden px-4">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 md:top-8 md:left-8 z-30 inline-flex items-center gap-2 px-3 py-2 bg-surface-container-low/50 border border-surface-variant/60 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high hover:border-secondary/30 transition-all duration-200 backdrop-blur-md scale-[0.98] active:scale-95"
      >
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        <span>Back</span>
      </Link>
      {/* Ambient soft organic background glows */}
      <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-secondary-fixed/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 -right-24 w-[480px] h-[480px] bg-primary-fixed/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] bg-tertiary-fixed/20 rounded-full blur-[140px] pointer-events-none z-0"></div>

      {/* Decorative Gold Filigree SVG Background Paths */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M -100,200 C 200,100 400,450 750,220 C 1100, -10 1300,380 1600,260"
          fill="none"
          opacity="0.6"
          stroke="#e6ca65"
          strokeDasharray="4,8"
          strokeWidth="1.2"
        ></path>
      </svg>

      {/* Logo/Brand (Above Card) */}
      <Link to="/" className="relative z-10 flex flex-col items-center gap-3 group mb-8">
        <div className="w-12 h-12 rounded-xl bg-surface-container-high border border-outline-variant/60 flex items-center justify-center text-secondary shadow-sm transition-transform duration-200 group-hover:scale-105">
          <span
            className="material-symbols-outlined text-secondary text-2xl"
            data-icon="restaurant"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            restaurant
          </span>
        </div>
        <div className="flex flex-col text-center">
          <span className="text-headline-md font-headline-md italic text-on-surface tracking-tight leading-none">
            FoodSphere 360
          </span>
        </div>
      </Link>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-surface-bright/90 rounded-[32px] p-8 md:p-10 border border-secondary/30 ambient-warm-card backdrop-blur-xl">
        <div className="text-center mb-8">
          <h1 className="text-headline-sm font-headline-sm text-on-surface mb-2">
            Welcome Back
          </h1>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Enter your credentials to access your dispatch portal.
          </p>
        </div>

        {error && (
          <div className="mb-6 px-4 py-3 rounded-xl bg-error-container/50 border border-error/20 flex items-start gap-3">
            <span className="material-symbols-outlined text-error text-sm mt-0.5">error</span>
            <p className="text-body-sm font-body-sm text-on-error-container">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">
                mail
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 pl-11 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-outline-variant"
                placeholder="chef@restaurant.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">
                lock
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 pl-11 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-outline-variant"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-container text-on-primary rounded-xl text-label-lg font-label-lg tracking-wide hover:bg-primary transition-all duration-200 shadow-md jewel-sapphire-glow active:scale-[0.98]"
          >
            <span>Sign In</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-surface-variant/50 text-center">
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="text-primary font-semibold hover:text-primary-container transition-colors underline-offset-4 hover:underline"
            >
              Join the movement
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
