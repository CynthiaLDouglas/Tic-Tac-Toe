const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('You are all signed up! Try Signing In.')
  $('#unauthenticated').show()
}

const signUpFailure = function () {
  $('#message').text('Please try again.')
}

const signInSuccess = function (response) {
<<<<<<< HEAD
=======
  $('#message').text('You are all signed in! Ready to Play?')
>>>>>>> logicRetry
  store.user = response.user
  $('#message').text('You are all signed in! Ready to Play?')
  $('#authenticated').show()
  $('#unauthenticated').hide()
  $('.container').hide()
<<<<<<< HEAD
=======
  $('#start-new-game').hide()
<<<<<<< HEAD
  $('#games-played').hide()
>>>>>>> logicRetry
=======
>>>>>>> fixBugs
}

const signInFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#message').text('Your password has been changed.')
  $('form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#message').text('Please try again.')
}

const signOutSuccess = function (response) {
  $('#message').text('You are signed out.')
  $('#unauthenticated').show()
  $('#authenticated').hide()
}

const signOutFailure = function () {
  $('#message').text('Please try again.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
