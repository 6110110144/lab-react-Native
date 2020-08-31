import React from 'react'
import { Text, View, StyleSheet,ImageBackground } from 'react-native'

export default function Forecast(props){
    return(
        <View>
            <Text style={styles.Text}>{props.main}</Text>
            <Text style={styles.Text}>{props.description}</Text>
            <Text style={styles.Text}>{props.temp}</Text>
            <Text style={styles.Text}>°C</Text>
        </View>
        
    )
}
const styles= StyleSheet.create({
    Text:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        fontSize:25,
        color:'#fff',
    }
});