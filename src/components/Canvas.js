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
        const tinggiBenda = props.tinggiBenda
        const titikFokus = props.titikFokus
        const setJarakBayangan = props.setJarakBayangan
        const setTinggiBayangan = props.setTinggiBayangan

        const titikX = ctx.canvas.width / 2
        const titikY = ctx.canvas.height / 2

        const hasilJarakBayangan = jarakBenda * titikFokus / (jarakBenda - titikFokus)
        const hasilTinggiBayangan = hasilJarakBayangan * tinggiBenda / jarakBenda
        
        setJarakBayangan(hasilJarakBayangan)
        setTinggiBayangan(hasilTinggiBayangan)

        const bendaX = titikX - jarakBenda
        const bendaY = titikY - tinggiBenda

        const bayanganX = titikX - hasilJarakBayangan
        const bayanganY = titikY + hasilTinggiBayangan

        const x = bendaX
        const y = bendaY

        let titikBayanganX = 0
        if (bayanganX >= 750) {
            titikBayanganX = ctx.canvas.width
        } 

        //Cartesian Plane
        draw_line(ctx, point(titikX, 0), point(titikX, ctx.canvas.width), 'white')
        draw_line(ctx, point(0, titikY), point(ctx.canvas.height, titikY), 'white')
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
        draw_line(ctx, point(bayanganX, bayanganY), point(titikBayanganX,bayanganY), 'blue')
    }
    
    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw(context)
    }, [draw])
    
    return (
    <canvas className="flex w-screen h-screen border-4 bg-zinc-900 rounded-lg" width="1000" height='1000' ref={canvasRef} {...props}/>
    )
}