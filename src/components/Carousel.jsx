import React from 'react';
import TalentCard from './TalentCard';

const talents = [
    {
        id:"uqyanzie",
        name: 'John Doe',
        institution: 'University of California, Los Angeles',
        degree: 'Bachelor of Science in Computer Science',
        photoSrc: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
    },
    {   
        id:"2",
        name: 'John Doe',
        institution: 'University of California, Los Angeles',
        degree: 'Bachelor of Science in Computer Science',
        photoSrc: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
    },
    {
        id:"3",
        name: 'John Doe',
        institution: 'University of California, Los Angeles',
        degree: 'Bachelor of Science in Computer Science',
        photoSrc: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
    },
    {
        id:"4",
        name: 'John Doe',
        institution: 'University of California, Los Angeles',
        degree: 'Bachelor of Science in Computer Science',
        photoSrc: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
    },
    {
        id:"5",
        name: 'John Doe',
        institution: 'University of California, Los Angeles',
        degree: 'Bachelor of Science in Computer Science',
        photoSrc: 'https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png'
    }
]

const Carousel = () => {
    return(
        <div className="carousel carousel-center w-full p-8 space-x-10 rounded-box my-10">
            {
                talents.map((talent) => {
                    return (
                        <div className="carousel-item shadow-xl rounded-xl">
                            <TalentCard talent={talent} />
                        </div> 
                    )
                })
            }
        </div>
    )
}

export default Carousel;