import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, 'public');
const backupDir = path.join(publicDir, 'images-backup');

// Immagini nella root di /public da ottimizzare
const imagesToOptimize = [
    { src: 'logo-matteo.png', out: 'logo-matteo.webp', width: 400 },
    { src: 'formazione.jpeg', out: 'formazione.webp', width: 1200 },
    { src: 'radici.jpeg', out: 'radici.webp', width: 1200 },
    { src: 'impegnarsi.jpeg', out: 'impegnarsi.webp', width: 1200 },
];

// Crea cartella backup se non esiste
if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
    console.log('✅ Cartella backup creata: public/images-backup/');
}

async function optimizeImages() {
    console.log('\n📦 Inizio ottimizzazione immagini...\n');

    for (const img of imagesToOptimize) {
        const srcPath = path.join(publicDir, img.src);
        const outPath = path.join(publicDir, img.out);
        const backupPath = path.join(backupDir, img.src);

        if (!fs.existsSync(srcPath)) {
            console.log(`⚠️  File non trovato: ${img.src} — saltato`);
            continue;
        }

        // Backup dell'originale
        fs.copyFileSync(srcPath, backupPath);
        console.log(`🗂️  Backup: ${img.src} → images-backup/${img.src}`);

        const originalSize = fs.statSync(srcPath).size;

        // Converti in WebP
        await sharp(srcPath)
            .resize({ width: img.width, withoutEnlargement: true })
            .webp({ quality: 82 })
            .toFile(outPath);

        const newSize = fs.statSync(outPath).size;
        const reduction = Math.round((1 - newSize / originalSize) * 100);

        console.log(`✅  ${img.src} → ${img.out} | ${Math.round(originalSize / 1024)}KB → ${Math.round(newSize / 1024)}KB (${reduction}% riduzione)`);
    }

    console.log('\n🎉 Ottimizzazione completata! I backup sono in public/images-backup/');
    console.log('\n⚠️  NOTA: Aggiorna i riferimenti nei file sorgente .tsx/.jsx:\n');
    imagesToOptimize.forEach(img => {
        const newName = img.out;
        const oldName = img.src;
        console.log(`   "${oldName}" → "${newName}"`);
    });
}

optimizeImages().catch(console.error);
