// Utilities related to pipes and filters architecture

module.exports = (drivers) => {
  return {
    // Merges sources. Accepts cycles too (by grabbing their source).
    mergeSources: (...sources) =>
      sources.
        map((source) => source(drivers)).
        map((source) => source.cycleSource || source).
        reduce((output, source) => output.merge(source))
  }
}
