import React from 'react';

const values = [
  { name: 'Consistency', description: 'I\'m committed to staying dedicated and reliable as I persevere towards and beyond a goal.' },
  { name: 'Collaboration', description: 'I\'m dedicated to working with others and embracing new ideas.' },
  { name: 'Continuous Learning', description: 'I\'m constantly looking for ways to expand my knowledge and skills.' },
];

const Values = () => {
    return (
      <>
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4" style={{fontFamily: 'customFont', fontSize: '60px', marginTop: '90px'}}>
            Values
          </h1>
        </div>
        <section id="value-gallery">
          {values.map((value, index) => (
            <div key={index} className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3>{value.name}</h3>
                </div>
                <div className="card-back">
                  <p>{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  };
  
  export default Values;