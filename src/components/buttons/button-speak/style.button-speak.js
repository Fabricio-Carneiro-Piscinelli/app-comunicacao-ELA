
import { StyleSheet } from 'react-native';

//variabless
import { btn_speak } from '../../../variabless/variabless';

const styles = StyleSheet.create({
    container_button: {
      width: btn_speak.w,
      height: btn_speak.h,
      backgroundColor: btn_speak.bkg,
      borderRadius: btn_speak.radius
    },
    container_button_icon: {
      display: 'flex',
      justifyContent: 'center'
    },
    container_button_label: {
      display: 'flex',
      justifyContent: 'center'
    },
    container_button_text: {
      fontSize: btn_speak.fontSize,
      color: btn_speak.fontColor,
      fontWeight: '700'
    }
  });

export default styles;