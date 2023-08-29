import React, { useState } from "react";
import Image from "next/image";
import ThumbnailComponent from "./ThumbnailComponent";
// import shield from "../public/images/gggg.png";
import ayakaThumbnail from "../public/images/thumbnail/inazuma/ayakaThumbnail.png";
import yoimiyaThumbnail from "../public/images/thumbnail/inazuma/yoimiyaThumbnail.png";
import sayuThumbnail from "../public/images/thumbnail/inazuma/sayuThumbnail.png";
import raidenThumbnail from "../public/images/thumbnail/inazuma/raidenThumbnail.png";
import kujoThumbnail from "../public/images/thumbnail/inazuma/kujoThumbnail.png";
import gorouThumbnail from "../public/images/thumbnail/inazuma/gorouThumbnail.png";
import kazuhaThumbnail from "../public/images/thumbnail/inazuma/kazuhaThumbnail.png";
import kokomiThumbnail from "../public/images/thumbnail/inazuma/kokomiThumbnail.png";
import thomaThumbnail from "../public/images/thumbnail/inazuma/thomaThumbnail.png";
import ittoThumbnail from "../public/images/thumbnail/inazuma/ittoThumbnail.png";
import yaeThumbnail from "../public/images/thumbnail/inazuma/yaeThumbnail.png";
import ayatoThumbnail from "../public/images/thumbnail/inazuma/ayatoThumbnail.png";
import kukiThumbnail from "../public/images/thumbnail/inazuma/kukiThumbnail.png";
import heizouThumbnail from "../public/images/thumbnail/inazuma/heizouThumbnail.png";
import kiraraThumbnail from "../public/images/thumbnail/inazuma/kiraraThumbnail.png";


import ayakaMain from "../public/images/mainpic/inazuma/ayakaMain.png"
import yoimiyaMain from "../public/images/mainpic/inazuma/yoimiyaMain.png"
import sayuMain from "../public/images/mainpic/inazuma/sayuMain.png"
import raidenMain from "../public/images/mainpic/inazuma/raidenMain.png"
import kujoMain from "../public/images/mainpic/inazuma/kujoMain.png"
import gorouMain from "../public/images/mainpic/inazuma/gorouMain.png"
import kazuhaMain from "../public/images/mainpic/inazuma/kazuhaMain.png"
import kokomiMain from "../public/images/mainpic/inazuma/kokomiMain.png"
import thomaMain from "../public/images/mainpic/inazuma/thomaMain.png"
import ittoMain from "../public/images/mainpic/inazuma/ittoMain.png"
import yaeMain from "../public/images/mainpic/inazuma/yaeMain.png"
import ayatoMain from "../public/images/mainpic/inazuma/ayatoMain.png"
import kukiMain from "../public/images/mainpic/inazuma/kukiMain.png"
import heizouMain from "../public/images/mainpic/inazuma/heizouMain.png"
import kiraraMain from "../public/images/mainpic/inazuma/kiraraMain.png"

import anemoVision from "../public/images/vision/anemo.png"
import hydroVision from "../public/images/vision/hydro.png"
import cryoVision from "../public/images/vision/cryo.png"
import electroVision from "../public/images/vision/electro.png"
import pyroVision from "../public/images/vision/pyro.png"
import dendroVision from "../public/images/vision/dendro.png"
import geoVision from "../public/images/vision/geo.png"
 
import genshinLogo from "../public/images/wallpaper/genshinLogo.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";   

