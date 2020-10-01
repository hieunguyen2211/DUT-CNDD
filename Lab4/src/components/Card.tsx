import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

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
  onPress: any;
}

export default class Card extends PureComponent<Props> {
  render() {
    const {name, phoneNumber, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.content}>{name}</Text>
        <Text style={styles.content}>{phoneNumber}</Text>
      </TouchableOpacity>
    );
  }
}
