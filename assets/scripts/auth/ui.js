const signUpSuccess = function () {
  $('#message').text('You are all signed up!')
}

const signUpFailure = function () {
  $('#message').text('Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure
}
