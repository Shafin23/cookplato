import React from 'react';

const Board = () => {
    return (
        <div className=' w-[28vw] h-[35vw] bg-[#fac250] flex flex-col justify-center items-center p-16'>
            <h1 className=' mb-10 text-4xl font-bold text-center text-black'>Are you or do you want to be a cook?</h1>

            <article className=' text-center text-black text-lg w-11/12 mb-4'>
                Indiferent dacă ești student, bucătar amator sau profesionist, CookPlato te invită să împărtășești cele mai bune rețete cu toți!
            </article>

            <button className=' border-2 border-black px-6 py-2 bg-transparent font-bold'>Join us</button>
        </div>
    );
};

export default Board;