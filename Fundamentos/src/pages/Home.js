import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from "react-native";

import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

export default function Home() {

  const [newSkill, setNewSkill] = useState("Batata");
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]); // ou setMySkills( oldSkills => [...mySkills, newSkill])
  }

  return (

    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Gabriel
      </Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button add={handleAddNewSkill} />
      
      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SkillCard skill={item} />
        )}
      />

    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    backgroundColor: "#121015",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
})