export function StrawberryLogo({ className = "w-32 h-32" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Strawberry Logo"
    >
      {/* Strawberry body */}
      <path
        d="M100 180C140 180 170 150 170 110C170 85 160 65 145 50C130 35 110 30 100 30C90 30 70 35 55 50C40 65 30 85 30 110C30 150 60 180 100 180Z"
        fill="oklch(0.65 0.15 15)"
        className="drop-shadow-lg"
      />

      {/* Strawberry highlight */}
      <ellipse cx="80" cy="80" rx="25" ry="30" fill="oklch(0.75 0.12 15)" opacity="0.6" />

      {/* Seeds */}
      {[
        { cx: 75, cy: 90 },
        { cx: 95, cy: 85 },
        { cx: 115, cy: 95 },
        { cx: 85, cy: 110 },
        { cx: 105, cy: 115 },
        { cx: 125, cy: 110 },
        { cx: 70, cy: 125 },
        { cx: 90, cy: 135 },
        { cx: 110, cy: 140 },
        { cx: 130, cy: 130 },
        { cx: 80, cy: 155 },
        { cx: 100, cy: 160 },
        { cx: 120, cy: 155 },
      ].map((seed, i) => (
        <ellipse key={i} cx={seed.cx} cy={seed.cy} rx="3" ry="4" fill="oklch(0.85 0.05 60)" opacity="0.8" />
      ))}

      {/* Leaves */}
      <path
        d="M100 35C100 35 85 25 75 28C65 31 60 40 65 48C70 56 85 50 90 45"
        fill="oklch(0.55 0.12 140)"
        className="drop-shadow-md"
      />
      <path
        d="M100 35C100 35 115 25 125 28C135 31 140 40 135 48C130 56 115 50 110 45"
        fill="oklch(0.55 0.12 140)"
        className="drop-shadow-md"
      />
      <path
        d="M100 30C100 30 95 18 100 12C105 6 112 8 112 15C112 22 105 28 100 30"
        fill="oklch(0.60 0.14 140)"
        className="drop-shadow-md"
      />

      {/* Leaf details */}
      <path d="M75 35C75 35 70 32 68 35" stroke="oklch(0.45 0.10 140)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M125 35C125 35 130 32 132 35" stroke="oklch(0.45 0.10 140)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M100 18C100 18 102 15 105 16" stroke="oklch(0.50 0.12 140)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

