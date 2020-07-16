
const signUpSuccess = function (response) {
  $('#message').text('You are all signed up! Try Signing In.')
  $('form').trigger('reset')
}

const signUpFailure = function (error) {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#message').text('You are all signed in! Ready to Play?')
  $('form').trigger('reset')
}

const signInFailure = function (error) {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
