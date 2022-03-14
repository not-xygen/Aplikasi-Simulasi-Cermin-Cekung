/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)

    const draw = ctx => {
        ctx.beginPath()
        ctx.moveTo(750, 0)
        ctx.lineTo(750, 1500)
        ctx.moveTo(0, 750)
        ctx.lineTo(1500, 750)
        ctx.stroke();
    }
    
    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        
        //Our draw come here
        draw(context)
    }, [draw])
    
    return (
    <canvas className="w-screen h-screen border-4 bg-white border-gray-900 rounded-md" width='1500' height='1500' id='CanvasFrame' ref={canvasRef} {...props}/>
    )
}

export default Canvas