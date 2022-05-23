import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_113}>
        <View style={styles.View_I2_113_5414_51866}>
          <Text style={styles.Text_I2_113_5414_51866}>2</Text>
        </View>
      </View>
      <View style={styles.View_2_112}>
        <View style={styles.View_I2_112_451_9977} />
      </View>
      <View style={styles.View_34_45}>
        <View style={styles.View_34_46}>
          <View style={styles.View_34_47}>
            <Text style={styles.Text_34_47}>Cash App</Text>
          </View>
          <View style={styles.View_34_48}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
              }}
              style={styles.ImageBackground_I34_48_260_1418}
            />
          </View>
        </View>
        <View style={styles.View_34_49}>
          <Text style={styles.Text_34_49}>
            Pay your rent with Cash App using a QR code or $wearecirca.
          </Text>
        </View>
        <View style={styles.View_34_50}>
          <View style={styles.View_34_51}>
            <Text style={styles.Text_34_51}>Step 1: Download Cash App</Text>
          </View>
          <View style={styles.View_34_52}>
            <Text style={styles.Text_34_52}>
              Download Cash App on the iOS App Store or Google Play Store.
            </Text>
          </View>
        </View>
        <View style={styles.View_34_56}>
          <View style={styles.View_34_57}>
            <Text style={styles.Text_34_57}>Step 2: Pay on Cash App</Text>
          </View>
          <View style={styles.View_34_58}>
            <Text style={styles.Text_34_58}>
              Scan the QR code below using your mobile device or search
              $wearecirca. A 2.75% processing fee will apply.{" "}
            </Text>
          </View>
        </View>
        <View style={styles.View_39_47}>
          <View style={styles.View_39_48}>
            <Text style={styles.Text_39_48}>Circa $wearecirca</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9236/4ce9/640d8e4b41f9519215ced04685d7d084"
            }}
            style={styles.ImageBackground_39_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eff5/505c/82bd133707744ab1876d731e7e97bc2a"
            }}
            style={styles.ImageBackground_39_50}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_34_59}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_29"))
          }
        >
          <View style={styles.View_I34_59_202_2681} />
          <View style={styles.View_I34_59_202_2682}>
            <Text style={styles.Text_I34_59_202_2682}>
              continue with cash app
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_34_60}>
          <Text style={styles.Text_34_60}>
            Access this info anytime in Settings &gt; Payment Methods.
          </Text>
        </View>
      </View>
      <View style={styles.View_2_128}>
        <View style={styles.View_I2_128_137_722} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("145%") },
  View_2_113: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I2_113_5414_51866: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_113_5414_51866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_112: {
    width: wp("100%"),
    height: hp("145%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_112_451_9977: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  View_34_45: {
    width: wp("100%"),
    height: hp("120%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_34_46: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_47: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_47: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 18.017902374267578,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.9590792655944824,
    textTransform: "none"
  },
  View_34_48: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I34_48_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_34_49: {
    width: wp("83%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_34_49: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_50: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_51: {
    width: wp("61%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_51: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_52: {
    width: wp("84%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_52: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_56: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_34_57: {
    width: wp("54%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_57: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_34_58: {
    width: wp("84%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_34_58: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_47: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("51%")
  },
  View_39_48: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_39_48: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_39_49: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_39_50: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  TouchableOpacity_34_59: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I34_59_202_2681: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_I34_59_202_2682: {
    flexGrow: 1,
    width: wp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I34_59_202_2682: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_34_60: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("108%"),
    justifyContent: "flex-start"
  },
  Text_34_60: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_128: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_128_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
