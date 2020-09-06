import React, {PureComponent} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 25,
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 2,
  },
  content: {
    fontSize: 20,
  },
});

interface Props {
  name: string;
  phoneNumber: string;
}

export default class Card extends PureComponent<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const {name, phoneNumber} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>{name}</Text>
        <Text style={styles.content}>{phoneNumber}</Text>
      </View>
    );
  }
}
