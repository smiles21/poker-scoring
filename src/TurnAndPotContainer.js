import './TurnAndPotContainer.css';

import { Typography } from '@mui/material';

function TurnAndPotContainer({ potSize }) {
  return (
    <Typography variant="h4">
      Pot: {potSize}
    </Typography>
  )
}

export default TurnAndPotContainer;
