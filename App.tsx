import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from './pages/Dashboard';
import { Splash } from './pages/Splash';
import { SignUp } from './pages/SignUp';
import { OnboardingOne } from './pages/OnboardingOne';
import Bot from './pages/Bot';
import { Community } from './pages/Community';

type RootStackParamList = {
  Dashboard: undefined;
  SignUp: undefined;
  Splash: undefined;
  OnboardingOne: undefined;
  Bot: undefined;
  Community: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
          <Stack.Screen name="OnboardingOne" component={OnboardingOne} options={{ headerShown: false }} />
          <Stack.Screen name="Bot" component={Bot} options={{ headerShown: false }} />
          <Stack.Screen name="Community" component={Community} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
