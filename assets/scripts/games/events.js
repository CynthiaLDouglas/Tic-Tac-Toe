const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const createNewGame = function (event) {
  event.preventDefault()
  // Create New Board when clicked
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onSelect = function (event) {
  event.preventDefault()
  // const cellSelection = event.target
  // const cellIndex = cellSelection.dataset.index
  // const cellValue = player ? 'X' : 'O'
  // const cellInfo = {
  //   game: {
  //     cell: {
  //       index: cellIndex,
  //       value: cellValue
  //     },
  //     over: false
  //   }
  // }
  // cellSelection.innerHTML += cellValue
  const cellInfo = event.target
  // console.log(event.target)
  // const cellValue = player ? 'X' : 'O'
  const cellIndex = $(cellInfo).data('index')
  // console.log(cellIndex)
  //  Create cellValue to loop through store.player items when clicked.
  const cellValue = function (param) {
    let turn = store.player[0]
    if (turn === store.player[0]) {
      turn = store.player[1]
    } else {
      return turn
    }
  }
  console.log(cellValue(cellInfo))
  // create a function that moves through store.player array and picks what is not present.
  // const turn = function () {
  //   $(document.body).click(function () {
  //     $('.cell').each(function (i) {
  //       if (this.text === ' ') {
  //         this.text('X')
  //       } else {
  //       }
  //     })
  //   })
  // }
  console.log(cellIndex, store.player)
  api.onClick(cellIndex, store.player)
    .then(ui.clickSuccess)
    .catch(ui.clickFailure)
  // player = !player
  // return player
}

module.exports = {
  createNewGame,
  onSelect
}
