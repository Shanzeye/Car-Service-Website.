import Link from "next/link";
import "../styles/header.css";


export default function Header () {
    return (
        <header className="header">
      <div className="logo">
        <h1>CAR SERVICE</h1>
      </div>
      <nav>
        <ul className="navList">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#About">About</Link></li>
          <li><Link href="#Contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    )
}