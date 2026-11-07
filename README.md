# Erri Raghupathi Reddy — Developer Portfolio

A responsive, frontend-only React portfolio built with JavaScript, HTML, CSS, Vite, and Lucide React. Contact submissions go directly from the browser to Web3Forms; there is no custom API or backend.

## Run locally

1. Install dependencies:

   ```sh
   npm install
   ```

2. Copy `.env.example` to `.env.local` and set `VITE_WEB3FORMS_ACCESS_KEY` to the access key from your Web3Forms account.
3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open the URL printed by Vite (normally `http://localhost:5173`).

## Contact form and Web3Forms

The form validates full name, email, optional phone, subject, project type, message, and required privacy consent in the browser. It shows a loading state, prevents duplicate submissions, and reports provider success or failure. Web3Forms performs server-side spam screening; its documentation recommends adding a CAPTCHA if additional protection is needed.

1. Create a form/access key at [Web3Forms](https://web3forms.com/).
2. Set `VITE_WEB3FORMS_ACCESS_KEY` in Vercel's project environment variables for **Production**, **Preview**, and **Development** as needed. Set it in `.env.local` for local work.
3. Redeploy after changing a Vercel environment variable; Vite reads it at build time.

**Important:** Vite does not make environment variables secret. `VITE_WEB3FORMS_ACCESS_KEY` is included in the JavaScript sent to every visitor. Web3Forms documents its access key as suitable for browser-side usage; do not use it as a password or place private credentials in any `VITE_*` variable. Use Web3Forms' available spam controls and only expose the form on intended domains.

The contact form submits directly to `https://api.web3forms.com/submit` over HTTPS. Contact data is handled by Web3Forms and forwarded to the email address associated with the access key; no MongoDB, custom API, or app-managed contact database is involved. The privacy consent text explains this before submission.

Web3Forms references:

- [Browser integration and access keys](https://docs.web3forms.com/getting-started/installation)
- [API request and response format](https://docs.web3forms.com/getting-started/api-reference)
- [CAPTCHA and spam protection options](https://docs.web3forms.com/getting-started/customizations/spam-protection)

## GitHub and Vercel deployment

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New → Project**, import that GitHub repository, and keep the Vite settings configured in `vercel.json` (`npm run build`, output directory `dist`).
3. Add `VITE_WEB3FORMS_ACCESS_KEY` under the Vercel project's **Settings → Environment Variables**. Add the public email/phone variables only if overriding the defaults.
4. Deploy. Vercel automatically builds and deploys future commits pushed to the connected GitHub repository; pull requests receive preview deployments when enabled.
5. After deployment, test a real form submission and confirm its delivery to the mailbox associated with the Web3Forms key.

The Vercel/GitHub account connection and environment variables must be configured in their dashboards; they cannot be enabled from this local source tree.

## Build

```sh
npm run build
npm run preview
```
