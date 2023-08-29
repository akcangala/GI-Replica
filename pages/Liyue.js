import React, { useState } from "react";
import Image from "next/image";
import ThumbnailComponent from "./ThumbnailComponent";
// import shield from "../public/images/gggg.png";
import xiaoThumbnail from "../public/images/thumbnail/liyue/xiaoThumbnail.png";
import beidouThumbnail from "../public/images/thumbnail/liyue/beidouThumbnail.png";
import ningguangThumbnail from "../public/images/thumbnail/liyue/ningguangThumbnail.png";
import xianglingThumbnail from "../public/images/thumbnail/liyue/xianglingThumbnail.png";
import xingqiuThumbnail from "../public/images/thumbnail/liyue/xingqiuThumbnail.png";
import chongyunThumbnail from "../public/images/thumbnail/liyue/chongyunThumbnail.png";
import qiqiThumbnail from "../public/images/thumbnail/liyue/qiqiThumbnail.png";
import keqingThumbnail from "../public/images/thumbnail/liyue/keqingThumbnail.png";
import tartagliaThumbnail from "../public/images/thumbnail/liyue/tartagliaThumbnail.png";
import zhongliThumbnail from "../public/images/thumbnail/liyue/zhongliThumbnail.png";
import xinyanThumbnail from "../public/images/thumbnail/liyue/xinyanThumbnail.png";
import ganyuThumbnail from "../public/images/thumbnail/liyue/ganyuThumbnail.png";
import hutaoThumbnail from "../public/images/thumbnail/liyue/hutaoThumbnail.png";
import yanfeiThumbnail from "../public/images/thumbnail/liyue/yanfeiThumbnail.png";
import shenheThumbnail from "../public/images/thumbnail/liyue/shenheThumbnail.png";
import yunjinThumbnail from "../public/images/thumbnail/liyue/yunjinThumbnail.png";
import yelanThumbnail from "../public/images/thumbnail/liyue/yelanThumbnail.png";
import yaoyaoThumbnail from "../public/images/thumbnail/liyue/yaoyaoThumbnail.png";
import baizhuThumbnail from "../public/images/thumbnail/liyue/baizhuThumbnail.png";

