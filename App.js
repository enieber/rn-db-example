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
    const save = await userOffline.insert(`(name) value ("João De Sá")`, [])
    const docs = await userOffline.allDocs();
    console.log(docs);
    // this.setState({ docs });
  }

  render() {
    return (
      <View>
        <Text>
          {this.state.docs.rows ? this.state.docs.rows[0].doc.name : 'carregando...'}
        </Text>
      </View>
    );
  }
}
