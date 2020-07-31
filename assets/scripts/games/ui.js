const store = require('../store')
store.counter = 0

const newGameSuccess = function (response) {
  store.game = response.game
  console.log('This is store.game before game over', store.game)
  store.player = 'X'
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').show()
  $('#games-played').show()
  $('#message').text('Time to play!')
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('#gamearea').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
  if (store.game.over === false) {
    store.game = response.game
    $('#start-new-game').show()
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
        // if (store.game.over === true) {
        //   $('.cell').off('click')
        // }
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
  }
}

const clickFailure = function () {
  $('#message').text('It\'s not your turn.')
}

const nextGameSuccess = function (response) {
  store.game.over = false
  $('.container').hide()
  $('#start-game').show()
  $('#start-new-game').hide()
  $('#message').text('Ready for the Next Round!')
  $('.cell').empty()
}

const nextGameFailure = function () {
  $('#message').text('try again.')
}

const howManySuccess = function (response) {
  $('#message').text(`You have played ${response.games.length}`)
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
