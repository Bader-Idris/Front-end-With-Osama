const filterName = name => {
  if (name === undefined) name = 'Unknown';
  if (name.startsWith(" ") || name.endsWith(" ")) name = name.trim();
  if (name.length > 10) name = name.substring(0, 10);
  return name;// using ternary operator is shorter
};

module.exports = filterName;