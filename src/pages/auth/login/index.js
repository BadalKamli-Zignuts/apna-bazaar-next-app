import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res && res.data.success) {
        // Handle successful login
        console.log("Successful login");
        router.push("/");
      } else {
        // Display error message if login fails
        console.error(res.data.message);
      }
    } catch (error) {
      // Handle login failure due to incorrect email or password
      console.error("Incorrect Email or Password");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Layout>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md p-4 bg-white rounded">
          <form onSubmit={handleSubmit} className="auth-form">
            <h2 className="text-center mb-5">Login</h2>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Enter Your Password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded"
            >
              Login
            </button>
            <div className="text-center mt-3">
              <p>
                New to Apna Bazaar?{" "}
                <Link href="/auth/register">Register here.</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
