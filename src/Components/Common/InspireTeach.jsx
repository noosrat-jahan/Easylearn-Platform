import React from 'react';
import { Link } from 'react-router-dom';

const InspireTeach = () => {
    return (
        <div>
            <section className="bg-gray-50 dark:bg-gray-800 py-12 my-10 font-poppins">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 dark:text-amber-100 mb-4">
                                Inspire, Teach, and Make a Difference
                            </h2>
                            <p className="text-gray-600 dark:text-amber-100 mb-6">
                                Join EasLearn as a teacher and empower students across the country.
                                Share your knowledge, grow your career, and be part of the future of education.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Benefit 1 */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full">
                                        <i className="fas fa-chalkboard-teacher text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-amber-100">
                                            Flexible Teaching
                                        </h3>
                                        <p className="text-gray-600 dark:text-amber-100">
                                            Set your schedule and teach from anywhere. Our platform makes teaching seamless.
                                        </p>
                                    </div>
                                </div>

                                {/* Benefit 2 */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full">
                                        <i className="fas fa-dollar-sign text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-amber-100">
                                            Earn More
                                        </h3>
                                        <p className="text-gray-600 dark:text-amber-100">
                                            Get paid for every class you teach. Build your career while making a meaningful impact.
                                        </p>
                                    </div>
                                </div>

                                {/* Benefit 3 */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full">
                                        <i className="fas fa-users text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-amber-100">
                                            Build Your Profile
                                        </h3>
                                        <p className="text-gray-600 dark:text-amber-100">
                                            Showcase your expertise and gain recognition among students and peers.
                                        </p>
                                    </div>
                                </div>

                                {/* Benefit 4 */}
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-red-100 text-red-600 flex items-center justify-center rounded-full">
                                        <i className="fas fa-globe text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-amber-100">
                                            Reach Students Everywhere
                                        </h3>
                                        <p className="text-gray-600 dark:text-amber-100">
                                            Connect with students nationwide and make learning accessible to all.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link to="/teachon" className="bg-pink-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-pink-700">
                                    Join as a Teacher
                                </Link>
                            </div>
                        </div>

                        <div>
                            <img
                                src="https://i.ibb.co.com/Kb4k3FG/free-teaching-tools-for-teachers.jpg"
                                alt="Inspiring Teachers"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InspireTeach;