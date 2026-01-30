// import React, { useState } from 'react';
// import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// const SimpleTextEditor = () => {
//   const [text, setText] = useState('');
//   const [savedText, setSavedText] = useState('');

//   const saveText = () => setSavedText(text);
//   const clearText = () => {
//     setText('');
//     setSavedText('');
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         multiline
//         value={text}
//         onChangeText={setText}
//         placeholder="Type your text here..."
//       />
//       <View style={styles.buttons}>
//         <Button title="Save" onPress={saveText} />
//         <Button title="Clear" onPress={clearText} />
//       </View>
//       <Text style={styles.resultText}>Saved Text: {savedText}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//     marginHorizontal: 20,
//     backgroundColor: '#fff',
//     borderRadius: 16,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 6,
//     marginBottom: 24,
//   },
//   input: {
//     height: 80,
//     borderColor: '#b0b0b0',
//     borderWidth: 1.5,
//     borderRadius: 8,
//     paddingHorizontal: 14,
//     fontSize: 17,
//     marginBottom: 18,
//     backgroundColor: '#fafbfc',
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginVertical: 12,
//     gap: 10,
//   },
//   resultText: {
//     fontSize: 21,
//     fontWeight: 'bold',
//     color: '#1a4d2e',
//     backgroundColor: '#e6f7ef',
//     padding: 10,
//     borderRadius: 8,
//     marginTop: 10,
//     textAlign: 'center',
//   },
// });

// export default SimpleTextEditor;

// app/SimpleTextEditor.tsx

import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	Alert,
} from "react-native";

export default function SimpleTextEditor() {
	const [text, setText] = useState("");
	const [savedNotes, setSavedNotes] = useState<string[]>([]);

	const handleSave = () => {
		if (text.trim() === "") {
			Alert.alert("Empty!", "Type something first.");
			return;
		}

		setSavedNotes([text, ...savedNotes]); // add new note at top
		setText(""); // clear input
		Alert.alert("Saved!", "Your note has been saved.");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Text Editor</Text>

			<TextInput
				style={styles.input}
				multiline
				placeholder="Type here..."
				value={text}
				onChangeText={setText}
			/>

			<TouchableOpacity style={styles.saveButton} onPress={handleSave}>
				<Text style={styles.saveButtonText}>Save Note</Text>
			</TouchableOpacity>

			<Text style={styles.savedTitle}>
				Saved Notes ({savedNotes.length})
			</Text>

			<FlatList
				data={savedNotes}
				keyExtractor={(_, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.savedItem}>
						<Text style={styles.savedText}>{item}</Text>
					</View>
				)}
				ListEmptyComponent={
					<Text style={styles.empty}>No saved notes yet</Text>
				}
			/>
		</View>
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
		marginBottom: 20,
		color: "#333",
	},
	input: {
		backgroundColor: "white",
		borderRadius: 12,
		padding: 16,
		fontSize: 17,
		height: 180,
		textAlignVertical: "top",
		marginBottom: 16,
		shadowColor: "#000",
		shadowOpacity: 0.08,
		shadowRadius: 4,
		elevation: 2,
	},
	saveButton: {
		backgroundColor: "#4ECDC4",
		padding: 16,
		borderRadius: 12,
		alignItems: "center",
		marginBottom: 20,
	},
	saveButtonText: {
		color: "white",
		fontSize: 18,
		fontWeight: "bold",
	},
	savedTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
		color: "#333",
	},
	savedItem: {
		backgroundColor: "white",
		padding: 14,
		borderRadius: 10,
		marginBottom: 10,
		shadowColor: "#000",
		shadowOpacity: 0.05,
		elevation: 1,
	},
	savedText: {
		fontSize: 16,
		color: "#333",
	},
	empty: {
		textAlign: "center",
		color: "#999",
		fontStyle: "italic",
		marginTop: 20,
	},
});
