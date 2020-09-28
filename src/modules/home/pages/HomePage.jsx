import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  componentDidMount = () => {
    this.props.onGetData()
  };


  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;
