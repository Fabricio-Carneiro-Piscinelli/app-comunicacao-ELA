import React from "react";
import { SvgXml } from "react-native-svg";

export default function Center(){
    const content = `<svg width="94" height="124" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="94" height="94" rx="16" fill="#263749"/>
    </svg>`;
    const Svg = () => <SvgXml xml={content}/>;
    return <Svg/>;
}
