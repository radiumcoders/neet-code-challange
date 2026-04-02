"use client"

import { cn } from "@/lib/utils"

type Difficulty = "Easy" | "Medium" | "Hard"

type Course = {
  title: string
  description: string
  duration: string
  difficulty: Difficulty
  hoverGradient: string
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

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group flex cursor-pointer flex-col overflow-hidden rounded-none border border-border bg-card transition-colors hover:border-primary/30">
      {/* Course Header (Minimal, Theme-Responsive) */}
      <div className="relative flex h-28 w-full items-center border-b border-border/50 p-5">
        {/* Base Background */}
        <div className="absolute inset-0 bg-muted/30" />

        {/* Very subtle static geometric dots (Light Mode) */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Very subtle static geometric dots (Dark Mode) */}
        <div
          className="absolute inset-0 hidden opacity-[0.05] dark:block"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Hover State: Extremely faint grainy gradient */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            course.hoverGradient
          )}
        >
          {/* Grain Noise Overlay */}
          <div
            className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Course Title Overlay (Theme responsive text color) */}
        <span className="relative z-10 font-heading text-xl font-bold tracking-tight text-foreground">
          {course.title}
        </span>
      </div>

      {/* Course Content */}
      <div className="flex flex-1 flex-col p-5">
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

        {/* Footer Tags */}
        <div className="flex items-center gap-3">
          <span className="rounded-none border border-border bg-muted/30 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
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
      <div
        className="absolute top-0 left-0 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />
      <div
        className="absolute top-0 right-0 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
      />

      <div className="flex w-full max-w-6xl flex-col">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Courses
          </h2>
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
                <h3 className="mb-4 font-heading text-3xl font-bold tracking-tight">
                  {category.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-8">
                {category.courses.map((course, courseIdx) => (
                  <CourseCard key={courseIdx} course={course} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
