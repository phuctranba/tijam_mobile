import React, { FC, forwardRef, memo, useImperativeHandle, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import style from "./style";
import { COUNTRY_CODE } from "../../../Utils/Values";
import DropDownPicker from "react-native-dropdown-picker";
import { compareCountryCode } from "../../../Utils/Helpers";
import Icon from "../../BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";

const PhoneNumber: FC<any> = forwardRef((props, ref) => {
  const { color, scrollTo } = props;
  const styles = style(color);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("+84");
  const [items, setItems] = useState(COUNTRY_CODE.sort(compareCountryCode));

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
      <Text style={styles.bigTxt}>Xin chào!</Text>
      <Text style={styles.smallTxt}>Bắt đầu với số điện thoại</Text>

      <View style={{ width: "100%" }}>

        <View
          style={[styles.viewInput, {
            borderBottomRightRadius: open ? 0 : moderateScale(8),
            borderBottomLeftRadius: open ? 0 : moderateScale(8),
            borderBottomColor: open ? "#00000000" : "#24A8AF"
          }]}>

          <Pressable onPress={() => setOpen(true)} style={styles.pressCountryCode}>
            <Text style={styles.txtCountryValue}>{value}</Text>
            <Icon type={"MaterialIcons"} name={"arrow-drop-down"}
                  size={moderateScale(20, 0.3)} color={"#5B6CA8"} />
          </Pressable>

          <TextInput
            placeholder={"Số điện thoại"}
            keyboardType={"numeric"}
            style={styles.input}
            underlineColorAndroid={"transparent"}
            returnKeyType={"send"}
          />

        </View>

        <DropDownPicker
          zIndex={-1}
          zIndexInverse={-1}
          showArrowIcon={false}
          showTickIcon={false}
          style={styles.pickerStyle}
          dropDownContainerStyle={styles.dropdownContainerStyles}
          containerStyle={styles.dropdownContainer}
          flatListProps={{
            showsVerticalScrollIndicator: false
          }}
          labelStyle={styles.txtLabel}
          textStyle={styles.txtDropdownStyle}
          itemKey={"code"}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

      </View>

    </View>
  );
});

export default memo(PhoneNumber);
