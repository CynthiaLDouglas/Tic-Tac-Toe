const api = require('./api')
const ui = require('./ui')
let player = true

const createNewGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onSelect = function (event) {
  event.preventDefault()
  const cellSelection = event.target
  const cellIndex = cellSelection.dataset.index
  const cellValue = player ? 'x' : 'o'
  const cellInfo = {
    game: {
      cell: {
        index: cellIndex,
        value: cellValue
      },
      over: false
    }
  }
  console.log(cellInfo)
  cellSelection.innerHTML = cellValue
  api.onClick(cellInfo)
    .then(ui.clickSuccess)
    .catch(ui.clickFailure)
  player = !player
  return player
}

module.exports = {
  createNewGame,
  onSelect
}
