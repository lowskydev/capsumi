export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="flex flex-col items-center gap-8 text-center">
        <img src="/capsumi-logo-color.PNG" alt="Capsumi Logo" width={230} height={230} className="" priority />
        <div className="space-y-4">
          <h1 className="text-balance font-sans text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Coming Soon
          </h1>
          <p className="text-pretty text-lg text-muted-foreground md:text-xl">Something sweet is on the way</p>
        </div>
      </div>
    </div>
  )
}
