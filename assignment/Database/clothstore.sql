-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 28, 2020 at 07:29 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `clothstore`
--

-- --------------------------------------------------------

--
-- Table structure for table `phistory`
--

CREATE TABLE `phistory` (
  `serial` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `id` varchar(10) NOT NULL,
  `title` varchar(30) NOT NULL,
  `category` varchar(15) NOT NULL,
  `quantity` varchar(5) NOT NULL,
  `totalAmount` varchar(20) NOT NULL,
  `status` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `phistory`
--

INSERT INTO `phistory` (`serial`, `username`, `id`, `title`, `category`, `quantity`, `totalAmount`, `status`) VALUES
(1, 'fahim', '2', 'Shirt', 'Female', '1', '500', '0'),
(2, 'fahim', '4', 'Shirt', 'Male', '2', '960', '0');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(16) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(40) NOT NULL,
  `size` varchar(10) NOT NULL,
  `category` varchar(10) NOT NULL,
  `type` varchar(20) NOT NULL,
  `price` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `title`, `description`, `image`, `size`, `category`, `type`, `price`) VALUES
(2, 'Shirt', 'cotton', 'shirt.jfif', 'S', 'Female', 'Jeans', '500'),
(4, 'Shirt', '100% cotton', 'shirt1.jfif', 'M', 'Male', 'Shirt', '480'),
(5, 'Shirt', 'fabric', 'shirt1.jfif', 'S', 'Male', 'Shirt', '499'),
(6, 'Shirt', '100% cotton', 'shirt.jfif', 'L', 'Male', 'Shirt', '540'),
(8, 'Shirt', '100% cotton', 'men-casual-pant-500x500.jpg', 'M', 'Male', 'Pant', '550'),
(9, 'Fabric Shirt', '99% cotton ', 'shirt1.jfif', 'L', 'Male', 'Shirt', '500');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `id` int(16) NOT NULL,
  `name` varchar(30) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `contact` varchar(11) NOT NULL,
  `type` int(2) NOT NULL,
  `gender` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`id`, `name`, `username`, `password`, `contact`, `type`, `gender`) VALUES
(1, 'Abdullah Al Noman', 'noman', '1122', '01639439944', 0, 'male'),
(2, 'sakib', 'sakib', 'sakib', '01303042547', 1, 'male'),
(3, 'Fahim', 'fahim', '1234', '01639439945', 1, 'Male');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `phistory`
--
ALTER TABLE `phistory`
  ADD PRIMARY KEY (`serial`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `phistory`
--
ALTER TABLE `phistory`
  MODIFY `serial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
