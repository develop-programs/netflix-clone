"use client";
import React from "react";

export default function useScroll() {
  const [Position, setPosition] = React.useState(false);
  function handleScroll() {
    setPosition(true);
  }
  function handleLeave() {
    setPosition(false);
  }
  return { Position, handleScroll, handleLeave };
}
