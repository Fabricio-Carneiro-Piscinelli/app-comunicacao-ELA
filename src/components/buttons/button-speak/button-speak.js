import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Col, Row } from "react-native-easy-grid";
import styles from './style.button-speak';

//icon
import Volume from './volume_up';

const ButtonSpeak = (props) => {
    const { speak } = props;
    return (
        <View>
            <TouchableOpacity style={styles.container_button} onPress={()=>speak()}>
                <Row>
                    <Col size={0.4} style={styles.container_button_icon}>
                        <Volume />
                    </Col>
                    <Col size={0.6} style={styles.container_button_label}>
                        <Text style={styles.container_button_text}>FALAR</Text>
                    </Col>
                </Row>
            </TouchableOpacity>
        </View>
    )
};

export default ButtonSpeak;