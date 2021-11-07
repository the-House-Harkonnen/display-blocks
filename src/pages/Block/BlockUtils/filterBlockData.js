import { inTezosHandler } from '../../../utils/inTezosHandler';
import { timeFormatHandler } from '../../../utils/timeFormatHandler';

export const filtrBlockData = (block) => {
  return Object.entries({
    Hash: block.level,
    'Block time': `${block.blockTime} sec`,
    'Created at': timeFormatHandler(block.timestamp),
    'Block fitness': block.fitness,
    Baker: block.bakerName,
    'Gas used': block.consumedGas,
    'Backer.s fee': inTezosHandler(block.fees),
    'Protocol version': block.protocol,
    'Backer.s priority': block.priority,
    'Cycle:': block.metaCycle,
    'Transactions volume': inTezosHandler(block.volume),
    'Cycle position': block.metaCyclePosition,
  });
};
