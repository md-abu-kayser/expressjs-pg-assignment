import app from "./app";
import initDB from "./config/db";
import config from "./config";
import { BookingService } from "./modules/bookings/booking.service";

const startServer = async () => {
  try {
    // Initialize database
    await initDB();
    console.log("Database connected successfully");

    // Start server
    const port = config.port || 5000;
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    // Auto-return expired bookings every hour
    setInterval(async () => {
      try {
        const count = await BookingService.processExpiredBookings();
        if (count > 0) {
          console.log(`Auto-returned ${count} expired booking(s)`);
        }
      } catch (error) {
        console.error("Error processing expired bookings:", error);
      }
    }, 60 * 60 * 1000);

    process.on("SIGTERM", () => {
      console.log("SIGTERM received. Shutting down gracefully...");
      server.close(() => {
        console.log("Process terminated");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
