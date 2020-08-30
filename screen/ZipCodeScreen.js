import React from 'react'
import { FlatList, View, Text } from 'react-native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   
const ZipItem = (place, code) => {
    <View>
        <Text>{props.place}</Text>
        <Text>{code}</Text>
    </View>

}
export default function ZipCodeScreen(){
    return(
        <FlatList
            data ={availableZipItems}
            keyExtractor = {}
            renderItem = {({item}) => <ZipItem {...item}/>}
        />
    )
}