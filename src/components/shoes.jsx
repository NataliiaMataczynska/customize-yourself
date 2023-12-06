import image1 from "../assets/images/boots/boots1.jpg";
import image2 from "../assets/images/boots/boots2.jpg";
import image3 from "../assets/images/boots/boots2-1.jpg";
import image4 from "../assets/images/boots/boots2-2.jpg";
import image5 from "../assets/images/boots/boots2-3.jpg";
import image6 from "../assets/images/boots/boots2-4.jpg";
import image7 from "../assets/images/boots/boots2-5.jpg";
import image8 from "../assets/images/boots/boots2-6.jpg";
import image9 from "../assets/images/boots/boots2-7.jpg";
import image10 from "../assets/images/boots/boots3.jpg";
import image11 from "../assets/images/boots/boots3-1.jpg";
import image12 from "../assets/images/boots/boots4.jpg";
import image13 from "../assets/images/boots/boots4-1.jpg";
import image14 from "../assets/images/boots/boots4-2.jpg";
import image15 from "../assets/images/boots/boots4-3.jpg";
import image16 from "../assets/images/boots/boots4-4.jpg";
import image17 from "../assets/images/boots/boots4-5.jpg";
import image18 from "../assets/images/boots/boots5.jpg";
import image19 from "../assets/images/boots/boots6.jpg";
import image20 from "../assets/images/boots/boots7.jpg";

export default function Shoes() {
    const imagesShoesRow1 = [
        image1,
        image3,
        image5,
        image7,
        image9,
        image11,
        image13,
        image15,
        image17,
        image19,
    ];
    const imagesShoesRow2 = [
        image2,
        image4,
        image6,
        image8,
        image10,
        image12,
        image14,
        image16,
        image18,
        image20,
    ];


    return (
        <div className="juckets-container" >
            <div className="jucketse-text">
                <h1>Kurtki jeansowe</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto debitis saepe sed! Ea, exercitationem similique.
                </p>
            </div>

            <section className="juckets">
                <div className="juckets-images grid-images">
                    <ul className="images-group juckets-group">
                        {
                            imagesShoesRow1.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                    <ul className="images-group">
                        {
                            imagesShoesRow2.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}