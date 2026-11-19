// Photo.jsx - NEW in Version 2. One reusable, optimised image.
//
// - srcSet + sizes: the browser picks the smallest file that still looks sharp
//   (a 390px phone no longer downloads an 1800px banner).
// - priority: the first big image on a page loads straight away (fetchpriority="high").
//   Every other image is lazy-loaded, so it only downloads when you scroll near it.
// - width/height: reserve space before the image arrives, so the page does not jump.
import { unsplash } from '../data/images.js';

const WIDTHS = [480, 800, 1200, 1800];

export default function Photo({
  image,
  sizes = '100vw',
  width = 1200,
  height = 800,
  maxWidth = 1800,
  priority = false,
  className = '',
}) {
  const widths = WIDTHS.filter((w) => w <= maxWidth);
  const srcSet = widths.map((w) => `${unsplash(image.id, w)} ${w}w`).join(', ');

  return (
    <img
      className={className || undefined}
      src={unsplash(image.id, widths[widths.length - 1] >= 1200 ? 1200 : widths[widths.length - 1])}
      srcSet={srcSet}
      sizes={sizes}
      alt={image.alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'auto' : 'async'}
      fetchpriority={priority ? 'high' : undefined}
    />
  );
}
