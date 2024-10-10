import React from 'react';

const SocialLogin = () => {
  return (
    <button
      className="w-full bg-white border border-gray-300 rounded-md py-2 px-4 flex items-center justify-center hover:bg-gray-50 transition"
    >
      <img width={24} height={24} src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" className="mr-2" />
      Sign in with Google
    </button>
  );
};

export default SocialLogin;
