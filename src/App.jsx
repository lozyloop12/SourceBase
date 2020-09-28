import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';

import Main from './navigators';
import { store } from './store';


class RootApp extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <Provider store={store}> */}
                <Main />
                {/* </Provider> */}
            </SafeAreaView>
        );
    }
}

export default RootApp;