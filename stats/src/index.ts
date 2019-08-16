import { CsvFileReader } from './csv_file_reader';
import { MatchReader } from './match_reader';
import { Summary } from './summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithConsoleReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
