import React, {PureComponent} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

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
  a: number;
  b: number;
  c: number;
  result: string;
  onPress?: any;
}

export default class Card extends PureComponent<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const {a, b, c, result, onPress} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text
          style={
            styles.content
          }>{`Phuong trinh ${a}*X^2 + ${b}*X + ${c} = 0`}</Text>
        <Text style={styles.content}>{`Ket qua: ${result}`}</Text>
      </TouchableOpacity>
    );
  }
}
