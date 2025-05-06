import React from "react";
import { SparklesText } from "./ui/sparkles-text";

export function SparklesTextDemo() {
  return (
    <SparklesText 
      text="Little Athletes!" 
      colors={{ first: "#0ea5e9", second: "#fbbf24" }}
      className="text-sky-500"
    />
  );
}