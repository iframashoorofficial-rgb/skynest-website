import { useEffect } from 'react';

// Sets the text shown in the browser tab, e.g. "FAQ | SkyNest Co-Living Spaces".
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | SkyNest Co-Living Spaces`;
  }, [title]);
}
