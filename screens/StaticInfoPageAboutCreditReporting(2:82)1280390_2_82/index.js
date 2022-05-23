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
      <View style={styles.View_2_83}>
        <Text style={styles.Text_2_83}>Pay rent, build credit</Text>
      </View>
      <View style={styles.View_2_84}>
        <Text style={styles.Text_2_84}>
          Circa reports on-time payments, so you can build credit history by
          paying rent.
        </Text>
      </View>
      <View style={styles.View_2_85}>
        <View style={styles.View_2_86}>
          <View style={styles.View_I2_86_138_994}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4850/273a/26ba8f441e26c378987817dc75e391c8"
              }}
              style={styles.ImageBackground_I2_86_138_995}
            />
          </View>
          <View style={styles.View_I2_86_138_998}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b2a/b895/836d037b439a6e2f7f7ae4c1f5de5ce3"
              }}
              style={styles.ImageBackground_I2_86_138_999}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/842c/c741/dd4e4b58aa1b7d25f70648059d51f731"
              }}
              style={styles.ImageBackground_I2_86_138_1004}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5982/1b49/285c284a9c271828b212538abb8980bf"
          }}
          style={styles.ImageBackground_2_87}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e27/3583/372c2201079fda5a350e4aae084b9362"
          }}
          style={styles.ImageBackground_2_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d82f/fb4f/55505349a02017fee9942740087082b3"
          }}
          style={styles.ImageBackground_2_89}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6704/e695/78c5e99ef86b09f64a34048049bec1f1"
          }}
          style={styles.ImageBackground_2_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6704/e695/78c5e99ef86b09f64a34048049bec1f1"
          }}
          style={styles.ImageBackground_2_91}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e3d2/cc88/0a1bc9d66832ac54eaa8e58bb514e19a"
          }}
          style={styles.ImageBackground_2_92}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1d6/a83f/a870195819a715a42748aed7286ad798"
          }}
          style={styles.ImageBackground_2_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8967/8342/10156214fc39cdeb951e278154e30227"
          }}
          style={styles.ImageBackground_2_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e8b/2567/033488372332b71b594d07bbd0dfd1a4"
          }}
          style={styles.ImageBackground_2_95}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e8b/2567/033488372332b71b594d07bbd0dfd1a4"
          }}
          style={styles.ImageBackground_2_96}
        />
        <View style={styles.View_2_97}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae41/e3a6/7ebe27738942b2773e97688390fa2f83"
            }}
            style={styles.ImageBackground_I2_97_138_710}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9231/267c/e93c3e2090ebb62a42e40cf3f9e2f5d2"
            }}
            style={styles.ImageBackground_I2_97_138_713}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20d1/7bfd/480518733633df2b0898bc8cadafbc86"
            }}
            style={styles.ImageBackground_I2_97_498_394}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e074/036c/3f83daa872765d2bfc8306069d988647"
            }}
            style={styles.ImageBackground_I2_97_138_714}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7530/5c85/e69871270f6c6c9640528989bd3dfee1"
            }}
            style={styles.ImageBackground_I2_97_138_715}
          />
        </View>
      </View>
      <View style={styles.View_2_98}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1f1/3e8a/7d0b8fda0ccd647c16a3d5a4d7c09903"
          }}
          style={styles.ImageBackground_I2_98_260_1418}
        />
      </View>
      <View style={styles.View_2_99}>
        <View style={styles.View_2_100}>
          <View style={styles.View_2_101}>
            <Text style={styles.Text_2_101}>in partnership with</Text>
          </View>
          <View style={styles.View_2_102}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c491/5d6a/59fe39e4c7cdcab1507d35706fe5a7d8"
              }}
              style={styles.ImageBackground_2_103}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2_116}>
        <Text style={styles.Text_2_116}>
          Every on-time payment according to your schedule is a chance to boost
          your credit — even when you’re using a flexible rent plan! Good credit
          scores are for more than just getting a credit card or a loan. They
          can help support job applications, lower interest rates, and unlock
          resources in an emergency.
        </Text>
      </View>
      <View style={styles.View_2_117}>
        <View style={styles.View_I2_117_137_706}>
          <View style={styles.View_I2_117_137_707} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/525b/1182/3379c8a6088a242fe4f03785d2d970eb"
            }}
            style={styles.ImageBackground_I2_117_137_708}
          />
          <View style={styles.View_I2_117_137_709} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
          }}
          style={styles.ImageBackground_I2_117_137_710}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
          }}
          style={styles.ImageBackground_I2_117_137_714}
        />
        <View style={styles.View_I2_117_137_719}>
          <View style={styles.View_I2_117_137_720}>
            <Text style={styles.Text_I2_117_137_720}>9:41</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_118}>
        <View style={styles.View_I2_118_137_722} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_2_83: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_83: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 19,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -1,
    textTransform: "none"
  },
  View_2_84: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_2_84: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_85: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("28%")
  },
  View_2_86: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_86_138_994: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%")
  },
  ImageBackground_I2_86_138_995: {
    width: wp("5%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_86_138_998: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I2_86_138_999: {
    width: wp("11%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_86_138_1004: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_2_87: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_88: {
    width: wp("11%"),
    height: hp("12%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_2_89: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_2_90: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_91: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  ImageBackground_2_92: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_2_93: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_2_94: {
    width: wp("9%"),
    height: hp("14%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_95: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_2_96: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  View_2_97: {
    width: wp("31%"),
    height: hp("12%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_97_138_710: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_I2_97_138_713: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_I2_97_498_394: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_I2_97_138_714: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I2_97_138_715: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_2_98: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I2_98_260_1418: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_99: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("97%")
  },
  View_2_100: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_101: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_101: {
    color: "rgba(27, 12, 98, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_2_102: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_2_103: {
    width: wp("30%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_116: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("71%"),
    justifyContent: "flex-start"
  },
  Text_2_116: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_117: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_117_137_706: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I2_117_137_707: {
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
  ImageBackground_I2_117_137_708: {
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
  View_I2_117_137_709: {
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
  ImageBackground_I2_117_137_710: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("2%")
  },
  ImageBackground_I2_117_137_714: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  View_I2_117_137_719: {
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
  View_I2_117_137_720: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I2_117_137_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12,
    fontWeight: "900",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.30000001192092896,
    textTransform: "none"
  },
  View_2_118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_118_137_722: {
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
