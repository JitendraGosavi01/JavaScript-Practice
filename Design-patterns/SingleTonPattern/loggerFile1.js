import logger from "./Logger.js";
export function loggerFile1() {
  logger.printLogCount();
  logger.log("this is first log");
  logger.printLogCount();
}
