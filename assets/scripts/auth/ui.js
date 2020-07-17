const store = require('../store')

const signUpSuccess = function (response) {
  $('#message').text('You are all signed up! Try Signing In.')
  $('form').trigger('reset')
}

const signUpFailure = function () {
  $('#message').text('Please try again.')
  $('form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#message').text('You are all signed in! Ready to Play?')
  $('form').trigger('reset')
  store.user = response.user
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
  $('form').trigger('reset')
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
