import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="index" />
			<Stack.Screen name="Calculator" />
			<Stack.Screen name="NewsAggregator" />
			<Stack.Screen name="PersonalBudgetApp" />
			<Stack.Screen name="WeightConverter" />
			<Stack.Screen name="SimpleTextEditor" />
		</Stack>
	);
}
