import { globalStyles } from './styles'

function AppLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <style jsx global>{globalStyles}</style>
    </>
  )
}

export default AppLayout
