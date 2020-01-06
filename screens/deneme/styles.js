import { StyleSheet, Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  view_input: {
    marginTop: 100,
    width: screenWidth*0.8,
    height: 50,
    flexDirection:'row',
    marginLeft:'5%'
  },
  textinput: {
    width: screenWidth*0.75,
    height: 50,
    backgroundColor: '#E5E8E9',
    borderRadius: 10

  },
  listView: {
    padding:'5%',
    height:'100%',
  }
  ,
  scroll: {
    width:screenWidth,
    height:screenHeight*0.65,
  }
  ,
  add: {
    width: screenWidth*0.1,
    marginLeft:screenWidth*0.05,
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
  navbar_view: {
    justifyContent: 'flex-end',
    flex: 1,
    width: screenWidth * 0.75
  },
  icon_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 25
  },
  text_view: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 25
  },

});

export default styles;