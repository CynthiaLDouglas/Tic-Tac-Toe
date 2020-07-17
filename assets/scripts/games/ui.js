const makeMoveSuccess = function (response) {
  $('#message').text('it worked')
}

const makeMoveFailure = function () {
  $('#message').text('try again.')
}

module.exports = {
  makeMoveSuccess,
  makeMoveFailure
}
