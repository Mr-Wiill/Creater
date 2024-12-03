/** *
 *
 * 获取请求的UUID，指定长度和进制,如
 * getUUID(8, 2)   //"01001010" 8 character (base=2)
 * getUUID(8, 10) // "47473046" 8 character ID (base=10)
 * getUUID(8, 16) // "098F4D35"。 8 character ID (base=16)
 *
 */
export function getUUID(len?: number, radix?: number): string {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    let uuid: any = []
    let i = 0
    radix = radix || chars.length
    if (len) {
        for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
    } else {
        let r = 0 | Math.random() * 16
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
        uuid[14] = '4'
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
            }
        }
    }
    return uuid.join('')
} 