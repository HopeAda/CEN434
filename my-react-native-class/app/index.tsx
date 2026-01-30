import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
} from "react-native";
import { Link } from "expo-router";

export default function Home() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>My Projects</Text>

			<ScrollView contentContainerStyle={styles.scrollContent}>
				<Link href="/SimpleTextEditor">
					<TouchableOpacity
						style={[styles.card, { backgroundColor: "#4ECDC4" }]}
					>
						<Text style={styles.cardText}> Text Editor </Text>
						<Text style={styles.cardSub}>Tap to open</Text>
					</TouchableOpacity>
				</Link>

				<Link href="/Calculator">
					<TouchableOpacity
						style={[styles.card, { backgroundColor: "#FF6B6B" }]}
					>
						<Text style={styles.cardText}>Calculator</Text>
						<Text style={styles.cardSub}>Tap to open</Text>
					</TouchableOpacity>
				</Link>

				<Link href="/PersonalBudgetApp">
					<TouchableOpacity
						style={[styles.card, { backgroundColor: "#45B7D1" }]}
					>
						<Text style={styles.cardText}>Personal Budget App</Text>
						<Text style={styles.cardSub}>Tap to open</Text>
					</TouchableOpacity>
				</Link>

				<Link href="/WeightConverter">
					<TouchableOpacity
						style={[styles.card, { backgroundColor: "#96CEB4" }]}
					>
						<Text style={styles.cardText}>Weight Converter</Text>
						<Text style={styles.cardSub}>Tap to open</Text>
					</TouchableOpacity>
				</Link>

				<Link href="/NewsAggregator">
					<TouchableOpacity
						style={[styles.card, { backgroundColor: "#FFE66D" }]}
					>
						<Text style={styles.cardText}>NewsAggregator</Text>
						<Text style={styles.cardSub}>Tap to open</Text>
					</TouchableOpacity>
				</Link>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f9f9f9",
		paddingTop: 60,
	},
	title: {
		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 30,
		color: "#111",
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingBottom: 40,
	},
	card: {
		height: 140,
		borderRadius: 16,
		marginVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.15,
		shadowRadius: 6,
		elevation: 4,
		width: "100%",
	},
	cardText: {
		fontSize: 26,
		fontWeight: "bold",
		color: "white",
	},
	cardSub: {
		fontSize: 16,
		color: "rgba(255,255,255,0.9)",
		marginTop: 8,
	},
});
