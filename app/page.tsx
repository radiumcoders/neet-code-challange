import Container from "@/components/core/container"
import Navbar from "@/components/core/navbar"

export default function Page() {
  return (
    <Container className="p-0">
      <Navbar />

      <main className="p-8">
        <h1 className="mb-2 font-heading text-lg font-medium">
          A better way to prepare for coding interviews
        </h1>
        <p className="text-sm text-muted-foreground">
          Pick up where you left off or start a new challenge.
        </p>
      </main>
    </Container>
  )
}
