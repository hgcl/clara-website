import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Nav from '../components/nav'

// Alert at page top + footer

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
