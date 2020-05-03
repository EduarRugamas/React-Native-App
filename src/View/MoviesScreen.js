import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';


class listadoMovies extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      movies: [],
      url: 'https://raw.githubusercontent.com/EduarRugamas/moviejson/master/moviesJSON.json', 
    }
  }

  componentDidMount(){
    this.getMovies();
  }
  getMovies = () => {
      this.setState({ loading: true})

      fetch(this.state.url)
      .then(res => res.json())
      .then(res =>{
          this.setState({
            movies:  res.movies,
            loading: false
          })
      });
  };
  

  render(){
        if(this.state.loading){
          return(
              <View style={styles.container}>
                      <Text>
                        Descargando Peliculas
                      </Text>
              </View>   
          );
        }

        return(
        
              <View style={styles.container}>  
                <Text style={styles.text2}> Listado de Peliculas</Text>
              <FlatList style={styles.lista}
                  data={this.state.movies}  renderItem={ 
                    ({item}) =>  
                    <View style={styles.container2}>
                    <Text style={styles.text}> {item.name} </Text>
                    <TouchableOpacity onPress={ () => { Alert.alert('Descripcion', item.description )}  }>
                    <Image style={styles.images} source={{uri: item.url}} ></Image>
                    </TouchableOpacity>
                    </View>
                  }
               />
            </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#84a9ac',
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    margin:0
   
  },
  images:{
    flex:1,
    width: 200,
    height: 200,
    paddingTop: 5,
    marginBottom:40,
    resizeMode: "contain"
  },
  text:{
    fontSize: 20,
    paddingTop: 15,
    paddingBottom:5,
    color: '#fff',
  },
  container2:{
    flex:1,
    width: 350,
    height: 350,
    alignItems: 'center',
    alignContent: 'center',
    marginBottom:10,
    backgroundColor:'#084177',
    borderRadius:10,
    paddingBottom:25,
    
  },
  lista:{
    alignContent:'center',
    margin: 0,
    padding:0
    
  },
  text2:{
    fontSize: 30,
    paddingTop: 30,
    paddingBottom:20,
    color: '#fff',
  }
});

export default listadoMovies