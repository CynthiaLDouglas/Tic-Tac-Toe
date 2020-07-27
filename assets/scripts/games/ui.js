const store = require('../store')
store.counter = 0

const newGameSuccess = function (response) {
  store.game = response.game
  const numOfGame = (response) => {
    store.counter += 1
    return store.counter
  }
  numOfGame(response.game)
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').show()
  $('#message').text('Time to play!')
}

// If when I click, cells are not empty, empty cells do new store.

const newGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  store.game = response.game
  $('#message').text(`You played ${store.player}`)
  $('#start-new-game').show()
}

const clickFailure = function () {
  $('#message').text('It\'s not your turn.')
}

const howManySuccess = function (response) {
  $('#message').text(`You have played ${store.counter}`)
}

const howManyFailure = function (response) {
  console.log('failure')
}

const nextGameSuccess = function (response) {
  store.game = response.game
  const numOfGame = (response) => {
    store.counter += 1
    return store.counter
  }
  numOfGame(response.game)
  $('.container').hide()
  $('#start-game').show()
  $('#start-new-game').hide()
  $('#message').text('Ready for the Next Round!')
}

const nextGameFailure = function () {
  $('#message').text('try again.')
}

module.exports = {
  howManySuccess,
  howManyFailure,
  newGameSuccess,
  newGameFailure,
  nextGameSuccess,
  nextGameFailure,
  clickSuccess,
  clickFailure
}
