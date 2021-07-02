import Redis from 'ioredis';

export const redis = new Redis(process.env.REDIS_URL);

redis.on("error", (error: any) => {
  console.log("Redis connection error", error);
  process.exit(1);
});

process.on("exit", function () {
  console.log("Exiting...listener count", redis.listenerCount("error"));
});