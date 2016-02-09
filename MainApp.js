'use strict';
 
var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component
} = React;

var REQUEST_URL = 'http://localhost:3000/api/v1/comics';
import ComicList from './ComicList'
import ComicListGrid from './ComicListGrid'
let comics = []
class MainApp extends Component {
  constructor(props) {    
    super(props);
    this.state = {
      isLoading: true,
      message: '',
      comics: []
    }
  }

  componentDidMount() {
    this._executeQuery(); 
  }

  _handleResponse(response) {
    if (response.comics.length > 0) {
      comics = response.comics;
      this.setState({comics: response.comics})
      this.props.navigator.push({
        title: 'comics',
        component: ComicList,
        passProps: {comics: response.comics}
      });
    } else {
      this.setState({ message: 'Not recognized; please try again.'});
    }
    this.setState({ isLoading: false , message: '' });
  }

  _executeQuery() {    
    console.log(REQUEST_URL);
    fetch(REQUEST_URL)
    .then(response => response.json())
    .then(responseData => this._handleResponse(responseData))
    .catch(error => {  
      console.log("error")
      this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
      });
    })
  }

  onEventPressed() {
    this.setState({
      isLoading: true,
    })
    this._executeQuery()
  }
   
  render() {
    var spinner = this.state.isLoading ?
      ( <ActivityIndicatorIOS
          hidden='true'
          size='large'/> ) :
      ( <ComicListGrid comics={this.state.comics} /> );
    return (
      <View style={styles.container}>
        {spinner}
        <Text style={styles.description}>{this.state.message}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#7e7e7e'
  },
  text: {
    color: '#7e7e7e'
  },
  header: {
    fontSize: 25,
    margin: 5,
    color: '#7e7e7e'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    flex: 1
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  image: {
    width: 217,
    height: 138
  },
  buttonText: {
    fontSize: 18,
    color: '#7e7e7e',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = MainApp;
