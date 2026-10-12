// Each button has a separate event so counts are visible without custom dimensions.
export function trackLinkClick(name, url) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', `click_${name}`, {
      link_name: name,
      link_url: url,
      transport_type: 'beacon',
    });
  } catch {
    // Navigation must keep working if analytics is unavailable.
  }
}
