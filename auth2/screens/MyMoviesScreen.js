/**
 * Created by Roman on 15.07.2018.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Alert, ListView} from "react-native";
import {List, ListItem, Button, Text} from 'react-native-elements';
import APIHelper from "../components/APIHelper";

export default class ArtistsListScreen extends Component {

    static navigationOptions = {
        title: 'Your movies',
        headerStyle: {
            backgroundColor: '#3498db',
        },
        headerTitleStyle: { color: '#FFF', opacity: 0.9 }
    };

    constructor(props) {
        super(props);

        const {navigation} = this.props;
        //передаем пустую строку, в случае если токена нет
        const apiToken = navigation.getParam('token', '');
        const moviesList = navigation.getParam('moviesList', '');

        this.state = {
            token: apiToken,
            moviesList: moviesList
        };
    }

    render() {

        return (

            <View style={styles.container}>

                <List containerStyle={styles.list_style}>

                    {

                        this.state.moviesList.map((item, i) => (

                            <ListItem
                                roundAvatar
                                key={i}
                                title={item.name}
                                subtitle={`${item.released_on}`}
                                avatar={{uri: "https://cmkt-image-prd.global.ssl.fastly.net/0.1.0/ps/1104685/1160/772/m1/fpnw/wm0/movie-spotlight-flat-icon-01-.jpg?1458574010&s=2a263febbd07b4888e44af5d04ed4c7c"}}
                            />

                        ))

                    }

                </List>

            </View>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },

    button_style: {
        width: 200,
        margin: 15
    },

    list_style: {
        marginBottom: 20,
        width: '100%'
    }

});
