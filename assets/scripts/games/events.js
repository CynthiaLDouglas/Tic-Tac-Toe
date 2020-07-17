const api = require('./api')
const ui = require('./ui')

const createNewGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  const boardRequest = event.target
  let  newBoard = [
    '#0', '#1', '#2',
    '#3', '#4', '#5',
    '#6'
  ]

    }
  }
  api.newGame(newBoard)
    .then(ui.newGameSuccess)
    .catch(ui.newGameSuccess)
}

module.exports = {
  createNewGame
}
