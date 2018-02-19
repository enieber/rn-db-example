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
    const docs = await getAllUsers();
    this.setState({ docs });
  }

  renderItem(item) {
    return (
      <View>
        <Text>
          {item.doc.name}
        </Text>
        <Text>
          {item.doc.age}
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
