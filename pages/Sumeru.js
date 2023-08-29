import React, { useState } from "react";
import Image from "next/image";
import ThumbnailComponent from "./ThumbnailComponent";
// import shield from "../public/images/gggg.png";
import tighnariThumbnail from "../public/images/thumbnail/sumeru/tighnariThumbnail.png";
import colleiThumbnail from "../public/images/thumbnail/sumeru/colleiThumbnail.png";
import doriThumbnail from "../public/images/thumbnail/sumeru/doriThumbnail.png";
import cynoThumbnail from "../public/images/thumbnail/sumeru/cynoThumbnail.png";
import candaceThumbnail from "../public/images/thumbnail/sumeru/candaceThumbnail.png";
import nilouThumbnail from "../public/images/thumbnail/sumeru/nilouThumbnail.png";
import nahidaThumbnail from "../public/images/thumbnail/sumeru/nahidaThumbnail.png";
import laylaThumbnail from "../public/images/thumbnail/sumeru/laylaThumbnail.png";
import wandererThumbnail from "../public/images/thumbnail/sumeru/wandererThumbnail.png";
import faruzanThumbnail from "../public/images/thumbnail/sumeru/faruzanThumbnail.png";
import alThumbnail from "../public/images/thumbnail/sumeru/alThumbnail.png";
import dehyaThumbnail from "../public/images/thumbnail/sumeru/dehyaThumbnail.png";
import kavehThumbnail from "../public/images/thumbnail/sumeru/kavehThumbnail.png";

