import { useState } from "react"

import "~/src/style.css"

function IndexPopup() {
  const [count, setCount] = useState(0)

  return (
    <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-justify-center plasmo-min-h-[400px] plasmo-min-w-[300px] plasmo-p-6 plasmo-bg-gradient-to-br plasmo-from-blue-500 plasmo-to-purple-600 plasmo-text-white">
      <h1 className="plasmo-text-3xl plasmo-font-bold plasmo-mb-4">
        Plasmo + Tailwind
      </h1>
      <p className="plasmo-text-lg plasmo-mb-6">
        Your extension template is ready!
      </p>
      <div className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-gap-4">
        <div className="plasmo-text-5xl plasmo-font-bold">{count}</div>
        <button
          onClick={() => setCount(count + 1)}
          className="plasmo-px-6 plasmo-py-2 plasmo-bg-white plasmo-text-blue-600 plasmo-rounded-lg plasmo-font-semibold plasmo-shadow-lg hover:plasmo-bg-gray-100 plasmo-transition-colors">
          Click me
        </button>
      </div>
    </div>
  )
}

export default IndexPopup
