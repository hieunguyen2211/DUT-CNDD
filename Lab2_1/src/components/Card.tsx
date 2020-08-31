import React, {PureComponent} from 'react';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

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
  value: number;
  onPress?: any;
  onFocus?: any;
}

export default class Card extends PureComponent<Props> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const {value, onPress, onFocus} = this.props;
    return (
      <TouchableHighlight
        style={styles.container}
        onPress={onPress}
        onLongPress={onFocus}
        delayLongPress={1000}
        underlayColor="#d9d9d9">
        <Text style={styles.content}>{value}</Text>
      </TouchableHighlight>
    );
  }
}
