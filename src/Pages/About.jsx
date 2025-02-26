import React from "react";

const About = () => {
  return (
    <div className="w-10/12 mx-auto my-10 text-center dark:bg-gray-900">
      <h1 className="text-4xl text-purple-800 font-semibold text-center uppercase mb-5">
        About <span className="text-pink-500">EasyLearn</span>
      </h1>
      <p className="font-roboto dark:text-gray-200 text-lg">
        <span className="font-bold text-purple-700 ">EasyLearn</span> is a comprehensive education management platform designed to
        simplify and enhance the learning experience. Whether for schools,
        coaching centers, or online educators, our platform offers powerful
        tools for course management, student tracking, and interactive learning.
        We aim to bridge the gap between educators and learners by providing an
        intuitive and efficient system for academic success.  <br /> <br />

        With EasyLearn, institutions can automate administrative tasks, manage enrollments,
        schedule classes, and monitor student progress—all in one place. Our
        user-friendly dashboard ensures that teachers, students, and parents
        stay connected, making learning more organized and engaging. Advanced
        analytics and reporting features help educators make informed decisions
        and improve teaching effectiveness.  
        <br /> <br />
        Our mission is to make education accessible, efficient, and technology-driven. We continuously innovate
        to bring modern solutions that cater to the evolving needs of the
        education sector. By combining smart technology with seamless user
        experience, EasyLearn empowers institutions to focus on what truly
        matters—quality education and student success.
      </p>
    </div>
  );
};

export default About;
