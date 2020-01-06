import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list_view:{
        height:screenHeight*0.75,
        width:screenWidth*0.85,
        marginTop:100,       
    },
    navbar_view: {
        justifyContent: 'flex-end', 
        flex: 1, 
        width: screenWidth * 0.75
    },
    icon_view: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        height: 25
    },
    text_view: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        height: 25
    }
});

export default styles;