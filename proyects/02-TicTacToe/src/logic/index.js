import { COMBOS } from '../constats'

export const checkWinner = (board) => {
  for (const combo of COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

export const checkEnd = (boardToCheck) => {
  return boardToCheck.every((square) => square !== null)
}
