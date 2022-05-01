import React from "react"
import { Button } from "../ButtonElements"
import { Link } from "gatsby"
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Woodstock 99</h1>
      <p>The Infamous Festival in Pictures</p>
      <div className="hero-btns">
        <Button fontBig big primary>
          <Link href="https://www.hbo.com/movies/woodstock-99-peace-love-rage" target="_blank" aria-label="Watch Documentary">
          Watch Documentary
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
