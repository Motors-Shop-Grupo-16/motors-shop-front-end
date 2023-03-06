const pluralFormatter = (number: number, month?: boolean) => {
  if (month) {
    return number > 1 ? "meses" : "mês";
  }
  return number > 1 ? "s" : "";
};

const dateFormatter = (date: Date) => {
  const currentDate = new Date().getTime();
  const createdAt = new Date(date).getTime();

  const timeDifference = currentDate - createdAt;

  if (timeDifference < 1000) {
    return `Agora`;
  }

  if (timeDifference < 60000) {
    const seconds = Math.floor(timeDifference / 1000);

    return `há ${seconds} segundo${pluralFormatter(seconds)}`;
  }

  if (timeDifference < 3600000) {
    const minutes = Math.floor(timeDifference / 60000);

    return `há ${minutes} minuto${pluralFormatter(minutes)}`;
  }

  if (timeDifference < 86400000) {
    const hours = Math.floor(timeDifference / 3600000);

    return `há ${hours} hora${pluralFormatter(hours)}`;
  }

  if (timeDifference < 604800000) {
    const days = Math.floor(timeDifference / 86400000);

    return `há ${days} dia${pluralFormatter(days)}`;
  }

  if (timeDifference < 2419200000) {
    const weeks = Math.floor(timeDifference / 604800000);

    return `há ${weeks} semana${pluralFormatter(weeks)}`;
  }

  if (timeDifference < 29030400000) {
    const months = Math.floor(timeDifference / 2419200000);

    return `há ${months} ${pluralFormatter(months, true)}`;
  }

  const years = Math.floor(timeDifference / 29030400000);

  return `há ${years} ano${pluralFormatter(years)}`;
};

export default dateFormatter;
