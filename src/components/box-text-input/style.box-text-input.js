import { StyleSheet } from 'react-native';

//variabless
import { box_text_input } from '../../variabless/variabless';

const styles = StyleSheet.create({
    container_input: {
      width: box_text_input.width,
      height: box_text_input.height,
      backgroundColor: '#E8F3FF',
      borderRadius: 16,
      padding: 10,
    },
    container_input_text: {
      fontSize: 28,
      fontWeight: '400'
    }
  });

  export default styles;