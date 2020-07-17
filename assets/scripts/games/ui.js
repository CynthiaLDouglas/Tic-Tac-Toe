const newGameSuccess = function (response) {
  $('#message').text('it worked')
}

const newGameFailure = function () {
  $('#message').text('try again.')
}

module.exports = {
  newGameSuccess,
  newGameFailure
}
