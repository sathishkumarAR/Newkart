import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from "react-native-progress";
import LottieView from 'lottie-react-native';

import AppText from '../components/AppText';
import defaultStyles from '../config/defaultStyles';

function UploadScreen({visible, progress,done, onDone}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {
                    (progress>=1 && done) ?
                        <LottieView 
                            speed={2}
                            autoPlay
                            loop={false}
                            source={require("../assets/animations/done.json")}
                            onAnimationFinish={onDone}
                            style={styles.doneAnimation}
                        />:
                        <Progress.Bar progress={progress} color={defaultStyles.colors.primary} />
                }
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
        flex:1
    },
    doneAnimation:{
        width:150
    }
})

export default UploadScreen;