import { StyleSheet } from 'react-native';
import Colors from "../../../config/colors";

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    formRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    formColumn: {
        flex: 1,
    },
    formColumnSpace: {
        width: 10,
    },
    inputContainer: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#EDF2F8',
        borderRadius: 4,
        paddingHorizontal: 10,
        height: 50,
    },
    inputContainerHasError: {
        borderColor: 'red',
        borderWidth: 2,
    },
    label: {
        marginBottom: 5,
    },
    labelText: {
        fontSize: 17,
        // fontWeight: '500',
        color: Colors.primaryColor,
    },
    inputIconContainer: {
        backgroundColor: '#C4CACD',
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: 'center',
        position: 'relative',
    },
    inputIcon: {
        left: 18,
        marginLeft: 10,
    },
    input: {
        position: 'absolute',
        alignSelf: 'stretch',
        fontSize: 18,
        fontWeight: '400',
        paddingLeft: 42,
        height: 50,
        width: 1000, // Workaround to fix width issue
    },
    helpBlock: {
        paddingBottom: 3,
    },
    helpBlockText: {
        fontSize: 11,
        color: '#9B9B9B',
    },
    errorMessage: {
        marginBottom: 5,
    },
    errorMessageText: {
        color: '#F00',
        fontSize: 13,
    },
    hasError: {
        // backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: '#F00',
        borderWidth: 2,
    },
    autoCompleteSuggestions: {
        position: 'absolute',
        top: 30,
        left: 0,
        backgroundColor: '#FFFFFF',
        height: 300,
        alignSelf: 'stretch',
    },
    inputAddon: {},
    addOnButton: {
        marginTop: 0,
        borderRadius: 4,
        paddingHorizontal: 10,
        backgroundColor: '#1ACA53',
        height: 50,
        width: 100,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addOnButtonText: {
        color: '#FFFFFF',
        fontSize: 17,
        lineHeight: 17,
        fontWeight: '400',
        textAlign: 'center',
    },
    optionGroup: {
        flexDirection: 'row',
    },
    radioButton: {
        flexDirection: 'row',
        marginRight: 50,
        justifyContent: 'center',
    },
    radioButtonCircle: {
        width: 22,
        height: 22,
        borderWidth: 2,
        borderColor: '#D3E4FA',
        borderRadius: 11,
        marginRight: 5,
    },
    radioButtonCircleActive: {
        backgroundColor: '#1ACA53',
    },
    radioButtonTextHolder: {

    },
    radioButtonText: {
        fontSize: 18,
        lineHeight: 23,
        color: '#000000',
    },

    buttonGroupButton: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EDF2F8',
        borderRadius: 4,
        paddingHorizontal: 10,
        height: 50,
    },
    buttonGroupButtonActive: {
        backgroundColor: '#1ACA53',
    },
    buttonGroupButtonTextHolder: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonGroupButtonText: {
        fontSize: 22,
        lineHeight: 24,
        color: '#000000',
    },
});

export default styles;