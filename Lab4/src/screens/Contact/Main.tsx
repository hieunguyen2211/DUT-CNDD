import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';
import {Header, Input, Button} from 'react-native-elements';
import Card from '../../components/Card';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 740,
  },
  btnAdd: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 200,
  },
  searchContainer: {
    marginTop: 20,
  },
  createContainer: {
    width: 300,
    paddingVertical: 20,
  },
  buttonContainer: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  button: {
    width: 100,
  },
  textDetail: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

interface Props {
  navigation: any;
}

interface State {
  showedData: Array<any>;
}

export default class Main extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showedData: [],
    };
  }

  componentDidMount() {
    this.handleGetApi();
    this.props.navigation.addListener('focus', () => {
      this.handleGetApi();
    });
  }

  handleGetApi = () => {
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
    })
      .then((response) => response.json())
      .then((data) => this.setState({showedData: data}));
  };

  handleSearch = (value: any) => {
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: value,
      }),
    })
      .then((response) => response.json())
      .then((data) => this.setState({showedData: data}));
  };

  render() {
    const {showedData} = this.state;
    const {navigation} = this.props;
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
        <Input
          placeholder="Search"
          style={styles.searchContainer}
          onChangeText={this.handleSearch}
        />
        <View style={styles.container}>
          <View>
            {showedData &&
              showedData.map((e: any) => (
                <Card
                  key={e.id}
                  name={e.name}
                  phoneNumber={e.phoneNumber}
                  onPress={() => navigation.navigate('Detail', {id: e.id})}
                />
              ))}
          </View>
          <Button
            title="Add"
            style={styles.btnAdd}
            onPress={() => navigation.navigate('Create')}
          />
        </View>
      </View>
    );
  }
}
