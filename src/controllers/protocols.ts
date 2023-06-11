export interface HttsResponse<T> {
    statusCode: number;
    body: T | string
}