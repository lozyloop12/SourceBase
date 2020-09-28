import React from 'react';
import { StyleSheet, TextInput, Dimensions, View, TouchableOpacity } from 'react-native';
import { stylesApp } from '../../constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    text_input: {
        color: '#231F20',
        fontSize: width * 0.04,
        marginLeft: width * 0.027,
        flex: 1,
        lineHeight: width * 0.064,
        paddingVertical: width * 0.027,
    },
    view_text_input: {
        flexDirection: 'row',
        borderBottomWidth: stylesApp.border_width,
        borderColor: stylesApp.border_color,
        alignItems: 'center'
    },
})

const TextInputField = (props) => {
    const { style, onChangeText, ICON_LEFT, ICON_RIGHT, onRightPress, ...others } = props;
    return (
        <View style={[styles.view_text_input, style]}>
            {ICON_LEFT && <ICON_LEFT />}
            <TextInput
                style={styles.text_input}
                onChangeText={onChangeText}
                {...others}
            />
            {ICON_RIGHT && <TouchableOpacity onPress={onRightPress}>
                <ICON_RIGHT />
            </TouchableOpacity>}
        </View>
    )
};

TextInputField.defaultProps = {
    onChangeText: () => { },
}

export default TextInputField;
