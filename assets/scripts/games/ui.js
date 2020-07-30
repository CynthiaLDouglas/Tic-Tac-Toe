const store = require('../store')
store.counter = 0

const newGameSuccess = function (response) {
  store.game = response.game
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').hide()
  $('#games-played').hide()
  $('#message').text('Time to play!')
  store.player = 'X'
  const numOfGame = (response) => {
    if (store.over === true) {
      store.counter += 1
      return store.counter
    }
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
  const gameLogic = function (response) {
    if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[1] && response.game.cells[1] === response.game.cells[2]) {
      $('.cell').off('click')
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[3] === 'X' && response.game.cells[3] === response.game.cells[4] && response.game.cells[4] === response.game.cells[5]) {
      $('.cell').off('click')
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[6] === 'X' && response.game.cells[6] === response.game.cells[7] && response.game.cells[7] === response.game.cells[8]) {
      $('.cell').off('click')
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[4] && response.game.cells[4] === response.game.cells[8]) {
      $('.cell').off('click')
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[4] && response.game.cells[4] === response.game.cells[6]) {
      $('.cell').off('click')
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[3] && response.game.cells[3] === response.game.cells[6]) {
      $('.cell').off('click')
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[1] === 'X' && response.game.cells[1] === response.game.cells[4] && response.game.cells[4] === response.game.cells[7]) {
      $('.cell').off('click')
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[5] && response.game.cells[5] === response.game.cells[8]) {
      $('.cell').off('click')
      $('#message').text('X wins')
      store.over = !store.over
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
