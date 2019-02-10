export function insertIntoObject<V>(obj: { [key: string]: V }, key: string, value: V): { [key: string]: V } {
    obj[key] = value;
    return obj;
}
