import React from 'react';

const ClassDetails = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2>Teacher name</h2>
                    <h2>Teacher email</h2>
                    <h1>Title</h1>
                    <p>description</p>
                    <p>price </p>
                    <h3>total enrolled</h3>
                    <p>status: approved</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info">Enroll</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassDetails;