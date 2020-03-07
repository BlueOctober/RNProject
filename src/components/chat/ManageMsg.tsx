import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import S from 'styles';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		padding: 10
	}
});

// lfex
// flexDirection row
// justifyContent flex-start | center | flex-end
// alignItems flex-start | center | flex-end

interface Props {
	timeDate: string;
	msg: string;
}

const ManagerMsg = ({ timeDate, msg }: Props) => {
	return (
		<View style={styles.container}>
			<View style={{ justifyContent: 'flex-end', marginRight: 5 }}>
				<Text style={{ fontSize: 11 }}>{timeDate}</Text>
			</View>

			<View style={{ padding: 10, backgroundColor: S.color.sub, borderRadius: 5 }}>
				<Text>{msg}</Text>
			</View>
		</View>
	);
};

export default ManagerMsg;
