// utils/fetchData.js
function fetchData(url) {
  let status = 'pending'
  let result
  let suspender = fetch(url)
    .then(response => response.json())
    .then(
      resolvedData => {
        status = 'success'
        result = resolvedData.data // Assuming your API response has a data key
      },
      error => {
        status = 'error'
        result = error
      }
    )

  return {
    read() {
      if (status === 'pending') throw suspender
      else if (status === 'error') throw result
      return result
    },
  }
}

export default fetchData
