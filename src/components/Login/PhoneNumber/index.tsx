import React, { FC, memo, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import style from "./style";
import { COUNTRY_CODE } from "../../../values";
import DropDownPicker from "react-native-dropdown-picker";
import { SHADOW_3 } from "../../../values/shadows";
import { compareCountryCode } from "../../../utils";
import Icon from "../../Icon";
import { moderateScale } from "react-native-size-matters";

const PhoneNumber: FC<any> = (props) => {
  const { color } = props;
  const styles = style(color);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("+84");
  const [items, setItems] = useState(COUNTRY_CODE.sort(compareCountryCode));

  console.log(value);
  return (
    <View style={styles.container}>
      <Text style={styles.bigTxt}>Xin chào!</Text>
      <Text style={styles.smallTxt}>Bắt đầu với số điện thoại</Text>

      <View style={{ width: "100%" }}>

        <View
          style={{
            zIndex: 3,
            height: 50,
            width: "100%",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomRightRadius: open ? 0 : 8,
            borderBottomLeftRadius: open ? 0 : 8,
            borderLeftColor: "#24A8AF",
            borderTopColor: "#24A8AF",
            borderRightColor: "#24A8AF",
            borderBottomColor: open ? "#00000000" : "#24A8AF",
            borderWidth: 1,
            backgroundColor: "#fff",
            flexDirection:'row'
          }}>

          <Pressable onPress={() => setOpen(true)} style={{width:'33%', height:'100%', alignItems:'center', justifyContent:'space-between', paddingLeft:15, paddingRight:10, flexDirection:'row'}}>
            <Text style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#5B6CA8"
            }}>{value}</Text>
            <Icon type={'MaterialIcons'} name={'arrow-drop-down'} size={moderateScale(20,0.3)} color={"#5B6CA8"}/>
          </Pressable>

          <TextInput
            placeholder={"Số điện thoại"}
            keyboardType={"numeric"}
            style={{
              width:'67%',
              fontWeight: "bold",
              textAlignVertical: "center",
              fontSize: 18,
              color: "#4F5458",
              paddingVertical: 0,
            }}
          />

        </View>

        <DropDownPicker
          zIndex={-1}
          zIndexInverse={-1}
          showArrowIcon={false}
          showTickIcon={false}
          style={{
            zIndex: -1,
            height: 50,
            width: 0,
            opacity: 0
          }}
          dropDownContainerStyle={{
            borderRadius: 8,
            borderColor: "#24A8AF",
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 0,
            ...SHADOW_3
          }}
          containerStyle={{
            position: "absolute",
            width: "100%"
          }}
          flatListProps={{
            showsVerticalScrollIndicator: false
          }}
          labelStyle={{
            fontSize: 18,
            color: "#5B6CA8"
          }}
          textStyle={{
            fontSize: 18,
            color: "#5B6CA8"
          }}
          itemKey={"code"}
          // placeholder={"+84"}
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
};

export default memo(PhoneNumber);
