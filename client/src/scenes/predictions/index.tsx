import { Box, useTheme } from "@mui/material"

type Props = {}

const Predictions = (props: Props) => {
  const { palette } = useTheme()
  return (
    <Box color={palette.grey[300]}>Predictions</Box>
  )
}

export default Predictions