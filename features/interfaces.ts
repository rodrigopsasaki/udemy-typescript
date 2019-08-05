interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `This is a ${this.name} from ${this.year}`;
  }
};

const printSummary = (item: Reportable) => {
  console.log(item.summary());
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is ${this.color} and has ${this.sugar} grams of sugar`;
  }
};

printSummary(oldCivic);
printSummary(drink);
