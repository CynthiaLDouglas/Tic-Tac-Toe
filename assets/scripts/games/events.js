const api = require('./api')
const ui = require('./ui')
const store = require('../store')
store.player = 'X'

const onSelect = function (event) {
  event.preventDefault()
  store.currentBox = event.target
  const cellIndex = $(store.currentBox).data('index')
  if ($(store.currentBox).text() === '') {
    $(store.currentBox).text(store.player)
    if (store.player !== 'O') {
      store.player = 'O'
      return store.player
    } else if (store.player === 'O') {
      $(store.currentBox).text(store.player)
      store.player = 'X'
      return store.player
    } else {
      const cellValue = store.player
      api.onClick(cellIndex, cellValue)
        .then(ui.clickSuccess)
        .catch(ui.clickFailure)
    }
  } else {
    $('#message').text('Try another spot')
  }
}

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
const onHowMany = function (event) {
  event.preventDefault()
  const numOfGames = store.counter
  api.howMany(numOfGames)
    .then(ui.howManySuccess)
    .catch(ui.howManyFailure)
}

module.exports = {
  createNewGame,
  createNextGame,
  onHowMany,
  onSelect
}
// if ('<what can I put here?>' === 'X' || 'O') {
//   store.game.over = !store.game.over
// }
// if (store.game.over === true) {
//   $('#message').text('Game Over')
