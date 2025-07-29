import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-4xl font-bold text-center text-slate-800 mb-8">My Profile</h1>

      <form className="flex flex-col gap-6">
        <div className="flex justify-center">
          <img
            src={currentUser.avatar}
            alt="profile"
            className="rounded-full h-28 w-28 object-cover border-4 border-slate-200 shadow-md cursor-pointer transition duration-300 hover:scale-105"
          />
        </div>

        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />

        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border border-slate-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-slate-400"
        />

        <button
          type="submit"
          className="bg-slate-700 text-white py-3 rounded-xl font-semibold uppercase tracking-wide hover:bg-slate-800 transition duration-300"
        >
          Update Profile
        </button>
      </form>

      <div className="flex justify-between items-center mt-6 text-sm font-medium text-slate-700">
        <span className="cursor-pointer hover:text-red-600 transition">🗑️ Delete Account</span>
        <span className="cursor-pointer hover:text-red-600 transition">🚪 Sign Out</span>
      </div>
    </div>
  );
}
