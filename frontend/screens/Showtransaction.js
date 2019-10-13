import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";

// import RoundButton from "../component/RoundButton";

// const getStartedHandler = (navigation) => {
//   navigation.navigate('Login');
// };

const Addmoney = props => {
  return (
    <View style={styles.Container}>
      <View>
        <Image
          source={require("../assets/wallet.png")}
          style={styles.background_image}
        />
      </View>
        <View>
            <Text>User Family</Text>
        </View>
        <View>
            <Text>ADMIN</Text>
        </View>
        <View>
            <Text>Ayush Joglekar</Text>
        </View>
      <View>
          <FlatList />
      </View>
    </View>
  );
};

export default Addmoney;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  background_image: {
    width: 80,
    height: 120,
    resizeMode: "stretch"
  },
  get_started: {
    marginTop: 30
  }
});
