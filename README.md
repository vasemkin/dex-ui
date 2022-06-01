# [🍛 Proof-of-concept DEX](https://dex-ui-zeta.vercel.app/)

Solidity smart contracts can be found [in this repository](https://github.com/vasemkin/dex).

## 🔧 Setting up Local Development

Required:

- [Node v16](https://nodejs.org/download/release/latest-v16.x/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

```bash
$ git clone https://github.com/vasemkin/dex-ui.git
$ cd dex-ui

$ yarn
$ yarn dev
```

The site is now running at `http://localhost:3000`!
Open the source code and start editing!

## Architecture/Layout

The app is written in [React](https://reactjs.org/) and [NextJS](https://nextjs.org/).

The files/folder structure are a **WIP** and may contain some unused files. The project is rapidly evolving so please update this section if you see it is inaccurate!

```
./
├── app/          // App logic page
├── components/   // Reusable individual components
├── hoc/          // Higher Order Components
├── hooks/        // Custom hooks with common logic
├── pages/        // Page structure
├── deployments/  // ABIs and contract adresses
├── typechain/    // TypeScript interfaces for smart contracts
└── public/       // Static assets
```
