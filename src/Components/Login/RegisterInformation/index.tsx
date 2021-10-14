import React, { FC, forwardRef, memo, useCallback, useImperativeHandle, useRef, useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import ImagePicker from "react-native-image-crop-picker";
import Icon from "../../BaseComponents/Icon";

const Avatar: FC<any> = memo((props) => {

  const { styles } = props;

  const [avatar, setAvatar] = useState(null);
  const [avatarMime, setAvatarMime] = useState(null);

  const uploadAvatar = useCallback(() => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropperToolbarTitle: "Cắt",
      includeBase64: true,
      mediaType: "photo",
      cropping: true,
      cropperCircleOverlay: true
    }).then(image => {
      setAvatar(image.data);
      setAvatarMime(image.mime);
    });
  }, []);

  return (
    <Pressable onPress={uploadAvatar}>
      <Image
        source={avatar == null ? require("../../../Assets/Images/avatar-register.png") : { uri: `data:${avatarMime};base64,${avatar}` }}
        style={styles.avatar} />
    </Pressable>

  );
});

const DisplayName: FC<any> = memo(forwardRef((props, ref) => {

  const { styles } = props;

  const [lastName, setLastName] = useState("{Họ}");
  const [firstName, setFirstName] = useState("{Tên}");
  const [reverse, setReverse] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      changeLastName(lastname: string) {
        setLastName(lastname);
      },
      changeFirstName(firstname: string) {
        setFirstName(firstname);
      }
    })
  );

  const changeReverse = useCallback(() => {
    setReverse(reverse => !reverse);
  }, []);

  return (
    <View style={styles.viewDisplayName}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.decriptionDisplayName}>Tên hiển thị là:</Text>
        <TouchableOpacity onPress={changeReverse} activeOpacity={0.5} hitSlop={styles.hitSlop}>
          <Icon type={"FontAwesome"} name={"refresh"}
                style={styles.iconReverse} />
        </TouchableOpacity>
      </View>
      <Text style={styles.displayName} numberOfLines={2}
            ellipsizeMode={"tail"}>{reverse ? firstName + " " + lastName : lastName + " " + firstName}</Text>
    </View>
  );
}));

const RegisterInformation: FC<any> = forwardRef((props, ref) => {
  const { color } = props;
  const styles = style(color);

  const displayName = useRef(null);

  useImperativeHandle(
    ref,
    () => ({
      onPressNext(index: number) {
        console.log("đăng ký");
      }
    })
  );

  const changeLastName = useCallback((text: string) => {
    displayName.current.changeLastName(text.trim());
  }, []);

  const changeFirstName = useCallback((text: string) => {
    displayName.current.changeFirstName(text.trim());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.bigTxt} numberOfLines={2} ellipsizeMode={"tail"}>Chào mừng jimmi</Text>
      <Text style={styles.smallTxt}>Một bức ảnh và tên sẽ giúp bạn dễ dàng kết nối với mọi người !</Text>

      <View style={{ flexDirection: "row" }}>

        <Avatar styles={styles} />

        <DisplayName styles={styles} ref={displayName} />
      </View>

      <View style={styles.viewInput}>
        <TextInput
          onChangeText={changeLastName}
          placeholder={"Họ"}
          style={[styles.input, { width: "60%" }]}
          underlineColorAndroid={"transparent"}
          returnKeyType={"next"}
        />

        <TextInput
          onChangeText={changeFirstName}
          placeholder={"Tên"}
          style={[styles.input, { width: "35%" }]}
          underlineColorAndroid={"transparent"}
          returnKeyType={"send"}
        />
      </View>

    </View>
  );
});

export default memo(RegisterInformation);
