import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
    return (
        <SafeAreaView>
            <View>
                <Text className='text-2xl text-red-600 m-4 border border-red-200 bg-slate-500'>Nativewind</Text>
                <Text className='text-3xl'>Hello wind</Text>
            </View>

            <View />

        </SafeAreaView>
    );
};

export default index;