const express = require("express");
const { list, create, createComment, likes, remove } = require("./controller");
const { logger } = require("../middleware/logger");
const { authenticator } = require("../middleware/authenticator");
const { validateTweet, validateComment } = require("../middleware/validator");
const { tweetsAuthorization } = require("../middleware/authorization");

const router = express.Router();

router.use(logger);

router
  .route("/")
  .get(list)
  .post(authenticator, validateTweet, create)
  .delete(authenticator, tweetsAuthorization, remove);

router.route("/comments").post(authenticator, validateComment, createComment);

router.route("/likes").post(authenticator, likes);

module.exports = router;
