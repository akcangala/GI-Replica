import React, { useState } from "react";
import Image from "next/image";
import ThumbnailComponent from "./ThumbnailComponent";
// import shield from "../public/images/gggg.png";
import amberThumbnail from "../public/images/thumbnail/mond/amberThumbnail.png";
import barbaraThumbnail from "../public/images/thumbnail/mond/barbaraThumbnail.png";
import dilucThumbnail from "../public/images/thumbnail/mond/dilucThumbnail.png";
import jeanThumbnail from "../public/images/thumbnail/mond/jeanThumbnail.png";
import kaeyaThumbnail from "../public/images/thumbnail/mond/kaeyaThumbnail.png";
import lisaThumbnail from "../public/images/thumbnail/mond/lisaThumbnail.png";
import razorThumbnail from "../public/images/thumbnail/mond/razorThumbnail.png";
import ventiThumbnail from "../public/images/thumbnail/mond/ventiThumbnail.png";
import kleeThumbnail from "../public/images/thumbnail/mond/kleeThumbnail.png";
import bennettThumbnail from "../public/images/thumbnail/mond/bennettThumbnail.png";
import noelleThumbnail from "../public/images/thumbnail/mond/noelleThumbnail.png";
import fischlThumbnail from "../public/images/thumbnail/mond/fischlThumbnail.png";
import sucroseThumbnail from "../public/images/thumbnail/mond/sucroseThumbnail.png";
import monaThumbnail from "../public/images/thumbnail/mond/monaThumbnail.png";
import dionaThumbnail from "../public/images/thumbnail/mond/dionaThumbnail.png";
import albedoThumbnail from "../public/images/thumbnail/mond/albedoThumbnail.png";
import rosariaThumbnail from "../public/images/thumbnail/mond/rosariaThumbnail.png";
import eulaThumbnail from "../public/images/thumbnail/mond/eulaThumbnail.png";
import aloyThumbnail from "../public/images/thumbnail/mond/aloyThumbnail.png";
import mikaThumbnail from "../public/images/thumbnail/mond/mikaThumbnail.png";

import amberMain from "../public/images/mainpic/mond/amberMain.png"
import barbaraMain from "../public/images/mainpic/mond/barbaraMain.png"
import dilucMain from "../public/images/mainpic/mond/dilucMain.png"
import jeanMain from "../public/images/mainpic/mond/jeanMain.png"
import kaeyaMain from "../public/images/mainpic/mond/kaeyaMain.png"
import lisaMain from "../public/images/mainpic/mond/lisaMain.png"
import razorMain from "../public/images/mainpic/mond/razorMain.png"
import ventiMain from "../public/images/mainpic/mond/ventiMain.png"
import kleeMain from "../public/images/mainpic/mond/kleeMain.png"
import bennettMain from "../public/images/mainpic/mond/bennettMain.png"
import noelleMain from "../public/images/mainpic/mond/noelleMain.png"
import fischlMain from "../public/images/mainpic/mond/fischlMain.png"
import sucroseMain from "../public/images/mainpic/mond/sucroseMain.png"
import monaMain from "../public/images/mainpic/mond/monaMain.png"
import dionaMain from "../public/images/mainpic/mond/dionaMain.png"
import albedoMain from "../public/images/mainpic/mond/albedoMain.png"
import rosariaMain from "../public/images/mainpic/mond/rosariaMain.png"
import eulaMain from "../public/images/mainpic/mond/eulaMain.png"
import aloyMain from "../public/images/mainpic/mond/aloyMain.png"
import mikaMain from "../public/images/mainpic/mond/mikaMain.png"

import anemoVision from "../public/images/vision/anemo.png"
import hydroVision from "../public/images/vision/hydro.png"
import cryoVision from "../public/images/vision/cryo.png"
import electroVision from "../public/images/vision/electro.png"
import pyroVision from "../public/images/vision/pyro.png"
import dendroVision from "../public/images/vision/dendro.png"
import geoVision from "../public/images/vision/geo.png"

