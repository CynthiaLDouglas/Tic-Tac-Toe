const store = require('../store')

const newGameSuccess = function (response) {
  store.game = response.game
  $('#gamearea').show()
  $('#start-game').hide()
  $('#message').text('Time to play!')
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  store.game = response.game
  $(store.currentBox).text(store.player)
  $('#message').text(`You played ${store.player}`)
}

const clickFailure = function () {
  $('#message').text('It\'s not your turn.')
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  clickSuccess,
  clickFailure
}
