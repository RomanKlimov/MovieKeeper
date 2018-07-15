/**
 * Created by Roman on 11.07.2018.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import APIHelper from "../components/APIHelper";

export default class MovieCreateScreen extends Component{

    static navigationOptions = {
        title: 'Only signature..',
        headerStyle: {
            backgroundColor: '#3498db',
        },
        headerTitleStyle: { color: '#FFF', opacity: 0.9 }
    };

    constructor(props){

        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');

        this.state = {
            name: '',
            token: apiToken,
            released_on: ''
        }
    }

    render(){

        return(

            <View style={styles.container}>

                <FormInput

                    placeholder='name'
                    inputStyle={{color: '#FFF'}}
                    onChangeText = {(value) => this.setState({name: value})}
                    value = {this.state.name}

                />

                <FormInput

                    placeholder='Released on'
                    inputStyle={{color: '#FFF'}}
                    onChangeText = {(value) => this.setState({released_on: value})}
                    value = {this.state.released_on}

                />

                <Button

                    title='Add movie'
                    buttonStyle={styles.button}
                    backgroundColor={'#2980b9'}
                    onPress = {this.handleMovieCreate.bind(this)}

                />

            </View>

        );

    }

    handleMovieCreate = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.createMovie(this.state.name, this.state.released_on)
            .then(responseJSON => {

                if(responseJSON.status === "success"){
                    this.props.navigation.push('ShowActions', {token: this.state.token});
                }else{
                    this.props.navigation.push('AddMovie', {token: this.state.token});
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
        marginTop:40,
        justifyContent: 'center',
        marginRight:'auto',
        marginLeft:'auto'

    }

});