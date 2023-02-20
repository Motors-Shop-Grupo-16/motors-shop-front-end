const createImage = (name: string) => {
  const splitedName = name.split(" ");

  if (splitedName.length > 1) {
    return `${splitedName[0][0]}${splitedName[1][0]}`;
  } else {
    return `${splitedName[0][0]}`;
  }
};

export default createImage;
