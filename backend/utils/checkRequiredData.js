export const checkRequiredData = (data) => {
  Object.values(data).every((value) => {
    if (value === null || value === "") {
      return true;
    }
    
    return false;
  });
}