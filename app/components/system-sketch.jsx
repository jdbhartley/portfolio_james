"use client";
import { useState } from "react";
import { GoCode, GoWorkflow, GoCheck } from "react-icons/go";
const layers = [
  {
    name: "Application",
    stack: "C# · Visual Studio",
    note: "Maintained YAPI’s legacy C# application, fixed integration issues, and released patches.",
    icon: GoCode,
  },
  {
    name: "Installation tools",
    stack: "C# · SQLite",
    note: "Built a server-installation tool that reduced setup from 2–3 hours to 45–60 minutes.",
    icon: GoWorkflow,
  },
  {
    name: "Admin features",
    stack: "React · TypeScript",
    note: "Added remote database resets to the new application’s admin panel.",
    icon: GoCode,
  },
];
export function SystemSketch() {
  const [active, setActive] = useState(1);
  return (
    <div className="system-sketch">
      <div className="sketch-header">
        <span className="eyebrow">Development work</span>
        <span className="sketch-cross">+</span>
      </div>
      <div className="sketch-canvas">
        <div className="sketch-input">
          <span className="status-dot" /> YAPI application & tools
        </div>
        <div className="sketch-connector" />
        <div className="system-layers" aria-label="Development experience">
          {layers.map((layer, index) => (
            <button
              type="button"
              key={layer.name}
              className={`system-layer ${index === active ? "is-active" : ""}`}
              aria-pressed={index === active}
              onClick={() => setActive(index)}
            >
              <span className="layer-icon">
                <layer.icon />
              </span>
              <span>
                <strong>{layer.name}</strong>
                <small>{layer.stack}</small>
              </span>
              <span className="layer-number">0{index + 1}</span>
            </button>
          ))}
        </div>
        <div className="sketch-connector" />
        <div className="sketch-output">
          <GoCheck /> Jul 2019 – Mar 2026
        </div>
        <span className="canvas-corner corner-tl" />
        <span className="canvas-corner corner-br" />
      </div>
      <div className="sketch-note" aria-live="polite">
        <span className="accent">// {layers[active].name.toLowerCase()}</span>
        <p>{layers[active].note}</p>
      </div>
      <div className="sketch-footer">
        <span>C# / SQLite / React</span>
        <span>Select an area ↗</span>
      </div>
    </div>
  );
}
