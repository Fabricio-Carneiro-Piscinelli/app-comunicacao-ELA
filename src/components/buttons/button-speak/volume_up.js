import React from "react";
import { SvgXml } from "react-native-svg";

export default function Volume(){
    const content = `<svg width="59" height="59" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.875 14.625V24.375H11.375L19.5 32.5V6.50003L11.375 14.625H4.875ZM26.8125 19.5C26.8125 16.6238 25.155 14.1538 22.75 12.9513V26.0325C25.155 24.8463 26.8125 22.3763 26.8125 19.5ZM22.75 5.24878V8.59628C27.4463 9.99378 30.875 14.3488 30.875 19.5C30.875 24.6513 27.4463 29.0063 22.75 30.4038V33.7513C29.2663 32.2725 34.125 26.455 34.125 19.5C34.125 12.545 29.2663 6.72753 22.75 5.24878Z" fill="#E8F3FF"/>
    </svg>`;
    const Svg = () => <SvgXml xml={content} width='100%' height='50%'/>;
    return <Svg/>;
}
