import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

//import gstyles from '~/styles/'; //JH : global로 빼고싶어요..

//const userIcon = require('images/icons/user.png');

const styles = StyleSheet.create({
	userImageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'gray',
		borderWidth: 3,
		borderColor: 'black',
		width: 120,
		height: 120,
		borderRadius: 60,
		padding: 10,
		marginTop: 20
	},
	userImage: {
		width: 80,
		height: 80
	},
	sexButtonOn: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
		marginLeft: 10,
		marginRight: 10,
		width: 140
	},
	sexButtonOff: {
		alignItems: 'center',
		backgroundColor: '#0B0B0B',
		padding: 10,
		marginLeft: 10,
		marginRight: 10,
		width: 140
	}
});

interface Props {}

const UserSettings = ({}: Props) => {
	const [date, setDate] = useState(new Date(1598051730000));
	const [mode, setMode] = useState('date');
	const [show, setShow] = useState(false);

	const [activeIndex, setActiveIndex] = useState(0);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate || date;
		setShow(Platform.OS === 'ios');
		setDate(currentDate);
	};

	const showMode = currentMode => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode('date');
	};

	const showTimepicker = () => {
		showMode('time');
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'flex-start',
				alignItems: 'center',
				padding: 10,
				backgroundColor: 'rgb(20, 26, 25)'
			}}
		>
			<View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' }}>
				<View
					style={{
						width: 100,
						height: 100,
						backgroundColor: 'rgba(255, 255, 255, 0.05)',
						borderRadius: 60,
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<AntDesignIcons name="user" size={40} color="white" />
					<View
						style={{
							position: 'absolute',
							bottom: 0,
							right: 0,
							width: 30,
							height: 30,
							backgroundColor: 'white',
							borderRadius: 60,
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<MaterialCommunityIcons name="camera" size={20} color="black" style={{ marginTop: 3 }} />
					</View>
				</View>
			</View>

			<View style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', borderRadius: 15, paddingLeft: 15 }}>
				<TextInput style={{ width: '100%', height: 40, color: 'white' }} placeholder="이름을 입력해 주세요" placeholderTextColor="white" />
			</View>

			<View style={{ flexDirection: 'row' }}>
				<TouchableOpacity style={[styles.sexButtonOff, {backgroundColor:activeIndex == 0 ? "red" : "gray"}]} onPress={() => setActiveIndex(0)}>
					<Text style={{ color: 'red' }}>Male</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[styles.sexButtonOn, {backgroundColor:activeIndex == 1 ? "red" : "gray"}]} onPress={() => setActiveIndex(1)}>
					<Text style={{ color: 'red' }}>Female</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: 'row' }}>
				<Text style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>birthday</Text>
				<View>
					<Button onPress={showDatepicker} title="Show date picker!" />
				</View>
			</View>

			<View>
				<Text>birthtime</Text>
			</View>

			<View>
				<Text>country</Text>
			</View>

			<View>
				<Text>city</Text>
			</View>
		</View>
	);
};

export default UserSettings;
