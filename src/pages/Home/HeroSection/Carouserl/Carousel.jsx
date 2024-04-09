import React, { useState, useEffect } from 'react';


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Define an array of slide content for easy iteration
    const slides = [
        {
            image: "/assets/images/slider1.webp",
            text: "Book your Cookplato chef and discover the authentic pleasure of a meal cooked personally for you"
        },
        {
            image: "/assets/images/slider2.webp",
            text: "Bucură-te de experiențe culinare diverse și de calitate. Transformă un moment de sărbătoare într-un eveniment memorabil cu ajutorul bucătarilor CookPlato."
        }
    ];

    useEffect(() => {
        // Function to handle auto-sliding
        const autoSlide = setInterval(() => {
            setCurrentSlide(current => (current === slides.length - 1 ? 0 : current + 1));
        }, 5000); // Adjust the interval (in milliseconds) for auto-sliding

        // Clean up function to clear the interval when component unmounts
        return () => clearInterval(autoSlide);
    }, []);



    return (
        <div className='w-full lg:w-[64vw] h-[60vw] md:h-[50vw] lg:h-[25vw]'>
            <div className="carousel w-full h-full relative overflow-hidden">
                {slides.map((slide, index) => (
                    <div key={index} className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                        <img src={slide.image} className=" w-[10500vw] absolute h-full brightness-50" alt={`Slide ${index + 1}`} />
                        <div className='absolute w-full h-full flex flex-col justify-center items-center text-white ' data-aos="fade-up" data-aos-duration="1000">
                            <h1 className='text-center w-10/12 text-base md:text-3xl lg:text-2xl 2xl:text-4xl font-bold mb-10'>{slide.text}</h1>
                            <button className='z-50 bg-transparent px-5 py-2 border-white border-2 text-white font-semibold transition-all duration-500 hover:bg-white hover:text-black'>Find Cook</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
