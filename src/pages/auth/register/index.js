import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
// import axios from "axios";
// import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });

      if (res && res.data.success) {
        // Handle successful registration
        toast.success(res.data && res.data.message);
        router.push("/login");
      } else {
        // Displaying error message if registration fails
        toast.error(res.data.message);
      }
    } catch (error) {
      // Handling registration failure
      toast.error("Failed to Register");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div className="container">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full max-w-md p-4 bg-white rounded">
            <form onSubmit={handleSubmit} className="auth-form">
              <h2 className="text-center mb-5">Register</h2>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                />
              </div>
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
              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter Your Address"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded"
              >
                REGISTER
              </button>
              <div className="text-center mt-3">
                <p>
                  Already a user? <Link href="/auth/login">Login here.</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
