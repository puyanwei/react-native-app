import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		marginTop: 10
	}
});

const App = () => {
	const [name, setName] = useState('Ryu')

	const handleClick = () => {
		setName('Chun-Li')
	}

	return (
		<View style={styles.container}>
			<Text>My name is {name}</Text>
			<View style={styles.button}>
				<Button title="Change Name" onPress={handleClick} />
			</View>
		</View>
	);
}

export default App;