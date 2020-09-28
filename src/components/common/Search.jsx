import React from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

import PropTypes from 'prop-types';

import {fontFamily} from '../../themes/Font';
import { IMAGE } from '../../constants';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    viewSearch: {
        backgroundColor: '#F4F5F9',
        borderRadius: width * 0.056,
        height: width * 0.112,
        width: '100%',
        paddingHorizontal: width * 0.043,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle: {
        fontFamily,
        marginLeft: width * 0.027,
        flex: 1,
        fontSize: width * 0.042
    },
});

const Search = (props) => {
    const {LeftIcon, onChangeText, style, inputStyle, ...others} = props;
    return (
        <View style={[styles.viewSearch, style]}>
            <LeftIcon />
            <TextInput
                style={[styles.inputStyle, inputStyle]}
                onChangeText={onChangeText}
                {...others}
            />
        </View>
    );
};

Search.defaultProps = {
    LeftIcon: <View/>
};

Search.propTypes = {
    LeftIcon: PropTypes.any,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    inputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChangeText: PropTypes.func.isRequired
}

export default Search;
