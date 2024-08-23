# Next.js Project with Docker

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and configured to run using Docker.

## Getting Started

### Prerequisites

Make sure you have [Docker](https://www.docker.com/) installed on your machine. Docker allows you to containerize and run the application in an isolated environment.

### Running the Development Server

You can start the development server using Docker or locally.

#### Option 1: Using Docker

1. Build the Docker image:
   
   ```bash
   docker build -t nextjs-app .
   ```

2. Run the Docker container:

   ```bash
   docker run -p 3000:3000 nextjs-app
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Option 2: Running Locally

1. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Docker Compose (Optional)

If you prefer using Docker Compose, you can create a `docker-compose.yml` file to simplify the process:

```yaml
version: '3'

services:
  nextjs-app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    command: npm run dev
```

Run the application using:

```bash
docker-compose up
```

## Font Optimization

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

