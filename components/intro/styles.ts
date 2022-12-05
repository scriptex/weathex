import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	dot: {
		width: 10,
		height: 10,
		backgroundColor: '#0A0A22'
	},
	activeDot: {
		width: 20,
		backgroundColor: '#8B95A2'
	},
	text: {
		color: '#8B95A2',
		fontFamily: 'PoppinsRegular',
		fontSize: 16,
		lineHeight: 24,
		textAlign: 'center',
		paddingLeft: 40,
		paddingRight: 40,
		paddingBottom: 20
	},
	title: {
		color: '#0A0A22',
		fontFamily: 'PoppinsSemibold',
		fontSize: 28,
		lineHeight: 33,
		textAlign: 'center',
		paddingLeft: 40,
		paddingRight: 40,
		paddingBottom: 20
	},
	image: {
		width: 200,
		height: 200
	},
	background: {
		flex: 1,
		marginTop: -20,
		paddingTop: 80,
		backgroundColor: '#fff',
		borderTopLeftRadius: 500,
		borderTopRightRadius: 500
	},
	button: {
		width: 50,
		height: 50,
		borderWidth: 3,
		borderStyle: 'solid',
		borderColor: '#0A0A22',
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center'
	},
	icon: {
		width: 20,
		height: 20,
		stroke: '#0A0A22'
	},
	imageContainer: {
		flex: 1,
		paddingTop: 42,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
