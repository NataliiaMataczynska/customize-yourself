import image1 from "../assets/images/other/other1.jpg";
import image2 from "../assets/images/other/other2.jpg";
import image3 from "../assets/images/other/other3.jpg";
import image4 from "../assets/images/other/other4.jpg";
import image5 from "../assets/images/other/other5.jpg";
import image6 from "../assets/images/other/other6.jpg";
import image7 from "../assets/images/other/other7.jpg";
import image8 from "../assets/images/other/other8.jpg";
import image9 from "../assets/images/other/other9.jpg";
import image10 from "../assets/images/other/dolls1.jpg";
import image11 from "../assets/images/other/dolls2.jpg";
import image12 from "../assets/images/other/dolls3.jpg";
import image13 from "../assets/images/other/doll4.jpg";
import image14 from "../assets/images/other/dolls5.jpg";
import image15 from "../assets/images/other/dolls6.jpg";
import image16 from "../assets/images/other/dolls7.jpg";
import image17 from "../assets/images/other/dolls8.jpg";
import image18 from "../assets/images/other/dolls9.jpg";
import image19 from "../assets/images/other/dolls10.jpg";
import image20 from "../assets/images/other/dolls11.jpg";
import image21 from "../assets/images/other/dolls12.jpg";
import image22 from "../assets/images/other/dolls13.jpg";
import image23 from "../assets/images/other/dolls14.jpg";
import image24 from "../assets/images/other/dolls15.jpg";

export default function Other() {
    const imagesOtherRow1 = [
        image1,
        image3,
        image9,
        image5,
        image7,
    ];
    const imagesOtherRow2 = [
        image2,
        image8,
        image4,
        image6,
    ];

    const imagesDollsRow1 = [
        image10,
        image12,
        image14,
        image16,
        image18,
        image20,
        image22,
        image24,
    ];
    const imagesDollsRow2 = [
        image11,
        image13,
        image15,
        image17,
        image19,
        image21,
        image23,
    ];


    return (
        <div className="juckets-container" >

            <section className="juckets">
                <div className="juckets-images grid-images">
                    <ul className="images-group juckets-group">
                        {
                            imagesOtherRow1.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                    <ul className="images-group">
                        {
                            imagesOtherRow2.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}><h4 style={{color: "white", fontSize: "2rem"}}>Ręcznie robione lalki z gliny samoutwardzalnej.</h4></div>
                <div className="juckets-images grid-images">
                    <ul className="images-group juckets-group">
                        {
                            imagesDollsRow1.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                    <ul className="images-group">
                        {
                            imagesDollsRow2.map((e, index) => (
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