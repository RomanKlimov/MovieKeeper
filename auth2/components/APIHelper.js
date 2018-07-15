import React, { Component } from "react";

export default class APIHelper extends Component{

    constructor(props, authToken){

        super(props);

        this.state = {
            apiURL: 'http://cb9f139b.ngrok.io'
        };

        if (!(authToken === '')) {
            this.token = authToken;
        }else{
            this.token = '';
        }

    }

    getAllMovies () {

        return fetch(this.state.apiURL + '/movies/', {

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                'x-access-token': this.token
            }

        })
            .then((response) => {
                return response.json();
            })
            .catch(error => {
                console.log("error occurred: " + error.message);
                throw error;
            });
    }

    createMovie (name, released_on) {

        let details = {

            'name': name,
            'released_on': released_on

        };
        let formBody = APIHelper.getFormBody(details);

        return fetch(this.state.apiURL + '/movies/', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': this.token
            },
            body: formBody

        })
            .then((response) => {
                return response.json();
            })
            .catch(error => {
                console.log("error occurred: " + error.message);
                throw error;
            });
    }

    login (email, password) {

        let details = {

            'email': email,
            'password': password

        };
        let formBody = APIHelper.getFormBody(details);

        return fetch(this.state.apiURL + '/users/authenticate', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody

        })
            .then((response) => {
                return response.json();
            })
            .catch(error => {
                console.log("error occurred: " + error.message);
                throw error;
            });
    }

    register (name, email, password) {

        let details = {

            'name': name,
            'email': email,
            'password': password

        };
        let formBody = APIHelper.getFormBody(details);

        return fetch(this.state.apiURL + '/users/register', {

            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody

        })
            .then((response) => {
                return response.json();
            })
            .catch(error => {
                console.log("error occurred: " + error.message);
                throw error;
            });
    }

    deleteMovie (name) {

        let details = {

            'name': name

        };
        let formBody = APIHelper.getFormBody(details);

        return fetch(this.state.apiURL + '/movies/' + name, {

            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': this.token
            },
            body: formBody

        })
            .then((response) => {
                return response.json();
            })
            .catch(error => {
                console.log("error occurred: " + error.message);
                throw error;
            });
    }

    static getFormBody(details){

        return Object.keys(details)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key])).join('&');

    }

}