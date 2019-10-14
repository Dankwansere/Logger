/**
 * Determines the logger severity
 */
const levels = {
    severe: 'severe',
    warning: 'warning',
    info: 'info',
    error: 'error'
}

type Level = keyof typeof levels;

export { Level };