import { NetflixHeader } from "./netflix-header"
import { NetflixMain } from "./netflix-main"
import './netflix-index.css'
export function  NetflixIndex(){
    return(
        <div className="netflix-back">
            <header>
<NetflixHeader/>
            </header>
            <section>
<NetflixMain/>
            </section>
        </div>
    )
}