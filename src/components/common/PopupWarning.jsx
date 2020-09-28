import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { UIText } from '../elements';

const styles = StyleSheet.create({
    container: {
        width: '86%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 8
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15
    },
    content: {
        textAlign: 'center'
    }
});

const PopupWarning = ({ title, content }) => (
    <View style={styles.container}>
        <UIText text={title} style={styles.title} />
        <UIText text={content} style={styles.content}/>
    </View>
);

PopupWarning.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default PopupWarning;
