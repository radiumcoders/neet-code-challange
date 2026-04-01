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
        className={cn(
          "col-start-3 mx-auto flex w-full max-w-6xl flex-col",
          className
        )}
      >
        {children}
      </div>
      <div className="relative -right-px col-start-2 row-span-full border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
      <div className="relative -left-px col-start-4 row-span-full border-x border-x-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
    </div>
  )
}

export default Container
