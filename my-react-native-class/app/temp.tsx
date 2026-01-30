// Default Code

// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12',
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <Link href="/modal">
//           <Link.Trigger>
//             <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//           </Link.Trigger>
//           <Link.Preview />
//           <Link.Menu>
//             <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
//             <Link.MenuAction
//               title="Share"
//               icon="square.and.arrow.up"
//               onPress={() => alert('Share pressed')}
//             />
//             <Link.Menu title="More" icon="ellipsis">
//               <Link.MenuAction
//                 title="Delete"
//                 icon="trash"
//                 destructive
//                 onPress={() => alert('Delete pressed')}
//               />
//             </Link.Menu>
//           </Link.Menu>
//         </Link>

//         <ThemedText>
//           {`Tap the Explore tab to learn more about what's included in this starter app.`}
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           {`When you're ready, run `}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });

// Hello world code

// import { View, Text, StyleSheet } from "react-native";

// export default function Index() {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.text}>Hello World</Text>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#000",
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},

// 	text: {
// 		color: "#fff",
// 	},
// });

// Weight Converter code

// import React, { useState } from "react";
// import { View, Text, TextInput, StyleSheet } from "react-native";

// const WeightConverter = () => {
// 	const [kg, setKg] = useState("");
// 	const pounds = kg ? (parseFloat(kg) * 2.20462).toFixed(2) : "";

// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.label}>Enter weight in Kg: </Text>
// 			<TextInput
// 				style={styles.input}
// 				keyboardType="numeric"
// 				value={kg}
// 				onChangeText={setKg}
// 			/>
// 			<Text style={styles.resultText}>
// 				Weight in Pounds: {pounds} lbs
// 			</Text>
// 		</View>
// 	);
// };

// export default function App() {
// 	return (
// 		<View style={styles.screen}>
// 			<WeightConverter />
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	screen: {
// 		flex: 1,
// 		justifyContent: "center",
// 		backgroundColor: "#f5f5f5",
// 	},
// 	container: {
// 		padding: 20,
// 		marginHorizontal: 20,
// 		backgroundColor: "#fff",
// 		borderRadius: 10,
// 		elevation: 3, // Shadow for Android
// 	},
// 	label: {
// 		fontSize: 18,
// 		marginBottom: 10,
// 	},
// 	input: {
// 		height: 50,
// 		borderColor: "#ccc",
// 		borderWidth: 1,
// 		borderRadius: 5,
// 		paddingHorizontal: 10,
// 		fontSize: 18,
// 		marginBottom: 20,
// 	},
// 	resultText: {
// 		fontSize: 20,
// 		fontWeight: "bold",
// 		color: "#333",
// 	},
// });

// Calculator Code

import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
} from "react-native";

export default function App() {
	const [display, setDisplay] = useState("");

	const handlePress = (value: string) => {
		if (value === "C") {
			setDisplay("");
		} else if (value === "=") {
			calculate();
		} else {
			setDisplay(display + value);
		}
	};

	const calculate = () => {
		try {
			// We use a simple regex to split numbers and operators
			// This supports +, -, *, /
			const operators = display.split(/\d+\.?\d*/).filter(Boolean);
			const numbers = display.split(/[+\-*/]/).map(Number);

			let result = numbers[0];

			for (let i = 0; i < operators.length; i++) {
				const nextNum = numbers[i + 1];
				// SWITCH CASE used for the math logic
				switch (operators[i]) {
					case "+":
						result += nextNum;
						break;
					case "-":
						result -= nextNum;
						break;
					case "*":
						result *= nextNum;
						break;
					case "/":
						result /= nextNum;
						break;
				}
			}
			setDisplay(result.toString());
		} catch (e) {
			setDisplay("Error");
		}
	};

	const Button = ({
		label,
		color = "#333",
	}: {
		label: string;
		color?: string;
	}) => (
		<TouchableOpacity
			style={[styles.button, { backgroundColor: color }]}
			onPress={() => handlePress(label)}
		>
			<Text style={styles.buttonText}>{label}</Text>
		</TouchableOpacity>
	);

	return (
		<SafeAreaView style={styles.container}>
			{/* Result Screen */}
			<View style={styles.screen}>
				<Text style={styles.displayText} numberOfLines={1}>
					{display || "0"}
				</Text>
			</View>

			{/* Buttons Grid */}
			<View style={styles.grid}>
				<View style={styles.row}>
					<Button label="7" />
					<Button label="8" />
					<Button label="9" />
					<Button label="/" color="#f39c12" />
				</View>
				<View style={styles.row}>
					<Button label="4" />
					<Button label="5" />
					<Button label="6" />
					<Button label="*" color="#f39c12" />
				</View>
				<View style={styles.row}>
					<Button label="1" />
					<Button label="2" />
					<Button label="3" />
					<Button label="-" color="#f39c12" />
				</View>
				<View style={styles.row}>
					<Button label="C" color="#e74c3c" />
					<Button label="0" />
					<Button label="=" color="#2ecc71" />
					<Button label="+" color="#f39c12" />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1a1a1a",
	},
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "flex-end",
		padding: 20,
	},
	displayText: {
		color: "white",
		fontSize: 60,
		fontWeight: "bold",
	},
	grid: {
		padding: 10,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 10,
	},
	button: {
		width: "22%",
		height: 80,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},
	buttonText: {
		color: "white",
		fontSize: 28,
		fontWeight: "bold",
	},
});

