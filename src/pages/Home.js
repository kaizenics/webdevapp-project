import React from "react";

function Home() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to my website!</h1>
      <p className="text-lg text-gray-700">Here you'll find all sorts of great content.</p>
      <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Click me!</button>
    </div>
  );
}

export default Home;