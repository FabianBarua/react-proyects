import { TwitterFollowSection } from './components/TwitterFollowSection'

export function App () {
  const users = [
    {
      username: 'fabianbarua',
      name: 'Fabian Barua',
      isFollowing: false
    },
    {
      username: 'microsoft',
      name: 'Microsoft',
      isFollowing: false
    },
    {
      username: 'react',
      name: 'React JS',
      isFollowing: false
    }
  ]

  return (
    <>
      <TwitterFollowSection users={users} />
    </>
  )
}
