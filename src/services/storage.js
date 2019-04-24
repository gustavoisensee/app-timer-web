export const storeData = (key, value) => {
  try {
    localStorage.setItem(`@MyFinances:${key}`, JSON.stringify(value));
  } catch (error) {
    console.log('Error saving data: ', error);
  }
};

export const retrieveData = (key) => {
  try {
    const value = localStorage.getItem(`@MyFinances:${key}`);
    return value ? JSON.parse(value) : null;
  } catch (error) {
    console.log('Error retrieving data: ', error);
    return null;
  }
};

export const removeData = (key) => {
  try {
    localStorage.removeItem(`@MyFinances:${key}`);
  } catch (error) {
    console.log('Error removing data: ', error);
  }
};
