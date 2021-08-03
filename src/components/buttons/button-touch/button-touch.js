
import React from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import Center from './parts/center';
import Down from './parts/down';
import Left from './parts/left';
import Right from './parts/right';
import Up from './parts/up';

//styles
import styles from './style.button-touch';

const ButtonTouch = (props) => {
    const { up, left, right, down } = props;

    return (

        <Grid> 
            <Row>
                <Col>
                    <TouchableOpacity onPress={()=>up()} style={styles.content_btn_up}>
                        <Up />
                    </TouchableOpacity>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TouchableOpacity onPress={()=>left()} style={styles.content_btn_left}>
                        <Left/>
                    </TouchableOpacity>
                </Col>
                <Col style={styles.content_btn_center}> 
                    <Center/>
                </Col>
                <Col>
                    <TouchableOpacity onPress={()=>right()} style={styles.content_btn_right}>
                        <Right/>
                    </TouchableOpacity>
                </Col>
            </Row>
            <Row>
                <Col>
                    <TouchableOpacity onPress={()=>down()} style={styles.content_btn_down}>
                        <Down/>
                    </TouchableOpacity>
                </Col>
            </Row>
        </Grid> 
    )
}

export default ButtonTouch;