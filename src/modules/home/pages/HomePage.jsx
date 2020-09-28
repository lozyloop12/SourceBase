import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  // componentDidMount = () => {
  //   SplashScreen.hide();
  // };


  render() {
    return (
      <View>
        <Text> Home </Text>
      </View>
    );
  }
}

export default Home;
