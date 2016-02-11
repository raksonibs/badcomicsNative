var React = require('react-native');
var Swiper = require('react-native-swiper')
import ComicShow from './Comic'

var {
  ScrollView,
  StyleSheet,
  View,
  ScrollView,
  NavigatorIOS,
  ListView,
  TouchableHighlight,
  Image,
  Text
} = React;

let comics = [];
let component;

var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderColor: '#dddddd',
    borderWidth: 2
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#7e7e7e'
  },
  title: {
    fontSize: 20,
    color: '#7e7e7e'
  },
  rowContainer: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    backgroundColor: '#f6f6f6',
  },
  fullView: {
    backgroundColor: '#f6f6f6',
    flexDirection: 'column'
  }
});

class ComicSlide extends React.Component {
  constructor(props) {
    super(props);
    component = this;
    let count = 0;
    
    this.state = {
      comics: this.props.comics
    }
  }

  render() {
    return (    
      <View style={styles.slide1}>              
        <Image style={styles.thumb} source={{ uri: this.props.comic.comic_url }} />
        <Text style={styles.text}>{this.props.comic.title}</Text>              
      </View>
    );
  }

}

module.exports = ComicSlide;