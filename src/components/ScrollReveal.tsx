import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

/**
 * ScrollReveal — a wrapper component that fades/slides its children in on scroll.
 *
 * 🧠 REACT CONCEPT: Props & Children
 * "Props" are the inputs to a component — like function arguments.
 * "children" is a special prop: it's whatever you put BETWEEN the opening
 * and closing tags: <ScrollReveal>...this stuff...</ScrollReveal>
 *
 * 🧠 REACT CONCEPT: Conditional class names
 * We toggle CSS classes based on state. When `isVisible` flips to true,
 * the element gets the visible styles, triggering the CSS transition.
 */

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // stagger delay in ms
  direction?: 'up' | 'left' | 'right';
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal();

  // Map direction to initial transform
  const transforms = {
    up: 'translateY(24px)',
    left: 'translateX(-24px)',
    right: 'translateX(24px)',
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : transforms[direction],
        // 🧠 We use `steps(8)` instead of `ease-out` to match the
        // brutalist "stamp" aesthetic from the design brief — snappy, not smooth.
        transition: `opacity 0.5s steps(8) ${delay}ms, transform 0.5s steps(8) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
