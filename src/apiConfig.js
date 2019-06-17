let apiUrl
const apiUrls = {
  production: 'https://afternoon-stream-50589.herokuapp.com',
  development: 'https://afternoon-stream-50589.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
