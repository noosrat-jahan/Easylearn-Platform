import React from 'react';
import { Link } from 'react-router-dom';

const AllClasses = () => {
    return (
        <div>
            
            <section id="all-classes" class="bg-white py-12">
                <div class="container mx-auto px-4">
                    <h2 class="text-2xl font-semibold mb-8">All Classes</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div class="class-card bg-gray-100 p-4 rounded-lg shadow-lg">
                            <img src="class-image.jpg" alt="Class Image" class="w-full h-40 object-cover rounded-md mb-4" />
                            <h3 class="text-lg font-bold">Mathematics Class 6</h3>
                            <p class="text-sm text-gray-600">Posted by: Mr. Ahmed</p>
                            <p class="text-sm text-gray-600">৳500 per month</p>
                            <p class="text-sm text-gray-700 mt-2">
                                A comprehensive course covering all key topics for Class 6 Mathematics.
                            </p>
                            <p class="text-sm text-gray-600 mt-2 mb-4">Total Enrolment: 30 students</p>
                            <Link to={`/all-classes/${1}`} class="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Enroll Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AllClasses;