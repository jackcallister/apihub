import request from 'request'

export function fetchAPIResponse(url, token) {
  return new Promise((resolve, reject) => {

    const opts = {
      json: true,
      headers: {
        'X-QUILL-TOKEN': token,
      }
    }

    request.get(url, opts, function(er, res, body) {
      resolve(body)
    })
  })
}
