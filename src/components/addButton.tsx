import { IconButton } from 'react-native-paper';
import { useTheme } from '../hooks/useTheme';

export default function AddButton() {
    const { colors } = useTheme();

    return(
        <IconButton 
            icon='plus'
            mode='outlined'
            containerColor={colors.background}
            iconColor={colors.textPrimary}
            style={{
                borderColor: colors.primaryAccent,
                borderWidth: 3,
            }}
        />
    );
}