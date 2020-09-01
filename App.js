import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, KeyboardAvoidingView } from 'react-native';

import InputField from './components/InputField'
import InputButton from './components/InputButton'
import Heading from './components/Heading'
import ErrorMessage from './components/ErrorMessage'

import { Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
    fullname: Yup.string()
        .label('Fullname')
        .required('Please enter your name'),
    email: Yup.string()
        .label('Email')
        .email('Enter a valid email')
        .required('Please enter a registered email'),
    password: Yup.string()
        .label('Password')
        .required()
        .min(4, 'Password must have at least 4 characters')
})

export default function App({props}) {
    return (
        <KeyboardAvoidingView style={styles.avoidKeyboard} behavior="padding" enabled keyboardVerticalOffset={85}>
        <View style={styles.container}>
            <Heading h2 title="Signup Form" />

            <View style={styles.form}>

                <Formik
                    initialValues={{ 
                        fullname: '',
                        email: '',
                        password: ''
                    }}
                    onSubmit={(values) => {
                        // Use API to handle validated data
                        alert( JSON.stringify(values) );
                    }}
                    validationSchema={validationSchema}>
                    {({handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur}) => (
                        <>
                            <InputField 
                                name='fullname'
                                label='Full Name'
                                value={values.fullname}
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                                placeholder='Enter your name'
                                returnKeyType='done'
                                iconName='ios-person'
                                iconColor='#533263'
                            />
                            <ErrorMessage errorValue={touched.fullname && errors.fullname} />

                            <InputField 
                                name='email'
                                label='Email Address'
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                placeholder='Enter email'
                                keyboardType='email-address'
                                returnKeyType='done'
                                autoCapitalize='none'
                                iconName='ios-mail'
                                iconColor='#533263'
                            />
                            <ErrorMessage errorValue={touched.email && errors.email} />

                            <InputField 
                                name='password'
                                label='Password'
                                value={values.password}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                placeholder='Enter password'
                                returnKeyType='done'
                                autoCapitalize='none'
                                secureTextEntry={true}
                                iconName='ios-lock'
                                iconColor='#533263'
                            />
                            <ErrorMessage errorValue={touched.password && errors.password} />

                            <InputButton 
                                onPress={handleSubmit}
                                disabled={! isValid || isSubmitting}
                                buttonType='solid'
                                title='SIGN UP'
                                buttonColor='#533263'
                                loading={ isSubmitting }
                            />
                        </>
                    )}
                </Formik>
            </View>
            <StatusBar style="auto" />
        </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFBFE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        color: '#533263', 
        fontWeight: 'bold'
    },
    form: {
        width: '90%',
        marginTop: 50
    },

    avoidKeyboard: {
        flex: 1, 
        flexDirection: 'column', 
        justifyContent: 'center',
        height:'100%'
    }
});
