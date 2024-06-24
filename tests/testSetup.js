export class RedisMock {
    cache = {};
    get(key) {
        return this.cache[key];
    }
    set(key, val, expires, expiry) {
        this.cache[key] = val;
        return val;
    }
}
