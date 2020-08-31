import React from 'react'
import { FlatList, View, Text, StyleSheet, StatusBar, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { color } from 'react-native-reanimated'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   
const ZipItem = ({place, code,navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', {zipCode: code})}>
        <View style={styles.zipItem}>
            <Text style={styles.Text}>{place}</Text>
            <Text style={styles.Text}>{code}</Text>
        </View>
    </TouchableHighlight>
    
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return(
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <FlatList
                    data ={availableZipItems}
                    keyExtractor = {item => item.code}
                    renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
                />
                <StatusBar style="auto" />
            </ImageBackground>
            
        </View>
    );
}
const styles = StyleSheet.create({
    zipItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        color:'#fff',
        
    },
    zipPlace: {
        flex: 1,
    },
    zipCode: {
        flex: 1,
    },
    Text:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        fontSize:25,
        color:'#fff',
    },
    backdrop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#fff',
        width: '100%',
        height: '100%'
    }
    
})
