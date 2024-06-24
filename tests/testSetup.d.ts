export declare class RedisMock {
    private cache;
    get(key: string): string;
    set(key: string, val: string, expires: string, expiry: number): string;
}
