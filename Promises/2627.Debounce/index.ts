type F7 = (...args: string[]) => void;

function debounce(fn: F7, t: number): F7 {
  let timerId: ReturnType<typeof setTimeout>;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
