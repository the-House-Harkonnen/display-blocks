import { convertTezos } from '../../../utils/convertTezos';
import { convertTimestamp } from '../../../utils/convertTimestamp';

export const filtrBlockData = (block) => {
  return Object.entries({
    Hash: block.level,
    'Block time': `${block.blockTime} sec`,
    'Created at': convertTimestamp(block.timestamp),
    'Block fitness': block.fitness,
    Baker: block.bakerName,
    'Gas used': block.consumedGas,
    'Backer.s fee': convertTezos(block.fees),
    'Protocol version': block.protocol,
    'Backer.s priority': block.priority,
    'Cycle:': block.metaCycle,
    'Transactions volume': convertTezos(block.volume),
    'Cycle position': block.metaCyclePosition,
  });
};
