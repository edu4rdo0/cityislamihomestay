"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, googleProvider } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Logged in with Google:", result.user);
      router.push("/reservation");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Logged in with Email:", result.user);
      router.push("/reservation");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-2xl font-bold">Login ke City Islami Homestay</h1>
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded border px-4 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded border px-4 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
          >
            Login with Email
          </button>

          <button
          onClick={handleGoogleLogin}
          className="mb-4 w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Login with Google
        </button>
        </form>

        {/* Link ke halaman Sign Up */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Belum punya akun?{" "}
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-600 underline"
          >
            Daftar di sini
          </button>
        </p>
      </div>
    </main>
  );
}