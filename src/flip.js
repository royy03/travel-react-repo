import React, { useState } from "react";
import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
//  icons
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiFillInfoCircle } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { BiLike } from "react-icons/bi";
import { HiSave } from "react-icons/hi";

const Flip = ({ places }) => {
  const ref = useRef();
  const [readMore, setReadMore] = useState(false);
  const [isFlipped, setisFlipped] = useState(false);

  const handleClick = (id) => {
    setisFlipped(!isFlipped);
  };
  return (
    <>
      {places.map((place) => {
        const { id, name, country, image, data, info, iframes } = place;
        return (
          <section key={id} className="place">
            <Flippy
              flipOnClick={false}
              key={id}
              flipDirection="horizontal"
              ref={ref}
              className="flippy"
              isFlipped={isFlipped}
              flipDirection="horizontal"
            >
              <FrontSide
                className="frontside"
                style={{
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <h1 className="name">
                  <span className="num"> {id}</span>&emsp;{name}{" "}
                  <div className="underline"></div>
                  <button
                    onClick={() => handleClick(id)}
                    key={id}
                    className="flipicon-btn"
                  >
                    <AiOutlineInfoCircle className="flipicon" />
                  </button>
                  <h3 className="country">{country}</h3>
                </h1>

                <img src={image} alt="image" className="image" />
                <br />
                <hr color="black" width="90%" />
                <br />
                <div className="card-icons">
                  <BiLike className="likeicon" />
                  <b className="likes">0 admires</b>
                  &#160;&#160;
                  <HiSave className="saveicon" />
                  <IoMdShareAlt className="shareicon" />
                </div>
              </FrontSide>

              <BackSide
                className="backside"
                style={{ backgroundColor: "white", border: "black" }}
                border={"black"}
              >
                <>
                  <button
                    onClick={() => handleClick(id)}
                    key={id}
                    className="flipicon-btn"
                  >
                    <AiFillInfoCircle className="flipicon" />
                  </button>
                  <br />

                  <div className="data">
                    <p>
                      {" "}
                      {readMore ? data : `${data.substring(0, 200)}...`}
                      <button
                        className="readmore"
                        onClick={() => setReadMore(!readMore)}
                      >
                        {readMore ? "show less" : "read more"}
                      </button>
                    </p>
                    <b>{info}</b>
                  </div>
                  <iframe
                    id={id}
                    width="280"
                    height="160"
                    src={iframes}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </>
              </BackSide>
            </Flippy>
          </section>
        );
      })}
    </>
  );
};

export default Flip;

