# Security notes

Layers implemented in this build (2026-09-30):

1. **HTTP security headers** (`next.config.ts`): CSP (with `frame-ancestors 'none'`,
   `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`), `X-Frame-Options: DENY`,
   `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`,
   HSTS (meaningful once served over HTTPS), `X-Powered-By` removed.
2. **Rate limiting** (`middleware.ts`): per-IP sliding window on all write (POST) requests,
   returns 429 with `Retry-After`. Best-effort per instance; add Cloudflare/WAF in production.
3. **Server-side form actions** (`app/actions.ts`): every submission is validated, sanitised
   (control characters stripped, length capped), bot-filtered (honeypot + human-speed timestamp)
   and stored (`data/submissions.jsonl`, or `DATA_DIR`). Bots receive a fake success response.
4. **Client form hardening**: off-screen honeypots, `maxLength` caps, typed inputs,
   `aria-invalid` + inline errors, consent capture for personal data (PDPA 2019).

Before launch:

- Serve over HTTPS so HSTS and `upgrade-insecure-requests` take effect; re-run a header audit.
- Tighten CSP to a nonce-based `script-src` (drop `'unsafe-inline'`) via middleware nonces.
- Move `data/submissions.jsonl` to the CMS/database; never commit it to git.
- Set `DATA_DIR` on the host (serverless filesystems are read-only outside `/tmp`).
- Add Turnstile only if spam gets past the honeypot layer.
- Keep dependencies updated (`npm audit` in CI).

## Form data handling (update)

- `data/` directory permissions: 0700; `submissions.jsonl` and stored CV files: 0600.
- CV uploads accepted as PDF/DOC/DOCX only, capped at 5 MB, stored under `data/uploads/`
  with random file names (no user-controlled paths) and 0600 permissions.
- Storage failure logs record the error message only, never submission contents (PII).
- Email formats are validated server-side; all inputs are length-capped and control chars stripped.
