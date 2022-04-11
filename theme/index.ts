import foundations from "@chakra-ui/theme/foundations"
import { components } from "./component"
import { globalStyles } from "./global-styles"
import { layerStyles } from "./layer-styles"
import { textStyles } from "./text-style"

const theme = {
  ...foundations,
  fonts: {
    ...foundations.fonts,
    heading: "'Spline Sans', sans-serif",
    body: "'Spline Sans', sans-serif",
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  styles: {
    global: globalStyles,
  },
  layerStyles,
  textStyles,
  components,
}

export default theme
