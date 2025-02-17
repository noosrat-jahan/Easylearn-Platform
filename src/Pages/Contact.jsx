import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="dark:text-white font-inter bg-gradient-to-b from-white via-purple-50 to-blue-50  dark:from-black  dark:to-slate-900 h-auto pb-10 ">
        <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 items-center justify-around w-11/12 mx-auto gap-10">
          <div className="py-5  text-left space-y-6 ">
            <h1 className="text-5xl font-bold text-teal-500 ">Get in Touch</h1>
            {/* <div className='w-64 bg-amber-300 h-4 rounded-sm absolute top-1 '></div> */}
            <p className="text-lg leading-9">
              Have questions about Easylearn or need assistance? <br /> Get in
              touch with us for any inquiries, support, or collaboration. Fill
              out the contact form, email us, or reach out via phone. We're here
              to assist you with all your learning needs!
            </p>

            <div className="bg-white shadow-lg rounded-2xl p-5 max-w-md ">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contact Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">📍</span>
                  <p className="text-gray-700">
                    123 EasyLearn Street, City, Country
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">📞</span>
                  <p className="text-gray-700">+123 456 7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">✉️</span>
                  <p className="text-gray-700">support@easylearn.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl text-teal-600 font-bold"> Contact Form</h1>
            <div className="mt-5 card bg-base-100 dark:bg-slate-800 w-full p-1 shrink-0 shadow-xl">
              <form className="card-body p-4 dark:text-black">
                <div className="flex gap-3">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="first name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="last name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Organization (Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="organization"
                    className="input input-bordered"
                  />
                </div>
                <textarea
                  className="textarea textarea-bordered mt-2"
                  placeholder="message"
                ></textarea>
                <div className="form-control mt-6">
                  <button className="btn bg-[#36378bbf] text-white font-bold text-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
