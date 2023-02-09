//!! javascript로 만들어진 패키지와 라이브러리를 사용한다고 typescript에게 알리는 파일
// @ts-check
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
  return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns number
 */
export function exit(code) {
  return code + 1;
}
