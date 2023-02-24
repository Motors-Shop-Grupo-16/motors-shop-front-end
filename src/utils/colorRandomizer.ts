const colorRandomizer = (name: string) => {
  return String(Math.round((name.length % 12) + 1));
};

export default colorRandomizer;
