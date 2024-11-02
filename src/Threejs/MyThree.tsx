import { useEffect, useRef } from "react";
import Experience from "./Experience";

const MyThree = () => {
  const canvasRef = useRef(null) ; 

  useEffect(()=>{
    //@ts-ignore
    new Experience(canvasRef.current) ; 
  } , [])

  return <canvas style={{position : 'absolute' , left : '0' , top : '0' }} ref={canvasRef} ></canvas>;
}

export default MyThree;
