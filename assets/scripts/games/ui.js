const store = require('../store')
store.counter = 0

const newGameSuccess = function (response) {
<<<<<<< HEAD
  $('.container').show()
  $('#start-game').hide()
  $('#start-new-game').show()
=======
  store.game = response.game
  store.player = 'X'
  $('.container').show()
  $('#start-game').hide()
<<<<<<< HEAD
<<<<<<< HEAD
  $('#start-new-game').hide()
  $('#games-played').hide()
>>>>>>> logicRetry
=======
  $('#start-new-game').show()
  $('#games-played').show()
>>>>>>> fixBugs
=======
>>>>>>> finalTouch
  $('#message').text('Time to play!')
}

const newGameFailure = function () {
  $('#message').text('try again.')
  $('.container').hide()
  $('#start-game').show()
}

const clickSuccess = function (response) {
<<<<<<< HEAD
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
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[3] === 'X' && response.game.cells[3] === response.game.cells[4] && response.game.cells[4] === response.game.cells[5]) {
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[6] === 'X' && response.game.cells[6] === response.game.cells[7] && response.game.cells[7] === response.game.cells[8]) {
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[4] && response.game.cells[4] === response.game.cells[8]) {
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[4] && response.game.cells[4] === response.game.cells[6]) {
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[0] === 'X' && response.game.cells[0] === response.game.cells[3] && response.game.cells[3] === response.game.cells[6]) {
      $('#message').text('X wins')
      store.over = !store.over
    } else if (store.player === 'X' && response.game.cells[1] === 'X' && response.game.cells[1] === response.game.cells[4] && response.game.cells[4] === response.game.cells[7]) {
      $('#message').text('X wins')
    } else if (store.player === 'X' && response.game.cells[2] === 'X' && response.game.cells[2] === response.game.cells[5] && response.game.cells[5] === response.game.cells[8]) {
      $('#message').text('X wins')
    } else {
      if (store.player === 'O' && response.game.cells[0] === 'O' && response.game.cells[0] === response.game.cells[1] && response.game.cells[1] === response.game.cells[2]) {
        $('#message').text('O wins')
      } else if (store.player === 'O' && response.game.cells[3] === 'O' && response.game.cells[3] === response.game.cells[4] && response.game.cells[4] === response.game.cells[5]) {
        $('#message').text('O wins')
      } else if (store.player === 'O' && response.game.cells[6] === 'O' && response.game.cells[6] === response.game.cells[7] && response.game.cells[7] === response.game.cells[8]) {
        $('#message').text('O wins')
        store.over = !store.over
      } else if (store.player === 'O' && response.game.cells[0] === 'O' && response.game.cells[0] === response.game.cells[4] && response.game.cells[4] === response.game.cells[8]) {
        $('#message').text('O wins')
        store.over = !store.over
      } else if (store.player === 'O' && response.game.cells[2] === 'O' && response.game.cells[2] === response.game.cells[4] && response.game.cells[4] === response.game.cells[6]) {
        $('#message').text('O wins')
        store.over = !store.over
      } else if (store.player === 'O' && response.game.cells[0] === 'O' && response.game.cells[0] === response.game.cells[3] && response.game.cells[3] === response.game.cells[6]) {
        $('#message').text('O wins')
        store.over = !store.over
      } else if (store.player === 'O' && response.game.cells[1] === 'O' && response.game.cells[1] === response.game.cells[4] && response.game.cells[4] === response.game.cells[7]) {
        $('#message').text('O wins')
      } else if (store.player === 'O' && response.game.cells[2] === 'O' && response.game.cells[2] === response.game.cells[5] && response.game.cells[5] === response.game.cells[8]) {
        $('#message').text('O wins')
        store.over = !store.over
=======
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
>>>>>>> fixBugs
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
  store.game.over = false
  $('.container').hide()
  $('#start-game').show()
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
