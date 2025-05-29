import React, { useEffect, useRef } from "react";
import Card from "../../../components/ui/Card";
import WordCloud from "wordcloud"

const words = [
  ["clothing", 200],
  ["electronics", 120],
  ["fashion", 105],
  ["buy", 100],
  ["essentials", 95],
  ["category", 90],
  ["deals", 85],
  ["home", 70],
  ["beauty", 65],
  ["search", 80],
  ["gadgets", 65],
]

// Color palette for the word cloud
const colors = [
  "#36CFCF", // teal
  "#6B46C1", // purple
  "#F6AD55", // orange
  "#48BB78", // green
  "#F56565", // red
  "#ED8936", // dark orange
  "#9F7AEA", // light purple
  "#38B2AC", // dark teal
]

export default function TopResponses() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (canvasRef.current) {
      // Clear any previous word cloud
      canvasRef.current.width = canvasRef.current.offsetWidth
      canvasRef.current.height = canvasRef.current.offsetHeight

      // Configure word cloud options
      const options = {
        list: words,
        gridSize: 16,
        weightFactor: (size) => Math.max(size * 0.25, 12),
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        color: (word, weight, fontSize, distance, theta) => {
          // Rotate through the color palette
          return colors[Math.floor(Math.random() * colors.length)]
        },
        rotateRatio: 0.3,
        rotationSteps: 2,
        backgroundColor: "transparent",
        drawOutOfBound: false,
        shrinkToFit: true,
      }

      // Generate the word cloud
      WordCloud(canvasRef.current, options)
    }
  }, [])

  return (
    <Card>
      <div className="flex flex-row items-center justify-between pb-2 pt-4 px-6">
        <h3 className="text-lg font-medium">Top Responses</h3>
      </div>
      <div className="px-6 pb-4">
        <div className="h-64 w-full">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </Card>
  )
}
