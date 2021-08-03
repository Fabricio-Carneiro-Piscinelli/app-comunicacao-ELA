import React from "react";
import { SvgXml } from "react-native-svg";

export default function Right(){
    const content = `<svg width="81" height="205" viewBox="0 0 81 205" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.5658 184.526C80.5658 202.339 59.0333 211.264 46.431 198.675L21.7165 173.986C8.3855 160.669 0.895044 142.599 0.895045 123.756L0.895047 81.0387C0.895055 62.2569 8.33696 44.2403 21.5914 30.9334L46.3958 6.03091C58.9836 -6.60674 80.5658 2.30795 80.5658 20.1451L80.5658 184.526ZM42.4688 102.581L34.2199 94.314L36.7594 91.7745L47.5658 102.581L36.7594 113.387L34.2199 110.848L42.4688 102.581Z" fill="#263749"/>
    </svg>
    `;
    const Svg = () => <SvgXml xml={content} />;
    return <Svg/>;
}


