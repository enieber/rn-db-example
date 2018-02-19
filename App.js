import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { getAllUsers, insertUsers } from './users';

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
      name: 'Joaninha',
      age: '10/10/2000',
    }
    // const usersInsert = await insertUsers(users);
    const allUsers = await getAllUsers();
    console.log(allUsers);
    // this.setState({ docs });
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
      <FlatList
        style={{
          flex: 1,
        }}
        data={this.state.docs}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}
