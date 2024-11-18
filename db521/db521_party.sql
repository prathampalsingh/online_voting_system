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
-- Table structure for table `party`
--

DROP TABLE IF EXISTS `party`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `party` (
  `party_id` bigint NOT NULL AUTO_INCREMENT,
  `candidate picture` varchar(255) NOT NULL,
  `constituency` varchar(30) NOT NULL,
  `party_leader_name` varchar(255) DEFAULT NULL,
  `party_logo` varchar(255) NOT NULL,
  `party_name` varchar(30) NOT NULL,
  `votes` int NOT NULL,
  PRIMARY KEY (`party_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `party`
--

LOCK TABLES `party` WRITE;
/*!40000 ALTER TABLE `party` DISABLE KEYS */;
INSERT INTO `party` VALUES (3,'https://suvidha.eci.gov.in/ac/public/uploads1/candprofile/E27/2024/AC/s13/ABUAS-2024-20241028021355.jpg','Shivaji Nagar','Abu Asim Azmi','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgJXhRCXxjv8Efmn5w31GxcoUtq_Nx9abrTA&s','Samajwadi Party',0),(4,'https://suvidha.eci.gov.in/ac/public/uploads1/candprofile/E27/2024/AC/s13/GANES-2024-20241028040849.jpg','Airoli','Ganesh Ramchandra Naik','https://www.boomlive.in/h-upload/uid/56996cNMMfnqFNpn5UFfx0RJheCUHo7fjgeUE3989966.jpg','Bharatiya Janata Party',1),(5,'https://suvidha.eci.gov.in/ac/public/uploads1/candprofile/E27/2024/AC/s13/RUTUJ-2024-20241028123300.jpg','Andheri','Rutuja Ramesh Latke','https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/24/full/1729745053-8493.jpg?im=FitAndFill=(826,465)','Shiv Sena',0),(6,'https://suvidha.eci.gov.in/ac/public/uploads1/candprofile/E27/2024/AC/s13/MANDA-2024-20241029043154.jpg','Belapur','Manda Vijay Mhatre','https://www.boomlive.in/h-upload/uid/56996cNMMfnqFNpn5UFfx0RJheCUHo7fjgeUE3989966.jpg','Bharatiya Janata Party',0),(7,'https://suvidha.eci.gov.in/ac/public/uploads1/candprofile/E27/2024/AC/s13/LEENA-2024-20241028081035.jpg','Panvel','Leena Arjun Garad','https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/24/full/1729745053-8493.jpg?im=FitAndFill=(826,465)','Shiv Sena',0),(8,'https://suvidha.eci.gov.in/ac/public/uploads1/candprofile/E27/2024/AC/s13/SHRAD-2024-20241028040508.jpg','Wadala','Shraddha Shreedhar Jadhav','https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/24/full/1729745053-8493.jpg?im=FitAndFill=(826,465)','Shiv Sena',1);
/*!40000 ALTER TABLE `party` ENABLE KEYS */;
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
