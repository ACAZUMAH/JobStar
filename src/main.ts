import { config } from 'dotenv';
//import start  from './servers/app';

const main = async () => {
    config();
    const start = await import('./servers/app');
    await start.default();
};

main().catch((error) => {
    console.error('Error starting server:', error);
    process.exit(1);
});