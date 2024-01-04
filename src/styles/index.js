import { StyleSheet } from "react-native";
import * as util from '../utilities/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: util.WP(5),
    width: util.WP(50),
    height: util.WP(10),
    marginBottom: util.WP(5),
    alignItems: "center",
  },
 
  TextInput: {
    height: util.WP(10),
    // flex: 1,
    width: util.WP(20),
    fontFamily: util.font.regular,
  },
 
  forgot_button: {
    height: util.WP(5),
    marginBottom: util.WP(5),
  },
 
  loginBtn: {
    width: util.WP(70),
    borderRadius: 25,
    height: util.WP(12),
    alignItems: "center",
    justifyContent: "center",
    marginTop: util.WP(10),
    },
  loginText: {
    fontFamily: util.font.medium,
    fontSize: util.WP(4)
  }
});
export default styles;