import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import styles from "./styles";
import { connect } from 'react-redux';
import VisibleTodos from '../VisibleTodos';
import {AsyncStorage} from 'react-native';

class deneme2 extends Component {
    state = {
        value: null
      }

    takeName = async () => {
        try {
          const value = await AsyncStorage.getItem('user');
          if (value !== null) {
            console.log(value);
          }
          this.setState({
            value
          });
        } catch (error) {
          // Error retrieving data
        }
      };
      UNSAFE_componentWillMount(){
        this.takeName()
      }


    render() {
        const { navigation } = this.props;
        const { value } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.list_view}>
                    <VisibleTodos />
                </View>
                <View style={styles.navbar_view}>
                    <View style={styles.icon_view}>
                        <Ionicons name="ios-list-box" color='black' size={25} />
                        <TouchableOpacity onPress={() => navigation.navigate("deneme")}>
                            <Ionicons name="md-add-circle-outline" color='black' size={25} />
                        </TouchableOpacity>
                        <Feather name="user" color='black' size={20} />
                    </View>
                    <View style={styles.text_view}>
                        <Text>List</Text>
                        <Text>  Add</Text>
                        <Text>{value}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect()(deneme2);
