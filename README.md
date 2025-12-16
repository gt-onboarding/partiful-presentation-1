## Overview

This is a Next.JS App router project using the [gt-next](https://generaltranslation.com/docs/next) for i18n.
For pages router, use the [gt-react](https://generaltranslation.com/docs/react).

Translations are completely free to use for this project.

Star the libraries on [GitHub](https://github.com/generaltranslation/gt) to support the project.

## Getting Started

There are slightly different steps for development and production.

- Development: uses a development API key to enable translation hot-reload
- Production: uses the `gtx-cli translate` command to generate translations at build time

### Development

#### 1. Get your API Keys
Get your API Keys from [generaltranslation.com](https://dash.generaltranslation.com) from the API Keys page.


Create a `.env.local` file in the root of the project and add your DEVELOPMENT API Keys:
```
GT_DEV_API_KEY=your-development-api-key
GT_PROJECT_ID=your-project-id
```

#### 2. Install dependencies
Install dependencies:

```bash
npm install
```

#### 3. Run the development server
Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### Production

#### 1. Get your API Keys
Get your API Keys from [generaltranslation.com](https://dash.generaltranslation.com) from the API Keys page.


Create a `.env.local` file in the root of the project and add your PRODUCTION API Keys:
```
GT_API_KEY=your-production-api-key
GT_PROJECT_ID=your-project-id
```

#### 2. Install dependencies
Install dependencies:

```bash
npm install
```

#### 3. Run the translate command

```bash
npm run translate
```

#### 4. Run the development server
Run the development server:

```bash
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.