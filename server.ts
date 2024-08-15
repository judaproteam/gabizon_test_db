import { createDummyData } from "./db/insertDummy"

async function run() {
  try {
    await createDummyData();
    console.log('Dummy data created successfully');
  } catch (e) {
    console.error('Error creating dummy data:', e);
  }
}
run()
