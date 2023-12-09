import image1 from "../assets/images/figuries/figuries1.jpg";
import image2 from "../assets/images/figuries/figuries2.jpg";
import image3 from "../assets/images/figuries/figuries3.jpg";
import image4 from "../assets/images/figuries/figuries4.jpg";
import image5 from "../assets/images/figuries/figuries5.jpg";
import image6 from "../assets/images/figuries/figuries6.jpg";
import image7 from "../assets/images/figuries/figuries7.jpg";
import image8 from "../assets/images/figuries/figuries8.jpg";
import image9 from "../assets/images/figuries/figuries9.jpg";
import image10 from "../assets/images/figuries/figuries10.jpg";
import image11 from "../assets/images/figuries/figuries-with-clay1.jpg";
import image12 from "../assets/images/figuries/figuries-with-clay2.jpg";
import image13 from "../assets/images/figuries/figuries-with-clay3.jpg";
import image14 from "../assets/images/figuries/figuries-with-clay4.jpg";
import image15 from "../assets/images/figuries/figuries-with-clay5.jpg";
import image16 from "../assets/images/figuries/figuries-with-clay6.jpg";
import image17 from "../assets/images/figuries/figuries-with-clay7.jpg";
import image18 from "../assets/images/figuries/figuries-with-clay8.jpg";
import image19 from "../assets/images/figuries/figuries-with-clay9.jpg";
import image20 from "../assets/images/figuries/figuries-with-clay11.jpg";
import image21 from "../assets/images/figuries/figuries-with-clay12.jpg";
import image22 from "../assets/images/figuries/figuries-with-clay13.jpg";
import image23 from "../assets/images/figuries/figuries-with-clay14.jpg";
import image24 from "../assets/images/figuries/figuries-with-clay15.jpg";

export default function Figuries() {
    const imagesFiguriesRow1 = [
        image1,
        image3,
        image5,
        image7,
        image9,
    ];
    const imagesFiguriesRow2 = [
        image2,
        image4,
        image6,
        image8,
        image10,
    ];
    const imagesFiguriesWithClayRow1 = [
        image11,
        image13,
        image15,
        image17,
        image19,
        image21,
        image23,
    ];
    const imagesFiguriesWithClayRow2 = [
        image12,
        image14,
        image16,
        image18,
        image20,
        image22,
        image24,
    ];


    return (
        <div className="juckets-container" >
            <section className="juckets">
                <div style={{display: "flex", justifyContent: "center"}}><h4 style={{color: "white", fontSize: "2rem"}}>Ręcznie malowane figurki z gier planszowych.</h4></div>
                <div className="juckets-images grid-images">
                    <ul className="images-group juckets-group">
                        {
                            imagesFiguriesRow1.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                    <ul className="images-group">
                        {
                            imagesFiguriesRow2.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div style={{display: "flex", justifyContent: "center"}}><h4 style={{color: "white", fontSize: "2rem"}}>Figurki z gliny samoutwardzalnej.</h4></div>
                <div className="juckets-images grid-images">
                    <ul className="images-group juckets-group">
                        {
                            imagesFiguriesWithClayRow1.map((e, index) => (
                                <li key={index} className="image-group">
                                    <img src={e} alt={`juckets ${index + 1}`} className="image-realizations" />

                                </li>
                            ))
                        }
                    </ul>
                    <ul className="images-group">
                        {
                            imagesFiguriesWithClayRow2.map((e, index) => (
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