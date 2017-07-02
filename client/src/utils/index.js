export const isPromise = (promise) => {
    return promise && typeof promise.then === 'function';
}