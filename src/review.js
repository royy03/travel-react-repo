import React, { useState } from 'react';
import people from './data2';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  //prefer using indexing instead of map since circular loop with left and right arrows
  const [index, setIndex] = useState(0);//initially show first review or 0th index
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {//see if we put right arrow after last or left arrow in first
    if (number > people.length - 1) {
      return 0;//0th element displayed
    }
    if (number < 0) {
      return people.length - 1;//last ele displayed
    }
    return number;//normal case
  };
  const nextPerson = () => {//right arrow function
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {//left arrow function
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);//.random=[0,1)*4 and .floor gives lower no.
    if (randomNumber === index) {//random prev same as present ,ex- 1 1 2 4 3 1 2 , 1 twice together 
      randomNumber = index + 1;//even index - 1 np
    }
    setIndex(checkNumber(randomNumber));//check outta bound
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
