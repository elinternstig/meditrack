import { IconButton } from 'react-native-paper';
import { useTheme } from '../hooks/useTheme';

type Props ={
    icon?: string;
}

export default function AddButton({ icon } : Props) {
    const { colors } = useTheme();

    return(
        <IconButton 
            icon={icon ?? 'plus'}
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