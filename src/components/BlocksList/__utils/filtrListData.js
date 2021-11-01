export const filtrListData = (data) =>
  data.map((block) => ({
    blockId: block.level,
    created: block.timestamp,
    backer: block.bakerName,
    Priority: block.priority,
    '# of operations': block.number_of_operations,
    volume: block.volume,
    fees: block.fees,
    endorsements: block.endorsements,
  }));
