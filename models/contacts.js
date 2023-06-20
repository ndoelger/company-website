const contacts = [
    {
      name: "Corporate",
      email: "mailto:corporate@sweets.co",
    },
  
    {
      name: "Management",
      email: "mailto:management@sweets.co",
    },
  
    {
      name: "Careers",
      email: "mailto:careers@sweets.co",
    },
  ];
  
  module.exports = {
    getAll,
  };
  
  function getAll() {
    return contacts;
  }