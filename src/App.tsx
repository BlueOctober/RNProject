import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; //JH : added.
import { createStackNavigator } from '@react-navigation/stack'; //JH : added.
import Home from './containers/Home';
import UserSettings from './containers/UserSettings';
import HeaderLeft from './components/nav/HeaderLeft';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SiteMenu from './containers/SideMenu';
import SideMenu from './containers/SideMenu';

interface Props {}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = () => {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={({ route, navigation }) => ({
					title: 'Home~',
					headerLeft: () => <HeaderLeft onPress={() => navigation.openDrawer()} />
				})}
			/>

			<Stack.Screen name="UserSettings" component={UserSettings} />
		</Stack.Navigator>
	);
};

const App = ({}: Props) => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Main" drawerContent={SideMenu}>
				<Drawer.Screen name="Main" component={RootStack} options={{ drawerLabel: 'Main' }} />
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
