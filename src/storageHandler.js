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

export function updateLocalStorage(key, object) {
  if (getLocalStorage(key)) {
    let currentStorage = getLocalStorage(key)
    currentStorage.push(object)
    setLocalStorage(key, currentStorage)
  } else {
    let temp = []
    temp.push(object)
    setLocalStorage(key, temp)
  }
}

export function replaceLocalStorage(key, object) {
  let currentStorage = getLocalStorage(key)
  let ind = currentStorage.findIndex((obj) => {
    return obj.id === object.id
  })
  currentStorage[ind] = object
  setLocalStorage(key, currentStorage)
}

export function setSessionStorage(key, object) {
  let stringified = JSON.stringify(object)
  sessionStorage.setItem(key, stringified)
}

export function getSessionStorage(key) {
  let item = sessionStorage.getItem(key)
  let parsed = JSON.parse(item)
  return parsed
}

export function updateSessionStorage(key, object) {
  if (getSessionStorage(key)) {
    let currentStorage = getSessionStorage(key)
    currentStorage.push(object)
    setSessionStorage(key, currentStorage)
  } else {
    let temp = []
    temp.push(object)
    setSessionStorage(key, temp)
  }
}

export function replaceSessionStorage(key, object) {
  let currentStorage = getSessionStorage(key)
  let ind = currentStorage.findIndex((obj) => {
    return obj.id === object.id
  })
  currentStorage[ind] = object
  setSessionStorage(key, currentStorage)
}

export function replaceLogin(object) {
  setSessionStorage("loggedin", object)
}
