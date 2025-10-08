import { StrawberryLogo } from "../components/strawberry-logo";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-12">
          {/* Strawberry logo */}
          <div className="animate-fade-in">
            <StrawberryLogo className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
          </div>

          {/* Heading */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-balance tracking-tight">
              Coming Soon
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Something sweet is on the way
            </p>
          </div>

          {/* Footer */}
          <div className="pt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm text-muted-foreground">© 2025 Capsumi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
