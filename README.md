# Manuelclicks Invoice

A mobile-friendly, local-first invoicing app for Manuelclicks Photography. It is designed for free GitHub Pages hosting and uses the browser's local storage; it does not send client records to a server.

## Included
- Dashboard with clients, invoices, outstanding balances and recorded payments.
- Client and reusable photography package management.
- Invoice creation with editable line items, separate package name/description, discounts, charges, deposit, due dates and status.
- Multiple event programme entries per invoice, each with free-text date and location, time, address, directions and instructions.
- Payment tracking with transaction references, instalments and payment-specific receipts.
- Browser print / Save as PDF layouts for invoices and receipts.
- JSON backup/restore and invoice summary CSV export.
- Responsive interface, web app manifest and service worker for basic app-shell caching.

## Deploy to your existing GitHub Pages repository
1. Open the existing repository on GitHub. **Do not delete the repository.**
2. Before replacing files, open the current published app and export a JSON backup from its Settings page if that version has a backup feature. Keep that backup somewhere safe on your computer.
3. Download and unzip the project ZIP. You should see `index.html`, `manifest.json`, `sw.js`, `icon.svg`, `logo.jpg` and this README.
4. In your existing repository, open the folder currently used by GitHub Pages (often the repository root, or `/docs` if your Pages setting uses that folder).
5. Upload the new files into that same published folder. Replace files with the same names when GitHub asks. If your current Pages site uses `/docs`, upload all files there instead of the repository root.
6. Commit the changes. Keep the existing repository and its GitHub Pages settings.
7. Wait for the Pages deployment to finish, then open the website and test it.
8. On iPhone, open the HTTPS website in Safari, tap Share, then **Add to Home Screen**.

## Safe upgrade and data preservation
The app's local data is stored in the browser on the device, not in the GitHub repository. Updating website files normally leaves browser local storage in place, but no app can guarantee preservation if browser data is cleared or storage keys/schema change. Export a JSON backup before updating. After updating, open the app and confirm clients, invoices, programmes and payments still appear. If needed, restore your backup in Settings. Restore replaces the app's current records, so export a backup of current records first.

This project uses the storage key `manuelclicks_invoice_v1`. Do not change it casually: doing so makes the app look like it has no previous records. If the data schema changes in a future version, implement a migration rather than deleting or resetting the key.

## Local testing
For a proper test, serve the folder over HTTP rather than opening `index.html` directly. For example, if Python is installed, run `python3 -m http.server 8000` from the project folder and visit `http://localhost:8000`. Service workers require HTTPS or localhost. Some browser print features and iPhone installation need a deployed HTTPS site.

## Data and privacy notes
- Records stay in the browser profile on the current device. There is no automatic cloud sync or multi-user access.
- Clearing browser/site data, removing the browser profile, or losing the device can lose records. Export backups regularly.
- Do not upload JSON backups or real client data to the public GitHub repository.
- The app cannot guarantee recovery of records if the browser's local storage is full or removed.
- The app uses browser print-to-PDF. Verify invoice and receipt page breaks on the actual browser/device you use before relying on the documents for clients.
- The service worker caches the app shell for loading support, but not every feature is guaranteed to work offline. Printing, browser storage and first load still depend on browser support.

## Checks performed for this delivery
- JavaScript syntax check (run before publishing).
- HTML and manifest files included with consistent app storage key.
- Manual browser/device print testing has **not** been performed in this environment. Before real use, test client creation, multiple event programmes, line-item removal, payment-specific receipts, JSON restore and A4 print output in your target browser.

## Important limitations
This is a client-side app, not an accounting platform with a server database. Anyone using the same browser profile can access its records. There is no login, encryption, cloud backup, automated email sending, tax calculation or cross-device sync. Keep the device protected and backups private.
