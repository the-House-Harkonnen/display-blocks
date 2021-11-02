export const filtrListData = (data) =>
  data.map((block) => ({
    blockId: block.level,
    created: block.timestamp,
    backer: block.bakerName,
    backerIcon: `https://teztracker.com/static/validators-logo/${block.baker}.png`,
    Priority: block.priority,
    '# of operations': block.number_of_operations,
    volume: block.volume,
    fees: block.fees,
    endorsements: block.endorsements,
  }));
