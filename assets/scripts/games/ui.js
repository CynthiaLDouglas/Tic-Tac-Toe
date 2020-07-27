const store = require('../store')
store.counter = 0

const newGameSuccess = function (response) {
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').show()
  $('#message').text('Time to play!')
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  store.game = response.game
  $('#start-new-game').show()
  const gameOver = function (response) {
    if ((store.game.cell[0] === store.game.cell[1] && store.game.cell[1] === store.game.cell[2]) && (store.game.cell[0] === 'X' || store.game.cell[0] === 'O')) {
      console.log(true)
      return true
    }
  }
  gameOver(response)
}
const clickFailure = function () {
  $('#message').text('Game Over.')
}

const howManySuccess = function (response) {
  $('#message').text(`You have played ${store.counter}`)
}

const howManyFailure = function (response) {
  console.log('failure')
}

const nextGameSuccess = function (response) {
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
