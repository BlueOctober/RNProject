import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import S from 'styles';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		padding: 10
	},
	profileImg: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: 'gray'
	}
});

interface Props {
	item: any;
}

const UserMsg = ({ item }: Props) => {
	return (
		<View style={styles.container}>
			<View style={styles.profileImg} />

			<View style={{ paddingHorizontal: 10 }}>
				<Text>{item.userName}</Text>

				<View style={{ flexDirection: 'row', marginTop: 10 }}>
					<View style={{ backgroundColor: S.color.main, padding: 10, marginTop: 5, borderRadius: 5 }}>
						<Text>{item.msg}</Text>
					</View>
					<View style={{ justifyContent: 'flex-end', marginLeft: 5 }}>
						<Text style={{ fontSize: 11 }}>{item.timeDate}</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

export default UserMsg;
