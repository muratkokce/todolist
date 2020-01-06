import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Dimensions, Animated, BackHandler,  } from 'react-native';
import styles from './styles';
import {AsyncStorage} from 'react-native';
let {width, height} = Dimensions.get('window');

export default class startPage extends Component {

  static navigationOptions = () =>( {
    headerShow:false
  })

  state = {
    user:'',
    backClickCount:0
  }

  onUsernameAdd(text) {
    this.setState({ user: text})
  }

  sendName = async () => {
    try {
      await AsyncStorage.setItem('user', this.state.user);
      navigation.navigate('deneme');
    } catch (error) {
      // Error saving data
    }
  };

  addName() {
    const { navigation} = this.props;
    this.sendName();
    navigation.navigate('deneme');
  }

  constructor(props) {
    super(props);

    this.springValue = new Animated.Value(100);

}
//exit app
UNSAFE_componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
}

componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
}

_spring() {
    this.setState({backClickCount: 1}, () => {
        Animated.sequence([
            Animated.spring(
                this.springValue,
                {
                    toValue: -.15 * height,
                    friction: 5,
                    duration: 300,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                this.springValue,
                {
                    toValue: 100,
                    duration: 300,
                    useNativeDriver: true,
                }
            ),

        ]).start(() => {
            this.setState({backClickCount: 0});
        });
    });

}


handleBackButton = () => {
    this.state.backClickCount == 1 ? BackHandler.exitApp() : this._spring();

    return true;
};

  render() {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.jpg')} style={styles.images}></Image>
            <TextInput placeholder=' Name' multiline={true} onChangeText={this.onUsernameAdd.bind(this)} style={styles.textinput} />
            <TouchableOpacity onPress={this.addName.bind(this)}>
            <View style={styles.add}>
              <Text style={styles.add_text}>Next</Text>
            </View>            
          </TouchableOpacity>

          <Animated.View style={[styles.animatedView, {transform: [{translateY: this.springValue}]}]}>
                    <Text style={styles.exitTitleText}>Press back again to exit the app</Text>

                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => BackHandler.exitApp()}
                    >
                        <Text style={styles.exitText}>Exit</Text>
                    </TouchableOpacity>

                </Animated.View>
        </View>
    );
  }
}

