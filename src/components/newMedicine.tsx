import { useState } from "react";
import { View, Text } from "react-native";
import { Button, Card, Menu, TextInput } from "react-native-paper";

export default function NewMedicine(){
    const [visible, setVisible] = useState(false);

    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    return(
        <Card>
            <View>
                <Text>
                    Medicine Name
                </Text>
                <TextInput></TextInput>
                <Text>Strength</Text>
                <Text>Beredelseform</Text>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Button onPress={openMenu}>
                            Dropdown
                        </Button>
                    }
                >
                    <Menu.Item title="Tablett" />
                    <Menu.Item title="Plaster" />
                </Menu>
                <Text>Note</Text>
                <Text></Text>
            </View>
        </Card>
    )
}