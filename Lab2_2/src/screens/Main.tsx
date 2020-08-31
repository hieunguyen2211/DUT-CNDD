import React, {PureComponent} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Header, Input, Button} from 'react-native-elements';
import Card from '../components/Card';

const styles = StyleSheet.create({
  requireContainer: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputLabel: {
    fontSize: 24,
    marginTop: 4,
  },
  inputText: {
    fontSize: 24,
    marginBottom: -5,
  },
  button: {
    alignSelf: 'center',
    width: 100,
    marginBottom: 20,
  },
});

interface Props {
  navigation: any;
}
interface State {
  a: number;
  b: number;
  c: number;
  result: string;
  data: Array<any>;
}
export default class Main extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      result: '',
      data: [],
    };
  }

  handleSolve = () => {
    const {a, b, c, data} = this.state;
    let {result} = this.state;
    if (a !== 0 && b !== 0 && c !== 0) {
      const delta = Math.pow(b, 2) - 4 * a * c;
      if (delta < 0) {
        result = 'vo nghiem';
      }
      if (delta === 0) {
        const x = -b / (2 * a);
        result = x.toString();
      }
      if (delta > 0) {
        // lam tron 2 so hang thap phan
        const x1 = Math.round(((-b + Math.sqrt(delta)) / (2 * a)) * 100) / 100;
        const x2 = Math.round(((-b - Math.sqrt(delta)) / (2 * a)) * 100) / 100;
        result = `${x1} va ${x2}`;
      }
      this.setState({
        data: [...data, {a, b, c, result}],
      });
    }
  };

  render() {
    const {data} = this.state;
    const {navigation} = this.props;
    return (
      <ScrollView>
        <Header
          centerComponent={{
            text: 'Giai PT Bac 2',
            style: {color: '#fff', fontSize: 20},
          }}
          backgroundColor="#7308ff"
        />
        <View>
          <View style={styles.requireContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>a:</Text>
              <Input
                inputStyle={styles.inputText}
                onChangeText={(value) =>
                  this.setState({
                    a: Number(value),
                  })
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>b:</Text>
              <Input
                inputStyle={styles.inputText}
                onChangeText={(value) =>
                  this.setState({
                    b: Number(value),
                  })
                }
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>c:</Text>
              <Input
                inputStyle={styles.inputText}
                onChangeText={(value) =>
                  this.setState({
                    c: Number(value),
                  })
                }
              />
            </View>
          </View>
          <Button
            title="Solve"
            style={styles.button}
            onPress={this.handleSolve}
          />
          <View>
            {data.map((e, index) => (
              <Card
                key={index}
                a={e.a}
                b={e.b}
                c={e.c}
                result={e.result}
                onPress={() => {
                  navigation.navigate('Detail', {data: e});
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}
