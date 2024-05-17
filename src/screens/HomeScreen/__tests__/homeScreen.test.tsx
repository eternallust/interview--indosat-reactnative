import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

describe('HomeScreen', () => {
  it('renders correctly', () => {
    const Stack = createNativeStackNavigator();
    const {toJSON} = render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
