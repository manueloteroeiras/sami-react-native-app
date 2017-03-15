import React from 'react'

import {
    View,
    Text,
    Dimensions,
    Image
} from 'react-native';

import graph from '../assets/images/graph.png'

const Event = (props) => {
    return(
        <View style={ styles.container }>
            <View style={ styles.box } >
                <Text style={ styles.text } > { props.eventName } </Text>
                <Text style={ styles.text } > { props.eventDayEnd } </Text>
            </View>

            { monetary(props) }

        </View>
    )
}

const monetary = (props) => {
    return(
        <View style={ styles.shelf } >
            <Image style={ styles.graph } source={ graph } resizeMode='contain' />
            <View style={{ flex: 2, justifyContent: 'center', alignItems:'center' }}>
                <Text style={ styles.percentaje }> % { props.eventPercentaje } </Text>
                <Text> ( Recaudado ) </Text>
            </View>
        </View>
    )
}


const styles = {
    container : {
        alignItems : 'center',
    },
    box: {
        padding: 25
    },
    text : {
        fontSize: 25,
        textAlign: 'center',
        color: '#263238',
        fontWeight: '500'
    },
    shelf: {
        paddingTop: 25,
        paddingBottom: 25,
        flexDirection: 'row',
        alignItems: 'center'
    },
    graph: {
        flex: 1,
        height: 120,
        marginLeft: 25
    },
    percentaje: {
        fontSize: 45,
        color: '#263238',
        fontWeight: '500'
    }
}

export default Event