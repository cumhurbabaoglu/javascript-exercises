const findTheOldest = function(people) {
    const currentYear = new Date().getFullYear();
    return people.reduce((oldestPerson, currentPerson) => {
    let currentPersonAge;
    let oldestPersonAge;
    if (!currentPerson.yearOfDeath) {
      currentPersonAge = currentYear - currentPerson.yearOfBirth;
    } else {
      currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    }
    if (!oldestPerson.yearOfDeath) {
      oldestPersonAge = currentYear - oldestPerson.yearOfBirth;
    } else {
      oldestPersonAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    }
    return currentPersonAge > oldestPersonAge ? currentPerson : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
