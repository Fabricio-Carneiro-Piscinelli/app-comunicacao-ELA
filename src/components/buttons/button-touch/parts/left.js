import React from "react";
import { SvgXml } from "react-native-svg";

export default function Left(){
    const content = `<svg width="81" height="205" viewBox="0 0 81 205" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.894965 184.526C0.894966 202.339 22.4274 211.264 35.0297 198.675L59.7442 173.986C73.0752 160.669 80.5657 142.599 80.5657 123.756L80.5657 81.0387C80.5657 62.2569 73.1238 44.2403 59.8693 30.9334L35.065 6.03091C22.4772 -6.60674 0.894957 2.30795 0.894958 20.1451L0.894965 184.526ZM38.992 102.581L47.2409 94.314L44.7014 91.7745L33.895 102.581L44.7014 113.387L47.2409 110.848L38.992 102.581Z" fill="#263749"/>
    </svg>
    `;
    const Svg = () => <SvgXml xml={content} />;
    return <Svg/>;
}


