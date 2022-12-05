import * as React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Text, View, Image } from 'react-native';

import { styles } from './styles';
// @ts-ignore
import ArrowRight from '@assets/icons/arrow-right.svg';

type Props = {
	onComplete: () => void;
};

export const NextButton: React.FC = () => (
	<View style={styles.button}>
		<ArrowRight width="20" height="20" strokeWidth={1} stroke="#0A0A22" />
	</View>
);

export const Intro: React.FC<Readonly<Props>> = ({ onComplete }) => (
	<AppIntroSlider
		data={[
			{
				key: 'slide1',
				text: 'Get in - depth weather information.',
				title: 'Detailed Hourly Forecast',
				image: require('@assets/walkthrough/walkthrough-1.png')
			},
			{
				key: 'slide2',
				text: 'Watch the progress of the precipitation to stay informed.',
				title: 'Real-Time Weather Map',
				image: require('@assets/walkthrough/walkthrough-2.png')
			},
			{
				key: 'slide3',
				text: 'Add any location you want and swipe easily to change.',
				title: 'Weather Around the World',
				image: require('@assets/walkthrough/walkthrough-3.png')
			},
			{
				key: 'slide4',
				text: 'Get in - depth weather information.',
				title: 'Detailed Hourly Forecast',
				image: require('@assets/walkthrough/walkthrough-4.png')
			}
		]}
		onDone={onComplete}
		onSkip={onComplete}
		dotStyle={styles.dot}
		activeDotStyle={styles.activeDot}
		renderItem={({ item }) => (
			<View style={{ backgroundColor: '#484B5B', height: '100%' }}>
				<View style={styles.imageContainer}>
					<Image style={styles.image} source={item.image} />
				</View>

				<View style={styles.background}>
					<Text style={styles.title}>{item.title}</Text>
					<Text style={styles.text}>{item.text}</Text>
				</View>
			</View>
		)}
		renderDoneButton={() => <NextButton />}
		renderNextButton={() => <NextButton />}
	/>
);

export default Intro;
