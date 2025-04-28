const parseEnv = () => {
const env = process.env;
const result = {};

for (const key in env) {
  if (key.startsWith('RSS_')) {
    result[key] = env[key];
  }
}

const output = Object.entries(result).map(([key, value]) => `${key}=${value}`).join('; ');
  console.log(output);
};

parseEnv();