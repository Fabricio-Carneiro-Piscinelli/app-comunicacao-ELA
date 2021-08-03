import { StyleSheet } from 'react-native';

import { btn_lettter } from '../../variabless/variabless';

const styles = StyleSheet.create({
    content: {
      backgroundColor: '#EFEFEF',
      width: btn_lettter.w,
      height: btn_lettter.h,
      borderRadius: btn_lettter.radius,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    content_text: {
      fontSize: btn_lettter.fontSize,
      fontWeight: '700',
      color: btn_lettter.fontColor
    }
  });

  export default styles;