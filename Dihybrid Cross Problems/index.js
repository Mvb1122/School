// Start operation timer:
console.time("Time taken: ");

// Load parent genetic informtion.
let parent1 = {};
let parent2 = {};
parent1.full = require('./Parents.json').parent1;
parent2.full = require('./Parents.json').parent2;
console.log(`Parent 1: ${parent1.full}`);
console.log(`Parent 2: ${parent2.full}`);
// Figure out alleles.
parent1.allele1 = parent1.full[0];
parent1.allele2 = parent1.full[1];
parent1.allele3 = parent1.full[2];
parent1.allele4 = parent1.full[3];

parent2.allele1 = parent2.full[0];
parent2.allele2 = parent2.full[1];
parent2.allele3 = parent2.full[2];
parent2.allele4 = parent2.full[3];

// Make Allele Sets
parent1.alleleSets = [`${parent1.allele1}${parent1.allele3}`, `${parent1.allele1}${parent1.allele4}`, `${parent1.allele2}${parent1.allele3}`, `${parent1.allele2}${parent1.allele4}`];

parent2.alleleSets = [`${parent2.allele1}${parent2.allele3}`, `${parent2.allele1}${parent2.allele4}`, `${parent2.allele2}${parent2.allele3}`, `${parent2.allele2}${parent2.allele4}`];

console.log(`Parent 1 FOIL: ${parent1.alleleSets}`);
console.log(`Parent 2 FOIL: ${parent2.alleleSets}`);

// Format Allele text
const calcAlleleDom = (alleleSet1, alleleSet2) => {
  let gene1 = `${alleleSet1[0]}${alleleSet2[0]}`
  let gene2 = `${alleleSet1[1]}${alleleSet2[1]}`
  return formatGenes(gene1) + formatGenes(gene2);
  // return gene1 + gene2;
}

const formatGenes = (gene1) => {
  let gene1Array = [gene1[0], gene1[1]];
  if (gene1[0] !== gene1[1] && (gene1[1] === gene1[1].toUpperCase())) {
    gene1Array.reverse();
  }
  return `${gene1Array[0]}${gene1Array[1]}`;
}

// Calculate Statistics
const increaseCount = (j) => {
  let allele = {"combo": j, mapped: false};
  if (allele.combo === counter0.combo) {
      counter0.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter1.combo) {
      counter1.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter2.combo) {
      counter2.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter3.combo) {
      counter3.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter4.combo) {
      counter4.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter5.combo) {
      counter5.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter6.combo) {
      counter6.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter7.combo) {
      counter7.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter8.combo) {
      counter8.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter9.combo) {
      counter9.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter10.combo) {
      counter10.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter11.combo) {
      counter11.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter12.combo) {
      counter12.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter13.combo) {
      counter13.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter14.combo) {
      counter14.value ++; allele.mapped = true;
      return
  }
  if (allele.combo === counter15.combo) {
      counter15.value ++; allele.mapped = true;
      return
  }

  // Code that runs if the combo doesn't match any of the previous ones:
  if (allele.mapped === false) {
    for (let y = 0; y < 16; y++) {
      switch (y) {
        case 0:
          if(counter0.combo === "" && allele.mapped === false) {
          counter0.combo = j;
          counter0.value ++; allele.mapped = true;}
          break;

        case 1:
            if(counter1.combo === "" && allele.mapped === false) {
            counter1.combo = j;
            counter1.value ++; allele.mapped = true;}
            break;

        case 2:
            if(counter2.combo === "" && allele.mapped === false) {
            counter2.combo = j;
            counter2.value ++; allele.mapped = true;}
            break;

        case 3:
            if(counter3.combo === "" && allele.mapped === false) {
            counter3.combo = j;
            counter3.value ++; allele.mapped = true;}
            break;

        case 4:
            if(counter4.combo === "" && allele.mapped === false) {
            counter4.combo = j;
            counter4.value ++; allele.mapped = true;}
            break;

        case 5:
            if(counter5.combo === "" && allele.mapped === false) {
            counter5.combo = j;
            counter5.value ++; allele.mapped = true;}
            break;

        case 6:
            if(counter6.combo === "" && allele.mapped === false) {
            counter6.combo = j;
            counter6.value ++; allele.mapped = true;}
            break;

        case 7:
            if(counter7.combo === "" && allele.mapped === false) {
            counter7.combo = j;
            counter7.value ++; allele.mapped = true;}
            break;

        case 8:
            if(counter8.combo === "" && allele.mapped === false) {
            counter8.combo = j;
            counter8.value ++; allele.mapped = true;}
            break;

        case 9:
            if(counter9.combo === "" && allele.mapped === false) {
            counter9.combo = j;
            counter9.value ++; allele.mapped = true;}
            break;

        case 10:
            if(counter10.combo === "" && allele.mapped === false) {
            counter10.combo = j;
            counter10.value ++; allele.mapped = true;}
            break;

        case 11:
            if(counter11.combo === "" && allele.mapped === false) {
            counter11.combo = j;
            counter11.value ++; allele.mapped = true;}
            break;

        case 12:
            if(counter12.combo === "" && allele.mapped === false) {
            counter12.combo = j;
            counter12.value ++; allele.mapped = true;}
            break;

        case 13:
            if(counter13.combo === "" && allele.mapped === false) {
            counter13.combo = j;
            counter13.value ++; allele.mapped = true;}
            break;

        case 14:
            if(counter14.combo === "" && allele.mapped === false) {
            counter14.combo = j;
            counter14.value ++; allele.mapped = true;}
            break;

        case 15:
            if(counter15.combo === "" && allele.mapped === false) {
            counter15.combo = j;
            counter15.value ++; allele.mapped = true;}
            break;
        default:
          console.log(`Something's gone wrong. Value of y = ${y}`);
      }
    }
  }
}

