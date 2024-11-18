-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: db521
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `is_activate_account` bit(1) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_date_of_birth` date NOT NULL,
  `emailid` varchar(25) DEFAULT NULL,
  `user_gender` varchar(255) NOT NULL,
  `mobile_number` varchar(10) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `password` varchar(20) NOT NULL,
  `user_role` varchar(255) NOT NULL,
  `voting_card_number` varchar(10) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_lt2b8ocin3hdnm9q6fm4o8xnr` (`mobile_number`),
  UNIQUE KEY `UK_gr8n1eyxvl5m9hmbsv2yrfsi7` (`voting_card_number`),
  UNIQUE KEY `UK_9cigsktyi1h7lfjwqehc1d9va` (`emailid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,_binary '',NULL,'Mumbai','2001-01-01','admin@gmail.com','male','9876543210','admin','Admin@123','admin','1234567890'),(2,_binary '',NULL,'Kurla','2000-09-14','altamashshkh200@gmail.com','male','7451298455','Altamash Shaikh','Altshkh@200','voter','1251002579'),(3,_binary '',NULL,'Chembur','2001-07-15','karankotsaad421@gmail.com','male','7268412980','Saad Karankot','Patty@123','voter','1242006478'),(4,_binary '','voted','Govandi','1999-07-27','khasamad_69@gmail.com','male','7251897230','Samad Khatri','Khansahabolte97','voter','1251101123'),(5,_binary '','voted','Mumbai','2002-01-01','abhkgorpade21@gmail.com','male','7169872016','Abhishek Ghorpade','Gpatohde@123','voter','1252006657'),(6,_binary '',NULL,'Grant Road','2003-06-18','faizan200@gmail.com','male','7106984521','Ansari Faizan','Jelly@123','voter','1263412247'),(7,_binary '',NULL,'Navi Mumbai','2000-09-11','patilharshada@gmail.com','male','7977658712','Harshada Patil','Maipari@441','voter','1387411011'),(8,_binary '',NULL,'Andheri','2002-08-01','agrimapari4200@gmail.com','male','7955662410','Agrima Rawale','Harshu$123','voter','1569415589'),(9,_binary '',NULL,'Bandra','2001-06-21','nikharje@gmail.com','male','7587321668','Raj Nikharje','Saima$nahi65','voter','1644213211'),(10,_binary '',NULL,'Virar','2000-02-22','khanamaan741@gmail.com','male','7854621830','Amaan Khan','Beingsalman@69','voter','1003214120'),(11,_binary '',NULL,'Thane','2002-02-23','amaanansari31@gmail.com','male','8080465721','Ansari Amaan','Tiktok$619','voter','2478913972'),(12,_binary '',NULL,'Wadala','2001-09-24','khan.sady1@gmail.com','male','9821365470','Saad Khan','Pakitmaar@31','voter','2697435544'),(13,_binary '',NULL,'Kalyan','2003-04-25','kunchalsej@gmail.com','female','9478742369','Sejal Kunchal ','Sejalkunchal@123','voter','2483116197'),(14,_binary '',NULL,'Navi Mumbai','2000-03-16','abubhaijaan69@gmail.com','male','8588416325','Afsar Shaikh','Abuinsha@31','voter','1889941235'),(15,_binary '',NULL,'Mumbai','2000-03-15','bhosvarun44@gmail.com','male','8846512783','Varun Bhosle','Bhovarun$your1','voter','2247965531'),(16,_binary '',NULL,'Thane','2000-09-28','artsmarty@gmail.com','male','9664217832','Adnan Shaikh','Artysmarty@26','voter','2657748821'),(17,_binary '',NULL,'Thane','2002-01-26','koliparthsuper@gmail.com','male','9022647587','Parth Koli','Kpsuper@321','voter','2938840010'),(18,_binary '',NULL,'Dadar','2002-10-26','patelshinuviper@gmail.com','male','7977488598','Shinu Patel','Cosmosviper$21','voter','2546210135');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-18 11:21:39
