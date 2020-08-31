import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const styles = StyleSheet.create({
  content: {
    marginTop: 300,
  },
  textDetail: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
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
    const {data} = this.props.route.params;
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
        <View style={styles.content}>
          <Text
            style={
              styles.textDetail
            }>{`Phuong trinh ${data.a}*X^2 + ${data.b}*X + ${data.c} = 0`}</Text>
          <Text style={styles.textDetail}>{`Ket qua: ${data.result}`}</Text>
        </View>
      </View>
    );
  }
}
