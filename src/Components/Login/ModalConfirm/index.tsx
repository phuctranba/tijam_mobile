import React, { FC, forwardRef, memo, useCallback, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import Modal from "react-native-modal";
import Icon from "../../BaseComponents/Icon";
import { moderateScale, scale } from "react-native-size-matters";
import { NUMBER_KEY_BOARD } from "../../../Utils/Values";

const data = [
  {
    order: 0
  },
  {
    order: 1
  },
  {
    order: 2
  },
  {
    order: 3
  },
  {
    order: 4
  },
  {
    order: 5
  }
];

const InputCode: FC<any> = memo((props) => {
  const { styles } = props;
  const [currentInput, setCurrentInput] = useState(0);
  const [check, setCheck] = useState(false);
  const cellRefs = useRef([]);
  const [values, setValues] = useState([]);

  const renderRowKeyBoard = useCallback((items: any, index: number) => {
    return (
      <View key={index.toString()} style={styles.viewRowKeyBoard}>
        {items.map(renderButtonKeyBoard)}
      </View>
    );
  }, [currentInput]);

  const renderButtonKeyBoard = useCallback((item: any) => {

    return (
      <TouchableOpacity activeOpacity={0.8} key={item.value.toString()}
                        onPress={() => pressButtonKeyBoard(item.value)}
                        disabled={item.value == -2 ? true : item.value == -1 && !check}
                        style={[styles.touchButtonKeyBoard, {
                          opacity: item.value == -2 ? 0 : 1,
                          backgroundColor: item.value == -1 && !check ? "#6D7B81" : "#24A8AF"
                        }]}>
        {item.value != -1 ? <Text style={styles.txtButtonKeyBoard}>{item.value}</Text>
          :
          <Icon type={"MaterialIcons"} name={"keyboard-arrow-right"} size={moderateScale(33, 0.3)} color={"white"} />}
      </TouchableOpacity>
    );
  }, [currentInput]);

  const pressButtonKeyBoard = useCallback((value: number) => {
    if (value == -1) {
      console.log("xac minh");
    } else {
      if (currentInput != 6) {
        cellRefs.current[currentInput].setNativeProps({ text: value.toString() });

        if (values.length == 5 && !check)
          setCheck(true);

        values[currentInput] = value;
        setValues(values);
        setCurrentInput(currentInput => currentInput + 1);
      }
    }

  }, [currentInput]);

  return (
    <View>
      <View style={styles.containerInputCode}>
        {
          data.map((item) => <TextInput
            maxLength={1} key={item.order}
            style={[styles.input, { borderColor: currentInput == item.order ? "#DE3576" : "#24A8AF" }]}
            keyboardType={"numbers-and-punctuation"}
            underlineColorAndroid={"transparent"}
            blurOnSubmit={false}
            ref={(element) => cellRefs.current[item.order] = element}
            onPressIn={() => setCurrentInput(item.order)}
            showSoftInputOnFocus={false}
            caretHidden={true}
            value={"-"}
          />)
        }
      </View>

      <View style={styles.containerKeyBoard}>
        {
          NUMBER_KEY_BOARD.map(renderRowKeyBoard)
        }
      </View>
    </View>

  );
});

const ModalConfirm: FC<any> = forwardRef((props, ref) => {
  const { color } = props;
  const styles = style(color);

  const [reSend, setResend] = useState(false);
  const [visible, setVisible] = useState(true);
  const txtCountDown = useRef(null);
  let intervalRef = useRef();
  let countDown = 10;

  useImperativeHandle(
    ref,
    () => ({
      show() {
        setVisible(true);
      },
      hide() {
        setVisible(false);
      }
    })
  );


  const decreaseNum = () => {
    if (countDown > -1)
      txtCountDown.current.setNativeProps({ text: (countDown--).toString() + " s" });
    else {
      clearInterval(intervalRef.current);
      setResend(true);
    }
  };

  useEffect(() => {
    if (!reSend)
      intervalRef.current = setInterval(decreaseNum, 1000);

    return () => clearInterval(intervalRef.current);
  }, [reSend]);


  return (
    <Modal
      isVisible={visible}
      animationIn={"fadeInUp"}
      animationInTiming={400}
      animationOutTiming={400}
      animationOut={"fadeOutDown"}
      backdropTransitionInTiming={400}
      backdropTransitionOutTiming={400}
      hideModalContentWhileAnimating={true}
      backdropColor={"#1A1819"}
      backdropOpacity={0.6}
      useNativeDriver={true}
      onSwipeComplete={() => setVisible(false)}
      swipeDirection={"down"}
      statusBarTranslucent
      style={styles.modal}>

      <View style={styles.container}>
        {/*thông tin mô tả*/}
        <Text style={styles.txtTitle}>Xác minh</Text>
        <Text style={styles.txtDetail}>Một SMS gồm 6 chữ số đã được gửi đến:</Text>
        <View style={styles.viewDetail}>
          <View>
            <Text style={styles.txtPhoneNumber}>(+84) 979 326 786</Text>
            <Text style={styles.txtDetail}>Mã số này còn hiệu lực trong:</Text>
          </View>

          {reSend ?
            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => setResend(false)}
                              style={[styles.touchButtonKeyBoard,{alignSelf: "flex-end", marginRight: scale(20)}]}>
              <Text style={[styles.txtButtonKeyBoard,{fontSize:moderateScale(18,0.3)}]}>Gửi lại</Text>
            </TouchableOpacity>
            :
            <TextInput
              editable={false}
              ref={txtCountDown}
              style={styles.txtCountDown}
              value={countDown.toString()+" s"}
            />}
        </View>

        <InputCode styles={styles} />

      </View>

    </Modal>
  );
});

export default memo(ModalConfirm);
