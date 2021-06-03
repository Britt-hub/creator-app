// For some reason I still haven't figured out yet, I can't directly use images from my images folder without first
// importing them from my images folder.

import CardItem from "./CardItem"
import "./Cards.css"
import images from "../images/img-9.jpg"
import images1 from "../images/img-home.jpg"

function Cards() {
    return (
        <div className="cards">
            <h1>An Amazing Collaborative Experience</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                         src={images}
                         text="Work with thousands of 
                         freelancers from all over the world"
                         label="Digital Freedom"
                         path="/services"
                        />
                        <CardItem
                         src={images1}
                         text="Work with whoever, whenever and on whatever you want"
                         label="Work from anywhere"
                         path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
