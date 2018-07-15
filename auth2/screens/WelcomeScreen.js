import React, {Component} from 'react';
import {View, StyleSheet, Alert, Image, Text} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class WelcomeScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {

        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/popcorn.png')}
                    />
                    <Text style={styles.title}>Don't worry to forget</Text>
                </View>

                <FormInput
                    placeholder='Email'
                    onChangeText={(value) => this.setState({email: value})}
                    value = {this.state.email}
                    inputStyle={{color: '#FFF'}}
               />

                <FormInput

                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(value) => this.setState({password: value})}
                    value = {this.state.password}
                    inputStyle={{color: '#FFF'}}

                />

                <Button

                    title = 'Sign in'
                    buttonStyle={styles.button1}
                    backgroundColor={'#2980b9'}

                    onPress = {this.handleLogin.bind(this)}

                />

                <Button

                    title = 'Sign up'
                    buttonStyle={styles.button2}
                    backgroundColor={'#2980b9'}
                    onPress = {
                        () => this.props.navigation.navigate('Registration')
                    }

                />

            </View>

        );

    }

    handleLogin = () => {

        const api = new APIHelper(this.props, '');
        console.log(this.state.email);
        console.log(this.state.password);

        api.login(this.state.email, this.state.password)
            .then(responseJSON => {

                if(!(responseJSON.data.token === '')){

                    this.props.navigation.navigate('ShowActions', {token: responseJSON.data.token})

                }

            })
            .catch(error => Alert.alert("Error", error.message));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },

    button1: {
        width: 200,
        marginTop:40,
        justifyContent: 'center',
        marginRight:'auto',
        marginLeft:'auto'

    },
    button2: {
        width: 200,
        marginBottom:20,
        marginTop:10,
        justifyContent: 'center',
        marginRight:'auto',
        marginLeft:'auto'

    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
        opacity: 0.9
    }

});