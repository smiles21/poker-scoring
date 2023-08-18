import './App.css';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import BettingContainer from './BettingContainer';
import TurnAndPotContainer from './TurnAndPotContainer';
import { getOtherPlayer } from './utils';

const theme = createTheme({});

function App() {
  const [dealerPlayer, setDealerPlayer] = useState(0);
  const [playerTurn, setPlayerTurn] = useState(0);
  const [potSize, setPotSize] = useState(0);
  const [stacks, setStacks] = useState({ 0: 400, 1: 400 });
  const [turnCount, setTurnCount] = useState(1);

  function addToPot(betAmount) {
    setPotSize(potSize + betAmount);
  }

  function advanceToNextTurn() {
    setPlayerTurn(getOtherPlayer(playerTurn));
  }

  function handleCheck() {
    return function() {
      advanceToNextTurn();
    };
  }

  function handleSmallBet(player) {
    return function() {
      addToPot(10);
      advanceToNextTurn();
      setStacks({...stacks, [player]: stacks[player] - 10 });
    };
  }

  function handleBigBet(player) {
    return function() {
      addToPot(20);
      advanceToNextTurn();
      setStacks({...stacks, [player]: stacks[player] - 20 });
    };
  }

  function handleFold(player) {
    return function() {
      const winnerPlayer = getOtherPlayer(player);
      setStacks({ ...stacks, [winnerPlayer]: stacks[winnerPlayer] + potSize });
      setPotSize(0);

      const newDealerPlayer = getOtherPlayer(dealerPlayer);
      setDealerPlayer(newDealerPlayer);
      setPlayerTurn(newDealerPlayer);
      setTurnCount(turnCount + 1);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
        className="App"
        direction="column"
        justifyContent="space-around"
        spacing={2}
      >
        <BettingContainer
          className="Player-zero"
          disabled={playerTurn === 0}
          isDealer={dealerPlayer === 0}
          stack={stacks[0]}
          handleFold={handleFold(0)}
          handleCheck={handleCheck(0)}
          handleSmallBet={handleSmallBet(0)}
          handleBigBet={handleBigBet(0)}
        />
        <TurnAndPotContainer
          potSize={potSize}
          turnCount={turnCount}
        />
        <BettingContainer
          disabled={playerTurn === 1}
          isDealer={dealerPlayer === 1}
          stack={stacks[1]}
          handleFold={handleFold(1)}
          handleCheck={handleCheck(1)}
          handleSmallBet={handleSmallBet(1)}
          handleBigBet={handleBigBet(1)}
        />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
