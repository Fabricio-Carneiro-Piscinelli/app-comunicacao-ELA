import React from "react";
import { SvgXml } from "react-native-svg";

export default function Down(){
    const content = `<svg width="205" height="80" viewBox="0 0 205 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M184.421 79.6708C202.234 79.6708 211.159 58.1383 198.57 45.536L173.881 20.8215C160.564 7.49049 142.494 3.05176e-05 123.651 3.05176e-05H80.9337C62.152 3.8147e-05 44.1353 7.44194 30.8284 20.6964L5.92593 45.5007C-6.71172 58.0886 2.20297 79.6708 20.0401 79.6708L184.421 79.6708ZM102.476 41.5737L94.209 33.3249L91.6695 35.8644L102.476 46.6708L113.282 35.8644L110.743 33.3249L102.476 41.5737Z" fill="#263749"/>
    </svg>
    `;
    const Svg = () => <SvgXml xml={content} />;
    return <Svg/>;
}

