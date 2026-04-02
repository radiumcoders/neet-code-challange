"use client"

import Container from "@/components/core/container"
import Navbar from "@/components/core/navbar"
import { LogoCloud } from "@/components/logo-cloud"
import { RoadmapSection } from "@/components/roadmap-section"

const MAIN_TESTIMONIALS = [
  {
    name: "Amog Chandrashekar",
    company: "Google",
    image: "https://neetcode.io/assets/first-viewer-img.jpeg",
    quote:
      '"I signed my offer with Google as a software engineer (L4) and you have a fair share of contribution in it."',
  },
  {
    name: "Rodrigo Ramirez",
    company: "Microsoft",
    image: "https://neetcode.io/assets/microsoft-viewer.jpeg",
    quote:
      '"I recently got an offer for Microsoft, and I will be starting next year! Thank you so much for your videos!"',
  },
  {
    name: "Aiswarya Sukumar",
    company: "Amazon",
    image: "https://neetcode.io/assets/amazon-viewer.jpeg",
    quote:
      '"Got an offer from Amazon today. Thanks a lot for your videos. It really helped me during the preparation."',
  },
]

const ADDITIONAL_TESTIMONIALS = [
  {
    name: "Janvi Kalra",
    company: "OpenAI",
    image: "https://neetcode.io/assets/openai%20janvi.jpeg",
  },
  {
    name: "Thariq Shihipar",
    company: "Anthropic",
    image: "/thariq%20anthropic.jpg",
  },
]

function TestimonialCard({
  name,
  company,
  image,
  quote,
}: {
  name: string
  company: string
  image: string
  quote?: string
}) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-none border border-border bg-card p-6 text-card-foreground">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 overflow-hidden rounded-full bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-sm font-semibold">{name}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            {company}
          </span>
        </div>
      </div>
      {quote && (
        <p className="text-left text-sm leading-relaxed text-muted-foreground">
          {quote}
        </p>
      )}
    </div>
  )
}

export default function Page() {
  return (
    <Container className="p-0">
      <Navbar />

      <main className="relative flex flex-col items-center border-b border-border px-8 py-16 text-center md:py-20">
        {/* Intersection Squares */}
        <div
          className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
        <div
          className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        <span className="mb-2 font-mono text-sm font-medium text-muted-foreground">
          -----NEETCODE-----
        </span>
        <h1 className="max-w-4xl font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          A better way to prepare for coding interviews
        </h1>
      </main>

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

        <div className="grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="flex flex-col text-left lg:col-span-1">
            <h2 className="mb-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Thousands of engineers have landed roles at top companies after
              studying with NeetCode. From first-time job seekers to senior
              engineers switching teams, the results speak for themselves.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {MAIN_TESTIMONIALS.map((testimonial, idx) => (
                <TestimonialCard key={idx} {...testimonial} />
              ))}

              {/* Nested grid for the last column containing the two smaller cards stacked in rows */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
                {ADDITIONAL_TESTIMONIALS.map((testimonial, idx) => (
                  <TestimonialCard key={idx} {...testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center border-b border-border px-8 py-12 md:py-16">
        {/* Intersection Squares */}
        <div
          className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
        <div
          className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by engineers who landed offers at top companies
        </p>
        <div className="w-full max-w-5xl">
          <LogoCloud />
        </div>
      </section>

      <RoadmapSection />
    </Container>
  )
}
