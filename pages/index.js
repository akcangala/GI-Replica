import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react'; 
import Mondstadt from './Mondstadt';
import Liyue from './Liyue';
import Inazuma from './Inazuma';
import Sumeru from './Sumeru';
import Fontaine from './Fontaine';
import Link from 'next/link';
import ThumbnailComponent from './ThumbnailComponent';
import anemo from "../public/images/vision/anemo.png";



export default function Home() {
  const [reg, setreg] = useState(<Mondstadt />)
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };
  const [teyvat, setteyvat] = useState([0])
  const [indexSetter, setindexSetter] = useState ([0])
  const regions = [
    {
      reg: <Mondstadt />,
      regName: "Mondstadt",
    },
    {
      reg: <Liyue />,
      regName: "Liyue",
    },
    {
      reg: <Inazuma />,
      regName: "Inazuma",
    },
    {
      reg: <Sumeru />,
      regName: "Sumeru",
    },
    {
      reg: <Fontaine />,
      regName: "Fontaine",
    },
  ]


  return (
    <div className='indexMain'>
      <div className="sidebarRegion">
      </div>
        
        <div className='sidebarP' style={{ zIndex: 100, position: "absolute", }}>
        {console. log({teyvat})}
          {regions.map((region, index) => (
            
            <div id={regions[index].regName} className={index == teyvat  ? 'indexCSS' : ''} onClick={() => { setteyvat(index);  setindexSetter(index) ;setreg(regions[index].reg) }}>
              <div className="smallDiaSide">
                <div className="smallhalfDiaSide"></div>
              </div>
              <p className="indexP" key={index}> {regions[index].regName}
              </p>
            </div>
          ))}

        </div>
      <div>{reg}</div> 

    </div>
  )

} 