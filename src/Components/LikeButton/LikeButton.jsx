import { useState } from "react";



const LikeButton = (props) => {

  const [Like, setLiked] = useState("inactive");

  function LikeClick(){
   if(Like === "inactive"){
    setLiked("active");
   }
   else{
    setLiked("inactive");
   } 
   props.LikeClick.map(Like)
  }
  return (

    <div>
        <button className={Like} onClick={LikeClick}>{props.thumbsUp}</button>
    </div>
  );
  }


export default LikeButton;