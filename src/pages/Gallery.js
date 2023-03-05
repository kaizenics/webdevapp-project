import React from "react";

function Gallery() {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Programming Stuffs</h1>
      <div className="flex flex-wrap justify-center mt-8">
      <img src="https://www.zdnet.com/a/img/resize/a4c8436e7e3adf6dfb14266ca1aa83b8157ad0c2/2021/07/19/8a337c80-5ed6-43a1-98fb-b981d420890f/programming-languages-shutterstock-1680857539.jpg?auto=webp&fit=crop&height=675&width=1200" className="w-1/2 md:w-1/4 p-2"/>
      <img src="https://www.incimages.com/uploaded_files/image/1920x1080/software-computer-code-1940x900_35196.jpg" className="w-1/2 md:w-1/4 p-2"/>
      <img src="https://storage.googleapis.com/algodailyrandomassets/curriculum/fundamentals/programming.jpg" className="w-1/2 md:w-1/4 p-2"/>
      <img src="https://assets.entrepreneur.com/content/3x2/2000/20150708172005-coding-working-workspace-apple-macintosh.jpeg?crop=16:9" className="w-1/2 md:w-1/4 p-2"/>
      </div>
    </div>
  );
}

export default Gallery;