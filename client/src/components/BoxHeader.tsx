import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, useTheme, Typography } from "@mui/material";

type Props = {
  icon?: React.ReactNode;
  title?: string;
  subTitle?: string;
  sideText:string
};

const BoxHeader = ({ icon, title, subTitle,sideText }: Props) => {
  const { palette } = useTheme();
  return (
    <FlexBetween color={palette.grey[200]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subTitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>{sideText}</Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
