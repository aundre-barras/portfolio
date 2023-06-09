import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    palette: {
        background: {
            default: '#393E46',
            paper: '#222831'
        },
        text: {
            primary: '#eeeeee'
        },
        primary: {
            main: '#14ffec',
            // main:'#00adb5'
        }
    },
    typography: {
        fontFamily: ['Cabin' ,'Varela Round'].join('.'),
        fontWeight: 400,
        h3: {
            fontFamily: 'Cabin',
        },
        h4: {
            fontFamily: 'Varela Round',
        },
        h5: {
            fontFamily: 'Varela Round',
            fontStyle: 'italic'
        },
        h6: {
            fontFamily: 'Varela Round',
        },
    }
})