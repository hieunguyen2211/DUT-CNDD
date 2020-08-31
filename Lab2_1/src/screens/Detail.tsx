import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const styles = StyleSheet.create({
  textDetail: {
    fontSize: 50,
    alignSelf: 'center',
    marginTop: 300,
  },
});

interface Props {
  navigation: any;
  route: any;
}

export default class Detail extends PureComponent<Props> {
  handleBackScreen = () => {
    const {navigation} = this.props;
    return navigation.navigate('Home');
  };
  render() {
    const {value} = this.props.route.params;
    return (
      <View>
        <Header
          leftComponent={{
            icon: 'arrow-back',
            color: '#fff',
            onPress: this.handleBackScreen,
          }}
          centerComponent={{
            text: 'Detail',
            style: {color: '#fff', fontSize: 20},
          }}
          backgroundColor="#7308ff"
        />
        <Text style={styles.textDetail}>{value}</Text>
      </View>
    );
  }
}
