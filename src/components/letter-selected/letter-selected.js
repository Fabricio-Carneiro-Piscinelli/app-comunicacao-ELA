import React from 'react';
import { View, Text } from 'react-native';

//STYLE
import styles from './style.letter-selected';

const LetterSelected = (props) => {
    const { value } = props;
    return (
        <View>
           <View style={styles.content}>
               <Text style={styles.content_text}>
                    {value}
               </Text>
           </View>
        </View>
    )
}

export default LetterSelected;