const config = require('../config')

const makeMove = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
  })
}

module.exports = {
  makeMove
}
