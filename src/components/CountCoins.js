import React from 'react'

import {
    View,
    Text,
    Image
} from 'react-native';

import coins from '../assets/images/coins.png';

const CountCoins = (props) => {
    return(
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
            <Image source={ coins } resizeMode={ 'contain' } style={{ height: 25, width: 25 }} />
            <Text style={{ fontSize: 18 }}> { props.coins } </Text>
        </View>
    )
}

export default CountCoins