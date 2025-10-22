import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    ContainerHeader: {
        paddingHorizontal: 30,
        width: '100%',
        paddingVertical: 30,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        elevation: 3,
    },

    TextHeader: {
        flexDirection: 'column'

    },

    Title: {
        fontWeight: 'bold',
        marginTop: 4,
        fontSize: 24,
    },

    SubTitle: {
        fontSize: 18,
        fontWeight: 'semibold'
    }

});

export default Styles;

