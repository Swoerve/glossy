/**
 * stringifies an object and saves it at key in localstorage
 * @param {String} key 
 * @param {Object} object 
 */
export function setLocalStorage(key, object) {
  let stringified = JSON.stringify(object)
  localStorage.setItem(key, stringified)
}

export function getLocalStorage(key) {
  let item = localStorage.getItem(key)
  let parsed = JSON.parse(item)
  return parsed
}