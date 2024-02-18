import React,{useEffect, useRef, useState} from 'react';
import "./App.css";
import Menu from './components/Menu';

const App = () => {

  const [brushcolor,setBrushcolor] = useState("");
  const [brushwidth,setbrushWidth] = useState(1);
  const [brushopacity,setbrushOpacity] = useState(1);
  const [drawing,setDrawing] = useState(false)
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);

useEffect(()=>{

  const canvas = canvasRef.current;
  const ctx = canvas.getContext("2d");
  ctx.lineCap = "round";
  ctx.lineJoin= "round";
  ctx.globalAlpha = brushopacity;
  ctx.strokeStyle = brushcolor;
  ctx.lineWidth = brushwidth;

  ctxRef.current = ctx;


},[brushcolor,brushwidth,brushopacity]);

const Startdraw = (e) => {
  const { offsetX, offsetY } = e.nativeEvent;
  ctxRef.current.beginPath();
  ctxRef.current.moveTo(offsetX, offsetY);
  setDrawing(true);
};

const EndDraw = () => {
  ctxRef.current.closePath();
  setDrawing(false);
};

const Draw = (e) => {
  if (!drawing) return;

  const { offsetX, offsetY } = e.nativeEvent;
  ctxRef.current.lineTo(offsetX, offsetY);
  ctxRef.current.stroke();
};


  return (
   <>
   <main>
    
   <Menu 

   setBrushcolor={setBrushcolor}
   setbrushWidth ={setbrushWidth}
   setbrushOpacity ={setbrushOpacity}
    
   />
   <canvas style={{width:"500px",
   height:"500px",
   marginTop:"20px",
   borderRadius:"12px",
   boxShadow:"0px 0px 10px rgba(0,0,0,0.60)",
   alignItems:"center"

   }} ref={canvasRef}
   onMouseDown={Startdraw}
   onMouseUp={EndDraw}
   onMouseMove={Draw}
   >

   </canvas>
   </main>
   </>
  )
}

export default App;