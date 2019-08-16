import { CsvFileReader } from './csv_file_reader';
import { MatchReader } from './match_reader';
import { ConsoleReport } from './reportTargets/console_report';
import { WinsAnalysis } from './analyers/wins_analysis';
import { Summary } from './summary';
import { HtmlReport } from './reportTargets/html_report';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchReader.matches);
