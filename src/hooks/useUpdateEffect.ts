import { useEffect, useRef, EffectCallback, DependencyList } from 'react';

// Custom hook for prevent the first mount on useEffect, and run only on update
export default function useUpdateEffect(
  effect: EffectCallback,
  dependencies: DependencyList = []
) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
