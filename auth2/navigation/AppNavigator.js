import { createStackNavigator} from 'react-navigation';
import WelcomeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ActionScreen from "../screens/ActionScreen";
import MovieCreateScreen from "../screens/MovieCreateScreen";
import MyMoviesScreen from "../screens/MyMoviesScreen";
import MovieDeleteScreen from "../screens/MovieDeleteScreen";

exports.RootStack = createStackNavigator(
    {
        WelcomePage: {screen: WelcomeScreen},
        Registration: {screen: RegisterScreen},
        ShowActions: {screen: ActionScreen},
        AddMovie: {screen: MovieCreateScreen},
        MyMovies: {screen: MyMoviesScreen},
        DeleteMovie: {screen: MovieDeleteScreen}
    },
    {
        initialRouteName: 'WelcomePage'
    }
);