const randomArray = () => {
  const lng = Math.floor((Math.random() * (10 - 4 + 1)) + 4);
  const data = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomResponse = "";
  for (let i = 0; i < lng; i++) {
      randomResponse += data.charAt(Math.floor(Math.random() * data.length));
  }
  return randomResponse.split('');
};

export {
  randomArray
}