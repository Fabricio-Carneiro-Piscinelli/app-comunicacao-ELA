import React, { useEffect, useState } from 'react';
import styles from './style.screen-initial';
import { Col, Row, Grid } from "react-native-easy-grid";

//components
import BoxTextInput from '../../components/box-text-input/box-text-input';
import ButtonTouch from '../../components/buttons/button-touch/button-touch';
import LetterSelected from '../../components/letter-selected/letter-selected';
import ButtonSpeak from '../../components/buttons/button-speak/button-speak';
import * as Speech from 'expo-speech';

//constants 
import alphabet from '../../constants/alphabet';

const ScreenInitial = () => {
    const [ text, setText ] = useState('');
    const [ counter, setCounter ] = useState(0);

    const up = () => {
        if (counter < alphabet.length-1)
            setCounter(counter+1);
        else 
            setCounter(0)
    };

    const down = () => {
        if (counter > 0 )
            setCounter(counter-1)
        else 
            setCounter(alphabet.length-1);
    };

    const left = () => {
        let phraseValue = text.substring(0, text.length - 1);
        setText(phraseValue)
    };

    const right = () => {
        let phraseValue = `${text}${alphabet[counter]}`;
        setText(phraseValue)
    };

    const speak = () => {
        Speech.speak(text);
    };

    return (
        <Grid style={styles.container}>
            <Row>
                <Col size={1.8}>
                    <Row style={styles.content_box_text}>
                        <Col>
                            <BoxTextInput value={text}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size={3} style={styles.content_btn_speak}>
                            <ButtonSpeak speak={speak}/>
                        </Col>
                        <Col size={2} style={styles.content_view_letter}>
                            <LetterSelected value={alphabet[counter]}/>
                        </Col>
                    </Row>
                </Col>
                <Col size={2.2}>
                    <ButtonTouch 
                        up={up}
                        left={left}
                        right={right}
                        down={down}
                    />
                </Col>
            </Row>
        </Grid>
    )
}

export default ScreenInitial;