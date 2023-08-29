import React, { useState } from "react";
import Image from "next/image";
import ThumbnailComponent from "./ThumbnailComponent";
// import shield from "../public/images/gggg.png";
import lyneyThumbnail from "../public/images/thumbnail/fontaine/lyneyThumbnail.png";
import lynetteThumbnail from "../public/images/thumbnail/fontaine/lynetteThumbnail.png";

import lyneyMain from "../public/images/mainpic/fontaine/lyneyMain.png"
import lynetteMain from "../public/images/mainpic/fontaine/lynetteMain.png"

import anemoVision from "../public/images/vision/anemo.png"
import hydroVision from "../public/images/vision/hydro.png"
import cryoVision from "../public/images/vision/cryo.png"
import electroVision from "../public/images/vision/electro.png"
import pyroVision from "../public/images/vision/pyro.png"
import dendroVision from "../public/images/vision/dendro.png"
import geoVision from "../public/images/vision/geo.png" 


import genshinLogo from "../public/images/wallpaper/genshinLogo.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const roles = [
    {
        tn: lyneyThumbnail,
        name: "LYNEY",
        element: pyroVision,
        alt: "Lyney",
        main: lyneyMain,
        va: "VA: SHIMONO Hiro",
        info: "A genius of a magician famed throughout Fontaine. He moves his audience with a combination of sleight of hand and the gift of the gab. Eloquent, ingenious, and with a mind as hard to fathom as a cat.",
    },
    {
        tn: lynetteThumbnail,
        name: "LYNETTE",
        element: anemoVision,
        alt: "Lynette",
        main: lynetteMain,
        va: "VA: SASAHARA Yu",
        info: `A magician's assistant hidden in the shadows who refers to herself as a "Multi-Function Magic Assistant." Poker-faced, reticent to speak, and as unpredictable in her movements as a cat.`,
    },
]



const Fontaine = () => {

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


    return (
        <div className="mond"> 
        <div className="fontaineWallpaper1"></div>
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
            <div className="characterIntro">
                <div className="characterIntroFlex">
                <div className="firstLine">
                    <div className="triangle-left"></div>
                    <div className="triangle-left"></div>   
                    <div className="triangle-left"></div>   
                    <p>CHARACTER INTRODUCTION</p>
                </div>
                <div className="secondLine">
                    <p>FONTAINE</p>
                </div>
                </div>
            </div>
            <div id="img" >
                {/* map through texts array */}
                <div className="characterThumbnails">
                    <div className="thumbnailDivFontaine" >
                        {roles.map((role, index) => (
                            <div id={roles[index].name} className={index==genshinCharacter ? 'active' : ''} onClick={() => {setgenshinCharacter(index); handleClick(index)}}>
                                <ThumbnailComponent

                                    key={index}
                                    thumbnail={roles[index].tn}
                                    name={roles[index].alt}
                                    altt={roles[index].alt}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Fontaine;