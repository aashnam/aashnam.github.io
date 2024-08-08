const styles = {
    container: {
      flex: 1,
      width: "100%"
    },
    row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      marginVertical: 5
    },
    timeContainer: {
      flexBasis: "25%"
    },
    time: {
      fontSize: 12,
      color: "#aaa",
      fontStyle: "italic",
      textAlign: 'center'
    },
    eventContainer: {
      flexBasis: "55%",
      alignItems: "flex-start",
      backgroundColor: "#FFF",
      padding: 16,
      borderRadius: 15,
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
      marginBottom: 10,
      borderTopLeftRadius: 0
    },
    icon: {
      textAlign: "center",
      width: 20,
      height: 20,
      backgroundColor: "#6F98FA",
      paddingTop: 2.5,
      borderRadius: 10,
      color: '#e0e9ff',
      fontSize: 9,
      overflow: "hidden",
      border: "3px solid #e0e9ff"
    },
    title: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#666",
      textAlign: "left",
      marginBottom: 5,
      lineHeight: 20
    },
    description: {
      textAlign: "left",
      fontSize: 11,
      lineHeight: 18,
      paddingBottom: 10,
      color: '#999'
    }
  };
  
  export default styles;
  