"use client";
import { useState } from "react";
import { GoCode, GoDatabase, GoWorkflow, GoCheck } from "react-icons/go";
const layers = [
  {
    name: "Interface",
    stack: "React + TypeScript",
    note: "Frontend development with React components and TypeScript.",
    icon: GoCode,
  },
  {
    name: "System",
    stack: "C# + .NET",
    note: ".NET services, REST APIs, and application logic written in C#.",
    icon: GoWorkflow,
  },
  {
    name: "Data",
    stack: "PostgreSQL",
    note: "Relational data storage with PostgreSQL.",
    icon: GoDatabase,
  },
];
export function SystemSketch() {
  const [active, setActive] = useState(1);
  return (
    <div className="system-sketch">
      <div className="sketch-header">
        <span className="eyebrow">Technology stack</span>
        <span className="sketch-cross">+</span>
      </div>
      <div className="sketch-canvas">
        <div className="sketch-input">
          <span className="status-dot" /> HTTP request
        </div>
        <div className="sketch-connector" />
        <div className="system-layers" aria-label="Explore my stack">
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
          <GoCheck /> API response
        </div>
        <span className="canvas-corner corner-tl" />
        <span className="canvas-corner corner-br" />
      </div>
      <div className="sketch-note" aria-live="polite">
        <span className="accent">// {layers[active].name.toLowerCase()}</span>
        <p>{layers[active].note}</p>
      </div>
      <div className="sketch-footer">
        <span>Frontend / Backend / Database</span>
        <span>Select a layer ↗</span>
      </div>
    </div>
  );
}
