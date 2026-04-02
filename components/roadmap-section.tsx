"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const RoadmapNode = ({
  title,
  x,
  y,
}: {
  title: string
  x: number
  y: number
}) => (
  <div
    style={{ left: x, top: y }}
    className="absolute flex w-[180px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-none border border-border bg-card px-4 py-3"
  >
    <span className="mb-3 text-center text-xs font-bold text-foreground">
      {title}
    </span>
    <div className="h-1.5 w-full overflow-hidden rounded-none bg-muted">
      <div className="h-full w-2/3 rounded-none bg-primary"></div>
    </div>
  </div>
)

export function RoadmapSection() {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  })

  // Camera tracking: Pan across the board as it reveals, then zoom out at the end
  // The roadmap width goes from x=0 to x=1160.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8, 1],
    [2, 1.5, 1.2, 1.2, 0.55]
  )
  const xOffset = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 0.8, 1],
    ["0px", "-290px", "-1160px", "-1160px", "-580px"]
  )

  // Step 1: Draw first arrows
  const drawArrows1 = useTransform(scrollYProgress, [0.0, 0.2], [0, 1])

  // Step 2: Draw the rest of the connecting lines
  const drawRest = useTransform(scrollYProgress, [0.2, 0.6], [0, 1])

  return (
    <section
      ref={targetRef}
      className="relative h-[500vh] w-full border-b border-border bg-background"
    >
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        {/* Intersection Squares */}
        <div
          className="absolute top-0 left-0 z-20 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
        <div
          className="absolute top-0 right-0 z-20 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        {/* Section Label */}
        <div className="absolute top-8 left-8 z-20 font-mono text-sm font-medium text-muted-foreground">
          -----ROADMAP-----
        </div>

        {/* Main Canvas Container */}
        <motion.div style={{ scale, x: xOffset }} className="relative">
          {/* SVG Connections Canvas */}
          <svg
            className="absolute top-0 left-0 overflow-visible text-border"
            style={{ zIndex: 0 }}
          >
            <defs>
              <marker
                id="arrowhead"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
              </marker>
            </defs>
            <g
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#arrowhead)"
            >
              {/* Phase 1 Arrows */}
              <motion.path
                style={{ pathLength: drawArrows1 }}
                d="M 90 0 C 140 0, 140 -120, 200 -120"
              />
              <motion.path
                style={{ pathLength: drawArrows1 }}
                d="M 90 0 C 140 0, 140 120, 200 120"
              />

              {/* Phase 2 Arrows (Rest of the map) */}
              {/* From Two Pointers */}
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 380 -120 C 430 -120, 430 -240, 490 -240"
              />
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 380 -120 C 430 -120, 430 -120, 490 -120"
              />
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 380 -120 C 430 -120, 430 0, 490 0"
              />

              {/* From Binary Search -> Trees (Converging down) */}
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 670 0 C 720 0, 720 120, 780 120"
              />

              {/* From Linked List -> Trees */}
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 670 -240 C 750 -240, 720 120, 780 120"
              />

              {/* From Trees -> Tries, Heap, Backtracking */}
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 960 120 C 1010 120, 1010 0, 1070 0"
              />
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 960 120 C 1010 120, 1010 120, 1070 120"
              />
              <motion.path
                style={{ pathLength: drawRest }}
                d="M 960 120 C 1010 120, 1010 240, 1070 240"
              />
            </g>
          </svg>

          {/* Nodes */}
          <div className="absolute top-0 left-0 z-10">
            {/* Initial Node always visible */}
            <RoadmapNode title="Arrays & Hashing" x={0} y={0} />

            {/* Column 2 */}
            <RoadmapNode title="Two Pointers" x={290} y={-120} />
            <RoadmapNode title="Stack" x={290} y={120} />

            {/* Column 3 */}
            <RoadmapNode title="Linked List" x={580} y={-240} />
            <RoadmapNode title="Sliding Window" x={580} y={-120} />
            <RoadmapNode title="Binary Search" x={580} y={0} />

            {/* Column 4 */}
            <RoadmapNode title="Trees" x={870} y={120} />

            {/* Column 5 */}
            <RoadmapNode title="Tries" x={1160} y={0} />
            <RoadmapNode title="Heap / Priority Queue" x={1160} y={120} />
            <RoadmapNode title="Backtracking" x={1160} y={240} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
