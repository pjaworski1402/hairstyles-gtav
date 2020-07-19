import queryString from "query-string"

const addQueryToLink = query => {
  let urlQuery = queryString.parse(window.location.search)
  query = queryString.parse(query)
  urlQuery = { ...urlQuery, ...query }
  return `?${queryString.stringify(urlQuery)}`
}

const removeQueryFromLink = queryName => {
  let urlQuery = queryString.parse(window.location.search)
  delete urlQuery[queryName]

  return `?${queryString.stringify(urlQuery)}`
}

export { addQueryToLink, removeQueryFromLink }
