const filterName = name => {
  if (name === undefined) name = 'Unknown';
  if (name.startsWith(" ") || name.endsWith(" ")) name = name.trim();
  return name;// using ternary operator is shorter
};

module.exports = filterName;