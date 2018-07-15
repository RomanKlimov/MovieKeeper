/**
 * Created by Roman on 15.07.2018.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Alert} from "react-native";
import {FormInput, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome'
import APIHelper from "../components/APIHelper";

export default class MovieCreateScreen extends Component {

    static navigationOptions = {
        title: 'We need just a name..',
        headerStyle: {
            backgroundColor: '#3498db',
        },
        headerTitleStyle: { color: '#FFF', opacity: 0.9 }
    };

    constructor(props) {

        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');

        this.state = {
            name: '',
            token: apiToken,
            released_on: ''
        }
    }

    render() {

        return (

            <View style={styles.container}>

                <FormInput

                    placeholder='name'
                    inputStyle={{color: '#FFF'}}
                    onChangeText={(value) => this.setState({name: value})}
                    value={this.state.name}

                />

                <Button

                    title='Delete Movie'
                    buttonStyle={styles.button}
                    backgroundColor={'#2980b9'}
                    onPress={this.handleMovieDelete.bind(this)}

                />

            </View>

        );

    }

    handleMovieDelete = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.deleteMovie(this.state.name)
            .then(responseJSON => {

                if(responseJSON.status === "success"){
                    this.props.navigation.push('ShowActions', {token: this.state.token});
                }else{
                    this.props.navigation.push('deleteMovie', {token: this.state.token});
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