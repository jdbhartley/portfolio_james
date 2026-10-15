"use client";
import { GoDownload } from "react-icons/go";
export function PrintButton() {
  return (
    <button
      type="button"
      className="button button-primary"
      onClick={() => window.print()}
    >
      Print / Save PDF <GoDownload />
    </button>
  );
}
