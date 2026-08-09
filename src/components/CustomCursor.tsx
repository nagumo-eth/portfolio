import { useEffect, useRef, useState } from 'react'

function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
  }, [])

  useEffect(() => {
    if (!enabled) return

    const move = (e: MouseEvent) => {
      const dot = dotRef.current
      if (dot) {
        dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      }
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button'))
    }

    document.body.classList.add('cursor-none')
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)

    return () => {
      document.body.classList.remove('cursor-none')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={dotRef}
      className={`pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-white mix-blend-difference transition-[width,height] duration-200 ease-out ${
        hovering ? 'h-12 w-12' : 'h-3 w-3'
      }`}
    />
  )
}

export default CustomCursor
