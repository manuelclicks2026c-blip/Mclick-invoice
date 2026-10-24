# Manuelclicks Invoice — starter app

This is a first working prototype for Manuelclicks Photography.

## Features
- Local client database
- Reusable photography packages
- Invoice creation and automatic totals in GH₵
- Deposit estimate, payment recording, balance tracking
- PDF invoice and payment receipt through the iPhone print/share interface
- JSON backup and restore, plus invoice summary CSV export
- Offline app shell after the first online load

## Important
Data is stored in browser localStorage on the device. It is not encrypted, synced, or automatically backed up. Export a backup regularly. Do not clear Safari website data unless you have a backup.

## Install on iPhone
iOS Home Screen installation of a web app works most reliably when the files are served over HTTPS. Opening `index.html` directly from Files is useful for a quick test, but does not provide a proper installable offline app.

1. Upload `index.html`, `manifest.json`, and `sw.js` to a static HTTPS host you control (for example, a private GitHub repository published with GitHub Pages, or another static host).
2. Open the HTTPS page in Safari on your iPhone.
3. Tap Share → Add to Home Screen. If shown, enable “Open as Web App”, then tap Add.
4. Open the app from the Home Screen and add a test client and invoice.
5. Go to Settings → Export backup and save the JSON file somewhere safe, such as iCloud Drive or an external drive.

## First-run setup
- Open Settings and confirm your business contact details and default deposit percentage.
- Add your common packages under Packages.
- Add a test client, create an invoice, record a test payment, and check the receipt before using it with real clients.

## Prototype limitations
- This is a starter prototype, not an App Store-distributed native iOS app.
- PDF output uses the iOS browser print flow; choose the share/save PDF option in the print preview.
- No automatic WhatsApp sending; the PDF is saved/shared using the iOS share sheet.
- No invoice deletion or payment reversal UI yet. Back up before making important changes.
- Verify your own booking terms, tax details, and legal requirements before using invoices as official accounting records.
