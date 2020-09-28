import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(78, 78, 78, 0.77)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const BottomSheetOrientation = [
    'portrait',
    'portrait-upside-down',
    'landscape',
    'landscape-left',
    'landscape-right',
];

class BottomSheet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
        };
    }

    setModalVisible = (visible, callBack) => {
        this.setState(
            {
                modalVisible: visible,
            },
            () => callBack && callBack(),
        );
    };

    open = () => {
        this.setModalVisible(true);
    };

    close = () => {
        this.setModalVisible(false);
    };

    render() {
        const {animationType, children, customStyles, disabled, onPress} = this.props;
        const {modalVisible} = this.state;

        return (
            <Modal
                transparent
                animationType={animationType}
                visible={modalVisible}
                supportedOrientations={BottomSheetOrientation}
                onRequestClose={() => {
                    this.setModalVisible(false);
                }}>
                <TouchableOpacity
                    disabled={disabled}
                    onPress={onPress || this.close}
                    activeOpacity={1}
                    style={[styles.container, customStyles]}>
                    {children}
                </TouchableOpacity>
            </Modal>
        );
    };
};

BottomSheet.defaultProps = {
    animationType: 'none',
    customStyles: {},
    children: <View />,
    disabled: false,
    onPress: null,
};

BottomSheet.propTypes = {
    animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
    customStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
};

export default BottomSheet;
