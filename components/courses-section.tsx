"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

type Difficulty = "Easy" | "Medium" | "Hard"

type Course = {
  title: string
  description: string
  duration: string
  difficulty: Difficulty
  hoverGradientIdx?: number
}

type Category = {
  title: string
  description: string
  courses: Course[]
}

const COURSE_CATEGORIES: Category[] = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Follow a structured path to learn all of the core data structures & algorithms. Perfect for coding interview preparation.",
    courses: [
      {
        title: "Algorithms & Data Structures for Beginners",
        description: "Learn the foundations of coding interviews.",
        duration: "25 hours",
        difficulty: "Medium",
        hoverGradient: "from-indigo-500/15 to-purple-500/5",
      },
      {
        title: "Advanced Algorithms",
        description: "Learn every algorithm you would ever need.",
        duration: "25 hours",
        difficulty: "Hard",
        hoverGradient: "from-red-500/15 to-rose-500/5",
      },
    ],
  },
  {
    title: "System Design",
    description:
      "Brush up on core system design concepts for designing robust backend systems.",
    courses: [
      {
        title: "System Design for Beginners",
        description: "Learn the foundations of system design interviews.",
        duration: "10 hours",
        difficulty: "Medium",
        hoverGradient: "from-slate-500/15 to-zinc-500/5",
      },
      {
        title: "System Design Interview",
        description: "Learn common system design interview questions.",
        duration: "10 hours",
        difficulty: "Medium",
        hoverGradient: "from-blue-500/15 to-sky-500/5",
      },
    ],
  },
  {
    title: "Python",
    description:
      "Learn the Python programming language with interactive coding lessons.",
    courses: [
      {
        title: "Python for Beginners",
        description: "Learn the Python programming language.",
        duration: "12 hours",
        difficulty: "Easy",
        hoverGradient: "from-blue-500/15 to-yellow-500/5",
      },
      {
        title: "Python for Coding Interviews",
        description: "Learn effective Python for coding interviews.",
        duration: "8 hours",
        difficulty: "Easy",
        hoverGradient: "from-yellow-500/15 to-blue-500/5",
      },
      {
        title: "Python OOP",
        description: "Learn object-oriented programming in Python.",
        duration: "8 hours",
        difficulty: "Easy",
        hoverGradient: "from-green-500/15 to-emerald-500/5",
      },
    ],
  },
  {
    title: "Full Stack Development",
    description:
      "Choose from a variety of skills involved in full stack development.",
    courses: [
      {
        title: "SQL for Beginners",
        description: "Learn PostgreSQL with interactive coding lessons.",
        duration: "10 hours",
        difficulty: "Easy",
        hoverGradient: "from-emerald-500/15 to-teal-500/5",
      },
      {
        title: "Full Stack Development",
        description: "Learn how to build an intermediate full stack app.",
        duration: "20 hours",
        difficulty: "Medium",
        hoverGradient: "from-blue-500/15 to-indigo-500/5",
      },
    ],
  },
  {
    title: "Object Oriented Design",
    description:
      "Dive deeper into object-oriented programming by focusing on design patterns and principles.",
    courses: [
      {
        title: "Object Oriented Design Interviews",
        description: "Learn Object Oriented Design interview questions.",
        duration: "8 hours",
        difficulty: "Easy",
        hoverGradient: "from-sky-500/15 to-blue-500/5",
      },
      {
        title: "Object Oriented Design Patterns",
        description: "Learn & implement common coding design patterns.",
        duration: "8 hours",
        difficulty: "Easy",
        hoverGradient: "from-purple-500/15 to-fuchsia-500/5",
      },
    ],
  },
]

function DifficultyBadge({ difficulty }: { difficulty: Course["difficulty"] }) {
  return (
    <span
      className={cn(
        "rounded-none border px-2 py-0.5 text-[10px] font-medium tracking-wider uppercase",
        difficulty === "Easy" &&
          "border-green-500/20 bg-green-500/10 text-green-600 dark:text-green-400",
        difficulty === "Medium" &&
          "border-yellow-500/20 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
        difficulty === "Hard" &&
          "border-red-500/20 bg-red-500/10 text-red-600 dark:text-red-400"
      )}
    >
      {difficulty}
    </span>
  )
}

