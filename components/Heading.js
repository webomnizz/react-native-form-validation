import React from 'react'
import { Text } from 'react-native-elements'
import { StyleSheet } from 'react-native'

const Heading = ({ title, ...size }) => (
    <Text {...size} style={styles.heading}>{ title }</Text>
)

const styles = StyleSheet.create({
    heading: {
        color: '#533263', 
        fontWeight: 'bold'
    }
});

export default Heading
