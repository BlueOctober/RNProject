import React from 'react';
import { TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useIsDrawerOpen } from '@react-navigation/drawer';

interface Props {
	onPress: any;
}

const HeaderLeft = ({ onPress }: Props) => {
	const isDrawerOpen = useIsDrawerOpen();

	return (
		<TouchableOpacity onPress={onPress} style={{ width: 35, height: 35 }}>
			<MaterialCommunityIcons name="menu" size={30} color="#900" />
		</TouchableOpacity>
	);
};

export default HeaderLeft;
