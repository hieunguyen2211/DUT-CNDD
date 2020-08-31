import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Button} from 'react-native-elements';
import Card from '../components/Card';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 750,
  },
  btnAdd: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  btnAddText: {
    fontSize: 30,
  },
});

interface Props {
  navigation: any;
}
interface State {
  data: Array<number>;
  value: number;
}
export default class Main extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      value: 1,
    };
  }
  render() {
    const {data, value} = this.state;
    const {navigation} = this.props;
    return (
      <View>
        <Header
          placement="left"
          centerComponent={{
            text: 'HelloWorld17',
            style: {color: '#fff', fontSize: 20},
          }}
          backgroundColor="#7308ff"
        />
        <View style={styles.container}>
          <View>
            {data.map((e: number) => (
              <Card
                value={e}
                key={e}
                onPress={() => {
                  navigation.navigate('Detail', {value: e});
                }}
                onFocus={() => {
                  const index = data.indexOf(e);
                  this.setState({
                    data: [...data.slice(0, index), ...data.slice(index + 1)],
                  });
                }}
              />
            ))}
          </View>
          <View>
            <Button
              title="+"
              buttonStyle={styles.btnAdd}
              titleStyle={styles.btnAddText}
              onPress={() => {
                this.setState({
                  data: [...data, value],
                  value: value + 1,
                });
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
