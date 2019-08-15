import { Sorter } from './sorter';
import { NumbersCollection } from './numbers_collection';
import { CharactersCollection } from './characters_collection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numbersSorter = new Sorter(numbersCollection);
numbersSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('buqpeyqkj');
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(charactersCollection.data);
