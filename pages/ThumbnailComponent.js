import react from "react";
import { useState } from "react";
import Image from "next/image";
import amberThumbnail from "../public/images/thumbnail/mond/amberThumbnail.png";

export default function ThumbnailComponent({ thumbnail, name, altt }) {
    const [thumb, setthumb] = useState('')
    return (
        <>
            {/* <div className="characterThumbnails">
            <div className="thumbnailDiv"> */}
            <div className="thumbnail">
                <div className="pic">
                    <Image
                        src={thumbnail}
                        width={106}
                        height={106}
                        alt={altt}
                    />
                </div>
                <div className="thumbnailText">
                    <p className="charName">{name}</p>
                </div>
            </div>
            {/* </div>
        </div> */}

        </>
    )
}
