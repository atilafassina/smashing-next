<div align="center">

<img src="/public/og.jpg" width="700" />

![uses TypeScript 4.x](https://img.shields.io/static/v1?color=blue&label=TypeScript&message=4&style=for-the-badge&logo=typescript&labelColor=d1d1d1&logoWidth=20%22)
![uses Next.js 13.x](https://img.shields.io/static/v1?color=black&label=Next.js&message=13+&style=for-the-badge&logo=next.js&labelColor=000000&logoWidth=20%22&)
![uses TailwindCSS 3.x](https://img.shields.io/static/v1?color=teal&label=tailwind&message=3&style=for-the-badge&logo=tailwindcss&labelColor=d1d1d1&logoWidth=20%22)
![uses Node.js 18 LTS](https://img.shields.io/static/v1?color=238636&label=Node&message=18%20LTS&style=for-the-badge&logo=node.js&labelColor=000&logoWidth=20%22)

</div>

---

## Setting up the system 🧱

Make sure you are running on Node.js 16 or newer.

If properly installed, Node.js will exist in your `$PATH`. To check the version you can then run:

```sh
node -v
```

In case you do not have Node.js installed, or needs a different for work, I recommend using a Node Version Manager, I recommend [volta.sh](https://volta.sh).

```sh
# install Volta
curl https://get.volta.sh | bash

# install Node
volta install node

```

## Project setup 🧬

- Clone repository

  ```
  git clone https://github.com/atilafassina/smashing-next.git
  ```

- Install dependencies with your package manager of choice (npm recomended)

```
npm i
```

> 💡 If using VS Code, once the project is opened it will prompt you to install a few extensions. Those are definitely not mandatory, but are likely to give you a better Developer Experience.

Once ready, you can start the project and jump into code.

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser (unless you switch the port manually).

## Setup the database 📚

> ⚠️ this is just a placeholder for now. We will provision and create our own data throughout the workshop.

At the moment you have no data, if you are using Xata VS Code extension, you can connect to a database in your workspace.

Once you have a `XATA_API_TOKEN` in your `.env` or `.env.local`, you can push the schema and generate the client:

```
npm run start:xata
```

It will create a table on your database and push dummy data there.
