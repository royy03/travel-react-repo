import React, { useState, useEffect } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import factss from './data2';
//use 2 useeffects,one to check out of limits and other for time interval
function Facts() {
  const [facts, setFacts] = useState(factss);
  const [index, setIndex] = useState(0);

  useEffect(() => {//to check out of limits
    const lastIndex = facts.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, facts]);//parameters used

  useEffect(() => {//for time interval
    let slider = setInterval(() => {//in function "//" is used for comments and in return {/* */}is used
      setIndex(index + 1);
    }, 3500);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className='bg-image'>
        <h1 className="title" >
        Some Intriguing Facts about <br/> South America
        </h1>
      <div className="section-center">

        {facts.map((fact, factIndex) => {//fact index??????
          const { id, img,def, name} = fact;

          let position = 'nextSlide';//all obj are stored in the next(right) state first
          if (factIndex === index) {/* if index matches that obj becomes active*/
            position = 'activeSlide';
          }
          if (//for prev(left) slide

            factIndex === index - 1 ||//other than the first item in centre (personindex=-1) we will have left(prev) too
            (index === 0 && factIndex === facts.length - 1)//first item in centre means last item in left
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id}> {/*assigning classname next/last/active slide*/}
              <img src={img} alt={name} className="place-img" />
              <h1 className='def'><i>{def}</i></h1>
              <h4 className="title2">{name}</h4>
            </article>
          );
        })}</div>
        {/* normal button functions */}
        <button className="prev-arrow" onClick={() => setIndex(index - 1)}> 
          <AiOutlineDoubleLeft  id='arrows-facts'/>
        </button>
        <button className="next-arrow" onClick={() => setIndex(index + 1)}>
          <AiOutlineDoubleRight id='arrows-facts'/>
        </button>
      </div>
    </section>
  );
}

export default Facts;
