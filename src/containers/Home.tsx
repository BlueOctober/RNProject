import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
	textInput: { height: 100, borderColor: 'gray', borderWidth: 1, paddingLeft: 10, paddingTop: 5 }
});

const testData = [
	{
		userName: '관리자',
		userType: 'm',
		timeDate: '오후 2:34',
		msg: '안녕하세요11'
	},
	{
		userName: '김진호',
		userType: 'u',
		timeDate: '오후 2:35',
		msg: '안녕하세요22'
	},
	{
		userName: '관리자',
		userType: 'm',
		timeDate: '오후 2:36',
		msg: '안녕하세요33'
	}
];

interface Props {}

const Home = (props: Props) => {
	const [value, onChangeText] = React.useState('');

	const [msgList, setMsgList] = React.useState(testData);

	const addMsg = () => {
		//value;

		let msg = {
			userName: '김진호',
			userType: 'u',
			timeDate: '오후 2:34',
			msg: value
		};

		setMsgList([...msgList, msg]);
	};

	return (
		<View style={{ flex: 1 }}>
			<SafeAreaView style={{ position: 'absolute', bottom: 0, width: '100%' }}>
				<TextInput
					style={styles.textInput}
					onChangeText={text => onChangeText(text)}
					onEndEditing={addMsg}
					value={value}
					placeholder="placeholder"
				/>

				<View
					style={{
						position: 'absolute',
						right: 0,
						width: 100,
						height: '100%',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 10
					}}
				>
					<View
						style={{
							width: '100%',
							height: '100%',
							justifyContent: 'center',
							alignItems: 'center',
							borderRadius: 5,
							backgroundColor: value.length <= 0 ? 'gray' : 'rgb(253,226,11)'
						}}
					>
						<Text>전송</Text>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Home;
