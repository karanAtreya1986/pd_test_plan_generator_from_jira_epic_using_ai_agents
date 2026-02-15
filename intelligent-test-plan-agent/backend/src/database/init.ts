import { getDatabase, closeDatabase } from './db';

async function init() {
  console.log('Initializing database...');
  try {
    const db = getDatabase();
    // The getDatabase call triggers initializeSchema() in db.ts
    
    // Give it a moment to run the async initialization if needed
    // (Though initializeSchema is currently synchronous in db.ts)
    setTimeout(() => {
      console.log('Database initialization check complete.');
      closeDatabase();
      process.exit(0);
    }, 1000);
  } catch (error) {
    console.error('Failed to initialize database:', error);
    process.exit(1);
  }
}

init();
