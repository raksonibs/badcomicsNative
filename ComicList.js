var React = require('react-native');
var Swiper = require('react-native-swiper')
import ComicShow from './Comic'
import ComicSlide from './ComicSlide'

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

class ComicList extends React.Component {
    constructor(props) {
      super(props);
      component = this;
      this.state = {
        comics: this.props.comics
      }
    }

    comicPressed(comicId) {
      var comic = this.props.comics.filter(comic => comic.ruby_id === comicId)[0];
      
      this.props.navigator.push({
        title: "comic",
        component: ComicShow,
        passProps: {comic: comic}
      });
    }

    renderComic(comicData) {

      return (
        <TouchableHighlight onPress={() => this.comicPressed(comicData.ruby_id)}
          underlayColor='#dddddd'>
          <View style={styles.slide1}>
            <Image style={styles.thumb} source={{ uri: comicData.comic_url }} />
            <Text style={styles.text}>{comicData.title}</Text>
          </View>
        </TouchableHighlight>
    );
  }

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        {  
          this.props.comics.map(function(comic, index) {          
            return <ComicSlide key={comic.ruby_id} comic={comic} color={index} />
          })
        }
      </Swiper>
    );
  }

}

module.exports = ComicList;