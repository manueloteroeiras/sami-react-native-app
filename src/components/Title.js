import React from 'react';


import {
    Text
} from 'react-native';

const Title = (props) => {
    return (
        <Text 
            style={{ ...styles.title, ...{ fontSize: (props.size) ? props.size : 34 }, ...props.style }}> 
            { props.text } 
        </Text>
    )
}

const styles = {
    title: {
        margin: 10,
        fontFamily: 'Futura'
    }
}


export default Title