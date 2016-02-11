var React = require('react-native');
import ComicShow from './Comic'
import ComicSlide from './ComicSlide'
import ComicList from './ComicList'

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
  thumb: {
    width: 300,
    height: 300,
    borderColor: '#dddddd',
    borderWidth: 2
  },
  textContainer: {
    flex: 1
  },
  date: {
    paddingLeft: 75,
    paddingBottom: 10
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
    flexDirection: 'row',
    backgroundColor: '#f6f6f6',
  },
  fullView: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  }
});

class ComicListGrid extends React.Component {
    constructor(props) {
      super(props);
      component = this;
      var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
      this.state = {
        dataSource: dataSource.cloneWithRows(this.props.comics)
      };
    }

    reorder(index, comics) {
      let temp;
      temp = comics[0];
      comics[0] = comics[index];
      comics[index] = temp;
      return comics;
    }

    rowPressed(comicId) {
      var comicSelected = this.props.comics.filter(comic => comic.ruby_id === comicId)[0];
      this.props.comics.map((comic, index) => {
        if (comic.ruby_id === comicSelected.ruby_id) {
          count = index 
        }
      })

      let temp;
      temp = this.props.comics[0];
      this.props.comics[0] = this.props.comics[count];
      this.props.comics[count] = temp;

      this.props.navigator.push({
        title: "Comic",
        component: ComicList,
        passProps: {comic: comicSelected, count: count, comics: this.props.comics}
      });
    }

    renderRow(rowData, sectionID, rowID) {

      return (
        <TouchableHighlight onPress={() => this.rowPressed(rowData.ruby_id)}
          underlayColor='#dddddd'>
          <View>
            <View style={styles.rowContainer}>
              <Image style={styles.thumb} source={{ uri: rowData.comic_url }} />
            </View>
            <Text style={styles.date}>{rowData.created_at}</Text>             
          </View>
        </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        style={styles.fullView}
      />
    );
  }

}

module.exports = ComicListGrid;