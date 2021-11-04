import { inTezosHandler } from '../../../utils/inTezosHandler';
import { timeFormatHandler } from '../../../utils/timeFormatHandler';

export const filtrBlockData = (block) => [
  {
    Hush: block.level,
    'Created at': timeFormatHandler(block.timestamp),
    Backer: block.bakerName,
    'Backer.s fee': inTezosHandler(block.fees),
    'Backer.s priority': block.priority,
    'Transactions volume': inTezosHandler(block.volume),
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
