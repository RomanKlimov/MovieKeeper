import React, {Component} from 'react';
import {View, StyleSheet, Alert, ListView} from "react-native";
import {List, ListItem, Button, Text} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class ArtistsListScreen extends Component {

    static navigationOptions = {
        title: 'Please, don\'t hurry',
        headerStyle: {
            backgroundColor: '#3498db'
        },
        headerTitleStyle: { color: '#FFF', opacity: 0.9 }
    };

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        const apiToken = navigation.getParam('token', '');

        this.state = {
            token: apiToken,
            moviesList: []
        };
    }

    render() {

        return (

            <View style={styles.container}>

                <Button
                    title = 'Show my movies'
                    buttonStyle={styles.button_style}
                    backgroundColor={'#2980b9'}
                    onPress={this.handleList.bind(this)}

                >
                    <Text>Show Movies</Text>
                </Button>

                <Button
                    title = 'Add new movie'
                    buttonStyle={styles.button_style}
                    backgroundColor={'#2980b9'}
                    onPress={
                        () => this.props.navigation.push('AddMovie', {

                                token: this.state.token

                            }
                        )
                    }

                >
                    <Text>Go to creation page</Text>
                </Button>

                <Button
                    title = 'Delete movie'
                    buttonStyle={styles.button_style}
                    backgroundColor={'#2980b9'}
                    onPress={
                        () => this.props.navigation.push('DeleteMovie', {

                                token: this.state.token

                            }
                        )
                    }

                >
                </Button>

            </View>

        );


    }

    handleList = () => {

        const api = new APIHelper(this.props, this.state.token);

        api.getAllMovies()
            .then(responseJSON => {

                const data = responseJSON.data.movies.map(item => ({
                    name: item.name,
                    released_on: item.released_on
                }));

                this.setState({moviesList: data})
                this.props.navigation.navigate('MyMovies', {token: responseJSON.data.token, moviesList: this.state.moviesList})

            })
            .catch(error => {
                Alert.alert("Error", error.message);
                throw new Error(error);
            });

    };

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },

    button_style: {
        width: 200,
        // marginBottom:'50%',
        // marginTop:,
        alignItems: 'center',
        justifyContent: 'center',
        // alignSelf:'center',
        marginRight:'auto',
        marginLeft:'auto'
    },

    list_style: {
        marginBottom: 20,
        width: '100%'
    }

});