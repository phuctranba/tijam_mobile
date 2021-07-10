import React, { FC, memo } from "react";
import { Text, View } from "react-native";

const EditProfile: FC<any> = (props) => {
  const { navigation } = props;

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center" }}>
      <Text>Edit profile</Text>

    </View>
  )
    ;
};
export default memo(EditProfile);
