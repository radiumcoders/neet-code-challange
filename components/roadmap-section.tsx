"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

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
    className="absolute flex w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-none border border-border bg-card px-4 py-4"
  >
    <span className="mb-3 text-center text-sm font-bold text-foreground">
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

  // Camera tracking: Pan vertically down the board as it reveals, then zoom out at the end
  // The roadmap height goes from y=0 to y=1200.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.9, 1],
    [1.5, 1.2, 1.2, 1.2, 0.55]
  )

  // Pan Y to move the camera down
  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.9, 1],
    ["150px", "0px", "-1200px", "-1200px", "-600px"]
  )

  // Pan X to keep the centered nodes aligned (the tree leans left to x=-300)
  const xOffset = useTransform(
    scrollYProgress,
    [0, 0.1, 0.7, 0.9, 1],
    ["0px", "0px", "300px", "300px", "150px"]
  )

  // Step-by-step drawing of the lines
  const draw1 = useTransform(scrollYProgress, [0.0, 0.15], [0, 1])
  const draw2 = useTransform(scrollYProgress, [0.15, 0.35], [0, 1])
  const draw3 = useTransform(scrollYProgress, [0.35, 0.55], [0, 1])
  const draw4 = useTransform(scrollYProgress, [0.55, 0.75], [0, 1])

  return (
    <section
      ref={targetRef}
      className="relative h-[400vh] w-full border-b border-border bg-background"
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
        <motion.div
          style={{ scale, x: xOffset, y: yOffset }}
          className="relative"
        >
          {/* Shift coordinate system to place origin at the center of the wrapper */}
          <div className="absolute top-0 left-0">
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
                  orient="auto"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
                </marker>
              </defs>
              <g
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                markerEnd="url(#arrowhead)"
              >
                {/* Level 1 -> 2 */}
                <motion.path
                  style={{ pathLength: draw1 }}
                  d="M 0 40 C 0 170, -300 170, -300 260"
                />
                <motion.path
                  style={{ pathLength: draw1 }}
                  d="M 0 40 C 0 170, 300 170, 300 260"
                />

                {/* Level 2 -> 3 */}
                <motion.path
                  style={{ pathLength: draw2 }}
                  d="M -300 340 C -300 470, -600 470, -600 560"
                />
                <motion.path
                  style={{ pathLength: draw2 }}
                  d="M -300 340 L -300 560"
                />
                <motion.path
                  style={{ pathLength: draw2 }}
                  d="M -300 340 C -300 470, 0 470, 0 560"
                />

                {/* Level 3 -> 4 */}
                <motion.path
                  style={{ pathLength: draw3 }}
                  d="M -600 640 C -600 770, -300 770, -300 860"
                />
                <motion.path
                  style={{ pathLength: draw3 }}
                  d="M 0 640 C 0 770, -300 770, -300 860"
                />

                {/* Level 4 -> 5 */}
                <motion.path
                  style={{ pathLength: draw4 }}
                  d="M -300 940 C -300 1070, -600 1070, -600 1160"
                />
                <motion.path
                  style={{ pathLength: draw4 }}
                  d="M -300 940 L -300 1160"
                />
                <motion.path
                  style={{ pathLength: draw4 }}
                  d="M -300 940 C -300 1070, 0 1070, 0 1160"
                />
              </g>
            </svg>

            {/* Nodes */}
            <div className="absolute top-0 left-0 z-10">
              {/* Level 1 */}
              <RoadmapNode title="Arrays & Hashing" x={0} y={0} />

              {/* Level 2 */}
              <RoadmapNode title="Two Pointers" x={-300} y={300} />
              <RoadmapNode title="Stack" x={300} y={300} />

              {/* Level 3 */}
              <RoadmapNode title="Linked List" x={-600} y={600} />
              <RoadmapNode title="Sliding Window" x={-300} y={600} />
              <RoadmapNode title="Binary Search" x={0} y={600} />

              {/* Level 4 */}
              <RoadmapNode title="Trees" x={-300} y={900} />

              {/* Level 5 */}
              <RoadmapNode title="Tries" x={-600} y={1200} />
              <RoadmapNode title="Heap / Priority Queue" x={-300} y={1200} />
              <RoadmapNode title="Backtracking" x={0} y={1200} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
