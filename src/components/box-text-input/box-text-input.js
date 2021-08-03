
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './style.box-text-input';

const BoxTextInput = (props) => {
    const { value } = props;
    return (
        <View style={styles.container_input}>
            <ScrollView>
                <Text style={styles.container_input_text}>
                    {value.replace(/␣/gi,' ')}
                </Text>
            </ScrollView>
        </View>
    )
}

export default BoxTextInput;