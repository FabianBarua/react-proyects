import { useEffect, useState } from 'react'
import { EVENTS } from './constants'
import { HomePage } from './components/HomePage'
import { AboutPage } from './components/AboutPage'

function App () {
  const [pathName, setPathName] = useState(window.location.pathname)

  useEffect(() => {
    const changePathName = () => {
      setPathName(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, changePathName)
    window.addEventListener(EVENTS.POPSTATE, changePathName)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, changePathName)
      window.removeEventListener(EVENTS.PUSHSTATE, changePathName)
    }
  }, [])

  const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage }
  ]

  const Page = routes.find(({ path }) => path === pathName)?.component

  return (
    <>
      <Page />
    </>
  )
}

export default App
