var React = require('react-native');

var {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Text,
  TouchableElement,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView
} = React;

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1,
    backgroundColor: '#BA55D3',
  },
  heading: {
    backgroundColor: '#BA55D3',
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD'
  },
  image: {
    width: 420,
    height: 300
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: 'white'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: 'white'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: 'white'
  }
});

let screenHeight = Dimensions.get('window').height;

class Comic extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var comic = this.props.comic;
    
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.image} 
            source={{uri: comic.comic_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{comic.title}</Text>
          <Text style={styles.title}>{comic.created_at}</Text>
          <View style={styles.separator}/>
        </View>
      </ScrollView>
    );
  }
}

module.exports = Comic;