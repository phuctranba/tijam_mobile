import React, { FC, forwardRef, memo, useCallback, useImperativeHandle, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import style from "./style";
import Icon from "../../BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";
import { SHADOW_3 } from "../../../Utils/Values/shadows";

const ButtonRouter: FC<any> = forwardRef((props, ref) => {
  const { color, onPressNext, onPressPre } = props;
  const styles = style(color);

  const [currentStep, setCurrentStep] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      setStep(step: number) {
        setCurrentStep(step);
      }
    })
  );

  const onPressToNext = useCallback(() => {
      onPressNext(currentStep);
  }, [currentStep]);

  const onPressToPre = useCallback(() => {
    onPressPre(currentStep);
  }, [currentStep]);

  return (
    <View style={styles.viewTouch}>
      <View style={{ width: "25%" }} />

      {currentStep == 0 ?
        <View style={{ width: "25%" }} /> :
        <TouchableOpacity activeOpacity={0.8}
                          onPress={onPressToPre}
                          style={[styles.touchNext, { backgroundColor: "#00000000" }]}>

          <Icon type={"MaterialIcons"} name={"keyboard-arrow-left"} size={moderateScale(33, 0.3)}
                color={"rgba(109,123,129,0.8)"} />
        </TouchableOpacity>}

      <TouchableOpacity activeOpacity={0.8}
                        onPress={onPressToNext}
                        style={[styles.touchNext, { ...SHADOW_3 }]}>
        <Icon type={"MaterialIcons"} name={"keyboard-arrow-right"} size={moderateScale(33, 0.3)} color={"white"} />
      </TouchableOpacity>
    </View>
  );
});

export default memo(ButtonRouter);
