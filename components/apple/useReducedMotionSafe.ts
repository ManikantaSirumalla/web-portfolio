"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/** Matches the server render (motion on) until mount, so the preference never causes a hydration mismatch. */
export function useReducedMotionSafe(): boolean {
  const prefers = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? Boolean(prefers) : false;
}
