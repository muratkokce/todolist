import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import styles from "./styles";
import { AsyncStorage } from 'react-native';
import VisibleTodos from '../VisibleTodos';

class deneme extends Component {
  state = {
    toDos: [],
    visibilityFilter: 'SHOW_ALL_TODOS',
    text: '',
    value: null
  }

  addTodo = (text) => {
    this.props.dispatch({ type: 'ADD_TODO', text })
    this.setState({ text: '' })

  }

  takeName = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
      }
      this.setState({
        value
      });
    } catch (error) {
      // Error retrieving data
    }
  };
  UNSAFE_componentWillMount() {
    this.takeName()
  }

  render() {
    const { value } = this.state;
    console.log("gelmedi");

    console.log(this.state.toDos);
    return (
      <View style={styles.container}>
      
        <View style={styles.view_input}>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            multiline={true} style={styles.textinput} />
          <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
            <View style={styles.add}>
              <Text style={styles.add_text}>Add</Text>
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scroll}>
          <View style={styles.listView}>
            <VisibleTodos />
          </View>
        </ScrollView>

        <View style={{ flex: 1, alignItems: 'center' }}>
          <View style={styles.navbar_view}>
            <View style={styles.icon_view}>
              <Ionicons name="ios-list" color='black' size={25} />
              <Feather name="user" color='black' size={20} />
            </View>
            <View style={styles.text_view}>
              <Text>List</Text>
              <Text>{value}</Text>
            </View>
          </View>
        </View>

      </View>

    );
  }
}

export default connect()(deneme);

