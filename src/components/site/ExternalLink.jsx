export default function ExternalLink({ href, children, className = '', label }) {
  return <a href={href} className={className} aria-label={label ? `${children}: ${label} (opens in new tab)` : undefined} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in new tab)</span></a>;
}
