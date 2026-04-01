import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="relative flex h-16 items-center justify-between border-b border-border px-8">
      {/* Intersection Squares */}
      <div
        className="absolute -bottom-1 left-0 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
      />
      <div
        className="absolute right-0 -bottom-1 z-10 h-2 w-1 bg-border"
        style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
      />

      <Link
        href="/"
        className="text-sm font-bold tracking-tight text-foreground"
      >
        NEET<span className="font-normal text-muted-foreground">CODE</span>
      </Link>

      <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
        <Link href="#" className="transition-colors hover:text-foreground">
          Problems
        </Link>
        <Link href="#" className="transition-colors hover:text-foreground">
          Roadmap
        </Link>
        <Link href="#" className="transition-colors hover:text-foreground">
          Leaderboard
        </Link>

        <div className="ml-2 flex items-center gap-4">
          <div className="h-4 w-px bg-border" />
          <Button
            variant="secondary"
            size="sm"
            className="h-8 rounded-md px-4 text-xs"
          >
            Sign In
          </Button>
        </div>
      </nav>
    </header>
  )
}
