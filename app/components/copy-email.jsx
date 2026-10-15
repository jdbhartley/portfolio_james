"use client";
import { useState } from "react";
import { GoCopy, GoCheck } from "react-icons/go";
import data from "../../data.json";
export function CopyEmail() {
  const [status, setStatus] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(data.email);
      setStatus("Email copied");
    } catch {
      setStatus(
        "Select the email address above to copy it, or click it to send a message.",
      );
    }
  }
  return (
    <div className="copy-email">
      <button type="button" className="text-link" onClick={copy}>
        {status === "Email copied" ? <GoCheck /> : <GoCopy />} Copy email
        address
      </button>
      <span role="status">{status}</span>
    </div>
  );
}
