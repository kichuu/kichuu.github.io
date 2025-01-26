"use client"

import { useState } from "react"
import CardWrapper from "./card-wrapper"

export default function Navbar() {
  const [activeLayout, setActiveLayout] = useState("all")

  const navItems = [
    { name: "All", value: "all" },
    { name: "About", value: "about" },
    { name: "Work", value: "work" },
    { name: "Skills", value: "skills" },
  ]

  return (
    <div className="flex justify-between items-center px-4 py-2 max-w-7xl mx-auto">
      <div className="flex-1" /> {/* Spacer */}
      <CardWrapper className="p-1">
        <nav className="flex space-x-1">
          {navItems.map((item) => (
            <button
              key={item.value}
              className="rounded-full"
              onClick={() => setActiveLayout(item.value)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </CardWrapper>
      <div className="flex-1 flex justify-end">
        <CardWrapper className="w-auto">
          <button
            className="rounded-full w-full h-full"
            onClick={() => {
              window.open("/Krishnadev-Resume.pdf", "_blank")
              const downloadLink = document.createElement("a")
              downloadLink.href = "/Krishnadev-Resume.pdf"
              downloadLink.download = "Krishnadev-Resume.pdf"
              downloadLink.click()
            }}
          >
            Resume
          </button>
        </CardWrapper>
      </div>
    </div>
  )
}

