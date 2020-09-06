import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Input, Text} from 'react-native-elements';
import data from '../data';
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
  searchContainer: {
    marginTop: 20,
  },
});

interface State {
  showedData: Array<any>;
}
export default class Main extends PureComponent<any, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showedData: data,
    };
  }

  handleSearch = (value: any) => {
    let newData = [...data];
    newData = newData.filter((e) => e.name.includes(value.toString()));
    this.setState({
      showedData: newData,
    });
  };

  render() {
    const {showedData} = this.state;
    return (
      <View>
        <Header
          placement="left"
          centerComponent={{
            text: 'ContactApp17',
            style: {color: '#fff', fontSize: 20},
          }}
          backgroundColor="#7308ff"
        />
        {/* <Input
          placeholder="Search"
          style={styles.searchContainer}
          onChangeText={this.handleSearch}
        />
        <View style={styles.container}>
          <View>
            {showedData.map((e: any) => (
              <Card key={e.id} name={e.name} phoneNumber={e.phoneNumber} />
            ))}
          </View>
        </View> */}
        <Text style={{alignSelf: 'center', marginTop: 100}}>Hello</Text>
      </View>
    );
  }
}
