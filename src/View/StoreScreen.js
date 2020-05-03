import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

class StoreScreen extends Component{

    render(){
        return(

            <View style={styles.container}>

                <Text style={styles.text}>
                    Store Screen
                </Text>
               

            </View>

        )
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
    }
})


export default StoreScreen