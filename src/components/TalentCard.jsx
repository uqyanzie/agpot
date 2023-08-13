import React from 'react';

const TalentCard = ({ talent }) => {
    
    return(
        <div className="card w-96 bg-base-100 rounded-box">
            <figure className="px-8 pt-10">
                <img src={talent.photoSrc} width={275} alt="talent-photo" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{talent.name}</h2>
                <h3 className="card-subtitle">{talent.institution}</h3>
                <p className="text-base-content">{talent.degree}</p>
            </div>
        </div>
    )

}

export default TalentCard;