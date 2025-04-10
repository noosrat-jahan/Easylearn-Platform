import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const Contact = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const values = Object.fromEntries(formData.entries())
    console.log(values)

    axios.post("https://edu-manage-website-server.vercel.app/messages", values)
    .then((res) =>{
      console.log(res.data)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Thank You For Reaching Us Out",
        text: "Your message has been recorded.",
        showConfirmButton: false,
        timer: 2500
      });
    })
  }


  return (
    <div>
      <div className="dark:text-white font-inter bg-gradient-to-b from-white via-purple-50 to-blue-50  dark:from-black  dark:to-slate-900 h-auto pb-10 ">
        <div className=" pt-10 grid grid-cols-1 md:grid-cols-2 items-center justify-around w-11/12 mx-auto gap-10">
          <div className="py-5  text-left space-y-6 ">
            <h1 className="text-5xl font-bold text-teal-500 ">Get in Touch</h1>
            {/* <div className='w-64 bg-amber-300 h-4 rounded-sm absolute top-1 '></div> */}
            <p className="text-lg leading-9">
              Have questions about Easylearn or need assistance? <br /> Get in
              touch with us for any inquiries, support, or collaboration. Fill
              out the contact form, email us, or reach out via phone. We're here
              to assist you with all your learning needs!
            </p>

            <div className="bg-white dark:bg-gray-800  shadow-lg rounded-2xl p-5 max-w-md ">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-amber-100 mb-4">
                Contact Us
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-500 text-xl">📍</span>
                  <p className="text-gray-700 dark:text-amber-100">
                    123 EasyLearn Street, City, Country
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-500 text-xl">📞</span>
                  <p className="text-gray-700 dark:text-amber-100">+123 456 7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-500 text-xl">✉️</span>
                  <p className="text-gray-700 dark:text-amber-100">support@easylearn.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-4xl text-teal-600 font-bold"> Contact Form</h1>
            <div className="mt-5 card bg-base-100 dark:bg-slate-800 w-full p-1 shrink-0 shadow-xl">
              <form onSubmit={handleSubmit} className="card-body p-4 dark:text-black">
                <div className="flex gap-3">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="first_name"
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
                      name="last_name"
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
                    name="email"
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
                    name="organization"
                    placeholder="organization"
                    className="input input-bordered"
                  />
                </div>
                <textarea
                  className="textarea textarea-bordered mt-2"
                  placeholder="message"
                  name="message"
                ></textarea>
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-teal-500 text-white font-bold text-lg">
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
