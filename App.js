import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Card';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Historias:[
        {
          "Autor":'Kevin',
          "Titulo":'La historia de mi vida'
        },
        {
          "Autor":'Andres',
          "Titulo":'La historia de andres'
        }
      ]
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Card></Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:30,
    alignItems:'center'
  }
});
