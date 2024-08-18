// Daftar domain email
export const emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com'];

// Daftar nama formal
const names = ['John', 'Jane', 'Alex', 'Emily', 'Chris', 'Katie', 'Michael', 'Sarah'];

// Fungsi untuk menghasilkan nama acak dari daftar
export const generateRandomName = () => {
  const firstName = names[Math.floor(Math.random() * names.length)];
  const lastName = names[Math.floor(Math.random() * names.length)];
  return [firstName, lastName];
};

// Fungsi untuk menghasilkan variasi nama
export const generateNameVariations = (baseName) => {
  const names = generateRandomName();
  const variations = [
    baseName,
    names[0] + names[1],
    names[1] + names[0],
    names[0] + baseName,
    names[1] + baseName,
    baseName + names[0],
    baseName + names[1]
  ];
  return variations;
};

// Fungsi untuk menghasilkan email acak
export const generateRandomEmail = (provider) => {
  const [firstName, lastName] = generateRandomName();
  const randomName = `${firstName}${lastName}`;
  return `${randomName}@${provider}`;
};