import genshinLogo from "../public/images/wallpaper/genshinLogo.png";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const roles = [
    {
        tn: amberThumbnail,
        name: "AMBER",
        element: pyroVision,
        alt: "Amber",
        main: amberMain,
        va: "VA: IWAMI Manaka",
        info: "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius.",
        info2: "Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt.",
        info3: "As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
    },
    {
        tn: barbaraThumbnail,
        name: "BARBARA",
        element: hydroVision,
        alt: "Barbara",
        main: barbaraMain,
        va: "VA: KITO Akari",
        info: "The Deaconess of the Church of Favonius and a shining idol adored by all.",
        info2: "Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless.",
        info3: `"I owe everything to the city's spirit of freedom."`,
    },
    {
        tn: dilucThumbnail,
        name: "DILUC",
        element: pyroVision,
        alt: "Diluc",
        main: dilucMain,
        va: "VA: ONO Kenshou",
        info: "As the wealthiest gentleman in Mondstadt, the ever-dapper Diluc always presents himself as the epitome of perfection.",
        info2: "But behind the courteous visage burns a zealous soul that has sworn to protect Mondstadt at all costs, allowing him to mercilessly vanquish all who threaten his city.",
    },
    {
        tn: jeanThumbnail,
        name: "JEAN",
        element: anemoVision,
        alt: "Jean",
        main: jeanMain,
        va: "VA: SAITO Chiwa",
        info: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.",
        info2: "She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",

    },
    {
        tn: kaeyaThumbnail,
        name: "KAEYA",
        element: cryoVision,
        alt: "Kaeya",
        main: kaeyaMain,
        va: "VA: TORIUMI Kohsuke",
        info: "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems.",
        info2: "Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
    },
    {
        tn: lisaThumbnail,
        name: "LISA",
        element: electroVision,
        alt: "Lisa",
        main: lisaMain,
        va: "VA: TANAKA Rie",
        info: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.",
        info2: "As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
    },
    {
        tn: razorThumbnail,
        name: "RAZOR",
        element: electroVision,
        alt: "Razor",
        main: razorMain,
        va: "VA: UCHIYAMA Koki",
        info: "Some say he is an orphan raised by wolves. Others say he is a wolf spirit in human form.",
        info2: "He is most at home in the wild, fighting with claw and thunder.",
        info3: "To this day the wolf boy can be found prowling the forest, where he and his wolf pack hunt to survive using nothing more than their animal instincts.",
    },
    {
        tn: ventiThumbnail,
        name: "VENTI",
        element: anemoVision,
        alt: "Venti",
        main: ventiMain,
        va: "VA: MURASE Ayumu",
        info: "A bard that seems to have arrived on some unknown wind — sometimes sings songs as old as the hills, and other times recites poems fresh and new.",
        info2: "Likes apples and lively places, but is not a fan of cheese or anything sticky.",
        info3: "When using his Anemo power to control the wind, it often appears as feathers, as he's fond of that which appears light and breezy.",

    },
    {
        tn: kleeThumbnail,
        name: "KLEE",
        element: pyroVision,
        alt: "Klee",
        main: kleeMain,
        va: "VA: KUNO Misaki",
        info: "Knights of Favonius Spark Knight! Forever with a bang and a flash!",
        info2: "—And then disappearing from the stern gaze of Acting Grand Master Jean.",
        info3: "But it'd still be better to not be in solitary in the first place.",
    },
    {
        tn: bennettThumbnail,
        name: "BENNETT",
        element: pyroVision,
        alt: "Bennett",
        main: bennettMain,
        va: "VA: OSAKA Ryota",
        info: "One of the few young adventurers of the Mondstadt Adventurers' Guild, he is always plagued with inexplicable bad luck.",
        info2: `He is the only active member of his own adventure group, known as "Benny's Adventure Team," after all the other members decided to "take leave" following a series of unfortunate incidents. As a result, the team is currently on the verge of being dissolved.`,
        info3: `Being unable to break the poor boy's heart, Katheryne of the Adventurers' Guild has kept "Benny's Adventure Team" on the books, whilst also hiding from him the fact that all the other members have long since officially left the team.`,

    },
    {
        tn: noelleThumbnail,
        name: "NOELLE",
        element: geoVision,
        alt: "Noelle",
        main: noelleMain,
        va: "VA: TAKAO Kanon",
        info: "Like most of Mondstadt's young people, Noelle always dreamed of being a knight of Favonius when she grew up.",
        info2: "She may not have what it takes to be a knight just yet, but she is learning. Working as a maid at the Knights' headquarters, she is constantly taking notes on what constitutes knightly speech, knightly conduct, and knightly customs.",
        info3: "She holds firm to her belief that one day she will join their ranks — she just needs to keep trying her hardest at everything she does.",
    },
    {
        tn: fischlThumbnail,
        name: "FISCHL",
        element: electroVision,
        alt: "Fischl",
        main: fischlMain,
        va: "VA: UCHIDA Maaya",
        info: `A mysterious girl who calls herself "Prinzessin der Verurteilung" and travels with a night raven named Oz.`,
        info2: "Currently serves as an investigator in the Adventurers' Guild.",
        info3: "Through her unique abilities, eccentric character, and (while she would never admit it herself) hard work, Fischl has become a rising star among the Adventurers' Guild's investigators, earning the recognition of all.",
    },
    {
        tn: sucroseThumbnail,
        name: "SUCROSE",
        element: anemoVision,
        alt: "Sucrose",
        main: sucroseMain,
        va: "VA: FUJITA Akane",
        info: `An alchemist with an insatiable curiosity towards the world and everything in it. Attached to the Knights of Favonius as an assistant to Albedo, her area of focus is "bio-alchemy."`,
        info2: "She strives to enrich the world by transforming living things with the power of alchemy.",
        info3: "Granted, the products of her research sometimes prove to be more weird than wonderful — but on the whole, she has made monumental contributions to the field of bio-alchemy.",

    },
    {
        tn: monaThumbnail,
        name: "MONA",
        element: hydroVision,
        alt: "Mona",
        main: monaMain,
        va: "VA: KOHARA Konomi",
        info: `A mysterious young astrologer who proclaims herself to be "Astrologist Mona Megistus," and who possesses abilities to match the title. Erudite, but prideful.`,
        info2: "Though she is often strapped for cash and lives a life of thrift, she is resolved to never use astrology for profit... It is this very resolution that has caused her to constantly fret about money.",
    },
    {
        tn: dionaThumbnail,
        name: "DIONA",
        element: cryoVision,
        alt: "Diona",
        main: dionaMain,
        va: "VA: IZAWA Shiori",
        info: "The incredibly popular bartender of the Cat's Tail tavern, rising star of Mondstadt's wine industry, and the greatest challenger to its traditional powerhouses.",
        info2: "A feisty feline young lady from Springvale, any drink mixed by Diona's hand tastes delicious beyond belief.",
        info3: "Yet given her extreme distaste for alcohol, is her talent a blessing or a curse?",

    },
    {
        tn: albedoThumbnail,
        name: "ALBEDO",
        element: geoVision,
        alt: "Albedo",
        main: albedoMain,
        va: "VA: NOJIMA Kenji",
        info: "Albedo — an alchemist based in Mondstadt, in the service of the Knights of Favonius.",
        info2: `"Genius," "Kreideprinz," or "Captain of the Investigation Team"... Such titles and honors are of no consequence to him when there is so much more research to conduct.`,
        info3: "The pursuit of fortune and connections cannot hold a candle to his heart's desire — acquiring the limitless, obscure knowledge left behind by previous generations of scholars.",
    },
    {
        tn: rosariaThumbnail,
        name: "ROSARIA",
        element: cryoVision,
        alt: "Rosaria",
        main: rosariaMain,
        va: "VA: KAKUMA Ai",

        info: "Rosaria, a sister in Mondstadt's Church of Favonius.",
        info2: "A sister of the church, though you wouldn't know it if it weren't for her attire. An unusual woman with sharp, piercing words and a cold manner.",
        info3: "AHer movements are unpredictable. She often leaves without notifying anyone. She acts with some kind of purpose, but others don't seem to know exactly what she stands for...",
    },
    {
        tn: eulaThumbnail,
        name: "EULA",
        element: cryoVision,
        alt: "Eula",
        main: eulaMain,
        va: "VA: SATO Rina",
        info: "A rebellious descendant of the old aristocracy who is always out on the battlefield.",
        info2: `As one born into the old aristocracy, carrying the bloodline of sinners, Eula has needed a unique approach to the world to navigate the towering walls of prejudice peacefully. Of course, this did not prevent her from severing ties with her clan. As the outstanding Spindrift Knight, she hunts down Mondstadt's enemies in the wild to exact her unique "vengeance".`,
    },
    {
        tn: aloyThumbnail,
        name: "ALOY",
        element: cryoVision,
        alt: "Aloy",
        main: aloyMain,
        va: "VA: TAKAGAKI Ayahi",
        info: "An agile hunter from the Nora tribe. With bow in hand, she's always ready to protect the innocent.",
    },
    {
        tn: mikaThumbnail,
        name: "MIKA",
        element: cryoVision,
        alt: "Mika",
        main: mikaMain,
        va: "VA: SANPEI Yuko",
        info: "A young knight who is a key member of the front-line scouting team. Quiet and unassuming, Mika treats every task seriously, and can cook up a mean serving of field rations.",
        info2: "However, he can't seem to hide his bashful and shy personality when meeting strangers.",
    }
]



