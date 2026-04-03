"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useMotionTemplate, useMotionValue, motion } from "framer-motion"
import { MouseEvent as ReactMouseEvent } from "react"
import Link from "next/link"

function Crosshair({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute z-20 flex h-3 w-3 items-center justify-center",
        className
      )}
    >
      <div className="absolute h-full w-px bg-border" />
      <div className="absolute h-px w-full bg-border" />
    </div>
  )
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 text-green-500"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const PLANS = [
  {
    title: "Lifetime",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" />
      </svg>
    ),
    price: "$297",
    originalPrice: "$599",
    period: "one-time payment",
    features: [
      "Everything, forever",
      "All future content included",
      "Private Discord community",
    ],
    buttonText: "Get Lifetime Access",
  },
  {
    title: "One-Year Access",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    price: "$119",
    originalPrice: "$199",
    period: "auto-renew off by default",
    features: [
      "Full access for 12 months",
      "Includes future content",
      "Private Discord community",
    ],
    buttonText: "Get 1 Year Access",
  },
]

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof PLANS)[0]
  index: number
}) {
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
      className="group relative -mt-px -ml-px flex cursor-pointer flex-col overflow-hidden border border-border bg-card p-10 transition-colors hover:z-10"
      onMouseMove={handleMouseMove}
    >
      {/* Background Hover Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
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
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      {/* Grid Crosshairs */}
      <Crosshair className="-top-1.5 -left-1.5" />
      <Crosshair className="-top-1.5 -right-1.5" />
      <Crosshair className="-bottom-1.5 -left-1.5" />
      <Crosshair className="-right-1.5 -bottom-1.5" />

      <div className="relative z-10 flex h-full flex-col items-center text-center">
        <div className="mb-6 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          {plan.icon}
          {plan.title}
        </div>

        <div className="mb-2 flex items-baseline gap-2">
          <span className="text-5xl font-extrabold tracking-tight text-foreground">
            {plan.price}
          </span>
          <span className="text-lg font-medium text-muted-foreground line-through">
            {plan.originalPrice}
          </span>
        </div>
        <p className="mb-10 text-sm font-medium text-muted-foreground">
          {plan.period}
        </p>

        <div className="mb-10 flex w-full flex-col gap-4 text-left">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckIcon />
              <span className="text-sm font-medium text-muted-foreground">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Button size="lg" className="mt-auto w-full font-semibold">
          {plan.buttonText}
        </Button>
      </div>
    </div>
  )
}

const SUCCESS_FEATURES = [
  {
    title: "Video Courses",
    description:
      "Learn from hours of in-depth video content covering data structures, algorithms, system design, and more. Each concept is explained clearly with visual animations and real coding examples.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-indigo-400"
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    label: "200+ Videos",
  },
  {
    title: "Practice Problems",
    description:
      "Solve curated problems directly in your browser with our built-in code editor. Get instant feedback, run test cases, and track your progress as you work through the NeetCode 150 and beyond.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-blue-400"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    label: "300+ Problems",
  },
  {
    title: "Written Guides",
    description:
      "Comprehensive articles that break down each topic with diagrams, code snippets, and step-by-step explanations. Perfect for review or when you prefer reading over watching.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-sky-400"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    label: "Detailed Articles",
  },
  {
    title: "Code Solutions",
    description:
      "Every problem comes with solutions in Python, Java, C++, JavaScript, C#, Go, Swift, and Kotlin. See exactly how to implement each algorithm with clean, well-commented code you can learn from.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6 text-purple-400"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    label: "8 Languages",
  },
]

function FeatureBox({ feature }: { feature: (typeof SUCCESS_FEATURES)[0] }) {
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
      className="group relative flex h-32 w-full cursor-pointer flex-col items-center justify-center gap-3 overflow-hidden border border-border bg-card/50 px-8 transition-colors hover:z-10 md:w-56"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              250px circle at ${mouseX}px ${mouseY}px,
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
              250px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center gap-3">
        {feature.icon}
        <span className="text-xs font-semibold text-foreground">
          {feature.label}
        </span>
      </div>
    </div>
  )
}

export function PricingSection() {
  return (
    <section className="relative flex flex-col items-center border-b border-border px-8 py-16 md:py-24">
      {/* Intersection Squares */}
      <div
        className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />
      <div
        className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
      />

      {/* Pricing Header */}
      <div className="mb-12 flex w-full max-w-4xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          Choose Your Plan
        </span>

        {/* Pricing Cards Grid */}
        <div className="grid w-full grid-cols-1 p-px md:grid-cols-2">
          {PLANS.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} index={idx} />
          ))}
        </div>

        <Link
          href="#"
          className="mt-8 flex items-center gap-2 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <polyline points="20 12 20 22 4 22 4 12" />
            <rect x="2" y="7" width="20" height="5" />
            <line x1="12" y1="22" x2="12" y2="7" />
            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
          </svg>
          Gift a Plan
        </Link>
      </div>

      {/* Success Features Divider */}
      <div className="my-16 w-full max-w-4xl">
        <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Everything You Need to Succeed
        </h2>

        <div className="flex flex-col gap-12">
          {SUCCESS_FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-16"
            >
              <div className="flex flex-1 flex-col text-left">
                <h3 className="mb-3 font-heading text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>

              <FeatureBox feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
