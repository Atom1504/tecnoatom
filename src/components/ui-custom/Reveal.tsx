import { useLayoutEffect, useRef, type ReactNode } from "react";
import { canAnimateEntrance, onFirstVisible } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
};

/**
 * The server HTML is always visible. After hydration, only blocks still below the fold
 * are hidden and then animated in, so content never depends on JavaScript to appear.
 */
export function Reveal({ children, delay = 0, className, as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement & HTMLLIElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || !canAnimateEntrance(element)) return;

    element.style.setProperty("--reveal-delay", `${delay}s`);
    element.dataset.reveal = "hidden";
    return onFirstVisible(element, () => {
      element.dataset.reveal = "visible";
    });
  }, [delay]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

export default Reveal;
