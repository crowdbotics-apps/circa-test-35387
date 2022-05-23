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
      <View style={styles.View_13_195}>
        <View style={styles.View_I13_195_451_9977} />
      </View>
      <View style={styles.View_13_161}>
        <View style={styles.View_I13_161_5414_51866}>
          <Text style={styles.Text_I13_161_5414_51866}>2</Text>
        </View>
      </View>
      <View style={styles.View_16_126}>
        <View style={styles.View_16_127}>
          <View style={styles.View_16_128}>
            <Text style={styles.Text_16_128}>Cash Payments</Text>
          </View>
          <View style={styles.View_16_129}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
              }}
              style={styles.ImageBackground_I16_129_260_1418}
            />
          </View>
        </View>
        <View style={styles.View_14_164}>
          <Text style={styles.Text_14_164}>
            Pay your rent with cash by visiting an agent retailer near you.{" "}
          </Text>
        </View>
        <View style={styles.View_16_130}>
          <View style={styles.View_16_131}>
            <Text style={styles.Text_16_131}>Step 1: Find an Agent</Text>
          </View>
          <View style={styles.View_16_132}>
            <Text style={styles.Text_16_132}>
              Tap below to find a list of agents near you. Enter your zip code
              and filter results by “Bill Payment” or “Pay a Bill.”
            </Text>
          </View>
        </View>
        <View style={styles.View_16_133}>
          <TouchableOpacity
            style={styles.TouchableOpacity_16_134}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("14_111"))
            }
          >
            <View style={styles.View_I16_134_586_5482} />
            <View style={styles.View_I16_134_586_5483}>
              <Text style={styles.Text_I16_134_586_5483}>
                find moneygram agent
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_16_135}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("14_111"))
            }
          >
            <View style={styles.View_I16_135_586_5482} />
            <View style={styles.View_I16_135_586_5483}>
              <Text style={styles.Text_I16_135_586_5483}>
                find fidelity express agent
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.View_16_136}>
          <View style={styles.View_16_137}>
            <Text style={styles.Text_16_137}>Step 2: Pay In-Person</Text>
          </View>
          <View style={styles.View_16_138}>
            <Text style={styles.Text_16_138}>
              Tell the agent you are paying a Circa bill. After a one-time
              account setup, you will provide your phone number and pay with
              cash. A small processing fee will apply. Visit our Support Center
              for more details, as the specific process may vary by location.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_13_197}>
        <View style={styles.View_I13_197_137_722} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  View_13_195: {
    width: wp("100%"),
    height: hp("111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I13_195_451_9977: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  View_13_161: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I13_161_5414_51866: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I13_161_5414_51866: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_126: {
    width: wp("100%"),
    height: hp("85%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_16_127: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_128: {
    width: wp("42%"),
    minWidth: wp("42%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_128: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 18.017902374267578,
    fontWeight: "900",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.9590792655944824,
    textTransform: "none"
  },
  View_16_129: {
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
  ImageBackground_I16_129_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_14_164: {
    width: wp("83%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    justifyContent: "flex-start"
  },
  Text_14_164: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_130: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_131: {
    width: wp("44%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_131: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14.263427734375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_132: {
    width: wp("84%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_132: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12.345268249511719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_133: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("36%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_16_134: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I16_134_586_5482: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(30, 11, 102, 1)",
    borderWidth: 1.9181585311889648
  },
  View_I16_134_586_5483: {
    flexGrow: 1,
    width: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I16_134_586_5483: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 10.427109718322754,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.198849081993103,
    textTransform: "uppercase"
  },
  TouchableOpacity_16_135: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I16_135_586_5482: {
    flexGrow: 1,
    width: wp("88%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(30, 11, 102, 1)",
    borderWidth: 1.9181585311889648
  },
  View_I16_135_586_5483: {
    flexGrow: 1,
    width: wp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I16_135_586_5483: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 10.427109718322754,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.198849081993103,
    textTransform: "uppercase"
  },
  View_16_136: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_16_137: {
    width: wp("45%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_137: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14.263427734375,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_16_138: {
    width: wp("84%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_16_138: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 12.345268249511719,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_13_197: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("106%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I13_197_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
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
