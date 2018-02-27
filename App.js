import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import userRepository from './db/userRepository';
import realm from './db/allScheema';

const uuidV4 = require('uuid/v4');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
    }

  }

  async componentWillMount() {
    const users = {
      id: 1,
      name: 'Joaninha',
      age: '10/10/2000',
    }
    // const usersInsert = await insertUsers(users);
    const allUsers = await userRepository.queryAll();
    // const s = await userRepository.insert(users);
    this.setState({ docs: allUsers[0] });
  }

  renderItem(item) {
    return (
      <View>
        <Text>
          {item.doc.name}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.docs.name}
        </Text>
      </View>      
    );
  }
}
