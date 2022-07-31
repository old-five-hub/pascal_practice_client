export function stringify(data: unknown, space?: number | string) {
    if (typeof data === 'string') {
        return data;
    }
    if (typeof data === 'object' && data !== null) {
        try {
            return JSON.stringify(data, null, space)
        } catch (_ignore) {}
    }

    return String(data);
}