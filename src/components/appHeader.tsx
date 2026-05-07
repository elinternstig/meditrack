import { Text, View } from "react-native";
import { useTheme } from '../hooks/useTheme';
import { SafeAreaView } from "react-native-safe-area-context";

export default function AppHeader() {
    const { colors } = useTheme();

    return(
        <SafeAreaView style={{
                backgroundColor: colors.primaryAccent,
            }}>
            <View>
                <Text style={{
                    fontSize: 18,
                    justifyContent: "center",
                    textAlign: "center",
                    color: colors.textPrimary
                }}>MediTrack</Text>
            </View>
        </SafeAreaView>
    );
}