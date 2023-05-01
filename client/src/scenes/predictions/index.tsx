import { useState, useMemo } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useGetKpisQuery } from "@/state/api";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Label,
} from "recharts";
import regression, { DataPoint } from "regression";

type Props = {};

const Predictions = (props: Props) => {
  const { palette } = useTheme();
  const [isPredictions, setIsPredictions] = useState(false);

  const { data: kpiData } = useGetKpisQuery();

  const formattedData = useMemo(() => {
    if (!kpiData) return [];
    const monthData = kpiData[0].monthlyData;

    const formatted: Array<DataPoint> = monthData.map(
      ({ revenue }, index) => {
        return [index, revenue];
      }
    );

    const regressionLine = regression.linear(formatted);

    return monthData.map(({ month, revenue }, index: number) => {
      return {
        name: month,
        "Actual Revenue": revenue,
        "Regression Line": regressionLine.points[index][1],
        "Predicted Revenue": regressionLine.predict(index + 12)[1],
      };
    });
  }, [kpiData]);

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem" flexWrap="wrap" alignItems="center">
        <Box>
          <Typography variant="h3">Revenue and Predictions</Typography>
          <Typography variant="h6">
            Charted revenue and predicted revenue based on a simple linear
            regression model
          </Typography>
        </Box>
        <Button
          onClick={() => setIsPredictions(!isPredictions)}
          sx={{
            width: "fit-content",
            color: palette.grey[200],
            bgcolor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,0.4) ",
          }}
        >
          {isPredictions ? `${"Hide Predictions"}` : `${"Show Predictions"}`}
        </Button>
      </FlexBetween>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={400}
          data={formattedData}
          margin={{
            top: 20,
            right: 75,
            left: 20,
            bottom: 85,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
          <XAxis dataKey="name" tickLine={false} style={{ fontSize: "10px" }}>
            <Label value="Month" offset={-5} position="insideBottom" />
          </XAxis>
          <YAxis
            domain={[12000, 26000]}
            axisLine={{ strokeWidth: "0" }}
            style={{ fontSize: "10px" }}
            tickFormatter={(v) => `SEK${v}`}
          >
            <Label
              value="Revenue in SEK"
              angle={-90}
              offset={-5}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line
            type="monotone"
            dataKey="Actual Revenue"
            stroke={palette.primary.main}
            strokeWidth={0}
            dot={{ strokeWidth: 5 }}
          />
          <Line
            type="monotone"
            dataKey="Regression Line"
            stroke="#8894d8"
            dot={false}
          />
          {isPredictions && (
            <Line
              type="monotone"
              dataKey="Predicted Revenue"
              stroke={palette.secondary[500]}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  );
};

export default Predictions;
