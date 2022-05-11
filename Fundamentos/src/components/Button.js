import React from "react";
import { 
  StyleSheet,
  TouchableOpacity, 
  Text 
} from "react-native";

export default function Button({add}) {

  return(
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={add}
    >
      <Text style={styles.buttonText}>add</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#A370F7",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20
  },  
  buttonText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "bold",
  },
})