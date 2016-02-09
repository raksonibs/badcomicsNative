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
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

class ComicSlide extends React.Component {
  constructor(props) {
    super(props);
    component = this;
  }

  render() {
    return (    
      <View style={styles.wrapper}>              
        <Text>badcomics logo</Text>
        <Text style={styles.text}>General info about Bad Comics</Text>              
      </View>
    );
  }

}

module.exports = ComicSlide;