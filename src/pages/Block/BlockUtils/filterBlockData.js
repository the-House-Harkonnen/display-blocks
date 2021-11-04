export const filtrBlockData = (block) => [
  {
    Hush: block.level,
    'Created at': block.timestamp,
    Backer: block.backerName,
    'Backer.s fee': block.fees,
    'Backer.s priority': block.priority,
    'Transactions volume': block.volume,
  },
  {
    'Block time': block.blockTime,
    'Block fitness': block.fitness,
    'Gas used': block.consumedGas,
    'Protocol version': block.protocol,
    'Cycle:': block.metaCycle,
    'Cycle position': block.metaCyclePosition,
  },
];
