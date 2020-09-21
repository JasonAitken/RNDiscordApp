import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#92949c',
        marginTop: 5,
        marginLeft: 30,
        marginRight: 30,
        padding: 10,
        fontSize: 24,
        borderRadius: 5,
    },
    altItem: {
        backgroundColor: 'green',
        marginTop: 5,
        padding: 10,
        fontSize: 24,
    },
    veiw: {
        backgroundColor: '#222428',
        color: '#222428',
        height: '100%',
    },
    title: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: "bold",
        color: 'white'
    },
    info: {
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 30,
        fontSize: 16,
        color: 'white'
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: '#5260ff',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
   
})