export function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
}

export function isPositiveNumber(value) {
    return value > 0;
}