const findMatching = (drivers, driverName) => {
  const matchingDrivers = drivers.filter(function (name) {
    return name.toLowerCase() === driverName.toLowerCase();
  });
  return matchingDrivers;
};

const fuzzyMatch = (drivers, driverName) => {
  const fuzzyMatchingDrivers = drivers.filter(function (name) {
    return name.toLowerCase().charAt(0) === driverName.toLowerCase().charAt(0);
  });
  return fuzzyMatchingDrivers;
};

const drivers = [
  {
    name: "Bobby",
    hometown: "Pittsburgh",
  },
  {
    name: "Sammy",
    hometown: "New York",
  },
  {
    name: "Sally",
    hometown: "Cleveland",
  },
  {
    name: "Annette",
    hometown: "Los Angeles",
  },
  {
    name: "Bobby",
    hometown: "Tampa Bay",
  },
];

const matchName = (drivers, driverName) => {
  const matchingDrivers = drivers.filter(function (name) {
    return name.name === driverName;
  });
  return matchingDrivers;
};
