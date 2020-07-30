const store = require('../store')
store.counter = 0

const newGameSuccess = function (response) {
<<<<<<< HEAD
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').show()
=======
  store.game = response.game
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').hide()
  $('#games-played').hide()
>>>>>>> logicRetry
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
<<<<<<< HEAD
  const gameOver = function (response) {
    if ((store.game.cell[0] === store.game.cell[1] && store.game.cell[1] === store.game.cell[2]) && (store.game.cell[0] === 'X' || store.game.cell[0] === 'O')) {
      console.log(true)
      return true
    }
  }
  gameOver(response)
=======
  $(store.currentBox).text(store.player)
  $('#message').text(`You played ${store.player}`)
  const gameLogic = function (response) {
    if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[1] && response.game.cells[1] === response.game.cells[2]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[3] === 'X' && response.game.cells[3] === response.game.cells[4] && response.game.cells[4] === response.game.cells[5]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[6] === 'X' && response.game.cells[6] === response.game.cells[7] && response.game.cells[7] === response.game.cells[8]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[4] && response.game.cells[4] === response.game.cells[8]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[4] && response.game.cells[4] === response.game.cells[6]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[3] && response.game.cells[3] === response.game.cells[6]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[1] === 'X' && response.game.cells[1] === response.game.cells[4] && response.game.cells[4] === response.game.cells[7]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[5] && response.game.cells[5] === response.game.cells[8]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else {
      console.log('Did O win?')
    }
  }
  gameLogic(response)
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
>>>>>>> logicRetry
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
  howManySuccess,
  howManyFailure,
  newGameSuccess,
  newGameFailure,
  nextGameSuccess,
  nextGameFailure,
<<<<<<< HEAD
=======
  howManySuccess,
>>>>>>> logicRetry
  clickSuccess,
  clickFailure
}
