import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"
import gsap from "gsap"

const Navbar = () => {
    useGSAP(()=>{
        const navTween =gsap.timeline({
            scrollTrigger:{
                trigger:"nav",
                start: 'bottom top'
            }
        })

        navTween.fromTo("nav", 
            {background:'transparent'},
            {background:'rgba(0,0,0,0.5)',backgroundFilter: 'blur(10px)', duration:1,ease:'power1.inOut'}
        )

    })


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