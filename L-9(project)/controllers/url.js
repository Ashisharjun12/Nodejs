const shortid = require("shortid");
const urlmodel = require("../models/url.js");

const generateShortUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) return res.status(400).json({ msg: "url is required" });

  const shortID = shortid();

  await urlmodel.create({
    shortId: shortID,
    redirectURL: url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
};

const shorturl = async (req, res) => {
  const shortId = req.params.shortId;
  await urlmodel.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
};

module.exports = {
  generateShortUrl,
};

module.exports = {
  generateShortUrl,
  shorturl
};
