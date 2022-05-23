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
      <View style={styles.View_5_910}>
        <View style={styles.View_I5_910_228_176}>
          <Text style={styles.Text_I5_910_228_176}>One Riverside #23A</Text>
        </View>
        <View style={styles.View_I5_910_228_177}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ba30/b758/2150ad9262068f872f9328883a5e36c8"
            }}
            style={styles.ImageBackground_I5_910_228_177_154_460}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_5_911}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("101_1476"))
        }
      >
        <View style={styles.View_I5_911_228_7} />
        <View style={styles.View_I5_911_228_8}>
          <Text style={styles.Text_I5_911_228_8}>past</Text>
        </View>
        <View style={styles.View_I5_911_228_9}>
          <Text style={styles.Text_I5_911_228_9}>upcoming</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_5_912}>
        <View style={styles.View_5_913}>
          <View style={styles.View_5_914}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2d6/4066/a49f6b7a9cd3f6b994446123dbbd8910"
              }}
              style={styles.ImageBackground_5_915}
            />
          </View>
          <View style={styles.View_5_932}>
            <View style={styles.View_5_933}>
              <View style={styles.View_5_934}>
                <View style={styles.View_5_935}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8533/688a/e8cf8f86e9debbe970c0abd507eeadd5"
                    }}
                    style={styles.ImageBackground_5_936}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f6fd/0f2a/ace582f85e4f7121619cd18523651595"
                    }}
                    style={styles.ImageBackground_5_938}
                  />
                </View>
              </View>
              <View style={styles.View_5_939}>
                <View style={styles.View_5_940}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6c7/f7ab/f770a356aba72fe527763194c44814da"
                    }}
                    style={styles.ImageBackground_5_941}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4808/9ddc/64f79f867e3e73f6699a78faedb61c69"
                    }}
                    style={styles.ImageBackground_5_942}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de86/651b/a2f95f164f28ae812182c5c9bcc1cd3b"
                    }}
                    style={styles.ImageBackground_5_943}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7c8b/e58c/16eabe164c5950b1be8478eb0e2df711"
                    }}
                    style={styles.ImageBackground_5_944}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bf1/5f20/ca7f4cc7e10b2b28c58e10d2c8fad9b6"
                    }}
                    style={styles.ImageBackground_5_945}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a71c/78b0/18f8b0f147563fad0b45c4bfc3c7aedd"
                    }}
                    style={styles.ImageBackground_5_946}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a71c/78b0/18f8b0f147563fad0b45c4bfc3c7aedd"
                    }}
                    style={styles.ImageBackground_5_948}
                  />
                </View>
              </View>
              <View style={styles.View_5_950}>
                <View style={styles.View_5_951}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f36c/14e6/f685f5b83cfc83137160fde6593d86fc"
                    }}
                    style={styles.ImageBackground_5_952}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb9d/ec94/2c3a24cbcb76a83fc8d51e1748fbf8a3"
                    }}
                    style={styles.ImageBackground_5_953}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc08/904d/f00dd546ffdb25b2e4d327d8ab003d6d"
                    }}
                    style={styles.ImageBackground_5_954}
                  />
                  <View style={styles.View_5_955}>
                    <Text style={styles.Text_5_955}>17</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cb88/345f/d4b4014b5bf8f9003ab98c50b87e1d03"
                    }}
                    style={styles.ImageBackground_5_956}
                  />
                  <View style={styles.View_5_957}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f13f/2f8e/8342247b1ebf4f2070e0da538cebeecc"
                      }}
                      style={styles.ImageBackground_5_958}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/59d7/7f18/52aa44f0a3c7dbcd77c4e0d61b81e992"
                      }}
                      style={styles.ImageBackground_5_960}
                    />
                  </View>
                  <View style={styles.View_5_961}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/76fb/de28/b4f8eb3e3b5c4dd5c7b19ce744ca7725"
                      }}
                      style={styles.ImageBackground_5_962}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd9b/6d92/ef889e24371e7a7e372a0517322a6f20"
                      }}
                      style={styles.ImageBackground_5_964}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_5_965}>
        <Text style={styles.Text_5_965}>No upcoming payments</Text>
      </View>
      <View style={styles.View_5_966}>
        <View style={styles.View_I5_966_144_1020} />
        <View style={styles.View_I5_966_144_1022}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b0a/5eb9/9fe9cbe1a219f0a91e2c46afebd7a42b"
            }}
            style={styles.ImageBackground_I5_966_144_1022_144_575}
          />
        </View>
        <View style={styles.View_I5_966_144_1023}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c4c4/7645/eb18c075276bfda64c351eabd4b41549"
            }}
            style={styles.ImageBackground_I5_966_144_1023_144_579}
          />
        </View>
        <View style={styles.View_I5_966_144_1025}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfa6/7c20/605a8ad25ba7faec99b01276f828c0b9"
            }}
            style={styles.ImageBackground_I5_966_144_1025_144_589}
          />
        </View>
        <View style={styles.View_I5_966_595_391}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6afd/ec71/df5e0c33c2858d81dfc5e59da93fc505"
            }}
            style={styles.ImageBackground_I5_966_595_391_595_27}
          />
        </View>
        <View style={styles.View_I5_966_2477_14711}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3589/c59f/14d7df4d5aa26d58cbb279d42fc9178e"
            }}
            style={styles.ImageBackground_I5_966_2477_14693}
          />
          <View style={styles.View_I5_966_2477_14694}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e74d/de6f/75c3f23089ac78038f586c85c7fabc8f"
              }}
              style={styles.ImageBackground_I5_966_2477_14694_228_34}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_5_967}>
        <View style={styles.View_I5_967_137_722} />
      </View>
      <View style={styles.View_5_968}>
        <View style={styles.View_I5_968_137_706}>
          <View style={styles.View_I5_968_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I5_968_137_708}
          />
          <View style={styles.View_I5_968_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I5_968_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I5_968_137_714}
        />
        <View style={styles.View_I5_968_137_719}>
          <View style={styles.View_I5_968_137_720}>
            <Text style={styles.Text_I5_968_137_720}>9:41</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(249, 250, 254, 1)" },
  View_2: { height: hp("111%") },
  View_5_910: {
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
  View_I5_910_228_176: {
    flexGrow: 1,
    width: wp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I5_910_228_176: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 16,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I5_910_228_177: {
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
  ImageBackground_I5_910_228_177_154_460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  TouchableOpacity_5_911: {
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
  View_I5_911_228_7: {
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
  View_I5_911_228_8: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_911_228_8: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_I5_911_228_9: {
    flexGrow: 1,
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I5_911_228_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.25,
    textTransform: "uppercase"
  },
  View_5_912: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_913: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_5_914: {
    width: wp("77%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_915: {
    width: wp("77%"),
    height: hp("27%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_932: {
    width: wp("32%"),
    height: hp("33%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_5_933: {
    width: wp("32%"),
    height: hp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_934: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_5_935: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_936: {
    width: wp("7%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_938: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_939: {
    width: wp("25%"),
    height: hp("20%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_940: {
    width: wp("25%"),
    height: hp("20%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_941: {
    width: wp("12%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_5_942: {
    width: wp("12%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_5_943: {
    width: wp("14%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_944: {
    width: wp("12%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_5_945: {
    width: wp("15%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_5_946: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_948: {
    width: wp("10%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_5_950: {
    width: wp("29%"),
    height: hp("13%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_5_951: {
    width: wp("29%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_952: {
    width: wp("16%"),
    height: hp("6%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_5_953: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_5_954: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_5_955: {
    width: wp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    justifyContent: "flex-start"
  },
  Text_5_955: {
    color: "rgba(164, 164, 164, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_5_956: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_5_957: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_5_958: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_960: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_961: {
    width: wp("25%"),
    height: hp("12%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_962: {
    width: wp("25%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_5_964: {
    width: wp("25%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_5_965: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("77%"),
    justifyContent: "flex-start"
  },
  Text_5_965: {
    color: "rgba(30, 11, 102, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_5_966: {
    width: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I5_966_144_1020: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_I5_966_144_1022: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_966_144_1022_144_575: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_966_144_1023: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_966_144_1023_144_579: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_966_144_1025: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_966_144_1025_144_589: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_966_595_391: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_966_595_391_595_27: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_966_2477_14711: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("2%")
  },
  ImageBackground_I5_966_2477_14693: {
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I5_966_2477_14694: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I5_966_2477_14694_228_34: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_5_967: {
    width: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I5_967_137_722: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  View_5_968: {
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
  View_I5_968_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I5_968_137_707: {
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
    borderWidth: 1
  },
  ImageBackground_I5_968_137_708: {
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
  View_I5_968_137_709: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(20, 20, 42, 1)"
  },
  ImageBackground_I5_968_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I5_968_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I5_968_137_719: {
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
  View_I5_968_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I5_968_137_720: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
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
