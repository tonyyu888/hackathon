import { createMuiTheme } from '@material-ui/core/styles'
import { green, orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#379683',
        main: '#05386b',
        dark: '#55bcc9',
        contrastText: '#fff',
    },
    secondary: {
      light: '#ffd95b',
      main: '#ffa726',
      dark: '#c77800',
      contrastText: '#000',
    },
      openTitle: green['700'],
      protectedTitle: orange['700'],
      type: 'light'
    }
  })

  export default theme  