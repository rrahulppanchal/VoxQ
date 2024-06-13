-- CreateTable
CREATE TABLE "tbl_user_tokens" (
    "id" INTEGER NOT NULL,
    "refresh_token" TEXT NOT NULL,

    CONSTRAINT "tbl_user_tokens_pkey" PRIMARY KEY ("id")
);