const CARD_GRADIENTS = [
  {
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(120,119,198,0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.5) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120,119,198,0.1) 0%, transparent 50%)`,
  },
  {
    backgroundImage: `
      radial-gradient(circle at 20% 80%, rgba(255, 182, 153, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 244, 214, 0.5) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 182, 153, 0.1) 0%, transparent 50%)`,
  },
  {
    backgroundImage: `
      radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
      radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
  },
  {
    backgroundImage: `
      radial-gradient(circle at top left, rgba(56, 193, 182, 0.4), transparent 70%)`,
  },
  {
    backgroundImage: `
      radial-gradient(circle at 50% 100%, rgba(253, 224, 71, 0.3) 0%, transparent 60%),
      radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.3) 0%, transparent 70%),
      radial-gradient(circle at 50% 100%, rgba(244, 114, 182, 0.3) 0%, transparent 80%)
    `,
  },
  {
    backgroundImage: `
      radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.3) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.25) 0%, transparent 70%),
      radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 65%)
    `,
  },
]

function Crosshair({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute z-20 flex h-3 w-3 items-center justify-center",
        className
      )}
    >
      <div className="absolute h-full w-[1px] bg-border" />
      <div className="absolute h-[1px] w-full bg-border" />
    </div>
  )
}

import { useMotionTemplate, useMotionValue } from "framer-motion"
import { MouseEvent as ReactMouseEvent } from "react"

function CourseCard({ course, index }: { course: Course; index: number }) {
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length]
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      className="group relative -mt-px -ml-px flex cursor-pointer flex-col overflow-hidden border border-border bg-card p-8 transition-colors hover:z-10 sm:min-h-[220px]"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradient on Hover */}
      <div
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:group-hover:opacity-20"
        style={gradient}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:hidden"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Grid Crosshairs */}
      <Crosshair className="-top-[6px] -left-[6px]" />
      <Crosshair className="-top-[6px] -right-[6px]" />
      <Crosshair className="-bottom-[6px] -left-[6px]" />
      <Crosshair className="-right-[6px] -bottom-[6px]" />

      <div className="relative z-10 flex h-full flex-col">
        <h4 className="mb-2 font-heading text-xl font-bold tracking-tight text-foreground">
          {course.title}
        </h4>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        {/* Footer Tags */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-muted-foreground">
            {course.duration}
          </span>
          <DifficultyBadge difficulty={course.difficulty} />
        </div>
      </div>
    </div>
  )
}
export function CoursesSection() {
  return (
    <section className="relative flex flex-col items-center border-b border-border bg-background px-8 py-16 md:py-24">
      {/* Intersection Squares */}
      <div
        className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />
      <div
        className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
      />

      <div className="relative z-10 flex w-full max-w-6xl flex-col">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="relative mb-4 w-fit">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Courses
            </h2>
            <motion.div
              initial={{ width: "100%" }}
              whileInView={{ width: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
              className="absolute top-0 right-0 bottom-0 z-20 bg-foreground"
            />
          </div>
          <p className="text-lg text-muted-foreground">
            Structured learning paths from fundamentals to advanced topics.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-16 md:gap-24">
          {COURSE_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
            >
              {/* Category Info */}
              <div className="flex flex-col lg:col-span-4">
                <div className="relative mb-4 w-fit">
                  <h3 className="font-heading text-3xl font-bold tracking-tight">
                    {category.title}
                  </h3>
                  <motion.div
                    initial={{ width: "100%" }}
                    whileInView={{ width: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                      delay: 0.1 + idx * 0.15,
                    }}
                    className="absolute top-0 right-0 bottom-0 z-20 bg-foreground"
                  />
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Course Cards Grid */}
              <div className="relative grid grid-cols-1 p-px sm:grid-cols-2 lg:col-span-8">
                {category.courses.map((course, courseIdx) => (
                  <CourseCard
                    key={courseIdx}
                    course={course}
                    index={courseIdx + idx * 3}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
