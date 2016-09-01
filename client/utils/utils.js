import parse from 'csv-parse/lib/sync';

const Utils = {
  parseCsv(input) {
    return parse(input, { columns: true });
  }
};

export default Utils;