import React, {PureComponent} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Header, Card, Image, Text, Input} from 'react-native-elements';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  container: {},
  textDetail: {
    marginTop: 10,
    fontSize: 20,
  },
  textDetailTitle: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textDetailInfor: {
    marginTop: 5,
    fontSize: 14,
  },
  cardContainer: {
    width: 180,
    marginLeft: 12,
    flex: 1,
  },
  image: {
    height: 150,
  },
  searchContainer: {
    marginTop: 20,
  },
});

interface Props {
  navigation: any;
}

interface State {
  data: Array<any>;
  showedData: Array<any>;
}

export default class Main extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      showedData: [],
    };
  }

  componentDidMount() {
    this.handleGetApi();
  }

  handleGetApi = () => {
    fetch('https://raw.githubusercontent.com/DevTides/DogsApi/master/dogs.json')
      .then((response) => response.json())
      .then((data) => this.setState({data: data, showedData: data}));
  };

  handleSearch = (value: any) => {
    const {data} = this.state;
    const newShowedData = data.filter((e: any) => e.name.includes(value));
    this.setState({showedData: newShowedData});
  };

  _renderItem = ({item}: {item: any}) => {
    const {navigation} = this.props;
    return (
      <Swiper
        style={styles.container}
        showsPagination={false}
        height={300}
        loop={false}>
        <Card containerStyle={styles.cardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {data: item})}>
            <Image
              style={styles.image}
              source={{uri: item.url}}
              PlaceholderContent={<ActivityIndicator />}
            />
            <Text style={styles.textDetail} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.textDetail} numberOfLines={1}>
              {item.bred_for}
            </Text>
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.cardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', {data: item})}>
            <Text style={styles.textDetailTitle} numberOfLines={1}>
              Origin
            </Text>
            <Text style={styles.textDetailInfor} numberOfLines={1}>
              {item.origin}
            </Text>
            <Text style={styles.textDetailTitle} numberOfLines={1}>
              Life span
            </Text>
            <Text style={styles.textDetailInfor} numberOfLines={1}>
              {item.life_span}
            </Text>
            <Text style={styles.textDetailTitle} numberOfLines={1}>
              Height
            </Text>
            <Text style={styles.textDetailInfor} numberOfLines={1}>
              {item.height.imperial}
            </Text>
            <Text style={styles.textDetailTitle} numberOfLines={1}>
              Weight
            </Text>
            <Text style={styles.textDetailInfor} numberOfLines={1}>
              {item.weight.imperial}
            </Text>
            <Text style={styles.textDetailTitle} numberOfLines={1}>
              Temperament
            </Text>
            <Text style={styles.textDetailInfor} numberOfLines={1}>
              {item.temperament}
            </Text>
          </TouchableOpacity>
        </Card>
      </Swiper>
    );
  };

  render() {
    const {showedData} = this.state;
    return (
      <View>
        <Header
          placement="left"
          centerComponent={{
            text: 'DogApp',
            style: {color: '#fff', fontSize: 20},
          }}
          backgroundColor="#7308ff"
        />

        <Input
          placeholder="Search"
          style={styles.searchContainer}
          onChangeText={this.handleSearch}
        />

        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            data={showedData}
            renderItem={this._renderItem} //method to render the data in the way you want using styling u need
            horizontal={false}
            numColumns={2}
          />
        </ScrollView>
      </View>
    );
  }
}
