import * as React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

import { Intro } from './components';

export default function App() {
	const [showMainApp, setShowMainApp] = React.useState(false);
	const [fontsLoaded] = useFonts({
		PoppinsRegular: require('./assets/font-poppins/Poppins-Regular.ttf'),
		PoppinsSemibold: require('./assets/font-poppins/Poppins-SemiBold.ttf')
	});

	const onLayoutRootView = React.useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={{ flex: 1 }} onLayout={onLayoutRootView}>
			{showMainApp ? (
				<>
					<Text style={{ fontFamily: 'PoppinsSemibold' }}>Open up App.tsx to start working on your app!</Text>
					<StatusBar style="auto" />
				</>
			) : (
				<Intro onComplete={() => setShowMainApp(true)} />
			)}
		</View>
	);
}
