import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const uri = 'your_mongodb_connection_string'; // Replace with your MongoDB connection string
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export default connectDatabase;