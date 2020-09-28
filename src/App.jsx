import React, { PureComponent } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Root from './RootContainer';
import Main from './navigators';
import { store } from './store';


class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <Provider store={store}>
                    <Root />
                </Provider>
            </SafeAreaView>
        );
    }
}

export default App;