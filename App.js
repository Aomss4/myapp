import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { FontAwesome } from "react-native-vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      {/* วงกลมบน */}
      <View style={styles.topCircle} />

      {/* หัวเรื่อง */}
      <Text style={styles.title}>Healthy meal</Text>
      <Text style={styles.subtitle}>Log In</Text>

      {/* ช่องกรอกข้อมูล */}
      <TextInput style={styles.input} placeholder="Email / Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* Forgot Password */}
      <Text style={styles.forgotPassword}>Forget Password</Text>

      {/* ปุ่ม Log In */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* เส้นคั่นระหว่าง Log In กับ Social Login */}
      <View style={styles.line} />

      {/* Social Login */}
      <View style={styles.socialContainer}>
        <Text style={styles.socialText}>or log in with</Text>
        <View style={styles.iconContainer}>
          <FontAwesome name="tiktok" size={30} color="#000" style={styles.icon} />
          <FontAwesome name="facebook" size={30} color="#1877F2" style={styles.icon} />
          <FontAwesome name="google" size={30} color="#DB4437" style={styles.icon} />
          <FontAwesome name="apple" size={30} color="#000" style={styles.icon} />
        </View>
      </View>

      {/* ครึ่งวงกลมล่าง */}
      <View style={styles.bottomCircle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AEE3FA",
    padding: 20,
  },
  topCircle: {
    position: "absolute",
    top: 50,
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#4A90E2",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
    marginTop: 140,
  },
  subtitle: {
    fontSize: 18,
    color: "#000",
    marginBottom: 20,
  },
  input: {
    width: "85%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 25,
    backgroundColor: "#fff",
    marginBottom: 10,
    textAlign: "left",
    paddingLeft: 15,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: "10%",
    color: "blue",
    fontSize: 12,
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  line: {
    width: "80%",
    height: 1,
    backgroundColor: "#000",
    marginVertical: 15,
  },
  socialContainer: {
    alignItems: "center",
  },
  socialText: {
    fontSize: 14,
    color: "#000",
    padding: 5,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginHorizontal: 15,
  },
  bottomCircle: {
    position: "absolute",
    bottom: -100, // ขยับลงมาอีกเพื่อให้ดูเป็นครึ่งวงกลมที่พอดี
    width: "100%", // ทำให้กว้างเกินหน้าจอ เพื่อให้ดูเหมือนครึ่งวงกลมเต็มๆ
    height: 200, // เพิ่มความสูงเพื่อให้ดูโค้งมนมากขึ้น
    borderRadius: 320, // ขยายขนาดให้กลมขึ้น
    backgroundColor: "#4A90E2",
  },
});
