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
  image: {
    width: 50,
    height: 50
  },
  flowRight: {
    alignItems: 'center',
    alignSelf: 'stretch'
  },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    component = this;
  }

  render() {
    return (    
      <View style={styles.flowRight}>              
        <Image source={require('image!logo')} style={styles.image}/>                    
      </View>
    );
  }

}

module.exports = Header;