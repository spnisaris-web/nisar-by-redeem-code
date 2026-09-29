# Nisar By Redeem Code GitHub Pages starter

This package is a mobile-friendly static website template.

## Important
- No fake/demo redeem codes are included.
- It does not generate redeem codes.
- It links users to the official redemption website.
- Never put a private API key in `config.js`.
- After receiving an authorized API/feed, use a secure backend and have this frontend request `/api/codes`.
- Replace the legal placeholder pages with policies matching your real service.
- Do not claim official affiliation or use protected branding without permission.

## GitHub Pages
1. Create a GitHub repository.
2. Upload all files.
3. Settings → Pages.
4. Select `main` branch and `/root`.
5. Save.
6. GitHub will provide a `https://username.github.io/repository/` URL.

## Later API connection
Set `apiBaseUrl` to your secure backend and `apiEnabled` to `true`.
Expected response:
```json
{"codes":[{"code":"AUTHORIZED_CODE","region":"India","expiresAt":"2026-10-01T00:00:00Z"}]}
```
