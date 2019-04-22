-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  lun. 22 avr. 2019 à 19:47
-- Version du serveur :  10.1.30-MariaDB
-- Version de PHP :  7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `njs_calcul`
--

-- --------------------------------------------------------

--
-- Structure de la table `cube`
--

CREATE TABLE `cube` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `calcul` varchar(50) NOT NULL,
  `coteCube` varchar(255) NOT NULL,
  `resultat` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cube`
--

INSERT INTO `cube` (`id`, `type`, `calcul`, `coteCube`, `resultat`) VALUES
(105, 'Cube', 'Surface', '25', '3750'),
(106, 'Cube', 'Volume', '12', '1728');

-- --------------------------------------------------------

--
-- Structure de la table `cylindre`
--

CREATE TABLE `cylindre` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `calcul` varchar(50) NOT NULL,
  `rayonCylindre` varchar(255) NOT NULL,
  `hauteurCylindre` varchar(255) NOT NULL,
  `resultat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cylindre`
--

INSERT INTO `cylindre` (`id`, `type`, `calcul`, `rayonCylindre`, `hauteurCylindre`, `resultat`) VALUES
(3, 'Cylindre', 'Volume', '10', '50', '15707.963267948966');

-- --------------------------------------------------------

--
-- Structure de la table `sphere`
--

CREATE TABLE `sphere` (
  `id` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `calcul` varchar(50) NOT NULL,
  `rayonSphere` varchar(255) NOT NULL,
  `resultat` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `sphere`
--

INSERT INTO `sphere` (`id`, `type`, `calcul`, `rayonSphere`, `resultat`) VALUES
(5, 'Sphere', 'Surface', '21', '5541.769440932395'),
(6, 'Sphere', 'Volume', '15', '14137.16694115407');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cube`
--
ALTER TABLE `cube`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cylindre`
--
ALTER TABLE `cylindre`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sphere`
--
ALTER TABLE `sphere`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cube`
--
ALTER TABLE `cube`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;

--
-- AUTO_INCREMENT pour la table `cylindre`
--
ALTER TABLE `cylindre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `sphere`
--
ALTER TABLE `sphere`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
