"use client";

import React, { useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import Image from "next/image";

export default function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    setError("")
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log(res);
      const data = await res.json();
      if (data.error) {
        setError(data.message || "Login failed");
      } else {
        // Redirect or show success
        window.location.href = "/";
      }
    } catch {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center text-[#fff] p-2">
      <Image
        src="/assets/bg.webp"
        alt="Background"
        fill
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
        className="select-none pointer-events-none"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-transparent p-8 border border-gray-200 rounded-lg shadow-custom w-96 text-center backdrop-blur-[10px]">
          <h1 className="text-center text-2xl text-[#fff] font-bold mb-8">Login</h1>
          {error && <p className="text-red-500 text-sm pb-2">{error}</p>}
          <form onSubmit={handleSubmit}>
            <fieldset disabled={loading} className="flex flex-col gap-6">
              <div className="flex items-center px-4 py-2 border border-[#FFFFFF33] rounded-full">
                <input className="input" type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
                <FaUser />
              </div>
              <div className="flex items-center px-4 py-2 border-2 border-[#FFFFFF33] rounded-full">
                <input className="input" type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />
                <FaLock />
              </div>
              <div>
                <button
                  className={`w-full bg-[#fff] text-[#000] p-2 rounded-full font-bold cursor-pointer ${
                    loading && "opacity-50"
                  }`}
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Logging..." : "Login"}
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}