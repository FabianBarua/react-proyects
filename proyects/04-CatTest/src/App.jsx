import { useState, useEffect } from 'react'
import { CAT_API_URL } from '../const'
import { useFact } from './hooks/hooks'

function App () {
  const [fact, refreshFact] = useFact()
  const [imgUrl, setImgUrl] = useState(null)

  useEffect(() => {
    if (fact === null) return
    setImgUrl(
      CAT_API_URL(
        fact
          .replace(/[^\w\s]/gi, '')
          .trim()
          .split(' ')[0]
      )
    )
    return () => {}
  }, [fact])

  return (
    <main className='  max-w-min flex flex-col place-items-center justify-center gap-3'>
      <h3 className=' font-bold text-3xl'>App Gatitos</h3>
      <div className=' h-20 p-3 w-96 flex justify-center items-center bg-slate-900 rounded-lg '>
        {fact && <p className='line-clamp-2 text-center '>{fact}</p>}
      </div>

      <button
        onClick={refreshFact}
        className=' w-96  border border-slate-800  hover:border-slate-400 active:bg-slate-800 ease-in transition-all py-4 rounded-lg font-bold'
      >
        {' '}
        Reset{' '}
      </button>
      <div className='h-96'>
        {imgUrl && (
          <img
            className=' h-96 w-96  object-cover rounded-lg'
            src={imgUrl}
          ></img>
        )}
      </div>
    </main>
  )
}

export default App
