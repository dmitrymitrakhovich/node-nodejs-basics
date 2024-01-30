const parseEnv = () => {
  const keysWithPrefix = Object.keys(process.env)
    .filter((key) => key.includes('RSS_'))
    .map((key) => `${key}=${process.env[key]}`)
    .join('; ');

  console.log(keysWithPrefix);
};

parseEnv();