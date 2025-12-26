import { useGSAP } from "@gsap/react"
import { cocktailLists, mockTailLists } from "../../constants"
import gsap from "gsap";

const Cocktails = () => {

  useGSAP(() => {
    // Parallax effect for cocktail leaves: moves opposite directions on scroll
    // scrub:true links animation progress directly to scroll position
    const parallaxTimeline = gsap.timeline({
        scrollTrigger:{
            trigger:"#cocktails",
            start:"top 30%",
            end:"bottom 80%",
            scrub:true
        }
    })
    parallaxTimeline
    .from('#c-right-leaf', {x:100,y:100})
    .from('#c-left-leaf', {x:-100,y: 100});
  })

  return (
    <section id="cocktails" className="noisy">
        <img src="/images/cocktail-left-leaf.png" alt="left-leaf" id="c-left-leaf" />
        <img src="/images/cocktail-right-leaf.png" alt="right-leaf" id="c-right-leaf" />

        <div className="list">
            <div className="popular">
                <h2>Most popular cocktails:</h2>

                <ul>
                    {
                        cocktailLists.map((cocktail, index) => (
                            <li key={cocktail.name}>
                                <div className="md:me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.country} | {cocktail.detail}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="loved">
                <h2>Most loved cocktails:</h2>

                <ul>
                    {
                        mockTailLists.map((cocktail, index) => (
                            <li key={cocktail.name}>
                                <div className="me-28">
                                    <h3>{cocktail.name}</h3>
                                    <p>{cocktail.country} | {cocktail.detail}</p>
                                </div>
                                <span>- {cocktail.price}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    
    
    </section>
  )
}

export default Cocktails