const roles = [
    {
        tn: ayakaThumbnail,
        name: "KAMISATO AYAKA",
        element: cryoVision,
        alt: "Kamisato Ayaka",
        main: ayakaMain,
        va: "VA: KOBAYASHI Sanae",
        info: "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.",
        info2: "Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.", 
    },
    {
        tn: yoimiyaThumbnail,
        name: "YOIMIYA",
        element: pyroVision,
        alt: "Yoimiya",
        main: yoimiyaMain,
        va: "VA: UEDA Kana",
        info: `A talented pyrotechnician. The current owner of Naganohara Fireworks known as the "Queen of the Summer Festival."`,
        info2: "A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.",
    },
    {
        tn: sayuThumbnail,
        name: "SAYU",
        element: anemoVision,
        alt: "Sayu",
        main: sayuMain,
        va: "VA: SUZAKI Aya",
        info: "Sayu, Shuumatsuban's resident ninja, is obsessed with sleeping and growing taller.",
        info2: "She has mastered all kinds of ninjutsu to run away and hide in pursuit of opportunities to laze around and sleep.",

    },
    {
        tn: raidenThumbnail,
        name: "RAIDEN SHOGUN",
        element: electroVision,
        alt: "Raiden Shogun",
        main: raidenMain,
        va: "VA: SAWASHIRO Miyuki",
        info: "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.",
        info2: "With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity.",
    },
    {
        tn: kujoThumbnail,
        name: "KUJO SARA",
        element: electroVision,
        alt: "Kujo Sara",
        main: kujoMain,
        va: "VA: SETO Asami",
        info: "Leader of the Tenryou Commission's forces. A charismatic woman who acts as swiftly as a storm wind and always honors her word.",
        info2: `She bears the title of "Devotee of the Divine" and has sworn her allegiance to the Raiden Shogun.`,
    },
    {
        tn: kazuhaThumbnail,
        name: "KAEDEHARA KAZUHA",
        element: anemoVision,
        alt: "Kaedehara Kazuha",
        main: kazuhaMain,
        va: "VA: SHIMAZAKI Nobunaga",
        info: "A wandering samurai from Inazuma with a modest and gentle personality.",
        info2: "Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.", 
    },
    {
        tn: gorouThumbnail,
        name: "GOROU",
        element: geoVision,
        alt: "Gorou",
        main: gorouMain,
        va: "VA: HATANAKA Tasuku",
        info: "The great general of Watatsumi Island's forces. He has gained respect and prestige, but always shows himself to be a humble leader.",
        info2: "He is deeply trusted by his subordinates and is someone with whom you can share your feelings without shame.", 
    },
    {
        tn: kokomiThumbnail,
        name: "KOKOMI",
        element: hydroVision,
        alt: "Kokomi",
        main: kokomiMain,
        va: "VA: MIMORI Suzuko",
        info: "Kokomi is the Divine Priestess of Watatsumi Island, and also serves as its supreme leader.",
        info2: "She is well-versed in the art of war, is good at strategizing, and has keen insights into military affairs. She is also adept at handling domestic affairs, diplomacy, and other matters.", 
    },
    {
        tn: thomaThumbnail,
        name: "THOMA",
        element: pyroVision,
        alt: "Thoma",
        main: thomaMain,
        va: "VA: MORITA Masakazu",
        info: `The housekeeper of the Yashiro Commission's Kamisato Clan, and a well-known "fixer" in Inazuma.
        `,
        info2: "Friendly and approachable, Thoma fits in with the crowd easily wherever he is.",
        info3:"At first glance, he seems to be a very easygoing person, but he is in fact very responsible. He has an extraordinarily serious side, be it in his work or his interpersonal communications.",

    },
    {
        tn: ittoThumbnail,
        name: "ARATAKI ITTO",
        element: geoVision,
        alt: "Arataki Itto",
        main: ittoMain,
        va: "VA: NISHIKAWA Takanori",
        info: "Descendant of the oni, of intrepid spirit and noble heart.",
        info2: "Fast as the wind and mighty as thunder.",

    },
    {
        tn: yaeThumbnail,
        name: "YAE SAKURA",
        element: electroVision,
        alt: "Yae Sakura",
        main: yaeMain,
        va: "VA: SAKURA Ayane",
        info: "The head shrine maiden in charge of Grand Narukami Shrine and a descendant of Kitsune lineage, Eternity's servant and friend, and the intimidating editor-in-chief of Yae Publishing House, a publisher of light novels...",
        info2: "The enigmatic Guuji, with many identities, may never be fully understood by mortals for what she truly is in her heart of hearts.",
    },
    {
        tn: ayatoThumbnail,
        name: "KAMISATO AYATO",
        element: hydroVision,
        alt: "Kamisato Ayato",
        main: ayatoMain,
        va: "VA: ISHIDA Akira",
        info: `Current head of the Kamisato Clan and, accordingly, the Yashiro Commissioner. He always has a way of attaining his purpose in a well-thought-out manner. However, few people understand what that "goal" he holds most dear is.`, 
    },
    {
        tn: kukiThumbnail,
        name: "KUKI SHINOBU",
        element: electroVision,
        alt: "Kuki Shinobu",
        main: kukiMain,
        va: "VA: MIZUHASHI Kaori",
        info: "The deputy leader of the Arataki Gang. She wears a unique mask and is rather stoic.",
        info2: "Few people know why a talent of this caliber would run away to join a street gang. Even fewer people know what she hides under her mask.", 
    },
    {
        tn: heizouThumbnail,
        name: "HEIZOU",
        element: anemoVision,
        alt: "Heizou",
        main: heizouMain,
        va: "VA: IGUCHI Yuichi",
        info: "A young prodigy detective from the Tenryou Commission. His senses are sharp and his thoughts are ingenious. No matter what unsolved case he's facing, he can get to the truth in unexpected ways.", 
    },
    {
        tn: kiraraThumbnail,
        name: "KIRARA",
        element: dendroVision,
        alt: "Kirara",
        main: kiraraMain,
        va: "VA: SUZUSHIRO Sayumi",
        info: "A courier who works for Komaniya Express, a delivery company in Inazuma. She has twin restless tails and is a nekomata who loves human society.",  
    },
]



const Inazuma = () => {

    const [genshinCharacter, setgenshinCharacter] = useState([0])

    const [isActive, setIsActive] = useState(false);

    const handleClick = event => { 
      setIsActive(current => !current);
    };

    var settings = { 
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1, 
        centerPadding: "10px",
        focusOnSelect: true,
        centerMode: true,
        nextArrow: <SampleNextArrow />, 
        
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
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
            // style={{...style, height:"20px" ,display: "block", backgroundImage: amberMain}}
            onClick={onClick}
          />
        );
      }

    return (
        <div className="mond">
            <div className="inazumaWallpaper1"></div>
            <div className="header">
            <Image 
                src={genshinLogo}
                height={65} />
            </div>
            <div className="diagonal">

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
                    <p>INAZUMA</p>
                </div>
                </div>
            </div>
            <div className="img1"> 
                <div className="charInfo" >
                    <div className="line"></div>
                    <p> {roles[genshinCharacter].name}</p> 
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
                        <p className="characterInformation">{roles[genshinCharacter].info} <br/>
                       {roles[genshinCharacter].info2} <br/>
                       {roles[genshinCharacter].info3} <br/></p>
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
            <div id="img" >
                {/* map through texts array */}
                <div className="characterThumbnails">
                    <div className="thumbnailDiv" >
                    <Slider {...settings}>
                        {roles.map((role, index) => (
                            <div id={roles[index].name} style={{width:"100px"}}className={index==genshinCharacter ? 'active' : ''} onClick={() => {setgenshinCharacter(index); handleClick(index)}}> 
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

export default Inazuma;