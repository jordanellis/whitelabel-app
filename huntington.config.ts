import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      __CLIENT_CONFIG__: JSON.stringify({
        bank: "HUNTINGTON",
        components: [
          "./SwitchComponent",
          "./RadioButtonComponent",
          "./TableComponent"
        ],
        // https://mui.com/material-ui/customization/theming/
        theme: {
          palette: {
            primary: {
              main: "#539944"
            },
            secondary: {
              main: "#C0E9F4"
            },
            text: {
              primary: "#112211"
            },
            background: {
              paper: "#C0E9F4" + 88
            }
          },
          components: {
            MuiButton: {
              defaultProps: {
                variant: "contained"
              }
            }
          }
        }
      })
    }
  }
})
