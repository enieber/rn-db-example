const databaseOptions = (schemas, version) => {
  const config = {
    path: 'pouch.realm',
    schema: [...schemas],
    schemaVersion: version,
  }

  return config;
}
export default databaseOptions;
