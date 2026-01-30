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
		width: "11%",
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
