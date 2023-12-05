import image1 from "../assets/images/home/asce2-2.png";
import image2 from "../assets/images/home/asce1-1.png";
import image3 from "../assets/images/home/cat1.png";
import image4 from "../assets/images/home/drunk-in-love.jpg";
import image5 from "../assets/images/home/kot1.jpg";
import image6 from "../assets/images/home/kot2.jpg";
import image7 from "../assets/images/home/luffy.jpg";
import image8 from "../assets/images/home/luffy-h.jpg";
import image9 from "../assets/images/home/sparta.jpg";

export default function Jackets() {
    const imagesJucketsRow1 = [
        image1,
        image3,
        image5,
        image7,
        image9,
    ];
    const imagesJucketsRow2 = [
        image2,
        image4,
        image6,
        image8,
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
                            imagesJucketsRow1.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                    <ul className="images-group">
                        {
                            imagesJucketsRow2.map((e, index) => (
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