// Calculator 2 code

// import React, { useState } from "react";
// import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const HomeScreen = () => {
// 	const [input, setInput] = useState("");
// 	const [result, setResult] = useState("");

// 	const handlePress = (value) => {
// 		if (value === "C") {
// 			setInput("");
// 			setResult("");
// 		} else if (value === "=") {
// 			try {
// 				// ⚠️ eval is used for simplicity; in production use a math parser
// 				setResult(eval(input).toString());
// 			} catch (e) {
// 				setResult("Error");
// 			}
// 		} else {
// 			setInput(input + value);
// 		}
// 	};

// 	const buttons = [
// 		["7", "8", "9", "/"],
// 		["4", "5", "6", "*"],
// 		["1", "2", "3", "-"],
// 		["0", ".", "=", "+"],
// 		["C"],
// 	];

// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<View style={styles.display}>
// 				<Text style={styles.input}>{input}</Text>
// 				<Text style={styles.result}>{result}</Text>
// 			</View>

// 			<View style={styles.buttons}>
// 				{buttons.map((row, rowIndex) => (
// 					<View key={rowIndex} style={styles.row}>
// 						{row.map((btn) => (
// 							<TouchableOpacity
// 								key={btn}
// 								style={styles.button}
// 								onPress={() => handlePress(btn)}
// 							>
// 								<Text style={styles.buttonText}>{btn}</Text>
// 							</TouchableOpacity>
// 						))}
// 					</View>
// 				))}
// 			</View>
// 		</SafeAreaView>
// 	);
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff", // fixed hex color
// 		padding: 16,
// 		justifyContent: "flex-start",
// 	},
// 	display: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "flex-end",
// 		marginBottom: 20,
// 	},
// 	input: {
// 		fontSize: 28,
// 		color: "#333",
// 	},
// 	result: {
// 		fontSize: 36,
// 		fontWeight: "bold",
// 		color: "#000",
// 	},
// 	buttons: {
// 		flex: 2,
// 		justifyContent: "space-around",
// 	},
// 	row: {
// 		flexDirection: "row",
// 		justifyContent: "space-around",
// 		marginBottom: 10,
// 	},
// 	button: {
// 		backgroundColor: "#f0f0f0",
// 		padding: 20,
// 		borderRadius: 10,
// 		minWidth: 60,
// 		alignItems: "center",
// 	},
// 	buttonText: {
// 		fontSize: 24,
// 		color: "#000",
// 	},
// });

// import { useState } from "react";
// import { View, TextInput, Text, StyleSheet, Button } from "react-native";

// export default function Index() {
// 	const [text, setText] = useState("");

// 	return (
// 		<View style={styles.container}>
// 			<TextInput
// 				style={styles.input}
// 				value={text}
// 				onChangeText={setText}
// 				multiline={true}
// 			></TextInput>
// 			{/* <Button style = {styles.btn} title="Submit"/> */}
// 			<Text style={styles.text}>{text}</Text>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		color: "#000",
// 		backgroundColor: "#fff",
// 	},
// 	input: {
// 		width: "100%",
// 	},
// 	text: {},
// 	btn: {},
// });
