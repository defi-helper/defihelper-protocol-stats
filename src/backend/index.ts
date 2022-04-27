import "./pre-start/index"; // Must be the first import
import app from "./Server";
import logger from "./shared/Logger";
import ConfigManager from "./shared/ConfigManager";

// Start the server
const port = Number(process.env.PORT || 8080);
app.listen(port, () => {
  logger.info("Express server started on port: " + port);
  logger.info("Var test: " + ConfigManager.get("TELEGRAM_BOT_TOKEN"));
});

