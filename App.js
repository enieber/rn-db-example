import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
} from 'react-native';

import { userOffline } from './db/users';
import { productsOffline } from './db/products';
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
    // const save = await productsOffline.insert(`(?, ?)`, ['Bom briu', 1.90]);
    // console.log(save);
    const doc1 = await userOffline.get('');
    const user = doc1.item(0);
    const doc2 = await productsOffline.get('');
    const product = doc2.item(0);
    const docs = {
      user,
      product,
    };

    this.setState({ docs });
  }

  render() {
    return (
      <View>
        <Text>
          Nome
        </Text>
        <Text>
          {this.state.docs.user ? this.state.docs.user.name : 'carregando...'}
        </Text>
        <Text>
          Produtos
        </Text>
        <Text>
          {this.state.docs.product ? `${this.state.docs.product.name} - R$ ${this.state.docs.product.value}` : 'carregando...'}
        </Text>
      </View>
    );
  }
}
