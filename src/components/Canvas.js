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
    const canvasRef = useRef(null)

    function draw_line(ctx, start, end, strokeColor) {
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.strokeStyle = strokeColor
        ctx.stroke()
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

        const bayanganX = titikX - jarakBayangan
        const bayanganY = titikY + ukuranBayangan

        const x = bendaX
        const y = bendaY

        //Cartesian Plane
        draw_line(ctx, point(titikX, 0), point(titikX, ctx.canvas.width), 'black')
        draw_line(ctx, point(0, titikY), point(ctx.canvas.height, titikY), 'black')
        //Object
        draw_line(ctx, point(x, titikY), point(x, y), 'red')
        //Reflection
        draw_line(ctx, point(bayanganX, titikY), point(bayanganX, bayanganY), 'purple')
        //Cahaya Datang
        draw_line(ctx, point(titikX, bendaY), point(bendaX, bendaY), 'orange')
        draw_line(ctx, point(titikX, bayanganY), point(bendaX, bendaY), 'orange')
        draw_line(ctx, point(x, y), point(0, y), 'orange') 
        //Cahaya Lewat
        draw_line(ctx, point(titikX, bayanganY), point(bayanganX, bayanganY), 'blue')
        draw_line(ctx, point(titikX, bendaY), point(bayanganX, bayanganY), 'blue')
        draw_line(ctx, point(bayanganX, bayanganY), point(0,bayanganY), 'blue')
    }
    
    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw(context)
    }, [draw])
    
    return (
    <canvas className="w-screen h-screen border-4 bg-white border-gray-900 rounded-md" width='1500' height='1500' id='CanvasFrame' ref={canvasRef} {...props}/>
    )
}