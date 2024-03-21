import React, { useEffect, useState } from 'react';
import HowDoesItWorkCard from './HowDoesItWorkCard/HowDoesItWorkCard';

const HowDoesItWork = () => {


    return (
        <div className=' w-[90vw] mx-auto  mt-5 border-b border-dashed pb-20'>
            <h1 className=' text-5xl font-semibold  text-center mb-16'>How Does it work?</h1>

            <div className=' grid grid-rows-4 grid-cols-1 md:grid-rows-1 md:grid-cols-4 w-full'>

                <HowDoesItWorkCard
                    title="Choose the menu you want"
                    article="Descoperă bucătari în apropiere sau locația dorită, răsfoieste meniurile acestora și alege meniul dorit."
                    img="/assets/images/pp3.webp"
                />

                <HowDoesItWorkCard
                    title="Verifică disponibilitatea"
                    article='Înainte de a cumpăra meniul, folosește butonul "Verifică disponibilitatea" și asigură-te că bucătarul este disponibil în intervalul orar dorit de tine.'
                    img="/assets/images/pp2-1.webp"
                />

                <HowDoesItWorkCard
                    title="Buy the menu"
                    article="Informează bucătarul despre preferințele sau restricțiile tale alimentare. Odată ce bucătarul a confirmat disponibilitatea și detaliile stabilite, cumpără meniul."
                    img="/assets/images/pp1-1.webp"
                />

                <HowDoesItWorkCard
                    img="/assets/images/pp2-1.webp"
                    title="Enjoy the experience"
                    article="Bucătarul CookPlato va veni la ora stabilită cu ingredientele necesare, va pregăti meniul stabilit și va curăța spațiul de lucru. Tot ce trebuie să faci este să te bucuri de experiență."
                />

            </div>
        </div>
    );
};

export default HowDoesItWork;