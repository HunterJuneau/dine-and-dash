CREATE DATABASE [DineAndDash]
 
 CREATE TABLE dbo.Users
(
	id uniqueidentifier NOT NULL Primary Key default(newid()),
	firstName varchar(20) NOT NULL,
	lastName varchar(50) NOT NULL,
	customerCreated datetime NOT NULL,
	contactEmail varchar(50) NOT NULL
)

CREATE TABLE dbo.Products
(
	id uniqueidentifier NOT NULL Primary Key default(newid()),
	type int NOT NULL,
	productName varchar(50) NOT NULL,
	productDescription varchar(800) NOT NULL,
	price decimal(18,2) NOT NULL,
	quantity numeric NOT NULL,
	forSale bit NULL
)

CREATE TABLE dbo.Orders
(
	id uniqueidentifier NOT NULL Primary Key default(newid()),
	userId uniqueidentifier NOT NULL
		CONSTRAINT FK_Orders_Users FOREIGN KEY (userId)
			REFERENCES Users (id),
	totalCost decimal(18,2) NOT NULL,
	paymentId uniqueidentifier NOT NULL
		CONSTRAINT FK_Orders_Payments FOREIGN KEY (paymentId)
			REFERENCES Payments (id),
	completed bit NOT NULL
)

CREATE TABLE dbo.Payments
(
	id uniqueidentifier NOT NULL Primary Key default(newid()),
)
ALTER TABLE dbo.Payments
	ADD type varchar(25),
	    userId uniqueidentifier
		CONSTRAINT FK_Payments_Users FOREIGN KEY (userId)
			REFERENCES Users (id),
		accountNumber numeric

CREATE TABLE dbo.ProductOrders
(
	id uniqueidentifier NOT NULL Primary Key default(newid()),
	orderId uniqueidentifier NOT NULL
		CONSTRAINT FK_ProductOrders_Orders FOREIGN KEY (orderId)
			REFERENCES Orders (id),
	productId uniqueidentifier NOT NULL
		CONSTRAINT FK_ProductOrders_Trucks FOREIGN KEY (productId)
			REFERENCES Products (id),
	productQuantity numeric NOT NULL,
)

 ALTER TABLE Users ADD status bit

 ALTER TABLE Payments ADD active bit

  ALTER TABLE Products
 ADD Image varchar(2083)

 Alter TABLE Products
 ADD status bit
 
 Alter Table Users
Alter column customerCreated datetime NULL

UPDATE Users
SET fbUid = ''
WHERE fbUid = NULL

ALTER TABLE Users
ADD fbUid varchar(100) NOT NULL

 USE [DineAndDash]
