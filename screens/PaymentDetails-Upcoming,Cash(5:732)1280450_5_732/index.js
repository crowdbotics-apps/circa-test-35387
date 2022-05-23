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
      <View style={styles.View_5_733} />
      <View style={styles.View_5_734}>
        <View style={styles.View_I5_734_228_176}>
          <Text style={styles.Text_I5_734_228_176}>123 Main Street #1A</Text>
        </View>
        <View style={styles.View_I5_734_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I5_734_228_177_154_460}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_735}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_1476"))
        }
      >
        <View style={styles.View_I5_735_228_7} />
        <View style={styles.View_I5_735_228_8}>
          <Text style={styles.Text_I5_735_228_8}>past</Text>
        </View>
        <View style={styles.View_I5_735_228_9}>
          <Text style={styles.Text_I5_735_228_9}>upcoming</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_167_1676}>
        <View style={styles.View_167_1613}>
          <View style={styles.View_167_1614}>
            <View style={styles.View_167_1615}>
              <Text style={styles.Text_167_1615}>Jan 7 Payment</Text>
            </View>
            <View style={styles.View_167_1616}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ab/9c14/af5566d4a350a58790bd770747178a46"
                }}
                style={styles.ImageBackground_I167_1616_260_1418}
              />
            </View>
          </View>
          <View style={styles.View_167_1617}>
            <View style={styles.View_167_1618}>
              <Text style={styles.Text_167_1618}>Plan</Text>
            </View>
            <View style={styles.View_167_1619}>
              <View style={styles.View_I167_1619_224_234} />
              <View style={styles.View_I167_1619_476_19891}>
                <View style={styles.View_I167_1619_476_19891_476_11864} />
              </View>
              <View style={styles.View_I167_1619_224_236}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ae6/db19/bcdd7062f91964ea11aaf1b78fc52e5e"
                  }}
                  style={styles.ImageBackground_I167_1619_224_236_175_1516}
                />
                <View style={styles.View_I167_1619_224_236_175_1517}>
                  <Text style={styles.Text_I167_1619_224_236_175_1517}>2</Text>
                </View>
              </View>
              <View style={styles.View_I167_1619_224_237}>
                <Text style={styles.Text_I167_1619_224_237}>2 Pay</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_167_1620}>
            <View style={styles.View_167_1621}>
              <Text style={styles.Text_167_1621}>Method</Text>
            </View>
            <View style={styles.View_167_1622}>
              <View style={styles.View_I167_1622_197_2604}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b250/fdd4/577ef9ec048b4c901d1f303e977dd25e"
                  }}
                  style={styles.ImageBackground_I167_1622_4645_38209}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/867c/37c3/1b0003f5bf0968cc493ac57c8cbff13d"
                  }}
                  style={styles.ImageBackground_I167_1622_197_2607}
                />
              </View>
            </View>
            <View style={styles.View_167_1623}>
              <View style={styles.View_I167_1623_224_234} />
              <View style={styles.View_I167_1623_476_19891}>
                <View style={styles.View_I167_1623_476_19891_476_11864} />
              </View>
              <View style={styles.View_I167_1623_224_236}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cae/a519/d10a0f3bd87014520b0847ef755ddad5"
                  }}
                  style={styles.ImageBackground_I167_1623_224_236_175_1491}
                />
              </View>
              <View style={styles.View_I167_1623_224_237}>
                <Text style={styles.Text_I167_1623_224_237}>Cash</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_167_1624}>
            <View style={styles.View_167_1625}>
              <Text style={styles.Text_167_1625}>Details</Text>
            </View>
            <View style={styles.View_167_1626}>
              <View style={styles.View_I167_1626_7224_56562}>
                <View style={styles.View_I167_1626_7224_56563}>
                  <View style={styles.View_I167_1626_7224_56564} />
                  <View style={styles.View_I167_1626_7224_56565}>
                    <Text style={styles.Text_I167_1626_7224_56565}>
                      Payment Amount
                    </Text>
                  </View>
                  <View style={styles.View_I167_1626_7224_56566}>
                    <Text style={styles.Text_I167_1626_7224_56566}>
                      $555.00
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I167_1626_7224_56567}>
                  <View style={styles.View_I167_1626_7224_56567_299_5161}>
                    <View
                      style={styles.View_I167_1626_7224_56567_299_5161_154_101}
                    />
                  </View>
                  <View style={styles.View_I167_1626_7224_56567_299_5162}>
                    <Text style={styles.Text_I167_1626_7224_56567_299_5162}>
                      Amount Due
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I167_1626_7224_56568}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
                    }}
                    style={styles.ImageBackground_I167_1626_7224_56568_177_507}
                  />
                </View>
                <View style={styles.View_I167_1626_7224_56569}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
                    }}
                    style={styles.ImageBackground_I167_1626_7224_56569_177_507}
                  />
                </View>
                <View style={styles.View_I167_1626_7224_56570}>
                  <Text style={styles.Text_I167_1626_7224_56570}>
                    $1,250.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_167_1627}>
            <Text style={styles.Text_167_1627}>
              Payment amounts subject to change. Amounts are confirmed 2
              business days before the payment date, according to your rent bill
              and plan settings.
            </Text>
          </View>
        </View>
        <View style={styles.View_167_1628}>
          <View style={styles.View_I167_1628_137_722} />
        </View>
      </View>
      <View style={styles.View_5_781}>
        <View style={styles.View_I5_781_137_706}>
          <View style={styles.View_I5_781_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_781_137_708}
          />
          <View style={styles.View_I5_781_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_781_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_781_137_714}
        />
        <View style={styles.View_I5_781_137_719}>
          <View style={styles.View_I5_781_137_720}>
            <Text style={styles.Text_I5_781_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  View_5_733: {
    width: wp("100%"),
    height: hp("111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_5_734: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_734_228_176: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_734_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_734_228_177: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_734_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_5_735: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_735_228_7: {
    flexGrow: 1,
    width: wp("46%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(27, 12, 98, 1)"
  },
  View_I5_735_228_8: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_735_228_8: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I5_735_228_9: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_735_228_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_167_1676: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("77%"),
    minHeight: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_1613: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 250, 254, 1)"
  },
  View_167_1614: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_1615: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_167_1615: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_167_1616: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_1616_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_167_1617: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_1618: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_167_1618: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13.992313385009766,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_1619: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I167_1619_224_234: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I167_1619_476_19891: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_1619_476_19891_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I167_1619_224_236: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_1619_224_236_175_1516: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I167_1619_224_236_175_1517: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I167_1619_224_236_175_1517: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I167_1619_224_237: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I167_1619_224_237: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_1620: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_1621: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_167_1621: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13.992313385009766,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_1622: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I167_1622_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I167_1622_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I167_1622_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_167_1623: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I167_1623_224_234: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I167_1623_476_19891: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_1623_476_19891_476_11864: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I167_1623_224_236: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_1623_224_236_175_1491: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I167_1623_224_237: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I167_1623_224_237: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_1624: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_167_1625: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_167_1625: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13.992313385009766,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_1626: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_1626_7224_56562: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I167_1626_7224_56563: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_I167_1626_7224_56564: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I167_1626_7224_56565: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I167_1626_7224_56565: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 12.993167877197266,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I167_1626_7224_56566: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I167_1626_7224_56566: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 12.993167877197266,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I167_1626_7224_56567: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I167_1626_7224_56567_299_5161: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I167_1626_7224_56567_299_5161_154_101: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 219, 233, 1)"
  },
  View_I167_1626_7224_56567_299_5162: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I167_1626_7224_56567_299_5162: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I167_1626_7224_56568: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_1626_7224_56568_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I167_1626_7224_56569: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I167_1626_7224_56569_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I167_1626_7224_56570: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I167_1626_7224_56570: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12.993167877197266,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_1627: {
    width: wp("92%"),
    minWidth: wp("92%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_167_1627: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_167_1628: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(249, 250, 254, 1)"
  },
  View_I167_1628_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_5_781: {
    width: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_781_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_781_137_707: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(25, 29, 33, 1)",
    borderWidth: 0.9995729923248291
  },
  ImageBackground_I5_781_137_708: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_I5_781_137_709: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I5_781_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_781_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_781_137_719: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_781_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_781_137_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.993595123291016,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.29987192153930664,
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
