import Container from './container'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div className='bg-black text-white'>
      <Container>
        <div className="py-2 text-center text-sm">
              This website is under construction. For now, you can contact me on Twitter{' '}
              <a
                href={`https://twitter.com/clara__le`}
                className="underline hover:text-success duration-200 transition-colors"
              >
                @clara__le
              </a>
              .
        </div>
      </Container>
    </div>
  )
}
