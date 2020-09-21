import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    item: {
        backgroundColor: 'orange',
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
        marginBottom: 120,
        fontSize: 24,
        fontWeight: "bold",
        color: 'white'
    },
    info: {
        textAlign: 'left',
        marginTop: 20,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 16,
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
    drop: {
        backgroundColor: '#5260ff',
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        alignItems: "center",
        justifyContent: 'center'
    },
    dropDown: {
        backgroundColor: '#5260ff',
        marginLeft: 30,
        width: 351.5,
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