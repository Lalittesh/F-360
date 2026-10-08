import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("restaurant");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields to continue.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Mock submission behavior
    console.log("Mock Register:", { name, email, password, role });
    navigate("/"); // Navigate to mock dashboard/home
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-surface overflow-hidden px-4 py-12">
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
      <Link to="/" className="relative z-10 flex flex-col items-center gap-3 group mb-8 mt-8">
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

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-[500px] bg-surface-bright/90 rounded-[32px] p-8 md:p-10 border border-secondary/30 ambient-warm-card backdrop-blur-xl">
        <div className="text-center mb-8">
          <h1 className="text-headline-sm font-headline-sm text-on-surface mb-2">
            Join the Movement
          </h1>
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Create an account to steward culinary surplus with dignity.
          </p>
        </div>

        {error && (
          <div className="mb-6 px-4 py-3 rounded-xl bg-error-container/50 border border-error/20 flex items-start gap-3">
            <span className="material-symbols-outlined text-error text-sm mt-0.5">error</span>
            <p className="text-body-sm font-body-sm text-on-error-container">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Role Selection */}
          <div className="space-y-2">
            <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1 text-center">
              I am joining as a...
            </label>
            <div className="grid grid-cols-2 gap-3 mt-2">
              <label
                className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                  role === "restaurant"
                    ? "border-secondary bg-secondary-fixed/20 shadow-sm"
                    : "border-surface-variant/60 hover:border-secondary/40 hover:bg-surface-container-low"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="restaurant"
                  className="sr-only"
                  checked={role === "restaurant"}
                  onChange={() => setRole("restaurant")}
                />
                <span className="material-symbols-outlined text-secondary text-2xl mb-1">
                  storefront
                </span>
                <span className="text-label-md font-label-md text-on-surface font-semibold">
                  Restaurant
                </span>
                {role === "restaurant" && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-secondary jewel-gold-glow animate-pulse"></span>
                )}
              </label>

              <label
                className={`relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                  role === "ngo"
                    ? "border-primary bg-primary-fixed/20 shadow-sm"
                    : "border-surface-variant/60 hover:border-primary/40 hover:bg-surface-container-low"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="ngo"
                  className="sr-only"
                  checked={role === "ngo"}
                  onChange={() => setRole("ngo")}
                />
                <span className="material-symbols-outlined text-primary text-2xl mb-1">
                  diversity_1
                </span>
                <span className="text-label-md font-label-md text-on-surface font-semibold">
                  Verified NGO
                </span>
                {role === "ngo" && (
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary jewel-sapphire-glow animate-pulse"></span>
                )}
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 md:col-span-2">
              <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">
                Full Name / Organization
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">
                  person
                </span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 pl-11 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-outline-variant"
                  placeholder="Jane Doe"
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
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
                  placeholder="jane@example.com"
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

            <div className="space-y-2">
              <label className="block text-label-sm font-label-sm text-on-surface-variant uppercase tracking-widest ml-1">
                Confirm
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline text-sm">
                  lock_reset
                </span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-surface-container-low border border-surface-variant/80 rounded-xl py-3.5 pl-11 pr-4 text-body-md font-body-md text-on-surface focus:outline-none focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all placeholder:text-outline-variant"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-label-lg font-label-lg tracking-wide transition-all duration-200 shadow-md active:scale-[0.98] ${
              role === "ngo"
                ? "bg-primary-container text-on-primary hover:bg-primary jewel-sapphire-glow"
                : "bg-surface-bright text-secondary border border-secondary/40 hover:bg-surface-container-low jewel-gold-glow"
            }`}
          >
            <span>Create Account</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-surface-variant/50 text-center">
          <p className="text-body-sm font-body-sm text-on-surface-variant">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-secondary font-semibold hover:text-secondary-fixed-variant transition-colors underline-offset-4 hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
