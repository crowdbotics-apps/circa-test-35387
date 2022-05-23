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
      <View style={styles.View_15_779}>
        <View style={styles.View_15_780}>
          <Text style={styles.Text_15_780}>Onboarding Screens</Text>
        </View>
      </View>
      <View style={styles.View_15_781}>
        <View style={styles.View_15_782}>
          <View style={styles.View_15_783}>
            <View style={styles.View_I15_783_5414_50326}>
              <Text style={styles.Text_I15_783_5414_50326}>1</Text>
            </View>
          </View>
          <View style={styles.View_15_784}>
            <Text style={styles.Text_15_784}>
              As a resident, I want to see some orientation screens when
              launching the app for the first time, so I have an idea of what to
              expect.
            </Text>
          </View>
        </View>
        <View style={styles.View_15_785}>
          <View style={styles.View_22_1435}>
            <Text style={styles.Text_22_1435}>
              When the resident launches the app for the first time, they see a
              series of three orientation/onboarding screens. The resident will
              NOT see these screens again, upon future visit to the app.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_787}>
        <View style={styles.View_15_788}>
          <View style={styles.View_15_789}>
            <View style={styles.View_I15_789_5414_50345}>
              <Text style={styles.Text_I15_789_5414_50345}>2</Text>
            </View>
          </View>
          <View style={styles.View_15_790}>
            <Text style={styles.Text_15_790}>
              As a resident, I want to use page indicator controls, so I can
              navigate back and forth through the orientation screens.
            </Text>
          </View>
        </View>
        <View style={styles.View_15_791}>
          <View style={styles.View_22_1526}>
            <Text style={styles.Text_22_1526}>
              Using the page indicator controls, the resident can swipe left to
              previous screen(s) or right to following screen(s).
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_793}>
        <View style={styles.View_15_794}>
          <View style={styles.View_15_795}>
            <View style={styles.View_I15_795_5414_50392}>
              <Text style={styles.Text_I15_795_5414_50392}>3</Text>
            </View>
          </View>
          <View style={styles.View_15_796}>
            <Text style={styles.Text_15_796}>
              As a resident, I want to skip the onboarding screens and go to
              account registration, so I can save time.
            </Text>
          </View>
        </View>
        <View style={styles.View_15_797}>
          <View style={styles.View_22_5885}>
            <Text style={styles.Text_22_5885}>
              The resident can bypass the onboarding screens at anytime by
              tapping the &quot;Get Started&quot; button, taking them to account
              registration.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_15_799}>
        <View style={styles.View_15_800}>
          <View style={styles.View_15_801}>
            <View style={styles.View_I15_801_5414_50413}>
              <Text style={styles.Text_I15_801_5414_50413}>4</Text>
            </View>
          </View>
          <View style={styles.View_15_802}>
            <Text style={styles.Text_15_802}>
              As a resident, I want to skip the onboarding screens and go to
              account sign in, so I can sign in using my existing account.
            </Text>
          </View>
        </View>
        <View style={styles.View_15_803}>
          <View style={styles.View_22_5888}>
            <Text style={styles.Text_22_5888}>
              If the resident already has a Circa account that they created on
              web or another mobile device, they can tap the linked text
              (&quot;Sign In&quot;) to go to Sign In page (NOT first-time
              account registration).
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_1726}>
        <View style={styles.View_22_1727}>
          <View style={styles.View_22_1730}>
            <View style={styles.View_I22_1730_22_1729}>
              <Text style={styles.Text_I22_1730_22_1729}>5</Text>
            </View>
          </View>
          <View style={styles.View_22_1732}>
            <Text style={styles.Text_22_1732}>*Design Specification*</Text>
          </View>
        </View>
        <View style={styles.View_22_1733}>
          <View style={styles.View_22_2135}>
            <Text style={styles.Text_22_2135}>
              Titles and text should be top aligned across all three screens, so
              the transitions between the three screens are seamless.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_1850}>
        <View style={styles.View_22_1851}>
          <View style={styles.View_22_1854}>
            <View style={styles.View_I22_1854_22_1853}>
              <Text style={styles.Text_I22_1854_22_1853}>6</Text>
            </View>
          </View>
          <View style={styles.View_22_1856}>
            <Text style={styles.Text_22_1856}>*Design Specification*</Text>
          </View>
        </View>
        <View style={styles.View_22_1857}>
          <View style={styles.View_45_577}>
            <Text style={styles.Text_45_577}>
              The illustrations should be top aligned across all three screens,
              so the transitions between the three screens are seamless.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_1877}>
        <View style={styles.View_22_1878}>
          <View style={styles.View_22_1881}>
            <View style={styles.View_I22_1881_22_1880}>
              <Text style={styles.Text_I22_1881_22_1880}>7</Text>
            </View>
          </View>
          <View style={styles.View_22_1883}>
            <Text style={styles.Text_22_1883}>*Design Specification*</Text>
          </View>
        </View>
        <View style={styles.View_22_1884}>
          <View style={styles.View_22_2138}>
            <Text style={styles.Text_22_2138}>
              Page controls, button, and linked &quot;Sign In&quot; text should
              all have EXACTLY the same position on all three screens, so the
              transitions between the three screens are seamless.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_215_567}>
        <View style={styles.View_215_568}>
          <View style={styles.View_215_571}>
            <View style={styles.View_I215_571_215_570}>
              <Text style={styles.Text_I215_571_215_570}>8</Text>
            </View>
          </View>
          <View style={styles.View_215_573}>
            <Text style={styles.Text_215_573}>Developer Note</Text>
          </View>
        </View>
        <View style={styles.View_215_574}>
          <View style={styles.View_215_595}>
            <Text style={styles.Text_215_595}>No API required</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("214%") },
  View_15_779: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_15_780: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_15_780: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_15_781: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_782: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_783: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I15_783_5414_50326: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I15_783_5414_50326: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_784: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_784: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_785: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1435: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_1435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_15_787: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_788: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_789: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I15_789_5414_50345: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I15_789_5414_50345: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_790: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_790: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_791: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1526: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_1526: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_15_793: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("70%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_794: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_795: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I15_795_5414_50392: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I15_795_5414_50392: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_796: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_796: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_797: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("12%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_5885: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_5885: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_15_799: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("97%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_800: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_15_801: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I15_801_5414_50413: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I15_801_5414_50413: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_802: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_15_802: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_15_803: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_5888: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_5888: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_22_1726: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("130%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1727: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1730: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 72, 34, 1)"
  },
  View_I22_1730_22_1729: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_1730_22_1729: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1732: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_1732: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1733: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_2135: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_2135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_22_1850: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("150%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1851: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1854: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 72, 34, 1)"
  },
  View_I22_1854_22_1853: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_1854_22_1853: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1856: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_1856: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1857: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_45_577: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_45_577: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_22_1877: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("173%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1878: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_1881: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 72, 34, 1)"
  },
  View_I22_1881_22_1880: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_1881_22_1880: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1883: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_1883: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_1884: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_2138: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_2138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_215_567: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("199%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_215_568: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_215_571: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(123, 97, 255, 1)"
  },
  View_I215_571_215_570: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I215_571_215_570: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_215_573: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_215_573: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_215_574: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("8%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_215_595: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_215_595: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
