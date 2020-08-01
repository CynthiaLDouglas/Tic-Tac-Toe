
'use strict'

const authEvents = require('./auth/events')
const boardEvents = require('./games/events')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#start-game').on('click', boardEvents.createNewGame)
  $('.cell').on('click', boardEvents.onSelect)
  $('#start-new-game').on('click', boardEvents.createNextGame)
  $('#games-played').on('click', boardEvents.onHowMany)
})
