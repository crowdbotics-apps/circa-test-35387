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
      <View style={styles.View_5_971} />
      <View style={styles.View_5_972}>
        <View style={styles.View_I5_972_228_176}>
          <Text style={styles.Text_I5_972_228_176}>123 Main Street #1A</Text>
        </View>
        <View style={styles.View_I5_972_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I5_972_228_177_154_460}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_973}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_1476"))
        }
      >
        <View style={styles.View_I5_973_228_7} />
        <View style={styles.View_I5_973_228_8}>
          <Text style={styles.Text_I5_973_228_8}>past</Text>
        </View>
        <View style={styles.View_I5_973_228_9}>
          <Text style={styles.Text_I5_973_228_9}>upcoming</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_990}>
        <View style={styles.View_I5_990_137_706}>
          <View style={styles.View_I5_990_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_990_137_708}
          />
          <View style={styles.View_I5_990_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_990_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_990_137_714}
        />
        <View style={styles.View_I5_990_137_719}>
          <View style={styles.View_I5_990_137_720}>
            <Text style={styles.Text_I5_990_137_720}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_167_1678}>
        <View style={styles.View_5_989}>
          <View style={styles.View_I5_989_137_722} />
        </View>
        <View style={styles.View_132_1981}>
          <View style={styles.View_132_1982}>
            <View style={styles.View_132_1983}>
              <Text style={styles.Text_132_1983}>Jan 7 Payment</Text>
            </View>
            <View style={styles.View_132_1984}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37ab/9c14/af5566d4a350a58790bd770747178a46"
                }}
                style={styles.ImageBackground_I132_1984_260_1418}
              />
            </View>
          </View>
          <View style={styles.View_132_2086}>
            <View style={styles.View_132_2070}>
              <Text style={styles.Text_132_2070}>Type</Text>
            </View>
            <View style={styles.View_132_2072}>
              <View style={styles.View_I132_2072_175_1614} />
              <View style={styles.View_I132_2072_476_17043}>
                <View style={styles.View_I132_2072_476_17043_476_11864} />
              </View>
              <View style={styles.View_I132_2072_175_1616}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4be/b191/847710f234aac5931a319b8f06ec692b"
                  }}
                  style={styles.ImageBackground_I132_2072_175_1616_649_61}
                />
              </View>
              <View style={styles.View_I132_2072_175_1617}>
                <Text style={styles.Text_I132_2072_175_1617}>Wallet</Text>
              </View>
            </View>
            <View style={styles.View_132_2084}>
              <Text style={styles.Text_132_2084}>autopay</Text>
            </View>
          </View>
          <View style={styles.View_132_2047}>
            <View style={styles.View_132_2048}>
              <Text style={styles.Text_132_2048}>Method</Text>
            </View>
            <View style={styles.View_132_2049}>
              <View style={styles.View_I132_2049_224_234} />
              <View style={styles.View_I132_2049_476_19891}>
                <View style={styles.View_I132_2049_476_19891_476_11864} />
              </View>
              <View style={styles.View_I132_2049_224_236}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fde2/b8e2/beb66ddd76c121221f44ebd49e1a1a56"
                  }}
                  style={styles.ImageBackground_I132_2049_224_236_175_1498}
                />
              </View>
              <View style={styles.View_I132_2049_224_237}>
                <Text style={styles.Text_I132_2049_224_237}>
                  Lauren’s Checking
                </Text>
              </View>
            </View>
            <View style={styles.View_132_2050}>
              <Text style={styles.Text_132_2050}>$450.00</Text>
            </View>
            <View style={styles.View_132_2051}>
              <View style={styles.View_I132_2051_197_2604}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b250/fdd4/577ef9ec048b4c901d1f303e977dd25e"
                  }}
                  style={styles.ImageBackground_I132_2051_4645_38209}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/867c/37c3/1b0003f5bf0968cc493ac57c8cbff13d"
                  }}
                  style={styles.ImageBackground_I132_2051_197_2607}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_132_2046}>
            <View style={styles.View_132_2039}>
              <Text style={styles.Text_132_2039}>Details</Text>
            </View>
            <View style={styles.View_137_1407}>
              <View style={styles.View_I137_1407_7224_56562}>
                <View style={styles.View_I137_1407_7224_56563}>
                  <View style={styles.View_I137_1407_7224_56564} />
                  <View style={styles.View_I137_1407_7224_56565}>
                    <Text style={styles.Text_I137_1407_7224_56565}>
                      Payment Amount
                    </Text>
                  </View>
                  <View style={styles.View_I137_1407_7224_56566}>
                    <Text style={styles.Text_I137_1407_7224_56566}>
                      $555.00
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I137_1407_7224_56567}>
                  <View style={styles.View_I137_1407_7224_56567_299_5161}>
                    <View
                      style={styles.View_I137_1407_7224_56567_299_5161_154_101}
                    />
                  </View>
                  <View style={styles.View_I137_1407_7224_56567_299_5162}>
                    <Text style={styles.Text_I137_1407_7224_56567_299_5162}>
                      Amount Due
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I137_1407_7224_56568}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
                    }}
                    style={styles.ImageBackground_I137_1407_7224_56568_177_507}
                  />
                </View>
                <View style={styles.View_I137_1407_7224_56569}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c3ff/a596/7bf2c7c0340a148b9aaafe7ea457e03f"
                    }}
                    style={styles.ImageBackground_I137_1407_7224_56569_177_507}
                  />
                </View>
                <View style={styles.View_I137_1407_7224_56570}>
                  <Text style={styles.Text_I137_1407_7224_56570}>
                    $1,250.00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("111%") },
  View_5_971: {
    width: wp("100%"),
    height: hp("111%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(20, 20, 43, 1)"
  },
  View_5_972: {
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
  View_I5_972_228_176: {
    flexGrow: 1,
    width: wp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_972_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_972_228_177: {
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
  ImageBackground_I5_972_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_5_973: {
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
  View_I5_973_228_7: {
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
  View_I5_973_228_8: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_973_228_8: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I5_973_228_9: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_973_228_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_990: {
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
  View_I5_990_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_990_137_707: {
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
  ImageBackground_I5_990_137_708: {
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
  View_I5_990_137_709: {
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
  ImageBackground_I5_990_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_990_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_990_137_719: {
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
  View_I5_990_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_990_137_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11.993595123291016,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.29987192153930664,
    textTransform: "none"
  },
  View_167_1678: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("67%"),
    minHeight: hp("67%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_5_989: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62%"),
    backgroundColor: "rgba(249, 250, 254, 1)"
  },
  View_I5_989_137_722: {
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
  View_132_1981: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("62%"),
    minHeight: hp("62%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(249, 250, 254, 1)"
  },
  View_132_1982: {
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
  View_132_1983: {
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
  Text_132_1983: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_132_1984: {
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
  ImageBackground_I132_1984_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_132_2086: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_132_2070: {
    width: wp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_132_2070: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_2072: {
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
  View_I132_2072_175_1614: {
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
  View_I132_2072_476_17043: {
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
  View_I132_2072_476_17043_476_11864: {
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
  View_I132_2072_175_1616: {
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
  ImageBackground_I132_2072_175_1616_649_61: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_2072_175_1617: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I132_2072_175_1617: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_2084: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_132_2084: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_132_2047: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_132_2048: {
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
  Text_132_2048: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13.992313385009766,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_2049: {
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
  View_I132_2049_224_234: {
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
  View_I132_2049_476_19891: {
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
  View_I132_2049_476_19891_476_11864: {
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
  View_I132_2049_224_236: {
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
  ImageBackground_I132_2049_224_236_175_1498: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I132_2049_224_237: {
    flexGrow: 1,
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I132_2049_224_237: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_2050: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_132_2050: {
    color: "rgba(110, 113, 145, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_132_2051: {
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
  View_I132_2051_197_2604: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I132_2051_4645_38209: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I132_2051_197_2607: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_132_2046: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_132_2039: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_132_2039: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_1407: {
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
  View_I137_1407_7224_56562: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I137_1407_7224_56563: {
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
  View_I137_1407_7224_56564: {
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
  View_I137_1407_7224_56565: {
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
  Text_I137_1407_7224_56565: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 12.993167877197266,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_1407_7224_56566: {
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
  Text_I137_1407_7224_56566: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 12.993167877197266,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_1407_7224_56567: {
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
  View_I137_1407_7224_56567_299_5161: {
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
  View_I137_1407_7224_56567_299_5161_154_101: {
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
  View_I137_1407_7224_56567_299_5162: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "flex-end"
  },
  Text_I137_1407_7224_56567_299_5162: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_1407_7224_56568: {
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
  ImageBackground_I137_1407_7224_56568_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I137_1407_7224_56569: {
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
  ImageBackground_I137_1407_7224_56569_177_507: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I137_1407_7224_56570: {
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
  Text_I137_1407_7224_56570: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12.993167877197266,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
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
