/**
 * Q. returnHello 함수 (기본 Promise)
 *
 * - returnHello() -> "Hello"를 resolve하는 Promise를 반환하세요.
 *
 * @returns {Promise<string>}
 */

// TODO: returnHello 함수를 작성하세요.
function returnHello() {
    return new Promise((resolve, reject) => {
        let success = true;
        if(success){
        resolve('Hello');
        }else{
        reject("error")
        }
})
}

// export를 수정하지 마세요.
export { returnHello };