const Mondstadt = () => {

    const [genshinCharacter, setgenshinCharacter] = useState([0])

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        // 👇️ toggle isActive state on click
        setIsActive(current => !current);
    };

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerPadding: "0px",
        focusOnSelect: true,
        centerMode: true,

        nextArrow: <SampleNextArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, height: "20px", display: "block", backgroundImage: amberMain }}
                onClick={onClick}
            />
        );
    }

    return (
        <div className="mond">
            <div className="mondstadtWallpaper1"></div>
            <div className="header">
                <Image
                    src={genshinLogo}
                    height={65} />
            </div>
            <div className="diagonal">
            </div>
            <div className="img1">
                <div className="charInfo2" >
                    <div className="line"></div>
                    <p className="para"> {roles[genshinCharacter].name}</p>
                    <div className="va">
                        <div className="smallDia1">
                            <div className="smallhalfDia1"></div></div>
                        <p>{roles[genshinCharacter].va}</p> 
                    </div>
                    <div className="info">
                        <div className="info-dia">
                            <div className="smallDia2">
                                <div className="smallhalfDia2"></div></div>
                        </div>
                        <div className="info2">
                            <p className="characterInformation">{roles[genshinCharacter].info} <br />
                                {roles[genshinCharacter].info2} <br />
                                {roles[genshinCharacter].info3} <br /></p>
                        </div>
                    </div>
                </div>
                <Image style={{ position: "absolute", top: '11%', left: "21%", marginTop: 0, zIndex: 2, opacity: 0.2 }}
                    src={roles[genshinCharacter].element}
                    height={380}
                    width={360}
                />
                <Image style={{ position: "absolute", top: '3px', left: "19%", marginTop: 0, zIndex: 2 }}
                    src={roles[genshinCharacter].main}
                    height={920}
                    width={1500}
                />
            </div>
            <div className="characterIntro">
                <div className="characterIntroFlex">
                    <div className="firstLine">
                        <div className="triangle-left"></div>
                        <div className="triangle-left"></div>
                        <div className="triangle-left"></div>
                        <p>CHARACTER INTRODUCTION</p>
                    </div>
                    <div className="secondLine">
                        <p>MONDSTADT</p>
                    </div>
                </div>
            </div>
            <div id="img" >
                {/* map through texts array */}
                <div className="characterThumbnails">
                    <div className="thumbnailDiv" >
                        <Slider {...settings}>
                            {roles.map((role, index) => (
                                <div id={roles[index].name} style={{ width: "100px" }} className={index == genshinCharacter ? 'active' : ''} onClick={() => { setgenshinCharacter(index); handleClick(index) }}>
                                    <ThumbnailComponent
                                        key={index}
                                        thumbnail={roles[index].tn}
                                        name={roles[index].alt}
                                        altt={roles[index].alt}
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Mondstadt;