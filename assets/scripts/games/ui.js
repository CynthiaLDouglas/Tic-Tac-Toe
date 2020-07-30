const store = require('../store')
store.counter = 0

const newGameSuccess = function (response) {
  store.game = response.game
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').show()
  $('#games-played').show()
  $('#message').text('Time to play!')
  store.player = 'X'
  const numOfGame = (response) => {
    store.counter += 1
    return store.counter
  }
  numOfGame(response)
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  store.game = response.game
  $('#start-new-game').show()
  $(store.currentBox).text(store.player)
  $('#message').text(`You played ${store.player}`)
  if (store.player !== 'O') {
    store.player = 'O'
    return store.player
  } else if (store.player === 'O') {
    $(store.currentBox).text(store.player)
    store.player = 'X'
    return store.player
  } else {
    $('#message').text('Try another spot')
  }
  const gameLogic = function () {

  }
}

const clickFailure = function () {
  $('#message').text('It\'s not your turn.')
}

const nextGameSuccess = function (response) {
  $('.container').hide()
  $('.cell').empty()
  $('#start-game').show()
  $('#start-new-game').hide()
  $('#message').text('Ready for the Next Round!')
}

const nextGameFailure = function () {
  $('#message').text('try again.')
}

const howManySuccess = function (response) {
  $('#message').text(`You have played ${store.counter}`)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  nextGameSuccess,
  nextGameFailure,
  howManySuccess,
  clickSuccess,
  clickFailure
}
