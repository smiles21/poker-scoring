import './TurnAndPotContainer.css';

import { Typography } from '@mui/material';

function TurnAndPotContainer({ potSize, turnCount }) {
  return (
    <div>
      <Typography variant="h4">
        Pot: {potSize}
      </Typography>
      <Typography variant="subtitle1">
        Turn: {turnCount}
      </Typography>
    </div>
  )
}

export default TurnAndPotContainer;
