import { useContext } from 'react';
import { ThemeContext } from '../store/theme/context';

export const useThemeStores = () => useContext(ThemeContext);
