"use client"

import { AboutSection } from "@/components/about-section"
import Container from "@/components/core/container"
import Navbar from "@/components/core/navbar"
import { CoursesSection } from "@/components/courses-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { LogoCloud } from "@/components/logo-cloud"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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

function TestimonialCard({
  name,
  company,
  image,
  quote,
  index,
}: {
  name: string
  company: string
  image: string
  quote?: string
  index: number
}) {
  const gradient = CARD_GRADIENTS[index % CARD_GRADIENTS.length]

  return (
    <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-none border border-border bg-card p-6 text-card-foreground transition-colors">
      {/* Hover Background Gradient */}
      <div
        className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:group-hover:opacity-20"
        style={gradient}
      />
      <div className="relative z-10 flex items-center gap-3">
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
        <p className="relative z-10 text-left text-sm leading-relaxed text-muted-foreground">
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

      <main className="relative flex w-full flex-col items-center border-b border-border px-8 py-16 text-center md:py-20">
        {/* Dashed Bottom Fade Grid */}
        <div
          className="absolute inset-0 z-0 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e7e5e4 1px, transparent 1px),
              linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
               repeating-linear-gradient(
                    to right,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
            `,
            WebkitMaskImage: `
        repeating-linear-gradient(
                    to right,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Intersection Squares */}
        <div
          className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
        <div
          className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        <div className="relative z-10 mb-2 inline-flex items-center gap-2 rounded-none border border-border bg-background/50 px-3 py-1 text-sm font-medium text-muted-foreground backdrop-blur-sm">
          <div className="h-1.5 w-1.5 animate-pulse bg-foreground"></div>
          NeetCode
          <div className="h-1.5 w-1.5 animate-pulse bg-foreground"></div>
        </div>
        <h1 className="relative z-10 max-w-4xl bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text font-heading text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          A better way to prepare for coding interviews
        </h1>
        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="px-8 font-semibold">
            <Link href="#">Start for Free</Link>
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="border border-border px-8 font-semibold"
          >
            <Link href="#">Browse Problems</Link>
          </Button>
        </div>
      </main>

      <section className="relative flex flex-col items-center border-b border-border px-8 py-16 md:py-24">
        {/* Dashed Bottom Left Fade Grid */}
        <div
          className="absolute inset-0 z-0 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e7e5e4 1px, transparent 1px),
              linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
                  repeating-linear-gradient(
                    to right,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                 radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
            `,
            WebkitMaskImage: `
                         repeating-linear-gradient(
                    to right,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                 radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Intersection Squares */}
        <div
          className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
        <div
          className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3">
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
                <TestimonialCard key={idx} index={idx} {...testimonial} />
              ))}

              {/* Nested grid for the last column containing the two smaller cards stacked in rows */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-1">
                {ADDITIONAL_TESTIMONIALS.map((testimonial, idx) => (
                  <TestimonialCard
                    key={idx}
                    index={idx + MAIN_TESTIMONIALS.length}
                    {...testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col items-center border-b border-border px-8 py-12 md:py-16">
        {/* Dashed Bottom Left Fade Grid */}
        <div
          className="absolute inset-0 z-0 dark:opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e7e5e4 1px, transparent 1px),
              linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
                  repeating-linear-gradient(
                    to right,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                 radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
            `,
            WebkitMaskImage: `
                         repeating-linear-gradient(
                    to right,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                  repeating-linear-gradient(
                    to bottom,
                    black 0px,
                    black 3px,
                    transparent 3px,
                    transparent 8px
                  ),
                 radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
            `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Intersection Squares */}
        <div
          className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
        />
        <div
          className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
          style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
        />

        <p className="relative z-10 mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by engineers who landed offers at top companies
        </p>
        <div className="relative z-10 w-full max-w-5xl">
          <LogoCloud />
        </div>
      </section>

      {/*<RoadmapSection />*/}
      <CoursesSection />
      <PricingSection />
      <AboutSection />
      <Footer />
    </Container>
  )
}
