export const corsConfig = {
  origin: function (origin, callback) {
    const whitelist = [process.env.FRONTEND_URL];
    // console.log("here is whitelist:", whitelist);
    // console.log("here is whitelist:", process.env.FRONTEND_URL);

    if (process.argv[2] === "--api" && process.env.NODE_ENV !== "production") {
      whitelist.push(undefined);
    }

    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS Error"));
    }
  },
};
