import Link from '../components/link'

export default function Nav() {
  return (
    <nav className="flex justify-end">
          <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
    </nav>
  )
}
