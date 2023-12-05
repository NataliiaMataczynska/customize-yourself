import image1 from "../assets/images/pancil_drowing/pancil-1.jpg";
import image2 from "../assets/images/pancil_drowing/pancil-2.jpg";
import image3 from "../assets/images/pancil_drowing/pancil-3.jpg";
import image4 from "../assets/images/pancil_drowing/pancil-4.jpg";
import image6 from "../assets/images/pancil_drowing/pancil-6.jpg";
import image7 from "../assets/images/pancil_drowing/pancil-7.jpg";
import image9 from "../assets/images/pancil_drowing/pancil-9.jpg";
import image10 from "../assets/images/pancil_drowing/pancil-10.jpg";
import image5 from "../assets/images/pancil_drowing/pancil-5.jpg";
import image8 from "../assets/images/pancil_drowing/pancil-8.jpg";

export default function PancilDrowing() {
    const imagesPancilDrowing = [
        image1,
        image2,
        image3,
        image4,
        image6,
        image7,
        image8,
        image10,
        image5,
        image9,
    ];

    return (
        <div className="pencil-container" >
            <div className="jucketse-text">
                <h1>Rysunek ołówkiem</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Architecto debitis saepe sed! Ea, exercitationem similique.
                </p>
            </div>

            <section className="pencil">
                <div className=" grid-images-pencil">
                    <ul className="images-group-pencil">
                        {
                            imagesPancilDrowing.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`Pancil Drawing ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}