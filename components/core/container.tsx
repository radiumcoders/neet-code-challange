import { cn } from "@/lib/utils"

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className="relative grid min-h-screen grid-cols-[1fr_2.5rem_minmax(auto,72rem)_2.5rem_1fr] bg-white [--pattern-fg:var(--color-gray-950)]/5 dark:bg-black dark:[--pattern-fg:var(--color-white)]/10">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-30 dark:opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
            radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.2) 0%, transparent 65%)
          `,
          filter: "blur(80px)",
        }}
      />
      <div
        className={cn(
          "relative z-10 col-start-3 mx-auto flex w-full max-w-6xl flex-col bg-background",
          className
        )}
      >
        {children}
      </div>
      <div className="relative -right-px z-10 col-start-2 row-span-full border-x border-x-(--pattern-fg) bg-background bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
      <div className="relative -left-px z-10 col-start-4 row-span-full border-x border-x-(--pattern-fg) bg-background bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
    </div>
  )
}

export default Container
