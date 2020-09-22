import queryString from "query-string"

const isBrowser = typeof window !== `undefined`

const addQueryToLink = query => {
  let urlQuery = {}
  if (isBrowser) {
    urlQuery = queryString.parse(window.location.search)
  }
  query = queryString.parse(query)
  urlQuery = { ...urlQuery, ...query }
  return `?${queryString.stringify(urlQuery)}`
}

const removeQueryFromLink = queryName => {
  let urlQuery = {}
  if (isBrowser) {
    urlQuery = queryString.parse(window.location.search)
  }
  delete urlQuery[queryName]

  return `?${queryString.stringify(urlQuery)}`
}

export { addQueryToLink, removeQueryFromLink }
