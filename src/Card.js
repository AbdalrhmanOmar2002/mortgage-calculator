import React, { useEffect, useState } from "react";
import { Slider, Stack, Tooltip, Typography } from "@mui/material";
import "./App.css";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { purple } from "@mui/material/colors";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

const Card = () => {
  const [purchase, setPurchase] = useState(0); //
  const [down_payment, setDown_payment] = useState(0); //
  const [repayment_time, setRepayment_time] = useState(0); //
  const [interest_rate, setInterest_rate] = useState(0); //!r
  const [loan_amount, setLoan_amount] = useState(0); //! P
  const [estimated_pr_month, setEstimated_pr_month] = useState(0);

  //! Formula for mortgage payments: M = P[r(1+r)^n/((1+r)^n)-1)]

  useEffect(() => {
    setLoan_amount(purchase - down_payment);
    let n = Math.floor(loan_amount / repayment_time); //! n

    setEstimated_pr_month(Math.floor(n / 12));
  }, [purchase, down_payment, repayment_time, interest_rate]);

  return (
    <>
      <div className="container">
        <div>
          <Stack spacing={0}>
            <h1 style={{ margin: "4rem 0 0 4rem" }}>Mortgage calculator</h1>
          </Stack>
          <Stack
            spacing={0}
            sx={{ mt: "4rem" }}
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent="space-around"
              direction="row"
            >
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  Purchase price:{" "}
                  <span style={{ fontSize: "1.2rem" }}>${purchase}</span>
                </Typography>

                <Slider
                  defaultValue={350000}
                  color="secondary"
                  step={50000}
                  min={100000}
                  max={1000000}
                  sx={{ width: "75%" }}
                  value={purchase}
                  onChange={(e) => setPurchase(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  Down payment:{" "}
                  <span style={{ fontSize: "1.2rem" }}>${down_payment}</span>
                </Typography>

                <Slider
                  defaultValue={135000}
                  color="secondary"
                  step={5000}
                  min={50000}
                  max={400000}
                  sx={{ width: "75%" }}
                  value={down_payment}
                  onChange={(e) => setDown_payment(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  Repayment time:{" "}
                  <span style={{ fontSize: "1.2rem" }}>
                    {repayment_time} years
                  </span>
                </Typography>

                <Slider
                  defaultValue={25}
                  color="secondary"
                  step={1}
                  min={1}
                  max={30}
                  sx={{ width: "75%" }}
                  value={repayment_time}
                  onChange={(e) => setRepayment_time(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  Interest rate:{" "}
                  <span style={{ fontSize: "1.2rem" }}>{interest_rate}%</span>
                </Typography>

                <Slider
                  defaultValue={3}
                  color="secondary"
                  step={1}
                  min={0}
                  max={100}
                  sx={{ width: "75%" }}
                  value={interest_rate}
                  onChange={(e) => setInterest_rate(e.target.value)}
                />
              </Grid>
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  Loan amount:{" "}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  ${loan_amount}
                </Typography>
              </Grid>
              <Grid
                item
                xs={2}
                sm={4}
                md={4}
                container
                direction="column"
                justifyContent="center"
                alignItems="start"
              >
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  Estimated pr. month:{" "}
                  {/* <span style={{ fontSize: "1.2rem" }}>$450,000</span> */}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ fontWeight: "bold", fontFamily: "monospace" }}
                >
                  ${estimated_pr_month}
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </div>
        <ColorButton
          variant="contained"
          size="large"
          sx={{ ml: "4rem", fontFamily: "monospace", fontSize: "1.2rem" }}
        >
          Get a mortgage quote
        </ColorButton>
      </div>
    </>
  );
};

export default Card;
