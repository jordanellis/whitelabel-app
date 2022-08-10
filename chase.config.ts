import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      __CLIENT_CONFIG__: JSON.stringify({
        bank: "CHASE",
        components: ["./SwitchComponent", "./ButtonComponent"],
        // https://mui.com/material-ui/customization/theming/
        theme: {
          palette: {
            primary: {
              main: "#11A3C0"
            },
            secondary: {
              main: "#B0C9E4"
            },
            text: {
              primary: "#5152A3"
            },
            background: {
              paper: "#B0C9E4" + 88
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
