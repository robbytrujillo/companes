import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar py-6">
      <div className="container mx-auto px-4 w-full max-w-7xl">
        <div className="navbar-box flex items-center justify-between">
            <div className="logo">
                <h1 className="text-3xl font-bold">Companes.</h1>
            </div>
            <ul className="menu flex items-center gap-12">
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
