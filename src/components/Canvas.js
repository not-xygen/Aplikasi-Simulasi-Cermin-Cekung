/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

function point(x, y) {
    return new Point(x,y)
}

export default function Canvas(props) {
    console.log(props);
    const canvasRef = useRef(null)

    function draw_line(ctx, start, end) {
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
    }

    const draw = ctx => {
        const jarakBenda = props.jarakBenda
        const ukuranBenda = props.ukuranBenda
        const titikFokus = props.titikFokus

        const titikX = ctx.canvas.width / 2
        const titikY = ctx.canvas.height / 2

        const jarakBayangan = jarakBenda * titikFokus / (jarakBenda - titikFokus)
        const ukuranBayangan = jarakBayangan * ukuranBenda / jarakBenda

        const bendaX = titikX - jarakBenda
        const bendaY = titikY - ukuranBenda

        const bayanganX = titikX - ukuranBayangan
        const bayanganY = titikY + jarakBayangan

        const x = bendaX
        const y = bendaY

        //Cartesian Plane
        ctx.beginPath()
        ctx.strokeStyle = '#55ff55'
        draw_line(ctx, point(500, 0), point(500, 1000))
        draw_line(ctx, point(0, 500), point(1000, 500))
        
        //Object
        draw_line(ctx, point(x, titikY), point(x, y))
        //Reflection
        draw_line(ctx, point(bayanganX, titikY), point(bayanganX, bayanganY))
        //Cahaya Lewat
        draw_line(ctx, point(titikX, bayanganY), point(bayanganX, bayanganY))
        draw_line(ctx, point(titikX, bendaY), point(bayanganX, bayanganY))
        //Cahaya Datang
        draw_line(ctx, point(titikX, bendaY), point(bendaX, bendaY))
        draw_line(ctx, point(titikX, bayanganY), point(bendaX, bendaY))    
        

        ctx.stroke();

    }
    
    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        context.clearRect(0, 0, canvas.width, canvas.height);

        draw(context)
    }, [draw])
    
    return (
    <canvas className="w-screen h-screen border-4 bg-white border-gray-900 rounded-md" width='1000' height='1000' id='CanvasFrame' ref={canvasRef} {...props}/>
    )
}