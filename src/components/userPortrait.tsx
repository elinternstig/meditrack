import { useTheme } from "@/hooks/useTheme";
import { IconButton } from "react-native-paper";

type Props = {
    icon?: string;
}

export default function UserPortrait({ icon }: Props){
    const { colors } = useTheme();

    return(
        <IconButton 
            icon={icon ?? 'account'}
            mode='outlined'
            containerColor={colors.background}
            iconColor={colors.textPrimary}
            style={{
                borderColor: colors.primaryAccent,
                borderWidth: 3,
            }}
        />
    )
}