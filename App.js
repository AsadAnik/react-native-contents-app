import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Screens..
import SearchScreen from './src/screens/SearchScreen';
import DefailsScreen from './src/screens/DetailsScreen';


// The Stack Navigator..
const Stack = createStackNavigator();


// App Component...
const App = () => {
  return (
    <NavigationContainer>
         <Stack.Navigator>
            {/* ------ Screen of SearchScreen ----- */}
              <Stack.Screen 
                  name="Search"
                  component={ SearchScreen }
                  options={{ title: 'Search Screen' }}       
              />

            {/* ------ Screen of DetailsScreen ----- */}
              <Stack.Screen
                  name="Details"
                  component={ DefailsScreen }
                  options={{ title: 'Details Screen'}}
              />
          </Stack.Navigator>
    </NavigationContainer>
  );

}

export default App;