import React from 'react';

const CookCard = () => {
    return (
        <div className="card  me-8 bg-base-100 shadow-xl rounded-none my-10">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p className=' border-b pb-6 mb-6'>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions flex justify-between items-center">
                    <button className="btn w-[45%]">Buy Now</button>
                    <button className="btn w-[45%]">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default CookCard;