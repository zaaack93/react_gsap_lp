import { navLinks } from "../../constants"

const Navbar = () => {
  return (
    <nav>
        <div>
            <a href="#home" className="flex flex-center gap-2">
                <img src="/images/logo.png" alt="logo" className="w-8 h-8 object-contain" />
                <p>Velvet Pour</p>
            </a>

            <ul>
                {
                    navLinks.map((item) => (
                        <li key={item.id}>
                            <a href={`#${item.id}`}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </nav>
  )
}

export default Navbar