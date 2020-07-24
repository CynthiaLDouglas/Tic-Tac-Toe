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
  if (store.player === 'X') {
    if (store.player === 'X' && response.game.cells[0] && response.game.cells[1] && response.game.cells[2] === 'X') {
      if (store.player === 'X' && response.game.cells[3] && response.game.cells[4] && response.game.cells[5] === 'X') {
        if (store.player === 'X' && response.game.cells[6] && response.game.cells[7] && response.game.cells[8] === 'X') {
          if (store.player === 'X' && response.game.cells[0] && response.game.cells[3] && response.game.cells[6] === 'X') {
            if (store.player === 'X' && response.game.cells[1] && response.game.cells[4] && response.game.cells[7] === 'X') {
              if (store.player === 'X' && response.game.cells[2] && response.game.cells[5] && response.game.cells[8] === 'X') {
                if (store.player === 'X' && response.game.cells[0] && response.game.cells[4] && response.game.cells[8] === 'X') {
                  if (store.player === 'X' && response.game.cells[2] && response.game.cells[4] && response.game.cells[6] === 'X') {
                  }
                  $('#message').text('Yay! X wins')
                  // Here I need to freeze the board to no longer allow clicks
                  $('.cell').off('click')
                }
              }
            }
          }
        }
      }
    }
  } else if (store.player === 'O') {
    if (store.player === 'O' && response.game.cells[0] && response.game.cells[1] && response.game.cells[2] === 'O') {
      if (store.player === 'O' && response.game.cells[3] && response.game.cells[4] && response.game.cells[5] === 'O') {
        if (store.player === 'O' && response.game.cells[6] && response.game.cells[7] && response.game.cells[8] === 'O') {
          if (store.player === 'O' && response.game.cells[0] && response.game.cells[3] && response.game.cells[6] === 'O') {
            if (store.player === 'O' && response.game.cells[1] && response.game.cells[4] && response.game.cells[7] === 'O') {
              if (store.player === 'O' && response.game.cells[2] && response.game.cells[5] && response.game.cells[8] === 'O') {
                if (store.player === 'O' && response.game.cells[0] && response.game.cells[4] && response.game.cells[8] === 'O') {
                  if (store.player === 'O' && response.game.cells[2] && response.game.cells[4] && response.game.cells[6] === 'O') {
                  }
                  $('#message').text('Yay! O wins')
                  // Here I need to freeze the board to no longer allow clicks
                  $('.cell').off('click')
                }
              }
            }
          }
        }
      }
    }
  }
  // add button appear here. where would function for next game appear?
}

const clickFailure = function () {
  $('#message').text('It\'s not your turn.')
}
const nextGameSuccess = function (response) {
  store.game = response.game
  $('#gamearea').show()
  $('#start-game').hide()
  $('#message').text('Time to play!')
}

const nextGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

module.exports = {
  newGameSuccess,
  newGameFailure,
  nextGameFailure,
  nextGameSuccess,
  clickSuccess,
  clickFailure
}
