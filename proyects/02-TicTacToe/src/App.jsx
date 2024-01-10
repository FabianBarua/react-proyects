import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { ModalWinner } from './components/ModalWinner'
import { Game } from './components/Game'
import { TURNS } from './constats'
import { saveGameToStorage, resetGameStorage } from './logic/storage/index.js'
import { checkWinner, checkEnd } from './logic'
import { Turns } from './components/Turns.jsx'

function App () {
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = JSON.parse(window.localStorage.getItem('board'))
    if (boardLocalStorage) return boardLocalStorage
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = window.localStorage.getItem('turn')
    if (turnLocalStorage) return turnLocalStorage
    return TURNS.X
  })

  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    resetGameStorage()
  }

  const updateBoard = async (index) => {
    if (board[index] || winner) return

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEnd(newBoard)) { setWinner(false) }
  }

  useEffect(() => {
    if (winner !== null) {
      resetGameStorage()
    }
  }, [winner])

  return (
    <>
      <main className='board'>
        <h1>TicTacToe</h1>
        <button onClick={resetGame}>Reset</button>

        <Game board={board} updateBoard={updateBoard} />

        <Turns turn={turn} />

        <ModalWinner winner={winner} resetGame={resetGame} />

      </main>
    </>
  )
}

export default App
