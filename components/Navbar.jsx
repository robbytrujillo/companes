import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-box">
            <div className="logo">
                <h1>Companes.</h1>
            </div>
            <ul className="menu">
                <li>
                    <Link href={"#home"}>Home</Link>
                </li>
                <li>
                    <Link href={"#service"}>Service</Link>
                </li>
                <li>
                    <Link href={"#project"}>Project</Link>
                </li>
                <li>
                    <Link href={"#contact"}>Contact</Link>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
