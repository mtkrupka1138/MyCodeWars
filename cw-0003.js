// Codewars challenge 0003

// In a small town the population is 'p0' at the beginning of a year. 
// The population regularly increases by 'percent' per year and moreover 'aug' 
// new inhabitants per year come to live in the town. How many years does 
// the town need to see its population greater or equal to 'p' inhabitants?

// p0, percent, aug (inhabitants coming or leaving each year), p (population 
// to surpass)
// the function nbYear should return n number of entire years needed to get 
// a population greater or equal to p.
// aug is an integer, percent a positive or null floating number, p0 and p 
// are positive integers (> 0)

function nbYear(p0, percent, aug, p) {
    let n = 1;
    let pCurrent = p0
    while (pCurrent < p) {
      pCurrent = pCurrent + Math.floor((pCurrent * percent/100)) + aug
      n++
    }
    return n-1;
  }