import log from './log'

const baseURL = 'https://reqres.in/api/'
const Auth = 'Basic SGVsbG8gdGhlcmUgOikgSGF2ZSBhIGdvb2QgZGF5IQ=='

interface networkParams {
  url: string
  method?: string
  body?: any
  isFullUrl?: boolean
}

export async function get(params: networkParams) {
  let body = params.body ? params.body : {}
  let isAPI = !params.isFullUrl
  let url = isAPI ? baseURL + params.url : params.url

  let data = null
  await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: Auth,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => (data = response.json()))
    .catch((error) => {
      log(error)
    })

  return data
}

export async function post(params: networkParams) {
  let body = params.body ? params.body : {}
  let isAPI = !params.isFullUrl
  let url = isAPI ? baseURL + params.url : params.url

  let data = null
  await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: Auth,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => (data = response.json()))
    .catch((error) => {
      log(error)
    })

  return data
}

export default async function network(params: networkParams) {
  let method = params.method ? params.method : 'GET'
  let body = params.body ? params.body : {}
  let isAPI = !params.isFullUrl
  let url = isAPI ? baseURL + params.url : params.url

  let data = null
  await fetch(url, {
    method: method,
    headers: {
      Authorization: Auth,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => (data = response.json()))
    .catch((error) => {
      log(error)
    })

  return data
}
