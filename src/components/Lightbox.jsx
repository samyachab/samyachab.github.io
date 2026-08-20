import { useEffect, useCallback } from "react";
import "./Lightbox.css";

// Fullscreen image viewer with prev/next within a group. Close on backdrop click,
// Esc; navigate with arrow keys or the on-screen chevrons.
export default function Lightbox({ images, index, onClose, onIndex }) {
  const prev = useCallback(
    (e) => {
      e?.stopPropagation();
      onIndex((index - 1 + images.length) % images.length);
    },
    [index, images.length, onIndex]
  );
  const next = useCallback(
    (e) => {
      e?.stopPropagation();
      onIndex((index + 1) % images.length);
    },
    [index, images.length, onIndex]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="lightbox__close" onClick={onClose} aria-label="Fermer">
        &times;
      </button>
      {images.length > 1 && (
        <button className="lightbox__nav lightbox__nav--prev" onClick={prev} aria-label="Précédent">
          &#8249;
        </button>
      )}
      <img className="lightbox__img" src={images[index]} alt="" onClick={(e) => e.stopPropagation()} />
      {images.length > 1 && (
        <button className="lightbox__nav lightbox__nav--next" onClick={next} aria-label="Suivant">
          &#8250;
        </button>
      )}
      {images.length > 1 && (
        <div className="lightbox__counter">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}