import xiaoMain from "../public/images/mainpic/liyue/xiaoMain.png"
import beidouMain from "../public/images/mainpic/liyue/beidouMain.png"
import ningguangMain from "../public/images/mainpic/liyue/ningguangMain.png"
import xianglingMain from "../public/images/mainpic/liyue/xianglingMain.png"
import xingqiuMain from "../public/images/mainpic/liyue/xingqiuMain.png"
import chongyunMain from "../public/images/mainpic/liyue/chongyunMain.png"
import qiqiMain from "../public/images/mainpic/liyue/qiqiMain.png"
import keqingMain from "../public/images/mainpic/liyue/keqingMain.png"
import tartagliaMain from "../public/images/mainpic/liyue/tartagliaMain.png"
import zhongliMain from "../public/images/mainpic/liyue/zhongliMain.png"
import xinyanMain from "../public/images/mainpic/liyue/xinyanMain.png"
import ganyuMain from "../public/images/mainpic/liyue/ganyuMain.png"
import hutaoMain from "../public/images/mainpic/liyue/hutaoMain.png"
import yanfeiMain from "../public/images/mainpic/liyue/yanfeiMain.png"
import shenheMain from "../public/images/mainpic/liyue/shenheMain.png"
import yunjinMain from "../public/images/mainpic/liyue/yunjinMain.png"
import yelanMain from "../public/images/mainpic/liyue/yelanMain.png"
import yaoyaoMain from "../public/images/mainpic/liyue/yaoyaoMain.png"
import baizhuMain from "../public/images/mainpic/liyue/baizhuMain.png"

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
        tn: xiaoThumbnail,
        name: "XIAO",
        element: anemoVision,
        alt: "Xiao",
        main: xiaoMain,
        va: "VA: MATSUOKA Yoshitsugu",
        info: `One of the mighty and illuminated adepti guarding Liyue, also heralded as the "Vigilant Yaksha."`,
        info2: "Despite his youthful appearance, tales of his exploits have been documented for millennia.",
        info3: `He is especially fond of Wangshu Inn's Almond Tofu. 
        This is because it tastes just like the sweet dreams he used to devour.`,
    },
    {
        tn: beidouThumbnail,
        name: "BEIDOU",
        element: electroVision,
        alt: "Beidou",
        main: beidouMain,
        va: "VA: KOSHIMIZU Ami",
        info: "Captain of the Crux, with quite the reputation in Liyue.",
        info2: "There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her.",
        info3: `For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say— "No matter what sea beasts there may be, Beidou will be sure to split them all in two."`,
    },
    {
        tn: ningguangThumbnail,
        name: "NINGGUANG",
        element: geoVision,
        alt: "Ningguang",
        main: ningguangMain,
        va: "VA: OHARA Sayaka",
        info: "Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.",
        info2: "As the Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit.",
    },
    {
        tn: xianglingThumbnail,
        name: "XIANGLING",
        element: pyroVision,
        alt: "Xiangling",
        main: xianglingMain,
        va: "VA: OZAWA Ari",
        info: "The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes.",
        info2: "Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock.",
        info3:"There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise.",

    },
    {
        tn: xingqiuThumbnail,
        name: "XINGQIU",
        element: hydroVision,
        alt: "Xingqiu",
        main: xingqiuMain,
        va: "VA: MINAGAWA Junko",
        info: "Second son of the Feiyun Commerce Guild, Xingqiu has had a reputation for being studious and polite ever since he was a young child.",
        info2: "But there is another side to the mild-mannered Xingqiu everyone knows. A daring, adventurous and much more mischievous side...",
    },
    {
        tn: chongyunThumbnail,
        name: "CHONGYUN",
        element: cryoVision,
        alt: "Chongyun",
        main: chongyunMain,
        va: "VA: SAITO Soma",
        info: "An exorcist who roams the land with Liyue as his base of operations, evil spirits fleeing wherever he goes. As the heir to a clan of exorcists, he has always possessed abilities superior to most. However, these abilities are not the result of training, but of an inborn trait — a pure-yang spirit.", 
    },
    {
        tn: qiqiThumbnail,
        name: "QIQI",
        element: cryoVision,
        alt: "Qiqi",
        main: qiqiMain,
        va: "VA: TAMURA Yukari",
        info: "An apprentice and herb gatherer at Bubu Pharmacy.",
        info2: `"Blessed" by the adepti with a body that cannot die, this petite zombie cannot do anything without first giving herself orders to do it.`,
        info3: "Qiqi's memory is like a sieve. Out of necessity, she always carries around a notebook in which she writes anything important that she is sure to forget later.",
    },
    {
        tn: keqingThumbnail,
        name: "KEQING",
        element: electroVision,
        alt: "Keqing",
        main: keqingMain,
        va: "VA: KITAMURA Eri",
        info: "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.",
        info2: "She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.", 
    },
    {
        tn: tartagliaThumbnail,
        name: "TARTAGLIA",
        element: hydroVision,
        alt: "Tartaglia",
        main: tartagliaMain,
        va: "VA: KIMURA Ryohei",
        info: "Meet Tartaglia — the cunning Snezhnayan whose unpredictable personality keeps people guessing his every move.",
        info2: "Don't be under any illusion as to what he might be thinking or what his intentions are. Just remember this: Behind that innocent, childlike exterior lies a finely honed instrument of war.",
    },
    {
        tn: zhongliThumbnail,
        name: "ZHONGLI",
        element: geoVision,
        alt: "Zhongli",
        main: zhongliMain,
        va: "VA: MAENO Tomoaki",
        info: "Wangsheng Funeral Parlor mysterious consultant. Handsome, elegant, and surpassingly learned.",
        info2: "Though no one knows where Zhongli is from, he is a master of courtesy and rules. From his seat at Wangsheng Funeral Parlor, he performs all manner of rituals.",

    },
    {
        tn: xinyanThumbnail,
        name: "XINYAN",
        element: pyroVision,
        alt: "Xinyan",
        main: xinyanMain,
        va: "VA: TAKAHASHI Chiaki",
        info: "Rock 'n' roll is an avant-garde art in Liyue Harbor and Xinyan is the pioneer in this field.",
        info2: "She rebels against ossified prejudices, using her music and passionate singing to awaken dazed souls fatigued by worldly matters.",
    },
    {
        tn: ganyuThumbnail,
        name: "GANYU",
        element: cryoVision,
        alt: "Ganyu",
        main: ganyuMain,
        va: "VA: UEDA Reina",
        info: "The secretary to the Liyue Qixing. The blood of both human and illuminated beast flows within her veins.", 
        info2: "Graceful and quiet by nature, yet the gentle disposition of qilin sees not even the slightest conflict with even the most arduous of workloads.",
    },
    {
        tn: hutaoThumbnail,
        name: "HU TAO",
        element: pyroVision,
        alt: "Hu Tao",
        main: hutaoMain,
        va: "VA: TAKAHASHI Rie",
        info: "Hu Tao is the 77th Director of the Wangsheng Funeral Parlor, a person vital to managing Liyue's funerary affairs.",
        info2: "She does her utmost to flawlessly carry out a person's last rites and preserve the world's balance of yin and yang.",
        info3: `Aside from this, she is also a talented poet whose many "masterpieces" have passed around Liyue's populace by word of mouth.`,

    },
    {
        tn: yanfeiThumbnail,
        name: "YANFEI",
        element: pyroVision,
        alt: "Yanfei",
        main: yanfeiMain,
        va: "VA: HANAMORI Yumiri",
        info: "A half-illuminated beast and highly-skilled legal adviser.",
        info2: "She combines adherence to the legal codices and reasonable flexibility to find the perfect balance in her work. She devotes herself to protecting the fairness of contracts in Liyue with her identity as a legal adviser and her unique experience and methods.", 
    },
    {
        tn: shenheThumbnail,
        name: "SHENHE",
        element: cryoVision,
        alt: "Shenhe",
        main: shenheMain,
        va: "VA: KAWASUMI Ayako",
        info: "Even though she was born in the human world, she ended up being an adepti disciple. She grew up in the mountains far away from Liyue Harbor, her soul bound with red ropes, training both her body and mind.", 
    },
    {
        tn: yunjinThumbnail,
        name: "YUNJIN",
        element: geoVision,
        alt: "Yunjin",
        main: yunjinMain,
        va: "VA: KOIWAI Kotori",
        info: "The current director of the Yun-Han Opera Troupe, a renowned Liyue opera singer who is skilled in both playwriting and singing. Her style is one-of-a-kind, exquisite and delicate, much like the person herself.", 

    },
    {
        tn: yelanThumbnail,
        name: "YELAN",
        element: hydroVision,
        alt: "Yelan",
        main: yelanMain,
        va: "VA: ENDŌ Aya",
        info: `A mysterious person who claims to work for the Ministry of Civil Affairs, but is a "non-entity" on the Ministry of Civil Affairs' list.`,
        info2: "Elusive, enigmatic, erratic - all of these are Yelan's hallmarks.",
    },
    {
        tn: yaoyaoThumbnail,
        name: "YAOYAO",
        element: dendroVision,
        alt: "Yaoyao",
        main: yaoyaoMain,
        va: "VA: KADOWAKI Mai",
        info: "A young adepti disciple who is generous and sincere. She is used to taking care of everyone around her. She trains under her master at Liyue Harbor and regularly travels between the mountains and the city. Although she does not say it outright, she prefers bustling city markets to the tranquil mountains.", 
    },
    {
        tn: baizhuThumbnail,
        name: "BAIZHU",
        element: dendroVision,
        alt: "Baizhu",
        main: baizhuMain,
        va: "VA: YUSA Koji",
        info: "The owner of Bubu Pharmacy, the finest pharmacy in all of Liyue. He is rarely seen without a white snake named Changsheng coiled around his shoulders. His prescriptions are varied and diverse, and his medical prowess and compassion are known throughout Teyvat.", 
    }
]



const Liyue = () => {

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
            onClick={onClick}
          />
        );
      }

    return (
        <div className="mond"> 
        <div className="liyueWallpaper1"></div>
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
                    <p>LIYUE HARBOR</p>
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

export default Liyue;