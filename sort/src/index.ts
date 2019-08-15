import { Sorter } from './sorter';
import { NumbersCollection } from './numbers_collection';
import { CharactersCollection } from './characters_collection';
import { LinkedList } from './linked_list';

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('buqpeyqkj');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(3);
linkedList.add(1);
linkedList.add(10);
linkedList.add(-9);
linkedList.sort();
linkedList.print();
