import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const InputField = ({ iconName, iconColor, name, placeholder, label, value, ...rest }) => (
    <View style={styles.container}>
        <Input
            {...rest}
            leftIcon={<Ionicons name={iconName} size={28} color={iconColor} />}
            leftIconContainerStyle={styles.iconStyle}
            placeholderTextColor='grey'
            name={name}
            value={value}
            label={label}
            placeholder={placeholder}
            style={styles.input}
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        marginBottom: 0,
        width: '100%'
    },
    iconStyle: {
        marginRight: 10
    }
})
  
export default InputField;