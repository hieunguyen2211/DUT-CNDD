import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import {Header, Input, Button} from 'react-native-elements';
import Communications from 'react-native-communications';

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  textDetail: {
    fontSize: 20,
    marginRight: 10,
  },
  input: {
    marginTop: 22,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  button: {
    marginLeft: 20,
    width: 100,
  },
});

interface Props {
  navigation: any;
  route: any;
}

interface State {
  name: string;
  phoneNumber: string;
}

export default class Detail extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      phoneNumber: '',
    };
  }

  componentDidMount() {
    const {id} = this.props.route.params;
    fetch(`http://localhost:8080/api/users/${id}`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: data.name,
          phoneNumber: data.phoneNumber,
        }),
      );
  }

  handleBackScreen = () => {
    const {navigation} = this.props;
    return navigation.navigate('Home');
  };

  handleUpdate = () => {
    const {name, phoneNumber} = this.state;
    const {id} = this.props.route.params;
    fetch(`http://localhost:8080/api/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, phoneNumber}),
    });
  };

  render() {
    const {name, phoneNumber} = this.state;
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
          <View style={styles.infoContainer}>
            <Text style={styles.textDetail}>Name</Text>
            <Input
              value={name}
              onChangeText={(value) => this.setState({name: value})}
              style={styles.input}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.textDetail}>Phone</Text>
            <Input
              value={phoneNumber}
              onChangeText={(value) => this.setState({phoneNumber: value})}
              style={styles.input}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Call"
              style={styles.button}
              onPress={() => Linking.openURL(`tel://${phoneNumber}`)}
            />
            <Button
              title="SMS"
              style={styles.button}
              onPress={() => Communications.textWithoutEncoding(phoneNumber)}
            />
            <Button
              title="Save"
              style={styles.button}
              onPress={this.handleUpdate}
            />
          </View>
        </View>
      </View>
    );
  }
}
