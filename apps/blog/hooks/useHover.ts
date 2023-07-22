import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export function useHover<T extends HTMLElement>() {
  const [isHover, setIsHover] = useState(false);

  const ref = useRef<T>(null);

  const handlePointerEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const handlePointerLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  const controls = useMemo(
    () => ({
      enter: handlePointerEnter,
      leave: handlePointerLeave,
    }),
    [handlePointerLeave, handlePointerEnter]
  );

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    node.addEventListener('pointerenter', handlePointerEnter);
    node.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      node.removeEventListener('pointerenter', handlePointerEnter);
      node.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, [handlePointerLeave, handlePointerEnter]);

  return [ref, isHover, controls] as const;
}
