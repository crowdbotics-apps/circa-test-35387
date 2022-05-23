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
      <View style={styles.View_124_1930}>
        <View style={styles.View_I124_1930_494_3126}>
          <View style={styles.View_I124_1930_494_3126_476_11864} />
        </View>
        <View style={styles.View_I124_1930_220_3}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec15/3e7b/602ecc57fafb341189d145c7ed092cd6"
            }}
            style={styles.ImageBackground_I124_1930_220_3_175_1498}
          />
        </View>
        <View style={styles.View_I124_1930_220_4}>
          <Text style={styles.Text_I124_1930_220_4}>Lauren’s Ch...</Text>
        </View>
      </View>
      <View style={styles.View_124_1931}>
        <View style={styles.View_I124_1931_494_3124}>
          <View style={styles.View_I124_1931_494_3124_476_11864} />
        </View>
        <View style={styles.View_I124_1931_202_2533}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec15/3e7b/602ecc57fafb341189d145c7ed092cd6"
            }}
            style={styles.ImageBackground_I124_1931_202_2533_175_1498}
          />
        </View>
        <View style={styles.View_I124_1931_202_2542}>
          <Text style={styles.Text_I124_1931_202_2542}>Chase Acct</Text>
        </View>
      </View>
      <View style={styles.View_124_1932}>
        <View style={styles.View_I124_1932_494_3124}>
          <View style={styles.View_I124_1932_494_3124_476_11864} />
        </View>
        <View style={styles.View_I124_1932_202_2533}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c3/4c4b/bc40475035a23f91875fcceca797b791"
            }}
            style={styles.ImageBackground_I124_1932_202_2533_4166_29315}
          />
        </View>
        <View style={styles.View_I124_1932_202_2542}>
          <Text style={styles.Text_I124_1932_202_2542}>Blue Visa</Text>
        </View>
      </View>
      <View style={styles.View_124_1933}>
        <View style={styles.View_I124_1933_494_3124}>
          <View style={styles.View_I124_1933_494_3124_476_11864} />
        </View>
        <View style={styles.View_I124_1933_202_2533}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/47c3/4c4b/bc40475035a23f91875fcceca797b791"
            }}
            style={styles.ImageBackground_I124_1933_202_2533_4166_29315}
          />
        </View>
        <View style={styles.View_I124_1933_202_2542}>
          <Text style={styles.Text_I124_1933_202_2542}>MasterCard</Text>
        </View>
      </View>
      <View style={styles.View_124_1934}>
        <View style={styles.View_I124_1934_494_805}>
          <View style={styles.View_I124_1934_494_805_476_11864} />
        </View>
        <View style={styles.View_I124_1934_202_2596}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2be/1680/8e3ad3878c50b6470e22edc8886906b0"
            }}
            style={styles.ImageBackground_I124_1934_202_2596_175_1491}
          />
        </View>
        <View style={styles.View_I124_1934_202_2597}>
          <Text style={styles.Text_I124_1934_202_2597}>Cash</Text>
        </View>
      </View>
      <View style={styles.View_134_2034}>
        <View style={styles.View_I134_2034_494_805}>
          <View style={styles.View_I134_2034_494_805_476_11864} />
        </View>
        <View style={styles.View_I134_2034_202_2597}>
          <Text style={styles.Text_I134_2034_202_2597}>Cash App</Text>
        </View>
      </View>
      <View style={styles.View_124_1935}>
        <View style={styles.View_I124_1935_202_2651}>
          <Text style={styles.Text_I124_1935_202_2651}>Add Method</Text>
        </View>
        <View style={styles.View_I124_1935_202_2657}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b818/af84/cfef922cba969bd240acee08b4a41ccc"
            }}
            style={styles.ImageBackground_I124_1935_202_2657_202_2653}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_124_1930: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I124_1930_494_3126: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1930_494_3126_476_11864: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I124_1930_220_3: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I124_1930_220_3_175_1498: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_I124_1930_220_4: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I124_1930_220_4: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_1931: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I124_1931_494_3124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1931_494_3124_476_11864: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I124_1931_202_2533: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I124_1931_202_2533_175_1498: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  View_I124_1931_202_2542: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I124_1931_202_2542: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_1932: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I124_1932_494_3124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1932_494_3124_476_11864: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I124_1932_202_2533: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I124_1932_202_2533_4166_29315: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I124_1932_202_2542: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I124_1932_202_2542: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_1933: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("104%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I124_1933_494_3124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1933_494_3124_476_11864: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I124_1933_202_2533: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I124_1933_202_2533_4166_29315: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I124_1933_202_2542: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I124_1933_202_2542: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_1934: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("138%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I124_1934_494_805: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I124_1934_494_805_476_11864: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I124_1934_202_2596: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I124_1934_202_2596_175_1491: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_I124_1934_202_2597: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I124_1934_202_2597: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_2034: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("171%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I134_2034_494_805: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I134_2034_494_805_476_11864: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 235, 255, 1)"
  },
  View_I134_2034_202_2597: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_I134_2034_202_2597: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_124_1935: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("89%"),
    minHeight: hp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("205%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I124_1935_202_2651: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_I124_1935_202_2651: {
    color: "rgba(20, 20, 42, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I124_1935_202_2657: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I124_1935_202_2657_202_2653: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
