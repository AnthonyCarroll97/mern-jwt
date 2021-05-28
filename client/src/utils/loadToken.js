const loadToken = () => {
    let options = {
        headers: {
          authToken: localStorage.getItem('authToken')
        }
      }
    return localStorage.getItem('authToken') ? options : null
}

export default loadToken