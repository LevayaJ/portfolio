/**
 * Subtle fade/slide-up entrance animation for sections and cards.
 *
 * Deliberately CSS-only (no IntersectionObserver / scroll-triggered
 * whileInView): a scroll-triggered reveal leaves below-the-fold content at
 * opacity:0 until the user actually scrolls past it, which breaks full-page
 * screenshots, print-to-PDF, and some crawlers that render the page without
 * real incremental scrolling. This runs once on mount instead, so content is
 * always visible shortly after paint regardless of scroll behavior, and
 * `prefers-reduced-motion` (handled globally in globals.css) disables it
 * entirely.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <div
      className={`animate-fade-up ${className}`.trim()}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
