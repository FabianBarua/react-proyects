import { EVENTS } from './../constants'

const navigate = ({ to }) => {
  window.history.pushState({}, '', to)
  const pushStateEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(pushStateEvent)
}

export const Link = ({ to, ...props }) => {
  const handleClick = event => {
    event.preventDefault()
    navigate({ to })
  }

  return <a href={to} onClick={handleClick} {...props} />
}
