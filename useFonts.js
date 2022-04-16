import * as Font from 'expo-font';
import { Montserrat_100Thin, Montserrat_100Thin_Italic, Montserrat_200ExtraLight, Montserrat_200ExtraLight_Italic, Montserrat_300Light, Montserrat_300Light_Italic, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_500Medium,Montserrat_500Medium_Italic, Montserrat_600SemiBold, Montserrat_600SemiBold_Italic, Montserrat_700Bold, Montserrat_700Bold_Italic, Montserrat_800ExtraBold, Montserrat_800ExtraBold_Italic,Montserrat_900Black,Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat';

const useFonts = async () => {
  await Font.loadAsync({
    montserratLight: Montserrat_300Light,
    montserratLightItalic: Montserrat_300Light_Italic,
    montserratRegular: Montserrat_400Regular,
    montserratRegularItalic: Montserrat_400Regular_Italic,
    montserratBold: Montserrat_600SemiBold,
  });
};

export default useFonts;