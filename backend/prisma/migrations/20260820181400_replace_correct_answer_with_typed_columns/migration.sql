-- AlterTable
ALTER TABLE "Question" DROP COLUMN "correctAnswer",
ADD COLUMN     "correctAnswerBoolean" BOOLEAN,
ADD COLUMN     "correctAnswerCheckbox" INTEGER[],
ADD COLUMN     "correctAnswerInput" TEXT;
