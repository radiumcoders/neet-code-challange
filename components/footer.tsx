import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative flex flex-col items-center px-8 py-12 md:py-16">
      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <span className="font-mono text-sm font-bold tracking-tight">
            NEETCODE
          </span>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} NeetCode. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="#" className="transition-colors hover:text-foreground">
            Courses
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Terms
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="#" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
