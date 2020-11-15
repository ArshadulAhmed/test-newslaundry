import React from "react";
import propTypes from 'prop-types';
import { TextInput, HelperText, Button } from 'react-native-paper';

export const CommonTextInput = ({ label, onChangeText, ...rest }) => (
    <TextInput
        label={label}
        onChangeText={onChangeText}
        {...rest}
    />
);
CommonTextInput.propTypes = {
    label: propTypes.string,
    onChangeText: propTypes.func.isRequired,
}


export const CommonHelperText = ({ type, visible, text, ...rest }) => (
    <HelperText
        type={type}
        visible={visible}
        {...rest}
    >
        {text}
    </HelperText>

);
CommonHelperText.propTypes = {
    type: propTypes.string,
    visible: propTypes.bool,
    text: propTypes.string
}



// export const CommonButton = ({ icon, disabled, text, mode, onPress, ...rest }) => (
//     <Button
//         icon={icon}
//         disabled={disabled ? disabled : false}
//         mode={mode}
//         onPress={onPress}
//         {...rest}
//     >
//         {text}
//     </Button>

// );
// CommonButton.propTypes = {
//     icon: propTypes.string,
//     disabled: propTypes.bool,
//     text: propTypes.string.isRequired,
//     mode: propTypes.string.isRequired,
//     onPress: propTypes.func
// }



