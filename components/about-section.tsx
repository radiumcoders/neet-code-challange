import { cn } from "@/lib/utils"

export function AboutSection() {
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

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image Column */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg overflow-visible bg-transparent grayscale filter transition-all duration-300 hover:grayscale-0">
            {/* Subtle background gradient behind Navi */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-sky-400/20 to-indigo-400/20 blur-3xl dark:from-sky-400/10 dark:to-indigo-400/10" />

            {/* The user should place their actual image in public/navi.png or update this src */}
            <img
              src="https://neetcode.io/assets/navi.png"
              alt="Navi holding YouTube Gold Play Button"
              className="h-auto w-full object-contain object-bottom drop-shadow-2xl"
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.style.display = "none"
                e.currentTarget.parentElement?.classList.add(
                  "flex",
                  "items-center",
                  "justify-center",
                  "border",
                  "border-border"
                )
                if (e.currentTarget.parentElement) {
                  e.currentTarget.parentElement.innerHTML =
                    '<span class="text-sm text-muted-foreground">Image of Navi</span>'
                }
              }}
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="flex flex-col text-left">
          <h2 className="mb-6 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Hi, I&apos;m Navi
          </h2>

          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I created NeetCode in 2020 when I was unemployed and couldn&apos;t
              find a job.
            </p>
            <p>
              While I was struggling myself, it was still rewarding for me to
              make videos.
            </p>
            <p>
              I received so many messages from others who got jobs after
              studying with my videos. It felt so gratifying and kept me
              motivated.
            </p>
            <p>About a year later I managed to get a job at Google.</p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6">
            <span className="text-sm font-medium text-muted-foreground">
              Previously at
            </span>
            <div className="flex items-center gap-8 grayscale filter transition-all duration-300 hover:grayscale-0 dark:brightness-0 dark:invert">
              {/* Google */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="h-5 w-auto object-contain"
              />

              {/* Amazon */}
              <img
                src="http://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                alt="Amazon"
                className="h-7 w-auto translate-y-[3px] object-contain"
              />

              {/* Capital One */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/98/Capital_One_logo.svg"
                alt="Capital One"
                className="h-5 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
