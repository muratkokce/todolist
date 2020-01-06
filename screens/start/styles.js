import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        marginTop:100,
        alignItems: 'center',
        flex: 1
    },
    images: {
        width: 250,
        height: 200,
        resizeMode: 'stretch'
    },
    textinput: {
        width: '70%',
        height: 50,
        backgroundColor: '#E5E8E9',
        borderRadius: 10,
        marginTop:20
    },
    add: {
        marginTop: 25,
        width: screenWidth*0.7,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#70D3F1',
        justifyContent: 'center',
        alignItems: 'center'
      },
    add_text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
      },
      animatedView: {
        width:screenWidth,
        backgroundColor: "#70D3F1",
        elevation: 2,
        position: "absolute",
        bottom: 0,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    exitTitleText: {
        textAlign: "center",
        color: "#ffffff",
        marginRight: 10,
    },
    exitText: {
        color: "red",
        paddingHorizontal: 10,
        paddingVertical: 3
    }
});

export default styles;