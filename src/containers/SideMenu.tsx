import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

interface Props {}

const SideMenu = (props: Props) => {
	const pushUserSettings = () => {
		const { navigation } = props;

		navigation.navigate('UserSettings');
	};

	return (
		<SafeAreaView style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
			<View
				style={{
					width: '100%',
					height: 200,
					borderBottomColor: 'gray',
					borderBottomWidth: 1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<TouchableOpacity
					style={{ width: 100, height: 100, borderRadius: 35, backgroundColor: 'gray' }}
					onPress={pushUserSettings}
				></TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default SideMenu;
