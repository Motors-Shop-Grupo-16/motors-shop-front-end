export const cpfMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+$/, "$1");
};

export const phoneMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(\d{4})\d+$/, "$1");
};

export const cepMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{3})\d+$/, "$1");
};

export const dateMask = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(-\d{2})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+$/, "$1");
};

export const yearMask = (value: string) => {
  return value.replace(/\D/g, "").replace(/(\d{4})(\d)/, "$1");
};

export const currencyMask = (value: string) => {
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
  const options = { minimumFractionDigits: 2 };
  return new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(value) / 100
  );
};
