// Génère manifest.json : la liste des fichiers de sounds/, images/ et profil-images/
// Utilisation locale :  node generate-manifest.js
// (sur GitHub, le workflow .github/workflows/manifest.yml le fait automatiquement)
const fs = require("fs");

const manifest = {};
for (const dir of ["sounds", "images", "profil-images"]) {
    manifest[dir] = fs.existsSync(dir)
        ? fs.readdirSync(dir).filter(f => !f.startsWith(".")).sort()
        : [];
}
fs.writeFileSync("manifest.json", JSON.stringify(manifest, null, 2) + "\n");
console.log("manifest.json généré :", manifest);
