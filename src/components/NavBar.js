import React from 'react'

import {
    Text,
    View,
    Image
} from 'react-native';

const expanded = (props) =>{
    return(
        <View style={ styles.header } >
            <Image source={ props.logo } resizeMode={ 'contain' } style={ styles.logo } />
            <View style={ styles.headerText }>
                <Text style={ styles.title } >{ props.customName.toUpperCase() }</Text>
                <Text>{ props.schoolName.toUpperCase() }</Text>
            </View>
        </View>
    )
}

const flat = (props) =>{
    return(
        <View style={{ alignItems: 'center' }}>
            <Text style={ styles.title } >{ props.customName.toUpperCase() }</Text>
        </View>
    )
}

const Navbar = (props) => {
    return(
        <View style={ styles.Navbar } >
            { (props.expanded) ? expanded(props) : flat(props) }  
        </View>
    )
}

const styles = {
    Navbar: {
        minHeight: 20,
        borderWidth: 2,
        padding: 5,
        borderColor: '#cecece',
        justifyContent: 'center'
        
    },
    logo: {
        height: 40,
        width: 40,
        marginRight: 35,
        flex: 1
    },
    headerText: {
        flex: 4
    },
    header: {
        flexDirection: 'row'
    },
    title : {
        fontSize: 22
    }
}

export default Navbar