GO
INSERT [dbo].[Users] ([id], [firstName], [lastName], [customerCreated], [contactEmail]) VALUES (N'df59a175-f95c-40f4-9efb-035bc30acc9c', N'Sheldon', N'Cooper', CAST(N'2020-05-28T00:00:00.000' AS DateTime), N'bazinga@email.com')
INSERT [dbo].[Users] ([id], [firstName], [lastName], [customerCreated], [contactEmail]) VALUES (N'8d388ab6-2886-4ac5-af15-53e698bab570', N'Jerry', N'Seinfeld', CAST(N'2019-07-01T00:00:00.000' AS DateTime), N'nosoup@email.com')
INSERT [dbo].[Users] ([id], [firstName], [lastName], [customerCreated], [contactEmail]) VALUES (N'd421cdc4-4d43-4147-8e80-8625d62e1e1b', N'Chandler', N'Bing', CAST(N'2021-10-05T00:00:00.000' AS DateTime), N'pivot@email.com')
INSERT [dbo].[Payments] ([id], [type], [userId], [accountNumber]) VALUES (N'dc544778-3bd7-493b-89cb-3278ce2db7f3', N'American Express', N'd421cdc4-4d43-4147-8e80-8625d62e1e1b', CAST(858525251100 AS Numeric(18, 0)))
INSERT [dbo].[Payments] ([id], [type], [userId], [accountNumber]) VALUES (N'c0eee982-e44b-4d7f-9bfe-4ab2a5f900e3', N'Visa', N'df59a175-f95c-40f4-9efb-035bc30acc9c', CAST(1110002223335 AS Numeric(18, 0)))
INSERT [dbo].[Payments] ([id], [type], [userId], [accountNumber]) VALUES (N'e69e9034-37f3-4961-9a48-e46653e6c764', N'Venmo', N'8d388ab6-2886-4ac5-af15-53e698bab570', CAST(17 AS Numeric(18, 0)))
INSERT [dbo].[Orders] ([id], [userId], [totalCost], [paymentId], [completed]) VALUES (N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'8d388ab6-2886-4ac5-af15-53e698bab570', CAST(4252.00 AS Decimal(18, 2)), N'e69e9034-37f3-4961-9a48-e46653e6c764', 1)
INSERT [dbo].[Orders] ([id], [userId], [totalCost], [paymentId], [completed]) VALUES (N'4b982ff2-4100-477e-b3b0-ae710e6e0b08', N'd421cdc4-4d43-4147-8e80-8625d62e1e1b', CAST(3300.00 AS Decimal(18, 2)), N'dc544778-3bd7-493b-89cb-3278ce2db7f3', 0)
INSERT [dbo].[Orders] ([id], [userId], [totalCost], [paymentId], [completed]) VALUES (N'1cf39422-40c2-41b9-abb0-bf0e27b52513', N'df59a175-f95c-40f4-9efb-035bc30acc9c', CAST(2900.00 AS Decimal(18, 2)), N'c0eee982-e44b-4d7f-9bfe-4ab2a5f900e3', 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'4af01300-d3ef-449d-bae8-02bc59aefa28', 0, N'Guac & Roll', N'Street Tacos', CAST(1000.00 AS Decimal(18, 2)), CAST(5 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'49cb333c-83ff-4915-9cbe-29ec2134af62', 0, N'The Meltdown', N'Hawai''ian Shaved Ice. Pick your favorite flavor!', CAST(650.00 AS Decimal(18, 2)), CAST(2 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'ff0a2917-8eab-4c28-b1bf-35c06a73485b', 0, N'Fish Lips', N'Fresh Seafood', CAST(1500.00 AS Decimal(18, 2)), CAST(1 AS Numeric(18, 0)), 0)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'3212a825-273f-4004-9c59-3e32b04d67c9', 0, N'Jumpin Juice', N'Fruit Smoothies, and Kale if you want', CAST(800.00 AS Decimal(18, 2)), CAST(2 AS Numeric(18, 0)), 0)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'09a323a1-b6fd-42a2-80f8-4180fa6c469d', 0, N'Rollin'' Smoke', N'Memphis BBQ with all the fixins''', CAST(1200.00 AS Decimal(18, 2)), CAST(3 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'5960d7be-204d-4e77-9f5a-48a9a9d13a77', 0, N'Cheddar Chariot', N'American fare. Almost everything is fried!', CAST(900.00 AS Decimal(18, 2)), CAST(3 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'd4a05e58-7f47-4af0-b201-4c8815ea9df5', 1, N'High Top Table', N'Small round bar height table. 24 inch diameter. Chrome finish ', CAST(15.00 AS Decimal(18, 2)), CAST(35 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'a5320561-8889-43ac-ba84-696b88669fc8', 0, N'Hot Wheels', N'Nashville Hot Chicken. How hot do you like it?', CAST(1100.00 AS Decimal(18, 2)), CAST(1 AS Numeric(18, 0)), 0)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'a9682bbd-c51c-40ec-a2ef-6bcd64e77953', 0, N'SinARoll', N'Best Cinnamon Rolls Ever', CAST(900.00 AS Decimal(18, 2)), CAST(6 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'953a8d03-ef30-44c1-9f69-72cd4e6dde92', 1, N'Folding chair', N'Standard table height chair with back. Made of plastic', CAST(5.50 AS Decimal(18, 2)), CAST(75 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'86d4f8e1-91de-4d38-ae02-a95b022ff2a6', 1, N'Light String', N'25 foot light string with Edison Glass bulbs', CAST(7.50 AS Decimal(18, 2)), CAST(20 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'bbea6e04-c7e4-4fd0-a4de-afeae9f6ccb0', 0, N'Lentils Lately', N'Indian - pick your meat, pick your curry and pick your heat', CAST(1000.00 AS Decimal(18, 2)), CAST(2 AS Numeric(18, 0)), 0)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'95a54d83-b5fc-452e-b15d-c57fd3b41bd9', 1, N'Barstool', N'High seat with chrome legs', CAST(10.25 AS Decimal(18, 2)), CAST(50 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'19f1464a-b463-46cb-a89e-d42777dc1a67', 0, N'Fresh Fins', N'California Rolls and Maki', CAST(1500.00 AS Decimal(18, 2)), CAST(2 AS Numeric(18, 0)), 0)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'bb687d2c-c5c0-4f97-81e1-d660c3340b32', 1, N'Folding table', N'Hard plastic folding table. Able to fit four adults on each side', CAST(12.75 AS Decimal(18, 2)), CAST(25 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'a0292876-5e93-4cd8-b9c4-dbf0c89cf0e0', 0, N'Brake Pad Thai', N'Thai - we''ve got your sweet, sour and spice', CAST(1000.00 AS Decimal(18, 2)), CAST(2 AS Numeric(18, 0)), 0)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'61949e9f-af58-4b49-a100-f032d6caa9c7', 1, N'Corn Hole', N'Standard bean bag toss game. Comes with two boards 8 bags', CAST(25.00 AS Decimal(18, 2)), CAST(10 AS Numeric(18, 0)), 1)
INSERT [dbo].[Products] ([id], [type], [productName], [productDescription], [price], [quantity], [forSale]) VALUES (N'c9660024-4431-409e-851f-fdd848cd3c43', 0, N'Room with a Brew', N'Coffee, lots of Coffee', CAST(500.00 AS Decimal(18, 2)), CAST(4 AS Numeric(18, 0)), 1)
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'eb4c0ac8-c656-441b-ae96-08fd59a53a4e', N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'19f1464a-b463-46cb-a89e-d42777dc1a67', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'467e140d-1466-4fad-af4c-0bf2cc35a918', N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'bb687d2c-c5c0-4f97-81e1-d660c3340b32', CAST(4 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'4bda78c3-35fe-4d9d-adb6-14cb1e9573c0', N'4b982ff2-4100-477e-b3b0-ae710e6e0b08', N'ff0a2917-8eab-4c28-b1bf-35c06a73485b', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'6e4ef6a0-99cd-4d49-b4bf-2c408cb75b88', N'1cf39422-40c2-41b9-abb0-bf0e27b52513', N'3212a825-273f-4004-9c59-3e32b04d67c9', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'866c9cd5-fda6-48b9-829c-5009786b7b31', N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'bbea6e04-c7e4-4fd0-a4de-afeae9f6ccb0', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'f5389b84-65bb-46cf-96b6-6989fedd915d', N'1cf39422-40c2-41b9-abb0-bf0e27b52513', N'a5320561-8889-43ac-ba84-696b88669fc8', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'afa69f4a-4639-4a2a-bb83-772954953d60', N'1cf39422-40c2-41b9-abb0-bf0e27b52513', N'4af01300-d3ef-449d-bae8-02bc59aefa28', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'86cd0fb7-6989-40f0-9ff1-826b05e69f0d', N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'a0292876-5e93-4cd8-b9c4-dbf0c89cf0e0', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'128cd36c-52a8-40b0-a515-8f62134a4551', N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'61949e9f-af58-4b49-a100-f032d6caa9c7', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'46a56e9f-1fce-4cf2-8ceb-d0b9620cba91', N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'c9660024-4431-409e-851f-fdd848cd3c43', CAST(1 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'a4818d3a-ad05-4731-b1c7-d4dea5abb9f4', N'e4ee63de-5ca6-4f15-9479-946f0e62b33a', N'953a8d03-ef30-44c1-9f69-72cd4e6dde92', CAST(32 AS Numeric(18, 0)))
INSERT [dbo].[ProductOrders] ([id], [orderId], [productId], [productQuantity]) VALUES (N'361287ec-3835-4768-853e-e1b4c494f78c', N'4b982ff2-4100-477e-b3b0-ae710e6e0b08', N'5960d7be-204d-4e77-9f5a-48a9a9d13a77', CAST(2 AS Numeric(18, 0)))
