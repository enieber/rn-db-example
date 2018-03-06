import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { userOffline } from './db/users';
import { setup } from './db/db';

const uuidV4 = require('uuid/v4');
setup();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docs: [],
    }
  }

  async componentWillMount() {
    // const save = await userOffline.insert(`(?, ?)`, [1, 'João de Sá']);
    // console.log(save);
    const docs = await userOffline.get('');
    const item = docs.item(0)
    this.setState({ docs: item });
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.docs ? this.state.docs.name : 'carregando...'}
        </Text>
      </View>
    );
  }
}
