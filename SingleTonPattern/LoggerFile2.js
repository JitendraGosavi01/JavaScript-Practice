import logger from "./Logger.js";

export function loggerFile2() {
  logger.printLogCount();
  logger.log("this is second log");
  logger.printLogCount();
}
