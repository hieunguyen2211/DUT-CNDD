import React, {PureComponent} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {Header, Image} from 'react-native-elements';

const styles = StyleSheet.create({
  content: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: '500',
    marginTop: 20,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: '#999999',
    marginTop: 10,
    marginRight: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 10,
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
          <Image
            source={{uri: data.url}}
            style={styles.image}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.infoContainer}>
            <View>
              <Text style={styles.title}>Breed for:</Text>
              <Text style={styles.title}>Breed group:</Text>
              <Text style={styles.title}>Life span:</Text>
              <Text style={styles.title}>Origin:</Text>
              <Text style={styles.title}>Temperament:</Text>
              <Text style={styles.title}>Height:</Text>
              <Text style={styles.title}>Weight:</Text>
            </View>
            <View>
              <Text style={styles.info} numberOfLines={1}>
                {data.bred_for}
              </Text>
              <Text style={styles.info} numberOfLines={1}>
                {data.breed_group}
              </Text>
              <Text style={styles.info} numberOfLines={1}>
                {data.life_span}
              </Text>
              <Text style={styles.info} numberOfLines={1}>
                {data.origin}
              </Text>
              <Text style={styles.info} numberOfLines={1}>
                {data.temperament}
              </Text>
              <Text style={styles.info} numberOfLines={1}>
                {data.height.imperial}
              </Text>
              <Text style={styles.info} numberOfLines={1}>
                {data.weight.imperial}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
