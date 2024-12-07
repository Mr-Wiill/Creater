import Compressor from 'compressorjs';

/* 
    判断文件大小来决定压缩
*/
export async function getCompressFile(file: any, size: number = 1024*100) {
    if (file?.size < size) return file;
    const res: any = await compressFile(file)
    return new File([res], res.name, { type: res.type })
}

/* 
    压缩文件
*/
export function compressFile(file: any) {
    return new Promise((resolve, reject) => {
        new Compressor(file, {
            quality: 0.6,
            // The compression process is asynchronous,
            // which means you have to access the `result` in the `success` hook function.
            success(result) {
                resolve(result)
            },
            error(err) {
                console.log(err.message);
                reject(err)
            },
        });
    })
}