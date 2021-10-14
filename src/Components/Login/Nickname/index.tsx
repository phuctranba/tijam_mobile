import React, { FC, forwardRef, memo, useImperativeHandle } from "react";
import { Text, TextInput, View } from "react-native";
import style from "./style";

const Nickname: FC<any> = forwardRef((props, ref) => {
  const { color, scrollTo } = props;
  const styles = style(color);

  useImperativeHandle(
    ref,
    () => ({
      onPressNext(index: number) {
        scrollTo(index+1)
      }
    })
  );

  return (
    <View style={styles.container}>
      <Text style={styles.bigTxt}>Chào mừng</Text>
      <Text style={styles.smallTxt}>Chúng tôi có thể gọi bạn là...</Text>

      <TextInput
        placeholder={"Nickname"}
        style={styles.input}
        underlineColorAndroid={"transparent"}
        returnKeyType={"send"}
      />
    </View>
  );
});

export default memo(Nickname);
