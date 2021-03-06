const store = require('../store')
store.counter = 0

// Update so that when game is over, and box that is clicked is occupied, Game Over is sent to user as a message.

const newGameSuccess = function (response) {
  store.game = response.game
  store.player = 'X'
  $('.container').show()
  $('#start-game').hide()
  $('#message').text('Time to play!')
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('.container').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  if (store.game.over === false) {
    store.game = response.game
    $(store.currentBox).text(store.player)
    $('#message').text(`You played ${store.player}`)
    const gameLogic = function (response) {
      if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[1] && response.game.cells[1] === response.game.cells[2]) {
        $('#message').text('X wins')
        store.game.over = true
      } else if (store.player === 'X' && response.game.cells[3] === 'X' && response.game.cells[3] === response.game.cells[4] && response.game.cells[4] === response.game.cells[5]) {
        $('#message').text('X wins')
        store.game.over = !store.game.over
      } else if (store.player === 'X' && response.game.cells[6] === 'X' && response.game.cells[6] === response.game.cells[7] && response.game.cells[7] === response.game.cells[8]) {
        $('#message').text('X wins')
        store.game.over = !store.game.over
      } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[4] && response.game.cells[4] === response.game.cells[8]) {
        $('#message').text('X wins')
        store.game.over = !store.game.over
      } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[4] && response.game.cells[4] === response.game.cells[6]) {
        $('#message').text('X wins')
        store.game.over = !store.game.over
      } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[3] && response.game.cells[3] === response.game.cells[6]) {
        $('#message').text('X wins')
        store.game.over = !store.game.over
      } else if (store.player === 'X' && response.game.cells[1] === 'X' && response.game.cells[1] === response.game.cells[4] && response.game.cells[4] === response.game.cells[7]) {
        $('#message').text('X wins')
        store.game.over = !store.game.over
      } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[5] && response.game.cells[5] === response.game.cells[8]) {
        $('#message').text('X wins')
        store.game.over = !store.game.over
      } else {
        if (store.player === 'O' && response.game.cells[0] === 'O' && response.game.cells[0] === response.game.cells[1] && response.game.cells[1] === response.game.cells[2]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else if (store.player === 'O' && response.game.cells[3] === 'O' && response.game.cells[3] === response.game.cells[4] && response.game.cells[4] === response.game.cells[5]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else if (store.player === 'O' && response.game.cells[6] === 'O' && response.game.cells[6] === response.game.cells[7] && response.game.cells[7] === response.game.cells[8]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else if (store.player === 'O' && response.game.cells[0] === 'O' && response.game.cells[0] === response.game.cells[4] && response.game.cells[4] === response.game.cells[8]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else if (store.player === 'O' && response.game.cells[2] === 'O' && response.game.cells[2] === response.game.cells[4] && response.game.cells[4] === response.game.cells[6]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else if (store.player === 'O' && response.game.cells[0] === 'O' && response.game.cells[0] === response.game.cells[3] && response.game.cells[3] === response.game.cells[6]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else if (store.player === 'O' && response.game.cells[1] === 'O' && response.game.cells[1] === response.game.cells[4] && response.game.cells[4] === response.game.cells[7]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else if (store.player === 'O' && response.game.cells[2] === 'O' && response.game.cells[2] === response.game.cells[5] && response.game.cells[5] === response.game.cells[8]) {
          $('#message').text('O wins')
          store.game.over = !store.game.over
        } else {
          if (store.game.cells.indexOf('') === -1) {
            $('#message').text('It\'s a tie')
            store.game.over = !store.game.over
          }
        }
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
    }
    gameLogic(response)
  } else {
    $('#message').text('Game Over! How \'bout another?')
  }
}

const clickFailure = function () {
  $('#message').text('It\'s not your turn.')
}

const nextGameSuccess = function (response) {
  store.game.over = false
  $('.container').hide()
  $('#start-game').show()
  $('#message').text('Ready for the Next Round!')
  $('.cell').empty()
}

const howManySuccess = function (response) {
  $('#message').text(`You have played ${response.games.length}`)
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  nextGameSuccess,
  howManySuccess,
  clickSuccess,
  clickFailure
}
