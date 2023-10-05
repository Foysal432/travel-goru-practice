import React from 'react';

const ABlog = ({data}) => {
    const {image,title,description,rating}=data
    return (
        <div className=''>
            
        <div className="card lg:card-side bg-base-100 shadow-xl w-3/5 mx-auto">
        <figure><img className='w-64' src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
            <div className='text-orange-500'>{rating}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Booking</button>
          </div>
        </div>
      </div>
      </div>
    );
};

export default ABlog;