export type Dispose = () => void;
export type Cleanup = () => void;

export interface ReactiveAdapter {
    effect(callback: () => void): Dispose;

    batch<T>(callback: () => T): T;

    untrack<T>(callback: () => T): T;

    createStore<T extends object>(initialValue: T): T;
}
