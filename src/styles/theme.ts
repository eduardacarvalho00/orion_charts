import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      900: '#05050F',
      800: '#111111',
      700: '#828282',
      600: '#CFCFCF',
      500: '#BDBDBD',
      300: '#E0E0E0',
      200: '#F2F2F2', 
      100: '#F8F9FB',
      50: '#FFFFFF', 
    },
    blue: {
      800: '#0D0D2B',
      700: '#25245D',
      600: '#35068C',
      500: '#023AFF',
      400: '#3671E9',
      300: '#1181E8',
      200: 'linear-gradient(270deg, #4DFFDF 0%, #4DA1FF 96.35%)',
      100: 'radial-gradient(96% 96% at 70.4% 31.2%, #3244E8 0%, rgba(0, 2, 16, 0) 100%) ',
    },
    purple: {
      900: '#191932',
      800: '#491F98',
      600: '#991BFA',
      500: '#6A6A9F',
      400: '#7878B6',
      300: '#9292C1',
      200: 'linear-gradient(270.15deg, #7D40FF 19.44%, #02A4FF 81.9%)',
      100: 'linear-gradient(269.95deg, #FF2397 0.02%, #7517F8 97.45%)',
    },
    yellow: {
      500: '#FFA63F',
    },
    green: {
      500: '#5EFF5A',
      300: '#59C19C',
      200: '#01F1E3',
    },
    red: {
      900: '#FF2D2E',
    },
  },
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',

  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
      '*': {
        scrollBehavior: 'smooth',
      },
    },
  },
});
