import React from "react";

function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <img
              src="https://scontent.fcgy1-1.fna.fbcdn.net/v/t39.30808-6/333210843_1593560104444837_1104284817420728552_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHsBW4ZpGQUirMoMVGxXFb6S-JGvA6f2stL4ka8Dp_ay3E37cbeRswQ3gkxdSgWgQFn18-OaaMrTFfK4yjC1x3Q&_nc_ohc=DpCPBszHeGUAX_f-Q-F&_nc_ht=scontent.fcgy1-1.fna&oh=00_AfBuM12h-FpGuAy-KodP1FvX70x8g2VQYWmPD2XJo7K2bg&oe=640A4F06"
              alt="Profile"
              className="w-full rounded-lg"
            />
          </div>
          <div className="w-full md:w-2/3 p-4">
            <p className="text-gray-800 mb-4 text-3xl">
              Hi, my name is Nicose John Gallaza Soriano and I'm a Information Technology Student. I'm into Technology and that is why i take the Information Technology.
            </p>
            <p className="text-gray-800 mb-4 text-2xl">
              Some of my skills include Artist, Illustrator, Designer, and Game Enthusiast.
            </p>
            <p className="text-gray-800 mb-4 text-2xl">
              I do some of these hobbies like doing Traditional/Digital Arts, Cycling, Photography, Listening to Music, Playing FPS Games, and Programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;