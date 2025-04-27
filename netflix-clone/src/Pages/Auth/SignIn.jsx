import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ensure Link is imported
import AuthLayout from './AuthLayout';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign in logic
    console.log({ email, password });
    navigate('/browse'); // Redirect after sign in
  };

  return (
    <AuthLayout>
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ... form fields same as Login.jsx ... */}
      </form>
      <div className="mt-4 text-gray-400">
        <span>New to Netflix? </span>
        <Link to="/login" className="text-white hover:underline">
          Sign up now
        </Link>
      </div>
      <p className="mt-6 text-sm text-gray-400">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </AuthLayout>
  );
};

export default SignIn;