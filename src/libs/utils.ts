/**
 * 使用json进行深拷贝
 */
export const deepCloneByJson = (obj: object) => JSON.parse(JSON.stringify(obj));
