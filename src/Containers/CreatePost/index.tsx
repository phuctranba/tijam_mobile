import React, { FC, memo, useCallback, useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LIGHT } from "../../Utils/Themes";
import style from "./style";
import { SIZES } from "../../Utils/Values";
import Icon from "../../Components/BaseComponents/Icon";
import { moderateScale } from "react-native-size-matters";
import LottieView from "lottie-react-native";
import ListType from "../../Components/CreatePost/ListType";
import DropDownPicker from "react-native-dropdown-picker";
import { SHADOW_3 } from "../../Utils/Values/shadows";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { launchImageLibrary } from "react-native-image-picker";

const CreatePost: FC<any> = (props) => {
  const { navigation } = props;
  const styles = style(LIGHT.HOME);
  const [open, setOpen] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const [value, setValue] = useState(null);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [responseImage, setResponseImage] = useState<any>(null);
  const [items, setItems] = useState([
    { label: "0 ngày", value: 0 },
    { label: "1 ngày", value: 1 },
    { label: "2 ngày", value: 2 },
    { label: "3 ngày", value: 3 },
    { label: "4 ngày", value: 4 },
    { label: "5 ngày", value: 5 },
    { label: "6 ngày", value: 6 }
  ]);


  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.log("A date has been picked: ", date);
    hideTimePicker();
  };

  const addTag = useCallback(() => setShowTag(true), []);
  const removeTag = useCallback(() => setShowTag(false), []);
  const addImage = useCallback(() => {
    launchImageLibrary(
      { mediaType: "photo", maxWidth: 1024, maxHeight: 2048, quality: 1, includeBase64: true },
      setResponseImage
    );
  }, []);
  const removeImage = useCallback(() => setResponseImage(null), []);

  return (
    <View
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#fff" }}>

      <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.95} style={[styles.routerButton]}>
        <Icon type={"MaterialIcons"} name={"keyboard-arrow-left"} size={moderateScale(32, 0.3)} color={"#24A8AF"} />
      </TouchableOpacity>

      <View style={{
        alignSelf: "flex-end",
        marginTop: SIZES.HEIGHT_PADDINGTOP / 2,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "100%"
      }}>
        <View style={{ alignItems: "flex-end", paddingBottom: 20 }}>
          <Text style={{ textAlign: "right", fontWeight: "bold", fontSize: 22, color: "#4F5458" }}>Có gì hot?</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={{ textAlign: "right", fontWeight: "bold", fontSize: 26, color: "#24A8AF" }}>Chia sẻ
              ngay!</Text>
          </TouchableOpacity>
        </View>
        <LottieView style={{ height: 140, marginHorizontal: 10 }}
                    source={require("../../Assets/Loties/create-post.json")} autoPlay />
      </View>

      {/*form*/}

      {/*type*/}
      <View style={{ width: "100%", marginBottom: 8 }}>
        <Text style={{ color: "#4F5458", fontWeight: "bold", fontSize: 15, marginLeft: "5%" }}>
          Thể loại:</Text>
        <ListType color={LIGHT.CREATEPOST} />
      </View>

      {/*duration*/}
      <View style={{ width: "100%", paddingHorizontal: "5%", marginVertical: 8 }}>
        <Text style={{ color: "#4F5458", fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
          Thời gian tồn tại:</Text>

        <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between" }}>
          <DropDownPicker
            style={{
              height: 45,
              width: "100%",
              borderRadius: 8,
              borderColor: "#24A8AF",
              borderWidth: 1,
              paddingHorizontal: 15
            }}
            dropDownContainerStyle={{
              borderRadius: 8,
              borderColor: "#24A8AF",
              borderLeftWidth: 1,
              borderBottomWidth: 1,
              borderRightWidth: 1,
              borderTopWidth: 0,
              paddingHorizontal: 4,
              ...SHADOW_3
            }}
            containerStyle={{
              width: "40%"
            }}
            flatListProps={{
              showsVerticalScrollIndicator: false
            }}
            labelStyle={{
              fontSize: 17,
              color: "#4F5458"
            }}
            textStyle={{
              fontSize: 17,
              color: "#4F5458"
            }}
            placeholder={"0 ngày"}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />

          <Pressable onPress={showTimePicker}
                     style={{
                       height: 45,
                       width: "55%",
                       borderRadius: 8,
                       borderColor: "#24A8AF",
                       borderWidth: 1,
                       paddingHorizontal: 15,
                       alignItems: "center",
                       flexDirection: "row",
                       justifyContent: "space-between"
                     }}>
            <Text
              style={{
                color: "#4F5458",
                backgroundColor: "#fff",
                fontSize: 17
              }}> 000 giờ 23 phút</Text>
            <Icon type={"MaterialCommunityIcons"} name={"clock-outline"} size={moderateScale(25, 0.3)}
                  color={"#4F5458"} />
          </Pressable>
        </View>
      </View>

      {/*content*/}
      <View style={{ flex: 1, paddingHorizontal: "5%", marginVertical: 8 }}>
        <Text style={{ color: "#4F5458", fontWeight: "bold", fontSize: 15, marginBottom: 5 }}>
          Nội dung:</Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: 8,
            borderColor: "#24A8AF",
            borderWidth: 1,
            paddingHorizontal: 10
          }}>

          <View style={{ width: "100%", flexDirection: "row", alignItems: "center", height: 45 }}>
            <TextInput

              placeholder={"Nhãn (2 chữ ~ 15 ký tự)"}
              style={{
                flex: 1,
                fontWeight: "bold",
                textAlignVertical: "top",
                fontSize: 17,
                color: "#4F5458",
                paddingVertical: 0
              }}
            />
            <TouchableOpacity onPress={addTag} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }} disabled={showTag}
                              style={{ marginHorizontal: 8 }}>
              <Icon type={"MaterialCommunityIcons"} name={"tag-plus"} size={25}
                    color={showTag ? "#4F5458" : "#24A8AF"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={addImage} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}
                              disabled={responseImage != null}
                              style={{ marginHorizontal: 8 }}>
              <Icon type={"MaterialCommunityIcons"} name={"image-plus"} size={25}
                    color={responseImage != null ? "#4F5458" : "#24A8AF"} />
            </TouchableOpacity>
          </View>

          {showTag ?
            <View style={{ width: "100%", flexDirection: "row", alignItems: "center", height: 40 }}>
              <TextInput
                style={{
                  flex: 1,
                  textAlignVertical: "top",
                  fontSize: 17,
                  color: "#24A8AF",
                  paddingVertical: 0
                }}
              />
              <TouchableOpacity onPress={removeTag} hitSlop={{ top: 8, left: 8, right: 8, bottom: 8 }}
                                style={{ marginHorizontal: 8 }}>
                <Icon type={"MaterialCommunityIcons"} name={"close-circle-outline"} size={23} color={"#24A8AF"} />
              </TouchableOpacity>
            </View>
            :
            null}

          <ScrollView style={{ flex: 1 }}>
            <TextInput
              placeholder={"Nội dung"}
              multiline={true}
              style={{
                flex: 1,
                textAlignVertical: "top",
                fontSize: 17,
                color: "#4F5458",
                paddingVertical: 0
              }}
            />
          </ScrollView>

          {responseImage?.assets &&
          responseImage?.assets.map(({ uri }) => (
            <View key={uri}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={{ width: 200, height: 200 }}
                source={{ uri: uri }}
              />
            </View>
          ))}

        </View>
      </View>

      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default memo(CreatePost);
