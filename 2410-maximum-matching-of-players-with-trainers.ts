function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
  players.sort((a, b) => b - a);
  trainers.sort((a, b) => b - a);

  let firstTrainer = 0;
  let matchedPairs = 0;

  for (let playerIndex = 0; playerIndex < players.length; playerIndex++) {
    for (let trainerIndex = firstTrainer; trainerIndex < trainers.length; trainerIndex++)
      if (players[playerIndex] <= trainers[trainerIndex]) {
        matchedPairs++;
        firstTrainer = trainerIndex + 1;
        break;
      }
  }

  return matchedPairs;
};
