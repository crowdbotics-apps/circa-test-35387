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
      <View style={styles.View_22_3958}>
        <View style={styles.View_22_3959}>
          <Text style={styles.Text_22_3959}>Email Verification</Text>
        </View>
      </View>
      <View style={styles.View_22_3960}>
        <View style={styles.View_22_3961}>
          <View style={styles.View_22_3964}>
            <View style={styles.View_I22_3964_22_3963}>
              <Text style={styles.Text_I22_3964_22_3963}>1</Text>
            </View>
          </View>
          <View style={styles.View_22_3966}>
            <Text style={styles.Text_22_3966}>
              As a resident, I want to open my email app, so I can verify my
              email address.
            </Text>
          </View>
        </View>
        <View style={styles.View_22_3967}>
          <View style={styles.View_178_846}>
            <Text style={styles.Text_178_846}>
              When the user taps the &quot;Open Email App&quot; button, their
              email app (i.e. Mac Mail, Gmail app) opens to the inbox. From
              there the user opens the verification email from Circa, taps on
              the &quot;Verify Email&quot; button and they are redirected back
              to the app, continuing to the &quot;Contact Information&quot;
              screen.{" "}
            </Text>
          </View>
          <View style={styles.View_178_848}>
            <Text style={styles.Text_178_848}> </Text>
          </View>
          <View style={styles.View_178_850}>
            <Text style={styles.Text_178_850}>
              the phone will look for a default email app. If none exist then it
              will open browser; if multiple found, then it will ask the user a
              choice of which one to open and then opens accordingly (eg: gmail
              app, outlook app, yahoo app, browser, etc..)  If the
              resident&#39;s phone settings are set to block apps from opening,
              then the user will be directed to the ReactJS resident web, upon
              which they will see a web view WITH popup asking if resident wants
              to be redirected to the app.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_3972}>
        <View style={styles.View_22_3973}>
          <View style={styles.View_22_3976}>
            <View style={styles.View_I22_3976_22_3975}>
              <Text style={styles.Text_I22_3976_22_3975}>2</Text>
            </View>
          </View>
          <View style={styles.View_22_3978}>
            <Text style={styles.Text_22_3978}>
              As a resident, I did not receive an email verification email and
              want Circa to send a new email verification email, so I can verify
              my email address and move forward with account registration.
            </Text>
          </View>
        </View>
        <View style={styles.View_22_3979}>
          <View style={styles.View_22_5090}>
            <Text style={styles.Text_22_5090}>
              If the verification email is not received, the resident can tap
              &quot;Send New Code&quot; linked text to request another
              verification email to the same email address.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_3984}>
        <View style={styles.View_22_3985}>
          <View style={styles.View_22_3988}>
            <View style={styles.View_I22_3988_22_3987}>
              <Text style={styles.Text_I22_3988_22_3987}>3</Text>
            </View>
          </View>
          <View style={styles.View_22_3990}>
            <Text style={styles.Text_22_3990}>
              As a resident, I want to understand more, so I can answer my
              question/solve a problem I am facing.
            </Text>
          </View>
        </View>
        <View style={styles.View_22_3991}>
          <View style={styles.View_22_5239}>
            <Text style={styles.Text_22_5239}>
              If the resident has questions, they can tap the info button in the
              upper righthand corner. A modal will slide up from the button with
              further explanation.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_4008}>
        <View style={styles.View_22_4009}>
          <View style={styles.View_22_4012}>
            <View style={styles.View_I22_4012_22_4011}>
              <Text style={styles.Text_I22_4012_22_4011}>4</Text>
            </View>
          </View>
          <View style={styles.View_22_4014}>
            <Text style={styles.Text_22_4014}>
              As a resident, I want to move back to the previous screen, so I
              can start anew with a new email address.
            </Text>
          </View>
        </View>
        <View style={styles.View_22_4015}>
          <View style={styles.View_22_5442}>
            <Text style={styles.Text_22_5442}>
              If the resident has entered an incorrect email address, they can
              tap the back chevron in the upper lefthand corner to return to
              Create Account screen.{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_4020}>
        <View style={styles.View_22_4021}>
          <View style={styles.View_22_4024}>
            <View style={styles.View_I22_4024_22_4023}>
              <Text style={styles.Text_I22_4024_22_4023}>5</Text>
            </View>
          </View>
          <View style={styles.View_22_4026}>
            <Text style={styles.Text_22_4026}>
              As a resident, I want to see the email address that the
              verification email was sent to, so I can ensure it&#39;s the
              correct email address.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_22_5443}>
        <View style={styles.View_22_5444}>
          <View style={styles.View_22_5447}>
            <View style={styles.View_I22_5447_22_5446}>
              <Text style={styles.Text_I22_5447_22_5446}>6</Text>
            </View>
          </View>
          <View style={styles.View_22_5449}>
            <Text style={styles.Text_22_5449}>*Design Specification*</Text>
          </View>
        </View>
        <View style={styles.View_22_5450}>
          <View style={styles.View_22_5565}>
            <Text style={styles.Text_22_5565}>
              If a resident is navigating to a previous page, the transition is
              always slide left animation.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("214%") },
  View_22_3958: {
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
  View_22_3959: {
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
  Text_22_3959: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.3,
    textTransform: "none"
  },
  View_22_3960: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_3961: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_3964: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I22_3964_22_3963: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_3964_22_3963: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_3966: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_3966: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_3967: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("63%"),
    minHeight: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_178_846: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_178_846: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_178_848: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_178_848: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_178_850: {
    width: wp("91%"),
    minWidth: wp("91%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_178_850: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_22_3972: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("87%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_3973: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_3976: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(24, 160, 251, 1)"
  },
  View_I22_3976_22_3975: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_3976_22_3975: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_3978: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_22_3978: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_3979: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_5090: {
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
  Text_22_5090: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_22_3984: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("122%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_3985: {
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
  View_22_3988: {
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
  View_I22_3988_22_3987: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_3988_22_3987: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_3990: {
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
  Text_22_3990: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_3991: {
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
  View_22_5239: {
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
  Text_22_5239: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_22_4008: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("149%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_4009: {
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
  View_22_4012: {
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
  View_I22_4012_22_4011: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_4012_22_4011: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_4014: {
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
  Text_22_4014: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_4015: {
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
  View_22_5442: {
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
  Text_22_5442: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.08,
    textTransform: "none"
  },
  View_22_4020: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("177%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_4021: {
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
  View_22_4024: {
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
  View_I22_4024_22_4023: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_4024_22_4023: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_4026: {
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
  Text_22_4026: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_5443: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("194%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_22_5444: {
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
  View_22_5447: {
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
  View_I22_5447_22_5446: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I22_5447_22_5446: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_5449: {
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
  Text_22_5449: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_5450: {
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
  View_22_5565: {
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
  Text_22_5565: {
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