// Calculate Phenotopic Ratios:
let domAllele1 = parent1.allele1.toUpperCase();
let domAllele2 = parent1.allele3.toUpperCase();
let resAllele1 = parent1.allele1.toLowerCase();
let resAllele2 = parent1.allele3.toLowerCase();

let phenoCounter0 = {combo: `${domAllele1}${domAllele2}`, value: 0};
let phenoCounter1 = {combo: `${domAllele1}${resAllele2}`, value: 0};
let phenoCounter2 = {combo: `${resAllele1}${domAllele2}`, value: 0};
let phenoCounter3 = {combo: `${resAllele1}${resAllele2}`, value: 0};

let countPhenotypes = (cell) => {
  let allele = {"combo": cell, mapped: false };

  // console.log(allele);

  for (let i = 0; i < 4; i++) {
    let phenoCounter = {};
    eval(`phenoCounter = phenoCounter${i}`);
    if (phenoCounter.combo === allele.combo) {
      phenoCounter.value ++;
      eval(`phenoCounter${i} = phenoCounter`);
      return true;
    }
  }

  // Code that runs if it isn't matched:
  if (allele.mapped === false) {
        if (!phenoCounter0.combo){
          phenoCounter0.combo = allele.combo;
          phenoCounter0.value ++;
          // console.log(phenoCounter0);
        }
        if (!phenoCounter1.combo){
          phenoCounter1.combo = allele.combo;
          phenoCounter1.value ++;
          // console.log(phenoCounter1);
        }
        if (!phenoCounter2.combo){
          phenoCounter2.combo = allele.combo;
          phenoCounter2.value ++;
          // console.log(phenoCounter2);
        }
        if (!phenoCounter3.combo){
          phenoCounter3.combo = allele.combo;
          phenoCounter3.value ++;
          // console.log(phenoCounter3);
        }
      }
      // console.log(phenoCounter0);
}

// Create counters
let counter0 = {combo: "", value: 0};
let counter1 = {combo: "", value: 0};
let counter2 = {combo: "", value: 0};
let counter3 = {combo: "", value: 0};
let counter4 = {combo: "", value: 0};
let counter5 = {combo: "", value: 0};
let counter6 = {combo: "", value: 0};
let counter7 = {combo: "", value: 0};
let counter8 = {combo: "", value: 0};
let counter9 = {combo: "", value: 0};
let counter10 = {combo: "", value: 0};
let counter11 = {combo: "", value: 0};
let counter12 = {combo: "", value: 0};
let counter13 = {combo: "", value: 0};
let counter14 = {combo: "", value: 0};
let counter15 = {combo: "", value: 0};

// Calculate Crosses
let crosses = [["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];
// Loop 4x with iterator i
for (let i = 0; i < 4; i++ ) {
  // Loop 4x with iterator j
  for (let j = 0; j < 4; j++ ) {
    cell = calcAlleleDom(parent1.alleleSets[i], parent2.alleleSets[j]);
    crosses[j][i] = cell
    increaseCount(cell);
    countPhenotypes(cell[0] + cell[2]);
    // countPhenotypes(cell[1] + cell[3]);
  }
}

console.log("\n");
console.log("The horizontal axis is parent 1 and the vertical axis is parent 2.")
console.table(crosses);

// Generate output:
console.log("\n")
let counterCounter = 0;
console.log("Genotypic Ratios:");
for (let y = 0; y < 16; y++) {
  let counter;
  eval(`counter = counter${y}`);
  // console.log(counter);
  counterCounter += counter.value;
  if (counter.combo) {
    let precentage = (counter.value / 16) * 100;
    console.log(`${counter.combo} makes up ${precentage}% (${counter.value}/16)`);
  }
}
// Data validation
if (counterCounter === 16) {
  console.log("This data is valid.");
} else {
  console.warn("THIS DATA IS INVALID, CHECK Parents.json");
}


// Display Phenotopic ratios.
console.log("\nPhenotypic Ratios:");

let phenoTotalCounter = 0;
for (let y = 0; y < 4; y++) {
  let counter;
  eval(`counter = phenoCounter${y}`);
  // console.log(counter);
  if (counter.value) {
    let precentage = (counter.value / 16) * 100;
    console.log(`${counter.combo} makes up ${precentage}% (${counter.value}/16)`);
    phenoTotalCounter += counter.value;
  }
}

// Data Validation
if (phenoTotalCounter === 16) {
  console.log("This data is valid.");
} else {
  console.warn("THIS DATA IS INVALID, CHECK Parents.json");
}

// TODO: Figure out why the data's invalid.

console.log("\n\n");
console.timeEnd("Time taken: ");