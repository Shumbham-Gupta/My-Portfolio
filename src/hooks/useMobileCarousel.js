import { useEffect, useRef, useState } from "react";

const AUTOPLAY_INTERVAL_MS = 4500;
const AUTOPLAY_RESUME_MS = 6000;

// Drives a scroll-snap carousel that only activates when the track overflows
// horizontally (i.e. on mobile). Autoplay advances one card at a time and
// pauses while the user is interacting.
export default function useMobileCarousel(itemCount) {
  const trackRef = useRef(null);
  const activeIndexRef = useRef(0);
  const pausedRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToItem = (index) => {
    const track = trackRef.current;
    const card = track?.children[index];
    if (!track || !card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
      behavior: "smooth",
    });
  };

  const pauseAutoplay = () => {
    pausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, AUTOPLAY_RESUME_MS);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const id = setInterval(() => {
      const track = trackRef.current;
      if (!track || pausedRef.current || document.hidden) return;
      // No horizontal overflow means the desktop grid is active — nothing to advance.
      if (track.scrollWidth <= track.clientWidth + 8) return;
      const next = (activeIndexRef.current + 1) % itemCount;
      const card = track.children[next];
      if (!card) return;
      track.scrollTo({
        left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
        behavior: "smooth",
      });
    }, AUTOPLAY_INTERVAL_MS);

    return () => {
      clearInterval(id);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [itemCount]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) return;
    const step = track.children[1].offsetLeft - track.children[0].offsetLeft;
    if (step <= 0) return;
    const index = Math.max(0, Math.min(itemCount - 1, Math.round(track.scrollLeft / step)));
    activeIndexRef.current = index;
    if (index !== activeIndex) setActiveIndex(index);
  };

  return { trackRef, activeIndex, scrollToItem, pauseAutoplay, handleScroll };
}
