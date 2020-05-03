import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


class HomeScreen extends Component {

    render(){
        return(

            <View style={styles.container}>
                <Text style={styles.text}>
                    Home Screen
                </Text>
                <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Menu') }>
                    <Text style={styles.textButton}>
                        Next
                    </Text>
                </TouchableOpacity>

            </View>

        );
    }

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:20
    },
    textButton:{
        fontSize:15
    },
    button:{
        alignItems:'center',
        justifyContent:'center'
    }
});


export default HomeScreen