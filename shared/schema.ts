import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, decimal, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  accountType: text("account_type").notNull(), // demo, live, islamic
  phone: text("phone"),
  country: text("country"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const tradingInstruments = pgTable("trading_instruments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  symbol: text("symbol").notNull().unique(),
  name: text("name").notNull(),
  category: text("category").notNull(), // forex, indices, commodities, stocks, crypto
  price: decimal("price", { precision: 10, scale: 5 }),
  change: decimal("change", { precision: 10, scale: 5 }),
  changePercent: decimal("change_percent", { precision: 5, scale: 2 }),
  volume: integer("volume"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const marketStats = pgTable("market_stats", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  metric: text("metric").notNull().unique(),
  value: text("value").notNull(),
  description: text("description").notNull(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const loginUserSchema = createInsertSchema(users).pick({
  email: true,
  password: true,
});

export const insertTradingInstrumentSchema = createInsertSchema(tradingInstruments).omit({
  id: true,
  updatedAt: true,
});

export const insertMarketStatsSchema = createInsertSchema(marketStats).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type LoginUser = z.infer<typeof loginUserSchema>;
export type User = typeof users.$inferSelect;
export type TradingInstrument = typeof tradingInstruments.$inferSelect;
export type InsertTradingInstrument = z.infer<typeof insertTradingInstrumentSchema>;
export type MarketStats = typeof marketStats.$inferSelect;
export type InsertMarketStats = z.infer<typeof insertMarketStatsSchema>;
