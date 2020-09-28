import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { IMAGE } from '../../constants';
import { UIText } from '../elements';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        width,
        height: width * 0.16,
        // alignItems: 'center',
        justifyContent: 'space-between'
    },
    backButton: {
        paddingHorizontal: width * 0.053,
        // paddingVertical: width * 0.037,
        height: '100%',
        justifyContent: 'center',
    },
    titleStyle: {
        fontSize: width * 0.064,
        fontWeight: 'bold',
        textAlignVertical: 'center',
        textAlign: 'center',
        width: '80%',
        alignSelf: 'center'
    },
    viewRight: {
        paddingHorizontal: width * 0.053,
    },
    viewTitle: {
        position: 'absolute',
        top: 0,
        left: width * 0.17,
        right: width * 0.17,
        bottom: 0,
        justifyContent: 'center',
        alignContent: 'center',
    }
});

const Header = (props) => {
    const { style, title, LeftIcon, rightComponent, onPress, disabledLeft } = props;
    return (
        <View style={[styles.container, style]}>
            {!disabledLeft && <TouchableOpacity style={styles.backButton} onPress={onPress}>
                {LeftIcon
                    ? <LeftIcon width={width * 0.064} />
                    : <IMAGE.IC_BACK width={width * 0.064} />
                }
            </TouchableOpacity>}
            <View>{rightComponent}</View>
            <View style={styles.viewTitle}>
                <UIText text={title} style={styles.titleStyle} />
            </View>
        </View>
    );
}

Header.defaultProps = {
    style: {},
    title: '',
    disabledLeft: false
};

Header.propTypes = {
    onPress: PropTypes.func,
    LeftIcon: PropTypes.any,
    title: PropTypes.string,
    disabledLeft: PropTypes.bool,
    rightComponent: PropTypes.any
}

export default Header;
