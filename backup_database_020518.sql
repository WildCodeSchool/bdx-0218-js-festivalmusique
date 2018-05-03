-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Hôte : sql7.freesqldatabase.com
-- Généré le :  mer. 02 mai 2018 à 09:57
-- Version du serveur :  5.5.58-0ubuntu0.14.04.1
-- Version de PHP :  7.0.28-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `sql7233133`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `id` varchar(200) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`id`, `password`) VALUES
('administrateur', 'rootadmin'),
('administrateur', 'rootadmin');

-- --------------------------------------------------------

--
-- Structure de la table `artistes`
--

CREATE TABLE `artistes` (
  `kartiste` int(11) NOT NULL,
  `nom` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `jour` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `heure` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `style` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `artistes`
--

INSERT INTO `artistes` (`kartiste`, `nom`, `jour`, `heure`, `style`, `image`, `video`, `description`) VALUES
(1, 'Korpiklaani', 'samedi', '15:00', 'metal', 'https://i.ytimg.com/vi/hxPndQ-wZo8/maxresdefault.jpg', 'LINUD3zbQNk', 'Korpiklaani (ou « le clan de la forêt » en finnois) est né des cendres du groupe Shaman, en 2003. La formation a ramené la musique folk traditionnelle à la vie tout en suscitant un intérêt grandissant du public pour ses textes mythologiques en finnois et en anglais. De 2003 à 2015, les six Finlandais sortent pas moins de neuf albums (chez Napalm Records et Nuclear Blast) ! Le dernier en date, Noita (2015), le neuvième, est aussi le premier avec l\'accordéoniste Sami Perttula suite au départ de Juho Kauppinen. Un retour aux sources et une démonstration de pur folk metal. Au menu : violons, flûtes, accordéons, voix bien barbares et une grosse touche metal. Les Finlandais réussissent le pari de fédérer les Metalheads du monde entier et nous transportent dans des contrées sauvages : on les suit poing levé !'),
(3, 'The Eagles', 'dimanche', '17:00', 'rock', 'https://pmcvariety.files.wordpress.com/2017/08/theeagles2017_myriam-santos_sm.jpg?w=1000&h=563&crop=1', 'LfeNhwnO8hw', 'Eagles est un groupe de rock américain, originaire de Los Angeles, en Californie. Il est formé en 1970, aux influences country et bluegrass, pionnier du country rock. Le style musical des Eagles est connu sous le nom de West Coast Sound.\r\n\r\nLe groupe publie son premier album, Eagles, en 1972, qui comprend trois singles classés au top 40 : Take It Easy, Witchy Woman, et Peaceful Easy Feeling. L\'album qui suit, Desperado (1973), est moins bien accueilli et n\'atteint que la 41e place des classements. Cependant, il comprend les deux morceaux les plus populaires du groupe, Desperado et Tequila Sunrise. Le groupe publie ensuite On the Border en 1974, aux côtés du guitariste Don Felder, cinquième membre. L\'album génère deux singles classés au top 40 : Already Gone et Best of My Love (premier des charts).\r\n\r\nLeur album One of These Nights (1975) inclut trois singles classés au top 10 : One of These Nights, Lyin\' Eyes et Take It to the Limit. Le guitariste et chanteur Joe Walsh se joint aussi au groupe en 1975 en remplacement de Leadon. Les Eagles continuent dans cette lignée et jouissent d\'un pic de popularité en 1976 avec la sortie de Hotel California, qui se vendra à plus de 16 millions d\'exemplaires rien qu\'aux États-Unis et à plus de 32 millions dans le monde. L\'album comprend deux singles classés premier des charts, New Kid in Town et Hotel California. Meisner quitte le groupe en 1977, et est remplacé par Timothy B. Schmit. Ils sortent leur dernier album pour près de 28 ans en 1979, intitulé The Long Run, qui comprend trois singles classés au top 10 : Heartache Tonight, The Long Run, et I Can\'t Tell You Why.\r\n\r\nLes Eagles se séparent en juillet 1980, mais reviennent en 1994 pour l\'album Hell Freezes Over, un mélange de morceaux studio et en live. Ils tournent significativement et font partie du Rock and Roll Hall of Fame en 1998. En 2007, les Eagles publient Long Road Out of Eden, leur premier album studio en 28 ans et sixième album classé premier des charts. L\'année suivante, ils effectuent la tournée Long Road Out of Eden Tour en soutien à l\'album. En 2013, ils commencent le History of the Eagles – Live in Concert en parallèle à la sortie du documentaire History of the Eagles.\r\n\r\nAprès la mort de Frey en janvier 2016, Henley explique à plusieurs reprises ne pas souhaiter continuer le groupe. Cependant, les Eagles reviennent en 2017 avec comme invité Deacon Frey (fils de Glenn) et Vince Gill.'),
(4, 'Alestorm', 'samedi', '23:00', 'metal', 'https://www.coreandco.fr/pics/groupes/big/alestorm-4016.png', 'f55CqLc6IR0', 'Alestorm est un groupe de pirate metal britannique, originaire de Perth, en Écosse. Formé en 2004, le nom du groupe peut se traduire par « tempête de bière » (Ale étant la bière de « fermentation haute »). Initialement connu sous le nom de Battleheart, le groupe change de nom pour Alestorm le 8 août 2007. Qualifié de pirate metal, les compositions du groupe font référence à l\'univers de la piraterie, tant au niveau des sonorités que des paroles et de l\'univers visuel.'),
(5, 'Arch Enemy', 'vendredi', '00:00', 'metal', 'http://assets.blabbermouth.net/media/archenemyband2017promonew_638.jpg', '3Y-J7sBT_no', 'Le temps passe, les temps changent mais il demeure des choses qui restent constantes et imparables. La musique metal a subi moult assauts depuis ses quatre décennies d’existence et peu de groupes incarnent avec aplomb et sans contestation possible l’intensité, l’intégrité et l’ambition que requiert sa création et son interprétation. Fondé en Suède au milieu des années 90 par le six-cordiste Michael Amott, ARCH ENEMY en est un de ses joyaux. Explosif, efficace, irrésistible et perpétuellement tiré vers le haut par sa soif d’en découdre et de combler ses fans, rien ne semble pouvoir l’arrêter dans sa progression. Et on ne trouvera pas grand-monde pour s’en plaindre.'),
(6, 'Amon Amarth', 'dimanche', '19:00', 'metal', 'https://i0.wp.com/www.metalinjection.net/wp-content/uploads/2017/11/amon-amarth-2017.jpg?fit=700%2C467', 'CpAcxbtXUgQ', 'Profondément enraciné dans le death metal avec des croyances fermes dans la mythologie viking, AMON AMARTH s\'est formé en 1992 à Tumba, en Suède, une banlieue sud de Stockholm. Ils ont commencé à écrire du matériel avec beaucoup de mélodies, d\'harmonies et de paroles sur les Vikings et les dieux du Nord. À l\'été 1993, ils entrèrent au studio Lagret pour enregistrer la démo «Thor Arise» jamais sortie. Le groupe a continué à répéter et à écrire du matériel plus fort et est entré à nouveau dans le studio. Le résultat a été la deuxième démo «L\'arrivée du Fimbul Winter». Cette fois, le groupe était beaucoup plus satisfait du son et des chansons et l\'a lancé dans un underground sans méfiance. La réponse a été accablante, se vendant rapidement du premier pressage et leur a garanti un contrat unique avec les disques pulvérisés de Singapour.'),
(7, 'Macklemore', 'dimanche', '21:00', 'rap', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/macklemore.jpg', 'xHRkHFxD-xY', 'Macklemore, anciennement Professor Mack Lemore, de son vrai nom Benjamin « Ben » Hammond Haggerty, né le 19 juin 1983 à Kent, dans l\'État de Washington, est un rappeur américain.\r\n\r\nAu long de sa carrière, il travaille notamment avec le producteur Ryan Lewis, le violoniste Andrew Joslyn, le trompettiste Owuor Arunga, le tromboniste Greg Kramer, la violoncelliste Rebecca Chung Filice et le multi-instrumentiste Josh Karp dit Budo (batterie, guitare et basse). Macklemore a commencé à devenir célèbre à Seattle depuis le début de sa carrière musicale à la Garfield High School (en), jouant souvent à la Capitol Hill Block Party (en).\r\n\r\nLa chanson Thrift Shop, produite avec Lewis est le premier succès dû au duo et dépasse le milliard de vues sur YouTube et atteint 2,2 millions de ventes de singles ainsi que la première place du Billboard Hot 100 en 20131. Macklemore et Lewis publient leur premier album studio, intitulé The Heist, le 9 octobre 2012.'),
(8, 'Queen of the stone age', 'vendredi', '18:00', 'rock', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/qotsa.jpg', 's88r_q7oufE', 'Queens of the Stone Age est un groupe de rock américain formé en 1996 à Palm Desert en Californie. Le line-up du groupe comprend le fondateur Josh Homme (chant, guitare, piano), aux côtés de Troy Van Leeuwen (guitare, lap steel, clavier, percussions, choeurs), Michael Shuman (basse, clavier, choeurs), Dean Fertita (claviers, guitare, percussions, choeurs), et Jon Theodore (batterie, percussions).\r\n\r\nFormé après la dissolution du groupe précédent de Kyuss, Kyuss,  Queens of the Stone Age a développé un style de musique rock lourd orienté riff. Leur son a depuis évolué pour intégrer différents styles et influences, dont le travail avec Billy Gibbons, batteur de Nirvana et Dave Grohl, le chanteur de ZZ Top, et Mark Lanegan, le chanteur de Screaming Trees, qui a régulièrement contribué au groupe.'),
(9, 'Prophets of rage', 'samedi', '19:00', 'rock', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/prophets-of-rage.jpg', '6ad4MH7fMLs', 'Prophets of Rage est un supergroupe de rap metal américain, originaire de Los Angeles, en Californie. Le groupe est constitué de trois des quatre membres de Rage Against the Machine : le guitariste Tom Morello qui a l\'idée du nouveau groupe, le bassiste Tim Commerford et le batteur Brad Wilk, ainsi que de DJ Lord et Chuck D de Public Enemy, et B-Real de Cypress Hill.\r\n\r\nLe groupe tire son nom de Prophets of Rage, l\'un des morceaux de Public Enemy qui figure sur leur album de 1988, It Takes a Nation of Millions to Hold Us Back.'),
(10, 'Liam Gallagher', 'vendredi', '22:00', 'rock', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/liam-gallagher.jpg', 'YdJc7-ZEuT0', 'William John Paul Gallagher, dit Liam Gallagher est un chanteur et musicien anglais d\'origine irlandaise, né le 21 septembre 1972 dans la banlieue de Manchester (Angleterre). Il fut le chanteur principal du groupe de rock Oasis, désormais séparé. Figure de proue du mouvement Britpop dans les années 1990, Liam Gallagher est connu pour son style de chant particulier, ainsi que pour son attitude erratique, parfois provocatrice. Il demeure une figure reconnue de la musique moderne britannique. Au sein d\'Oasis, bien que son grand frère Noel Gallagher, guitariste principal du groupe, ait écrit la majorité des chansons du groupe, certaines compositions émanaient de Liam, parmi lesquelles figurent entre autres Songbird (paru en 2002 sur Heathen Chemistry) et I\'m Outta Time (paru en 2008 sur Dig Out Your Soul). Il est également le fondateur de la marque de vêtements Pretty Green. Il a décidé après la séparation du groupe de poursuivre l\'aventure musicale et avec le groupe Beady Eye dont il est le chanteur et leader. Le premier album du groupe est sorti début 2011 et s\'est classé au 3e rang des ventes au Royaume-Uni. Après avoir sorti plusieurs singles et entamé une tournée marathon partout à travers le globe, il a annoncé un prochain album pour le groupe courant 2012. Il a été nommé «Greatest Frontman Of All Time» en 2010 par Q Magazine.'),
(11, 'Rick Ross', 'vendredi', '20:00', 'rap', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/rick-ross.jpg', '9S1Gc1nSXd4', 'Rick Ross, de son vrai nom William Leonard Roberts II, né le 28 janvier 1976 dans le Comté de Coahoma, Mississippi, est un rappeur américain3. Il se fait connaître du grand public grâce à son single Hustlin\'. Son nom de scène Rick Ross est une référence à Rick « Freeway » Ross, l\'un des plus importants trafiquants de cocaïne de Los Angeles des années 1980, avec lequel il n\'entretient aucun lien. Ce dernier portera d\'ailleurs plainte contre lui, demandant 10 millions de dollars pour l\'usage de son nom.\r\n\r\nRick Ross fonde le label Maybach Music Group avec comme membre Meek Mill, Wale, Stalley ou encore Gunplay, sous lequel il publie ses trois derniers albums, Deeper than Rap, God Forgives, I Don\'t et Mastermind. Rick Ross faisait partie de Poe Boy Entertainment, un label fondé en 1999 à Miami par Eldrin « E-Class » Prince. Ce label regroupe la scène montante de Miami avec des artistes comme Flo Rida ou Brisco.'),
(12, 'Shaka Ponk', 'samedi', '21:00', 'rock', 'https://www.eurockeennes.fr/wp-content/uploads/2018/04/shaka-ponk.jpg', 'cALVcGBXN2U', 'Il y a parfois des légendes qui courent sur certains groupes qui finissent par devenir des versions officielles de leurs biographies, quand bien même cette version est éloignée voire n’a aucun lien avec les événements réels. Shaka Ponk, repéré en Allemagne ? Certes, mais les détails de l’histoire sont plus amusants que cette version édulcorée plus proche du conte de fées que de l’engagement sans failles des membres du combo (et du collectif artistique dont il est issu) pour mêler leurs passions pour la musique et l’image, en une forme artistique qui a mis du temps à prendre forme. Depuis, le groupe s’est taillé une grosse réputation sur scène et est parvenu à transformer l’essai que constituait la mise en avant dans les médias traditionnels de son single « How we kill Stars », extrait de Bad Porn Movie Trax (2009). Leur troisième album, The Geeks and the Jerkin’s Socks, sorti en juin dernier, enfonce le clou et confirme l’engouement pour leur fusion débridée, qui devrait connaître la consécration en tête d’affiche au Zénith de Paris le 25 novembre prochain. Le succès, un album moins rock et plus dansant après être passé chez Nagui et aux Victoires de la musique, pourtant tout n’a pas été si simple pour Frah et Samaha Sam (chant) avec qui j’ai eu l’occasion de revenir longuement sur leur parcours, les embûches rencontrées, le succès, la façon dont ils vivent l’évolution du métier et bien d’autres choses, ce afin de mieux cerner la bête et ne pas céder sans raison à la critique facile et déplacée. Jugeons sur pièces ce groupe découvert et diffusé pour la première fois en 2006 sur La Grosse Radio, et ce bien avant les autres médias :'),
(13, 'Damso', 'samedi', '17:00', 'rap', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/damso-1.jpg', 'q2c7Ie1Sz1Q', 'Damso, de son vrai nom William Kalubi, né le 10 mai 1992 à Kinshasa en République démocratique du Congo, est un rappeur et auteur-compositeur belge congolais.\r\n\r\nActif dans le monde du rap depuis 2006, Damso voit sa carrière vraiment décoller en 2015, lorsqu\'il est repéré par Booba, qui inclut son morceau Poséidon sur la mixtape OKLM. Il intègre alors le collectif et label 92i, et signe chez Universal. Après une apparition sur le morceau Pinocchio de Booba qui le fait connaître du grand public, Damso sort son premier album Batterie faible en 2016, qui est certifié disque de platine. Son second album Ipséité, sorti en 2017, connaît un grand succès en France et en Belgique, et est certifié triple disque de platine en France et disque d\'or en Belgique. Il est élu rappeur de l\'année en 2017 '),
(14, 'Texas', 'samedi', '01:00', 'rock', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/texas-1.jpg', '5n1mfhFBYdg', 'Texas a été formé en décembre 1985 par la chanteuse Sharleen Spiteri, le guitariste Ally McErlaine, le bassiste Johnny McElhone, ancien membre des Altered Images puis de Hipsway, et le batteur Stuart Kerr, ancien de Love And Money. Leur nom fait référence au film Paris, Texas de Wim Wenders, sorti en 1984. Leur première représentation a eu lieu en mars 1988 à l\'Université de Dundee en Écosse. La chanteuse Sharleen Spiteri est l\'égérie et le principal visage du groupe et participe à l\'écriture de nombre de chansons, aux côtés de Johnny McElhone.\r\n\r\nLe groupe s\'est fait connaître en 1989 avec le single I Don\'t Want a Lover, extrait de leur premier album Southside. Ce dernier s\'est vendu à deux millions d\'exemplaires à travers le monde. Les albums suivants, Mother\'s Heaven (1991) et Ricks Road (1993), rencontrèrent moins de succès mais atteignirent malgré tout le Top 10 dans plusieurs pays européens. En 1997, l\'album White On Blonde fut classé n° 1 au Royaume-Uni. Leur cinquième album, The Hush, sorti en 1999, se classa lui aussi à la première place des charts britanniques. Les deux singles In Our Lifetime et Summer Son parvinrent dans le Top 5 au Royaume-Uni et rencontrèrent un grand succès en Europe. En 2000, la compilation The Greatest Hits agrémentée de titres inédits se vendit à plus de cinq millions d\'exemplaires. Le clip de In demand est l\'occasion pour le groupe de créer une scène de tango pour le moins torride entre Sharleen, la chanteuse, et l\'acteur Alan Rickman, dans une station essence … Careful What You Wish For (2003) atteignit la 5e place des charts britanniques, mais les singles Carnival Girl et I\'ll See It Through ne purent égaler les performances de leurs prédécesseurs. Entre l\'album Red Book, édité en 2005, et le suivant, The Conversation, sorti en 2013, 8 années se seront écoulées. Le dernier en date Jump on Board sort en 2017.\r\n\r\nSharleen Spiteri a été invitée à chanter avec Till Lindemann du groupe de metal industriel allemand Rammstein sur \'Stirb nicht vor mir (Don\'t die before I do)\'.'),
(15, 'Bigflo & Oli', 'vendredi', '02:00', 'rap', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/bigflo-oli.jpg', 'vfE6Pgr_pAY', 'Bigflo et Oli, stylisé Bigflo, est un groupe de hip-hop français, originaire de Toulouse (Haute-Garonne). Il est composé de Florian « Bigflo » et Olivio « Oli » Ordonez. Ils sortent leur premier album La Cour des grands en 2015, il est certifié disque d\'or moins de quatre mois après sa sortie puis disque de platine en France. Ils sont à ce jour les plus jeunes rappeurs français à détenir ces récompenses.\r\n\r\nLeur deuxième album intitulé La Vraie Vie, est sorti le 23 juin 2017. Après 3 semaines d\'exploitation, l\'album est certifié disque d\'or, disque de platine 3 mois après sa sortie, le 18 septembre 2017, double disque de platine début décembre 2017 puis triple disque de platine en mars 2018 avec plus de 300 000 ventes.'),
(16, 'Alice in chains', 'vendredi', '14:00', 'rock', 'https://www.eurockeennes.fr/wp-content/uploads/2017/12/alice-in-chains.jpg', 'Nco_kh8xJDs', 'Alice in Chains est un groupe de rock américain, originaire de Seattle, ville de l\'État de Washington. Formé en 1987 par le guitariste Jerry Cantrell et le chanteur Layne Staley, il s\'agit de l\'un des groupes de grunge les plus acclamés, et considéré comme partie intégrante des Big Four of Seattle aux côtés de Nirvana, Pearl Jam et Soundgarden.\r\n\r\nLe style musical inclut des rythmes sombres et lourds, mais est très mélodique et se caractérise également par une variété de sons, ce qui rend difficile la classification exacte du groupe. Le groupe est généralement catégorisé grunge, mais s\'inspire du heavy metal des années 1970 contenant des éléments issus des riffs lourds de Black Sabbath et des éléments de hard rock mélodiques proche du style musical de Led Zeppelin, entrelacé de compositions plus douces et plus propres dans un style plus acoustique. Les lignes vocales harmonisées sont un autre trait distinct du groupe.\r\n\r\nLe groupe acquiert une renommée internationale grâce à l\'album Dirt, et le premier single promotionnel de l\'album Would? devient l\'un des représentants les plus populaires du rock dans les années 1990. Le groupe dénombre plus de 25 millions d\'albums vendus à travers le monde, dont 14 millions aux États-Unis. Après leur publication, les albums Jar of Flies et Alice in Chains atteignent les premières places dans les classements américains. Jar of Flies est le premier EP à atteindre la première place des classements. Le groupe est également nommé neuf fois aux Grammy Awards.\r\n\r\nLe groupe n\'a jamais officiellement été dissous, mais à la mort du chanteur Layne Staley en avril 2002, il suspend son activité jusqu\'en 2005, date à laquelle Staley est remplacé par le chanteur William DuVall. '),
(17, 'Portugal', 'samedi', '03:00', 'pop', 'https://www.eurockeennes.fr/wp-content/uploads/2018/04/portugal-the-man.jpg', 'pBkHHoOIIn8', 'Portugal. The Man est un groupe de rock américain originaire de Wasilla en Alaska. Le groupe est actuellement composé de John Gourley, Zach Carothers, Kyle O\'Quin et Jason Sechrist. John Gourley et Zach Carothers se sont rencontrés et ont commencé à jouer de la musique alors qu\'ils étaient au lycée. Depuis la création du groupe en 2005, huit albums studio ont été sortis ainsi que trois EP. Leurs deux premiers albums sont sortis chez Fearless Records, mais ils ont également sorti d\'autres albums sous leur propre label Approaching AIRballoons, chez Equal Vision Records. Le 2 avril 2010, le groupe signa chez Atlantic Records. Le 4 juin 2013 sort leur septième album, Evil Friends, qui fut leur première collaboration avec le producteur Danger Mouse. En 2017 le groupe eut un grand succès avec son single «Feel It Still», qui a figuré dans le top 5 en France et aux États-Unis, et est resté 20 semaines à la première place du classement Alternative Songs.'),
(18, 'Metallica', 'samedi', '21:00', 'metal', 'https://www.metalorgie.com//grp_tof/Metallica.jpg', '0eSe-QgO9A8', 'Metallica, comment faire une courte bio de Metallica ? Certainement l’un des groupes les plus populaire du métal, et ceux depuis plus de 20 ans. L’aventure à démarré en 1981 avec Lars Ulrich (batteur) qui monte un groupe pour enregistrer un morceau pour une compilation, il est alors rejoint par James Hetfield (chant), Ron Mc Govney (basse), et Dave Mustaine (guitare solo, que l’on reverra plus tard dans Megadeth). Quelques changements de line up plus tard (Cliff Burton prend la basse et Kirk Hammett la place de Mustaine). Le groupe sort Kill’em All en 1983 et commence les tournées et l’ascension au panthéon du rock. Avec Master Of Puppets (1987) le groupe signe ce qui reste pour beaucoup leur meilleur album, mais lors de cette tournée Cliff Burton meurt dans un accident de bus ; le groupe décide néanmoins de continuer, Jason Newsted (ex Flotsam and Jetsam) rejoint alors le groupe. En 1991 Metallica amorce un tournant avec l’album éponyme (ou Black Album) qui reste l’album de Metallica le plus vendu à ce jour (dépassant les 13 millions de ventes aux USA). En 1996 le groupe continue son changement avec Load puis Reload. En 1998 le groupe sort un double album de reprise : Garage Inc.\r\nAprès un live avec l\'orchestre symphonique de San Fransisco Jason Newsted quitte Metallica en 2001, Robert Trujillo (ex-Suicidal Tendencies, Ozzy Osbourne,...) prend alors le poste de bassiste et le groupe sort en 2003 St. Anger, album très controversé a cause de son son de batterie assez ignoble.\r\nMetallica n\'en reste pas là et sort un DVD sur les coulisses de St. Anger, expliquant en grande partie le changement important qui s\'est opéré sur cet album. Le quatuor continue à enchainer les concerts jusqu\'à la sortie de Death Magnetic en 2008, suivi par une série de DVDs retraçants leurs lives un peu partout dans le monde (France, Mexique, tournée Big Four avec Anthrax, Megadeth et Slayer, ...) et d\'un jeu Guitar Hero qui leur est dédié. Metallica continuera de donner de gros concerts un peu partout dans le monde pendant plusieurs années et participera au projet Through the Never, dont l\'histoire raconte celle de Trip qui est envoyé récupérer un objet mystérieux qu’il doit absolument rapporter pour le spectacle que doivent donner les Mets. En 2011 vient le temps d\'une collaboration avec le grand Lou Reed. Un album voit le jour, le fameux Lulu, dont on se sait toujours pas si c\'est une oeuvre incomprise ou tout simplement une daube. Metallica fera son grand retour fin 2016 avec la sortie d\'un double album : Hardwired... to Self Destruct.  '),
(219, 'Coldplay', 'dimanche', '15:00', 'pop', 'http://mtv-intl.mtvnimages.com/uri/mgid:arc:content:mtv.fr:88d02c5c-d2b5-4525-a5df-4ad6d96d8999?ep=mtv.fr&stage=live&format=jpg&quality=0.8', 'dvgZkm1xWPE', 'Coldplay est un groupe de pop rock britannique, originaire de Londres, en Angleterre. Il est formé en 1996 par l\'auteur-compositeur-interprète Chris Martin et le guitariste Jon Buckland. Le bassiste Guy Berryman rejoint ensuite le groupe, avant que le batteur Will Champion devienne membre à son tour et que le producteur Phil Harvey s\'associe à eux dans leur entreprise. En 1998, le groupe voit le jour sous son nom définitif et sort ses deux premiers EP. Ils en profitent alors pour signer chez le label Parlophone.\r\n\r\nAvec sept albums, dont le dernier intitulé A Head Full of Dreams, Coldplay est l\'un des plus grands groupes à succès du nouveau millénaire avec près de 60 millions d\'albums vendus (chiffre avant A Head Full of Dreams). Critiqué mais régulièrement récompensé, le groupe remporte huit Brit Awards, sept Grammy Awards, six Q Awards et cinq NME Awards. En décembre 2009, il est aussi élu quatrième meilleur artiste des années 2000 par les lecteurs du magazine Rolling Stone.\r\n\r\nLe groupe défend les causes de différentes œuvres caritatives et officie depuis ses débuts pour le commerce équitable aux côtés d\'Oxfam international et d\'Amnesty International. Cet engagement le conduit à participer à des groupes caritatifs tels que Band Aid 20 et à jouer dans des concerts tels que le Live 8, le Fairplay, le Sound Relief, le Hope for Haiti Now, le Global Citizen Festival ou le Teenage Cancer Trust.'),
(220, 'U2', 'dimanche', '23:00', 'pop', 'https://media.virginradio.fr/article-3618330-ajust_1020/u2-de-retour-dans-les-bacs-avec-songs-of.jpg', 'XmSdTa9kaiQ', 'U2 est un groupe de rock irlandais originaire de Dublin. Formé en 1976, il est composé de Bono au chant (et occasionnellement à la guitare), The Edge à la guitare, au piano et au chant, Adam Clayton à la basse et Larry Mullen Jr. à la batterie.\r\n\r\nDepuis les années 1980, U2 s\'impose comme un groupe majeur sur la scène mondiale. Il est notamment connu pour les albums War, The Unforgettable Fire, The Joshua Tree, Achtung Baby, Zooropa, Pop et All That You Can\'t Leave Behind. Les singles Sunday Bloody Sunday, New Year\'s Day, Pride (In the Name of Love), With or Without You, I Still Haven\'t Found What I\'m Looking For, Where the Streets Have No Name, Desire, One, Mysterious Ways, Beautiful Day, Elevation ou Vertigo sont quelques exemples de succès planétaire du groupe.\r\n\r\nU2 a vendu 200 millions d\'albums (en juin 2017) et a également remporté 22 Grammy Awards. U2 est classé 22e sur la liste des 100 plus grands artistes de tous les temps par le magazine Rolling Stone. Depuis le milieu des années 1980, le groupe défend la cause des droits de l\'homme, en faisant par exemple la promotion d\'Amnesty International lors de ses concerts. Les membres du groupe deviennent d\'ailleurs « ambassadeurs de conscience » de l\'organisation en décembre 2005. Bono a été en lice pour le prix Nobel de la paix en 2003 et en 2005. Il est également nommé « Personnalité de l\'année 2005 » par le Time Magazine pour son combat en faveur de l\'Afrique, et se voit décerner le titre d\'« Homme de la paix » par le maire de Paris, Bertrand Delanoë, en 2008.');

-- --------------------------------------------------------

--
-- Structure de la table `homepage`
--

CREATE TABLE `homepage` (
  `title` longtext NOT NULL,
  `slogan` longtext NOT NULL,
  `date` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `homepage`
--

INSERT INTO `homepage` (`title`, `slogan`, `date`) VALUES
('Festizik', 'POSITIVE MIND x POSITIVE LIFE x POSITIVE VIBES', 'du 03/07 au 06/07');

-- --------------------------------------------------------

--
-- Structure de la table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `mail` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `subscribers`
--

INSERT INTO `subscribers` (`id`, `mail`) VALUES
(92, 'jean-mi@gmail.com'),
(94, 'gerard33@gmail.fr'),
(95, 'nicolas.dufour@sfr.fr'),
(96, 'valentin.t@yahoo.fr'),
(97, 'cyril-bu@caramail.com'),
(98, 'barb_amelie33@gmail.com'),
(99, 'lv-pro@numericable.fr'),
(100, 'edu33@gmx.fr');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `artistes`
--
ALTER TABLE `artistes`
  ADD PRIMARY KEY (`kartiste`);

--
-- Index pour la table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `artistes`
--
ALTER TABLE `artistes`
  MODIFY `kartiste` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=221;
--
-- AUTO_INCREMENT pour la table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
