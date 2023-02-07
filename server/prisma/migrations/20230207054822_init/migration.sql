-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "BillingCardType" AS ENUM ('DEFAULT', 'GOLD');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('ASSEMBLY', 'ON_THE_WAY', 'DELIVERED', 'CANCELED');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'USER',
    "reactCoinsCount" INTEGER NOT NULL DEFAULT 0,
    "phoneNumber" TEXT,
    "hashedRefreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cartProducts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "fullPrice" DOUBLE PRECISION NOT NULL,
    "discountPercent" INTEGER NOT NULL DEFAULT 0,
    "weight" DOUBLE PRECISION NOT NULL,
    "tag" TEXT NOT NULL,
    "imagePath" TEXT,
    "count" INTEGER NOT NULL DEFAULT 1,
    "productReferenceId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,

    CONSTRAINT "cartProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "deliveryAddresses" (
    "id" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "house" TEXT NOT NULL,
    "entrance" INTEGER NOT NULL,
    "floor" INTEGER NOT NULL,
    "flatOrOffice" INTEGER NOT NULL,
    "intercom" INTEGER,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "deliveryAddresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "billingCards" (
    "id" TEXT NOT NULL,
    "number" INTEGER[],
    "cvc" INTEGER NOT NULL,
    "expiredDate" TIMESTAMP(3) NOT NULL,
    "type" "BillingCardType" NOT NULL DEFAULT 'DEFAULT',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "billingCards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "deliveryAddress" TEXT NOT NULL,
    "cutleryCount" INTEGER NOT NULL DEFAULT 0,
    "totalCost" DOUBLE PRECISION NOT NULL,
    "productsCost" DOUBLE PRECISION NOT NULL,
    "deliveryCost" DOUBLE PRECISION NOT NULL,
    "serviceFee" DOUBLE PRECISION NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'ASSEMBLY',
    "recipientPhoneNumber" TEXT NOT NULL,
    "recipientName" TEXT NOT NULL,
    "commentary" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderProducts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "count" INTEGER NOT NULL,
    "orderId" TEXT NOT NULL,
    "imagePath" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orderProducts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productCategories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagePath" TEXT,

    CONSTRAINT "productCategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productSubcategories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "productSubcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "fullPrice" DOUBLE PRECISION NOT NULL,
    "discountPercent" INTEGER NOT NULL DEFAULT 0,
    "weight" DOUBLE PRECISION NOT NULL,
    "tag" TEXT NOT NULL,
    "imagePath" TEXT,
    "subcategoryId" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phoneNumber_key" ON "users"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "carts_userId_key" ON "carts"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "cartProducts_title_key" ON "cartProducts"("title");

-- CreateIndex
CREATE UNIQUE INDEX "productCategories_title_key" ON "productCategories"("title");

-- CreateIndex
CREATE UNIQUE INDEX "productSubcategories_title_key" ON "productSubcategories"("title");

-- CreateIndex
CREATE UNIQUE INDEX "products_title_key" ON "products"("title");

-- AddForeignKey
ALTER TABLE "carts" ADD CONSTRAINT "carts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cartProducts" ADD CONSTRAINT "cartProducts_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "deliveryAddresses" ADD CONSTRAINT "deliveryAddresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "billingCards" ADD CONSTRAINT "billingCards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderProducts" ADD CONSTRAINT "orderProducts_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productSubcategories" ADD CONSTRAINT "productSubcategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "productCategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_subcategoryId_fkey" FOREIGN KEY ("subcategoryId") REFERENCES "productSubcategories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
