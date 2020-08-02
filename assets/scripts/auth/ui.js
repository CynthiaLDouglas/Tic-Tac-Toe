const store = require('../store')

const signUpSuccess = function (response) {
  $('#modal-message1').text('You are all signed up! Try Signing In.')
  $('#authenticated').hide()
  $('#unauthenticated').show()
  $('#sign-up').hide()
  $('form').trigger('reset')
  $('.close').hide()
}

const signUpFailure = function () {
  $('#modal-message1').text('Please try again.')
}

const signInSuccess = function (response) {
  $('#message').text('You are all signed in! Ready to Play?')
  store.user = response.user
  $('#authenticated').show()
  $('.authenticated').show()
  $('#unauthenticated').hide()
  $('.container').hide()
  $('#start-game').show()
  $('form').trigger('reset')
}

const signInFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  $('#modal-message').text('Your password has been changed.')
  $('#change-password').hide()
}

const changePasswordFailure = function () {
  $('#modal-message').text('Please try again.')
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
