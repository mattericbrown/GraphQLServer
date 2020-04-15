import Redis from 'ioredis';

export const redis = new Redis();

redis.on("error", function (error) {
  console.dir(error);
});