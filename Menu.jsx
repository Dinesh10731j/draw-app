import React from 'react';
import "../components/Menu.css"

const Menu = ({ setBrushcolor, setbrushWidth ,setbrushOpacity}) => {
  return (
    <>
        <div className='brush-menu'>
            <section className='color'>
            <label>Brush color</label>
                <input type='color' onChange={(e)=>setBrushcolor(e.target.value)}/>

            </section>

            <section className='brush-width'>
            <label>Brush width</label>
                <input type='range' min={0} max={100} onChange={(e)=>setbrushWidth(e.target.value)}/>
            </section>

            <section className='brush-opacity'>
            <label>Brush-opacity</label>
                <input type='range' min={0} max={100} onChange={(e)=>setbrushOpacity(e.target.value)}/>
            </section>
        </div>
    </>
  )
}

export default Menu