import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

function BettingContainer(props) {
  const {
    className,
    disabled,
    isDealer,
    stack,
    handleCheck,
    handleSmallBet,
    handleBigBet,
    handleFold,
  } = props;

  return (
    <Grid className={className} container rowSpacing={2}>
      <Grid xs={4}>
        <Button
          variant="outlined"
          onClick={handleCheck}
          disabled={disabled}>
        Check
      </Button>
      </Grid>
      <Grid xs={4}>
        <Button
          variant="outlined"
          onClick={handleSmallBet}
          disabled={disabled}
        >
          Small
        </Button>
      </Grid>
      <Grid xs={4}>
        <Button
          variant="outlined"
          onClick={handleBigBet}
          disabled={disabled}
        >
          Big
        </Button>
      </Grid>
      <Grid xs={6}>
        <Button
          variant="outlined"
          onClick={handleFold}
          disabled={disabled}
        >
          Fold
        </Button>
      </Grid>
      <Grid xs={6}>
        <Typography variant="subtitle1">
          {isDealer && "(Dealer)"} Stack: {stack}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default BettingContainer;
