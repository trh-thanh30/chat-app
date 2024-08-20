import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

/* eslint-disable react/no-unescaped-entities */
export default function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-400">
          Log In
          <span className="text-blue-500"> ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              className="w-full h-10 input input-bordered"
            />
          </div>

          <div className="">
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
              className="w-full h-10 input input-bordered"
            />
          </div>

          <Link
            to={"/sign-up"}
            className="inline-block mt-2 text-sm hover:underline hover:text-blue-600"
          >
            Don't have account?
          </Link>

          <div className="">
            <button disabled={loading} className="mt-2 btn btn-block btn-sm">
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Log In"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
