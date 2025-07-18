import React from "react";
import team from "../assets/images/team.jpg";
import tick from "../assets/images/tick.png";

const About = () => {
  return (
    <div className="w-full flex p-9 bg-white">
      <div className="w-1/2">
        <img src={team} alt="doctors" />
      </div>
      <div className="w-1/2 pl-8">
        <h1 className="text-lg text-teal-500 font-bold">About Us</h1>

        <h2 className="text-4xl font-bold w-2/3 py-6">
          {" "}
          We are trusted The Best Certificate Healthcare
        </h2>
        <p className="py-4">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <ul className="">
          <li className="py-2 font-bold flex">
           
              <img src={tick} className="h-5 w-5 mr-2" />
              Peaceful & Clean Environment </li>

          <li className="py-2 font-bold flex">
            <img src={tick} className="h-5 w-5 mr-2" />
            Digital laboratory</li>
          <li className="py-2 font-bold flex">
            <img src={tick} className="h-5 w-5 mr-2" />
            Professional doctors</li>
          <li className="py-2 font-bold flex">
            <img src={tick} className="h-5 w-5 mr-2" />
            Emergency services</li>
          <li className="py-2 font-bold flex">
            <img src={tick} className="h-5 w-5 mr-2" />
            Multi-Specialty Departments</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
