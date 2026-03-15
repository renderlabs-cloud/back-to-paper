import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — a custom React "hook."
 *
 * 🧠 REACT CONCEPT: Hooks
 * Hooks are functions that start with "use" and let you tap into React features
 * like state (useState) and side effects (useEffect) inside function components.
 * You can also create your OWN hooks (like this one!) to reuse logic across components.
 *
 * This hook watches an element and returns `true` once it scrolls into view.
 */
export function useScrollReveal(options?: IntersectionObserverInit) {
  // 🧠 useRef: Creates a mutable reference that persists across re-renders.
  // Here it holds a DOM element so we can observe it.
  const ref = useRef<HTMLDivElement>(null);

  // 🧠 useState: Declares a piece of "state" — data that, when changed,
  // causes the component to re-render. Starts as `false`, becomes `true`
  // once the element is visible.
  const [isVisible, setIsVisible] = useState(false);

  // 🧠 useEffect: Runs side-effect code AFTER the component renders.
  // The array at the end ([]) means "run this only once, on mount."
  // Think of it as: "after painting the screen, do this setup work."
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // IntersectionObserver is a browser API (not React!) that fires
    // a callback when an element enters/exits the viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only animate once
        }
      },
      { threshold: 0.15, ...options }
    );

    observer.observe(element);

    // 🧠 Cleanup function: React calls this when the component unmounts
    // (is removed from the page). We disconnect the observer to avoid leaks.
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}
