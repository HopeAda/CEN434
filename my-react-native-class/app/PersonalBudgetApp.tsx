import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Alert,
	KeyboardAvoidingView,
	Platform,
} from "react-native";

type Expense = {
	id: string;
	description: string;
	amount: number;
};

export default function PersonalBudgetApp() {
	const [budget, setBudget] = useState("");
	const [budgetAmount, setBudgetAmount] = useState(0);
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");
	const [expenses, setExpenses] = useState<Expense[]>([]);

	const totalSpent = expenses.reduce((sum, item) => sum + item.amount, 0);
	const remaining = budgetAmount - totalSpent;

	const setMonthlyBudget = () => {
		const num = parseFloat(budget);
		if (isNaN(num) || num <= 0) {
			Alert.alert("Invalid budget", "Please enter a positive number.");
			return;
		}
		setBudgetAmount(num);
		setBudget("");
	};

	const addExpense = () => {
		const num = parseFloat(amount);
		if (!description.trim() || isNaN(num) || num <= 0) {
			Alert.alert(
				"Invalid input",
				"Enter description and positive amount.",
			);
			return;
		}

		const newExpense: Expense = {
			id: Date.now().toString(),
			description,
			amount: num,
		};

		setExpenses([newExpense, ...expenses]);
		setDescription("");
		setAmount("");
	};

	const resetEverything = () => {
		Alert.alert("Reset all?", "This will clear budget and expenses.", [
			{ text: "Cancel", style: "cancel" },
			{
				text: "Reset",
				style: "destructive",
				onPress: () => {
					setBudgetAmount(0);
					setExpenses([]);
				},
			},
		]);
	};

	return (
		<KeyboardAvoidingView
			style={styles.container}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={80}
		>
			<Text style={styles.title}>Personal Budget</Text>

			{/* Budget setup */}
			{budgetAmount === 0 ? (
				<View style={styles.section}>
					<Text style={styles.label}>
						Set Monthly Budget (₦ or $)
					</Text>
					<TextInput
						style={styles.input}
						keyboardType="numeric"
						placeholder="e.g. 150000"
						value={budget}
						onChangeText={setBudget}
					/>
					<TouchableOpacity
						style={styles.button}
						onPress={setMonthlyBudget}
					>
						<Text style={styles.buttonText}>Set Budget</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View style={styles.summary}>
					<Text style={styles.summaryText}>
						Budget:{" "}
						<Text style={{ fontWeight: "bold" }}>
							{budgetAmount.toFixed(0)}
						</Text>
					</Text>
					<Text style={styles.summaryText}>
						Spent:{" "}
						<Text style={{ color: "#e74c3c", fontWeight: "bold" }}>
							{totalSpent.toFixed(0)}
						</Text>
					</Text>
					<Text
						style={[
							styles.summaryText,
							{ color: remaining >= 0 ? "#2ecc71" : "#e74c3c" },
						]}
					>
						Remaining: {remaining.toFixed(0)}
					</Text>
				</View>
			)}

			{/* Add expense */}
			<View style={styles.section}>
				<Text style={styles.label}>Add Expense</Text>
				<TextInput
					style={styles.input}
					placeholder="Description (e.g. Transport)"
					value={description}
					onChangeText={setDescription}
				/>
				<TextInput
					style={styles.input}
					keyboardType="numeric"
					placeholder="Amount"
					value={amount}
					onChangeText={setAmount}
				/>
				<TouchableOpacity style={styles.buttonAdd} onPress={addExpense}>
					<Text style={styles.buttonText}>+ Add Expense</Text>
				</TouchableOpacity>
			</View>

			{/* Expense list */}
			<Text style={styles.listTitle}>
				Expenses {expenses.length > 0 ? `(${expenses.length})` : ""}
			</Text>

			<FlatList
				data={expenses}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => (
					<View style={styles.expenseItem}>
						<Text style={styles.expenseDesc}>
							{item.description}
						</Text>
						<Text style={styles.expenseAmount}>
							-{item.amount.toFixed(0)}
						</Text>
					</View>
				)}
				ListEmptyComponent={
					<Text style={styles.emptyText}>No expenses added yet</Text>
				}
				style={{ flex: 1 }}
			/>

			{expenses.length > 0 && (
				<TouchableOpacity
					style={styles.resetButton}
					onPress={resetEverything}
				>
					<Text style={styles.resetText}>Reset All</Text>
				</TouchableOpacity>
			)}
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f9f9f9",
		padding: 16,
		paddingTop: 50,
	},
	title: {
		fontSize: 26,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 24,
		color: "#2c3e50",
	},
	section: {
		marginBottom: 24,
		backgroundColor: "white",
		padding: 16,
		borderRadius: 12,
		shadowColor: "#000",
		shadowOpacity: 0.08,
		shadowRadius: 6,
		elevation: 3,
	},
	label: {
		fontSize: 16,
		color: "#555",
		marginBottom: 8,
	},
	input: {
		backgroundColor: "#f1f3f5",
		borderRadius: 8,
		padding: 12,
		fontSize: 16,
		marginBottom: 12,
	},
	button: {
		backgroundColor: "#3498db",
		padding: 14,
		borderRadius: 8,
		alignItems: "center",
	},
	buttonAdd: {
		backgroundColor: "#27ae60",
		padding: 14,
		borderRadius: 8,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
	summary: {
		backgroundColor: "white",
		padding: 16,
		borderRadius: 12,
		marginBottom: 24,
		shadowColor: "#000",
		shadowOpacity: 0.08,
		shadowRadius: 6,
		elevation: 3,
	},
	summaryText: {
		fontSize: 18,
		marginVertical: 4,
	},
	listTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 12,
		color: "#2c3e50",
	},
	expenseItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "white",
		padding: 14,
		borderRadius: 10,
		marginBottom: 10,
		shadowColor: "#000",
		shadowOpacity: 0.05,
		elevation: 1,
	},
	expenseDesc: {
		fontSize: 16,
		color: "#333",
	},
	expenseAmount: {
		fontSize: 16,
		color: "#e74c3c",
		fontWeight: "bold",
	},
	emptyText: {
		textAlign: "center",
		color: "#999",
		fontStyle: "italic",
		marginTop: 20,
	},
	resetButton: {
		backgroundColor: "#e74c3c",
		padding: 14,
		borderRadius: 8,
		alignItems: "center",
		marginTop: 16,
		marginBottom: Platform.OS === "ios" ? 30 : 16,
	},
	resetText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
