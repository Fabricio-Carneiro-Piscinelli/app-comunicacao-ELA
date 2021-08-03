import React from "react";
import { SvgXml } from "react-native-svg";

export default function Up(){
    const content = `<svg width="205" height="80" viewBox="0 0 205 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M184.421 1.43706e-05C202.234 1.59279e-05 211.159 21.5325 198.57 34.1348L173.881 58.8493C160.564 72.1803 142.494 79.6707 123.651 79.6707H80.9337C62.152 79.6707 44.1353 72.2288 30.8284 58.9743L5.92593 34.17C-6.71172 21.5822 2.20297 -1.55937e-06 20.0401 0L184.421 1.43706e-05ZM102.476 38.097L94.209 46.3459L91.6695 43.8064L102.476 33L113.282 43.8064L110.743 46.3459L102.476 38.097Z" fill="#263749"/>
    </svg>`;
    const Svg = () => <SvgXml xml={content}/>;
    return <Svg/>;
}