import tighnariMain from "../public/images/mainpic/sumeru/tighnariMain.png"
import colleiMain from "../public/images/mainpic/sumeru/colleiMain.png"
import doriMain from "../public/images/mainpic/sumeru/doriMain.png"
import cynoMain from "../public/images/mainpic/sumeru/cynoMain.png"
import candaceMain from "../public/images/mainpic/sumeru/candaceMain.png"
import nilouMain from "../public/images/mainpic/sumeru/nilouMain.png"
import nahidaMain from "../public/images/mainpic/sumeru/nahidaMain.png"
import laylaMain from "../public/images/mainpic/sumeru/laylaMain.png"
import wandererMain from "../public/images/mainpic/sumeru/wandererMain.png"
import faruzanMain from "../public/images/mainpic/sumeru/faruzanMain.png"
import alMain from "../public/images/mainpic/sumeru/alMain.png"
import dehyaMain from "../public/images/mainpic/sumeru/dehyaMain.png"
import kavehMain from "../public/images/mainpic/sumeru/kavehMain.png"

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
        tn: tighnariThumbnail,
        name: "TIGHNARI",
        element: dendroVision,
        alt: "Tighnari",
        main: tighnariMain,
        va: "VA: KOBAYASHI Sanae",
        info: "An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.", 
    },
    {
        tn: colleiThumbnail,
        name: "COLLEI",
        element: dendroVision,
        alt: "Collei",
        main: colleiMain,
        va: "VA: MAEKAWA Ryoko",
        info: "A Trainee Forest Ranger who is under the tutelage of Tighnari. She started her academic career a little later than her peers, so she is currently working hard to catch up.",
        info2: "She hides the other side of her personality deep under the surface of optimism and kindness.", 
    },
    {
        tn: doriThumbnail,
        name: "DORI",
        element: electroVision,
        alt: "Dori",
        main: doriMain,
        va: "VA: KANEDA Tomoko",
        info: "Dori is a merchant in Sumeru who has a fondness for glittering Mora.",
        info2: "With her persuasive eloquence, she is able to sell various strange and mysterious products for a very high price.",
    },
    {
        tn: cynoThumbnail,
        name: "CYNO",
        element: electroVision,
        alt: "Cyno",
        main: cynoMain,
        va: "VA: IRINO Miyu",
        info: "The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.", 

    },
    {
        tn: candaceThumbnail,
        name: "CANDACE",
        element: hydroVision,
        alt: "Candace",
        main: candaceMain,
        va: "VA: YUZUKI Ryoka",
        info: "The guardian of Aaru Village who is gentle and benevolent. She will not allow anyone to harm Aaru Village under her watch.",
         
    },
    {
        tn: nilouThumbnail,
        name: "NILOU",
        element: hydroVision,
        alt: "Nilou",
        main: nilouMain,
        va: "VA: KANEMOTO Hisako",
        info: "Star of the Zubayr Theater. Her dance is as graceful as a water lily in first bloom, pure and pristine.",
        info2: "But she is by no means a haughty and cold person. Even the most hurried traveler will not forget her innocent and radiant smile.",
    },
    {
        tn: nahidaThumbnail,
        name: "NAHIDA",
        element: dendroVision,
        alt: "Nahida",
        main: nahidaMain,
        va: "VA: TAMURA Yukari",
        info:"Lesser Lord Kusanali dwells deep in the Sanctuary of Surasthana, and has never really been in the limelight, nor has she even been mentioned much.",
        info2: "Her burden is heavy, but though she may experience loneliness, and though darkness is all she sees before her, she will not stop moving forward.", 
    },
    {
        tn: laylaThumbnail,
        name: "LAYLA",
        element: cryoVision,
        alt: "Layla",
        main: laylaMain,
        va: "VA: TOMITA Miyu",
        info: "A Rtawahist student who always looks sleep-deprived. Her dark eye circles have been worsening due to academic stress.",
        info2: "Yet no matter how difficult the work at hand, she always manages to make the most brilliant deductions. Could she be writing her thesis in her dreams?", 
    },
    {
        tn: wandererThumbnail,
        name: "WANDERER",
        element: anemoVision,
        alt: "Wanderer",
        main: wandererMain,
        va: "VA: KAKIHARA Tetsuya",
        info: "If the measure of humanity is having a heart, then he cannot be deemed as such.",
        info2: "If one without a heart experiences joy and sorrow, then he shall be a puppet most alike to humanity.",
    },
    {
        tn: faruzanThumbnail,
        name: "FARUZAN",
        element: anemoVision,
        alt: "Faruzan",
        main: faruzanMain,
        va: "VA: HORIE Yui",
        info: `A distinguished Akademiya scholar from "a century ago" and one of the founders of Ancient Mechanics as a field of study. Although she hailed from Haravatat, she was renowned for her talents in machinery throughout Sumeru... Even though these honors have been forgotten in the river of time, much as she has.`, 

    },
    {
        tn: alThumbnail,
        name: "ALHAITHAM",
        element: dendroVision,
        alt: "Alhaitham",
        main: alMain,
        va: "VA: UMEHARA Yuuichirou",
        info: "The current scribe of the Sumeru Akademiya, a man endowed with extraordinary intelligence and talent. He lives free — free from the searching eyes of ordinary people, anyway.",
         
    },
    {
        tn: dehyaThumbnail,
        name: "DEHYA",
        element: pyroVision,
        alt: "Dehya",
        main: dehyaMain,
        va: "VA: FUKUHARA Ayaka",
        info: `A member of "The Eremites," a loosely-organized mercenary organization. She is brave, powerful, and enjoys an excellent reputation among mercenaries.`, 
    },
    {
        tn: kavehThumbnail,
        name: "KAVEH",
        element: dendroVision,
        alt: "Kaveh",
        main: kavehMain,
        va: "VA: UCHIDA Yuma",
        info: "A renowned architect from Sumeru who perhaps cares a bit too much about too many things. He is an aesthete troubled by reality.", 
    }
]



const Sumeru = () => {

    const [genshinCharacter, setgenshinCharacter] = useState([0]) 

    const characterSlides = roles.map((role, index) => (
        <div key={index} onClick={() => setgenshinCharacter(index)}>
            <ThumbnailComponent

                key={index}
                thumbnail={roles[index].tn}
                name={roles[index].name}
                altt={roles[index].alt}
            />
        </div>
    )) 

const Styling = 
    {borderStyle: "solid",
    borderColor:"red",}

    const [active, setactive]=useState ()
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
        <div className="sumeruWallpaper1"></div>
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
                    <p>SUMERU</p>
                </div>
                </div>
            </div>
            <div className="img1"> 
                <div className="charInfo2" >
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

export default Sumeru;