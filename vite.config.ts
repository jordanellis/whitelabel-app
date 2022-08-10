import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  return {
    plugins: [react()],
    define: {
      __CLIENT_CONFIG__: JSON.stringify({
        bank: "My Test Bank",
        components: [
          "./TableComponent",
          "./RadioButtonComponent"
        ],
        // https://mui.com/material-ui/customization/theming/
        theme: {
          palette: {
            primary: {
              main: "#B8D8D8"
            },
            secondary: {
              main: "#FE5F55"
            },
            text: {
              primary: "#F0F5EB"
            },
            background: {
              paper: "#7A9E9F"
            }
          },
          components: {
            MuiButton: {
              styleOverrides: {
                root: {
                  borderRadius: "0"
                }
              },
              defaultProps: {
                color: "secondary",
                variant: "contained"
              }
            }
          }
        }
      })
    }
  }
})
