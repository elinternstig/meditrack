import { Pressable, Text, View } from "react-native";
import { useTheme } from '../hooks/useTheme';
import { SafeAreaView } from "react-native-safe-area-context";
import AddButton from "./addButton";
import UserPortrait from "./userPortrait";
import { usePathname, useRouter } from "expo-router";

export default function AppHeader() {
    const { colors } = useTheme();
    const router = useRouter(); 
    const pathname = usePathname();

    const isHome = pathname === '/';

    return(
        <SafeAreaView style={{
                backgroundColor: colors.background,
                borderBottomColor: colors.primaryAccent,
                borderBottomWidth: 3,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    {isHome ? (
                        <Pressable onPress={() => router.push('/userSettings')}>
                            <UserPortrait />
                        </Pressable>) : (
                        <Pressable 
                        onPress={() => router.back()}>
                            <UserPortrait icon='keyboard-backspace' />
                        </Pressable>
                    )}
               
                <Text style={{
                    fontSize: 18,
                    textAlign: "center",
                    color: colors.textPrimary
                }}>MediTrack</Text>
                <Pressable onPress={() => router.navigate('/addMedicine')}>
                    <AddButton  />
                </Pressable>
            </View>
        </SafeAreaView>
    );
}