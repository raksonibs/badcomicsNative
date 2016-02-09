var React = require('react-native');
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
      var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.id !== r2.id});
      this.state = {
        dataSource: dataSource.cloneWithRows(this.props.comics)
      };
    }

    rowPressed(comicId) {
      var comic = this.props.comics.filter(comic => comic.ruby_id === comicId)[0];
      
      this.props.navigator.push({
        title: "comic",
        component: ComicShow,
        passProps: {comic: comic}
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
            
          </View>
        </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}
        horizontal={true}
        style={styles.fullView}
        />
    );
  }

}

module.exports = ComicList;