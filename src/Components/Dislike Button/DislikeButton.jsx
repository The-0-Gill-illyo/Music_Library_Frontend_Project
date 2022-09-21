import { useState } from "react";



const DislikeButton = (props) => {

  const [Dislike, setDisliked] = useState("inactive");

  function dislikeClick(){
   if(Dislike === "inactive"){
    setDisliked("active");
   }
   else{
    setDisliked("inactive");
   } 
   props.dislikeClick.map(Dislike)
  }
return (

    <div>
        <button className={Dislike} onClick={dislikeClick}>{props.thumbsDown}</button>
    </div>
  )
}

export default DislikeButton;