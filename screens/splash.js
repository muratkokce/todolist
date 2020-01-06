import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class splash extends Component {
    static navigationOptions = () => ({
        header: null
    })
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                1500
            )
        )
    }
    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
            this.props.navigation.navigate('startPage');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/images/logo.jpg')} style={styles.images}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    images: {
        width: 350,
        height: 300,
        resizeMode: 'stretch'
    }
});



export default splash;