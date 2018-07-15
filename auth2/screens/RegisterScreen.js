import React, { Component } from 'react';
import {View, StyleSheet, Alert, Image} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class RegisterScreen extends Component {

    static navigationOptions = {
        title: 'Sign Up page',
        headerStyle: {
            backgroundColor: '#3498db',
        },
        headerTitleStyle: { color: '#FFF', opacity: 0.9 }
    };

    constructor(props) {

        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''
        }

    }

    render() {

        return (


            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/video-camera.png')}
                    />
                </View>

                <FormInput

                    placeholder='name'
                    onChangeText={(value) => this.setState({name: value})}
                    value={this.state.name}
                    inputStyle={{color: '#FFF'}}

                />

                <FormInput

                    placeholder='Email'
                    onChangeText={(value) => this.setState({email: value})}
                    value={this.state.email}
                    inputStyle={{color: '#FFF'}}

                />

                <FormInput

                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={(value) => this.setState({password: value})}
                    value={this.state.password}
                    inputStyle={{color: '#FFF'}}

                />

                <Button

                    title='Sign up'
                    buttonStyle={styles.button}
                    backgroundColor={'#2980b9'}
                    onPress={this.handleRegister.bind(this)}

                />

            </View>

        );

    }

    handleRegister = () => {

        const api = new APIHelper(this.props, '');
        api.register(this.state.name, this.state.email, this.state.password)
            .then(responseJSON => {

                if (responseJSON.status === "success") {
                    this.props.navigation.navigate('WelcomePage');
                } else {
                    this.props.navigation.navigate('Registration');
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
    button: {
        width: 200,
        margin: 15,
        marginTop:40,
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
    }

});