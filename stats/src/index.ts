import { CsvFileReader } from './csv_file_reader';
import { MatchReader } from './match_reader';
import { MatchResult } from './match_result';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

console.log(`Man United won ${manUnitedWins} games`);
