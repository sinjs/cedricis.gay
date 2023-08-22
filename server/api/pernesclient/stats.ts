const changelog = `0.9.4
Added Speed Mine and Haste
Added new Server Crasher methods
Fixed self client crash
Fixed more bugs
Removed broken features`;

const latest = {
  version: "0.9.4",
  mc_version: "1.15.1",
  date: new Date("2021-09-23").toString(),
  build: 159,
};

const latest_dev = {
  dev_version: "1.0.0-dev",
  dev_mc_version: "1.20.1",
  dev_date: new Date("2023-08-22").toString(),
  dev_build: 164,
};

export default eventHandler(async (event) => {
  return {
    debug: process.env.NODE_ENV === "development",
    changelog: changelog.trim().split("\n"),

    ...latest,
    ...latest_dev,
  };
});
