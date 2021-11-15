import React, { useState } from 'react';
import facts from './data2';
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';


const Facts = () => {
  //prefer using indexing instead of map since circular loop with left and right arrows
  const [index, setIndex] = useState(0);//initially show first review or 0th index
  const { img,name,def } = facts[index];
  const checkNumber = (number) => {//see if we put right arrow after last or left arrow in first
    if (number > facts.length - 1) {
      return 0;//0th element displayed
    }
    if (number < 0) {
      return facts.length - 1;//last ele displayed
    }
    return number;//normal case
  };
  const nextFact = () => {//right arrow function
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevFact = () => {//left arrow function
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <article className='facts'>
      <div className='img-container'>
        <img src={img} alt={name} className='facts-image' />
      </div>
      <h1 className= 'facts-def'>{def}</h1>
      <p className='facts-name'>{name}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevFact}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextFact}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Facts;
