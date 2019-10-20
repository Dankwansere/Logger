/**
 * Determines the logger severity
 */
const levels = {
  error: 'error',
  info: 'info',
  severe: 'severe',
  warning: 'warning',
};

type Level = keyof typeof levels;

export { Level };
