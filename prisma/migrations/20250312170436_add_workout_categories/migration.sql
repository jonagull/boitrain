-- AlterTable
ALTER TABLE "WorkoutHistory" ADD COLUMN "notes" TEXT;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_WorkoutDay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'STRENGTH'
);
INSERT INTO "new_WorkoutDay" ("id", "name") SELECT "id", "name" FROM "WorkoutDay";
DROP TABLE "WorkoutDay";
ALTER TABLE "new_WorkoutDay" RENAME TO "WorkoutDay";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
