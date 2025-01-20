import type React from "react"
import Link from "next/link"

interface NavbarProps {
  currentLayout: string
  onLayoutChange: (layout: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ currentLayout, onLayoutChange }) => {
  return (
    <nav className="flex justify-center space-x-4 py-4">
      {["all", "about", "work"].map((layout) => (
        <button
          key={layout}
          className={`px-4 py-2 rounded-md ${
            currentLayout === layout
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
          onClick={() => onLayoutChange(layout)}
        >
          {layout.charAt(0).toUpperCase() + layout.slice(1)}
        </button>
      ))}
    </nav>
  )
}

export default Navbar

