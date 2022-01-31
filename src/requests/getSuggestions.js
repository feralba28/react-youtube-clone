import jsonpAdapter from 'axios-jsonp'

function getSuggestions({ keyword }) {
  return {
    method: 'get',
    url: 'https://clients1.google.com/complete/search',
    adapter: jsonpAdapter,
    params: {
      client: 'youtube',
      hl: 'es',
      ds: 'yt',
      q: keyword,
    },
  }
}

export default getSuggestions
