import React from 'react';

import faq from '../../assets/faq.png'

const Faq = () => {
    return (
        <div className='my-10'>
            <section className="bg-amber-100 dark:bg-teal-900 grid grid-cols-1 lg:grid-cols-2 items-center text-black text-left ">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl dark:text-gray-50">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 text-gray-900 dark:text-gray-100">EasyLearn is an innovative academic platform designed to provide quality education for students of all levels. With a wide range of courses, interactive learning materials, and expert guidance, it ensures an engaging and personalized learning experience. From video lectures to quizzes and live sessions, EasyLearn is your gateway to mastering subjects at your own pace.</p>
                    <div className="space-y-4">
                        <details className="w-full border border-gray-800 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 dark:text-gray-100">What courses are available on EasyLearn?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-100">EasyLearn offers courses on various academic subjects, including Math, Science, English, and ICT, tailored for students from primary to higher secondary levels. </p>
                        </details>
                        <details className="w-full border border-gray-800 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 dark:text-gray-100">How can I access the learning materials?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-100">Once enrolled, you can access all course materials, video lectures, and practice quizzes directly through the EasyLearn platform or mobile app. </p>
                        </details>
                        <details className="w-full border border-gray-800 rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 dark:text-gray-100">How do I contact support if I face an issue?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-100">You can contact our support team through the “Help & Support” section on the EasyLearn website or app. You may also email us at support@easylearn.com for assistance. </p>
                        </details>
                    </div>
                </div>

                <div>
                    <img src={faq} alt="" className='w-full' />
                </div>
            </section>
        </div>
    );
};

export default Faq;