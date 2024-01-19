export const MainHeader = ({ children }) => {
  return (
    <header className=' h-24 px-4 bg-neutral-800/50 backdrop-blur-md w-full mb-48  fixed top-0  flex justify-center items-center'>
      {children}
    </header>
  )
}
