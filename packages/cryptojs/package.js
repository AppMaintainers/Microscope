Package.describe("CrypotJS HMAC-SHA256 package");

Package.on_use(function (api) {
  api.add_files('hmac-sha256.js', ['client','server']);
});