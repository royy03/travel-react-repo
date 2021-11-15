import React,{useState} from "react";
import ReactDOM from "react-dom";
import ReactCardFlip from 'react-card-flip';

const CardFlip = () =>{
    const [isFlipped, setisFlipped] = useState(false);

    const handleClick = ()=>{
    setisFlipped(!isFlipped);
};
return(
    <ReactCardFlip isFlipped = {isFlipped} flipDirection = "horizontal">
        <div>Front
            <button onClick =  {handleClick}><CgEditFlipH className= 'flipicon'/></button>
        </div>
        <div>Back
            <button onClick =  {handleClick}><CgEditFlipH className= 'flipicon'/></button>
        </div>
    </ReactCardFlip>
)
};
ReactDOM.render(<CardFlip />,document.getElementById('root')
);
