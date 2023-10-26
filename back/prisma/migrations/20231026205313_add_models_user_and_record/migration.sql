-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "records" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "audioUrl" TEXT NOT NULL,

    CONSTRAINT "records_pkey" PRIMARY KEY ("id")
);
