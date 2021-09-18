import React, { FC, memo } from "react";
import { Text, View } from "react-native";
import style from "./style";
import { convertBigNumber } from "../../../utils";

interface Props {
  color: any,
  followCount:number,
  notiveCount:number,
  shareCount:number
}

const CountAction: FC<Props> = (props) => {
  const { color, followCount, notiveCount, shareCount } = props;
  const styles = style(color);

  return (
    <View style={styles.container}>
      <View style={styles.containerCount}>

        {/*follow*/}
        <View style={styles.viewCount}>
          <Text style={styles.textCount}>{convertBigNumber(followCount)}</Text>
          <Text style={styles.textTitle}>Theo dõi</Text>
        </View>

        <View style={styles.viewStroke} />

        {/*notice*/}
        <View style={styles.viewCount}>
          <Text style={styles.textCount}>{convertBigNumber(notiveCount)}</Text>
          <Text style={styles.textTitle}>Để ý</Text>
        </View>

        <View style={styles.viewStroke} />

        {/*share*/}
        <View style={styles.viewCount}>
          <Text style={styles.textCount}>{convertBigNumber(shareCount)}</Text>
          <Text style={styles.textTitle}>Chia sẻ</Text>
        </View>

      </View>
    </View>

  );
};
export default memo(CountAction);
