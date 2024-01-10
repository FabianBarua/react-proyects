import { Square } from './Square'

export const ModalWinner = ({ winner, resetGame }) => {
  if (winner === null) return

  const result = winner === false ? 'Empate' : 'Gano'

  return (

    <section className='winner'>
      <div className='text'>
        <h2>{result}</h2>
        {
              winner && (
                <header className='win'>
                  <Square>{winner}</Square>
                </header>
              )
            }
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
