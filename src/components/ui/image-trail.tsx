"use client"

import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ImageTrailProps {
  images: string[]
  imageWidth?: number
  imageHeight?: number
  threshold?: number
  duration?: number
}

export function ImageTrail({
  images = [],
  imageWidth = 200,
  imageHeight = 200,
  threshold = 80, 
  duration = 1.2,
}: ImageTrailProps) {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  
  const mousePos = useRef({ x: 0, y: 0 })
  const lastMousePos = useRef({ x: 0, y: 0 })
  const zIndexVal = useRef(1)
  const imgPosition = useRef(0)

  useEffect(() => {
    if (contentRef.current) {
      imagesRef.current = Array.from(contentRef.current.querySelectorAll("img"))
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = contentRef.current?.getBoundingClientRect()
      if (rect) {
        mousePos.current = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
        
        const dist = Math.hypot(
          mousePos.current.x - lastMousePos.current.x,
          mousePos.current.y - lastMousePos.current.y
        )

        if (dist > threshold) {
          showNextImage()
          lastMousePos.current = { ...mousePos.current }
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [images, threshold]) 

  const showNextImage = () => {
    const img = imagesRef.current[imgPosition.current]
    if (!img) return

    imgPosition.current = (imgPosition.current + 1) % imagesRef.current.length
    zIndexVal.current += 1

    gsap.killTweensOf(img)

    gsap.timeline()
      .set(img, {
        opacity: 1,
        scale: 0.8,
        zIndex: zIndexVal.current,
        x: mousePos.current.x - imageWidth / 2,
        y: mousePos.current.y - imageHeight / 2,
      })
      .to(img, {
        duration: duration,
        ease: "expo.out",
        scale: 1,
        x: mousePos.current.x - imageWidth / 2 + (Math.random() - 0.5) * 20,
        y: mousePos.current.y - imageHeight / 2 + (Math.random() - 0.5) * 20,
      })
      .to(img, {
        duration: 0.6,
        opacity: 0,
        scale: 1.2,
        ease: "power2.inOut",
      }, "-=0.4") 
  }

  return (
    <div
      ref={contentRef}
      className="relative isolate z-0 h-full w-full overflow-hidden"
    >
      {images.map((url, index) => (
        <img
          key={index}
          src={url}
          alt=""
          className="absolute top-0 left-0 opacity-0 pointer-events-none will-change-transform object-contain"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />
      ))}
    </div>
  )
}