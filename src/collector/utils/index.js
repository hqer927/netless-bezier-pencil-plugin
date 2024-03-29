/* eslint-disable @typescript-eslint/no-explicit-any */
import { compress, decompress, compressToUint8Array, decompressFromUint8Array } from 'lz-string';
export function transformToNormalData(str) {
    return JSON.parse(decompress(str));
}
export function transformToSerializableData(data) {
    return compress(JSON.stringify(data));
}
export function normalDataToUint8Array(data) {
    return compressToUint8Array(JSON.stringify(data));
}
export function uint8ArrayToNormalData(data) {
    return JSON.parse(decompressFromUint8Array(data));
}
export const plainObjectKeys = Object.keys;
