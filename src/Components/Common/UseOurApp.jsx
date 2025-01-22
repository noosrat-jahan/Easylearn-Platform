import React from 'react';
import qrcode from '../../assets/qrcode.png'
import ourapp from '../../assets/app.jpg'


const UseOurApp = () => {
    return (
        <div>
            <section className="my-10 bg-gradient-to-r from-blue-50 to-purple-100 py-10">
                <div className=" mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">

                        <div className="lg:w-1/2 text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience <span className='text-orange-500 font-extrabold'>EASYLEARN</span>  Anywhere</h2>
                            <p className="text-gray-600 mb-6">
                                Discover the power of learning with the EasyLearn app. Access interactive lessons, track your progress, and connect with teachers—all from your mobile device.
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="bg-white rounded-lg p-4 shadow-lg inline-block">
                                    <img src={qrcode} alt="qrcode" className="w-24 h-24 mx-auto" />
                                </div>
                                <p className="text-gray-600">
                                    Scan the QR code to download our app and start learning today!
                                </p>
                            </div>
                        </div>


                        <div className="lg:w-1/2 flex justify-center">
                            <div className="relative w-4/5 bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={ourapp} alt="App Image" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UseOurApp;