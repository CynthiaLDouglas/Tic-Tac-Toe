const api = require('./api')
const ui = require('./ui')
const store = require('../store')
store.player = 'X'

const createNextGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  api.nextGame()
    .then(ui.nextGameSuccess)
    .catch(ui.nextGameFailure)
}

const onSelect = function (event) {
  event.preventDefault()
  store.currentBox = event.target
  const cellIndex = $(store.currentBox).data('index')
  if ($(store.currentBox).text() === '') {
<<<<<<< HEAD
    $(store.currentBox).text(store.player)
    $('#message').text(`You played ${store.player}`)
    if (store.player !== 'O') {
      store.player = 'O'
      return store.player
    } else if (store.player === 'O') {
      $(store.currentBox).text(store.player)
      $('#message').text(`You played ${store.player}`)
      store.player = 'X'
      return store.player
    } else {
      const cellValue = store.player
      api.onClick(cellIndex, cellValue)
        .then(ui.clickSuccess)
        .catch(ui.clickFailure)
    }
=======
    const cellValue = store.player
    api.onClick(cellIndex, cellValue)
      .then(ui.clickSuccess)
      .catch(ui.clickFailure)
>>>>>>> logicRetry
  } else {
    $('#message').text('Try another spot')
  }
}

<<<<<<< HEAD
const createNewGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  const game = event.target
  const numOfGame = (game) => {
    store.counter += 1
    return store.counter
  }
  numOfGame(game)
  // Use jquery to on click (event.target) add one to the count of games
  api.newGame(numOfGame)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}
//  next game and board erase
const createNextGame = function (event) {
  event.preventDefault()
  $('.cell').empty()
  // numOfGames(game)
  // Create New Board when clicked
  api.nextGame()
    .then(ui.nextGameSuccess)
    .catch(ui.nextGameFailure)
}

//  goal: this would pull the number of games played above and
// be displayed on the user.
=======
>>>>>>> logicRetry
const onHowMany = function (event) {
  event.preventDefault()
  api.howMany()
    .then(ui.howManySuccess)
    .catch(ui.howManyFailure)
}

module.exports = {
  createNewGame,
  createNextGame,
  onHowMany,
  onSelect
}
