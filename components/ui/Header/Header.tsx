import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from "./HeaderStyles";

type HeaderProps = {
    iconName?: string;
    iconSize?: number;
    iconColor?: string;
    title: string;
    subtitle: string;
    iconType?: string
}

export default function Header({ title, subtitle, iconName, iconSize = 24, iconColor = '#be5353ff', iconType = "bold" }: HeaderProps) {
    return (
        <View style={Styles.ContainerHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {iconName && (
                    <Icon
                        name={iconName}
                        size={iconSize}
                        color={iconColor}
                        style={{ marginRight: 8, backgroundColor: '#1450aaff', color: 'white', borderRadius: 10, padding: 5 }}
                    />
                )}
                <View>
                    <Text style={Styles.Title}>{title}</Text>
                    <Text style={Styles.SubTitle}>{subtitle}</Text>
                </View>
            </View>
        </View>
    )
}
