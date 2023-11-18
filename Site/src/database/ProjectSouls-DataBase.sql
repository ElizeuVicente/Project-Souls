create database ProjectSouls;
use ProjectSouls;
-- drop database ProjectSouls;
create table Armas (
idArma int primary key auto_increment,
nome varchar(64),
tipo varchar(30),
peso decimal(3,1),
DanoFisico int,
DanoMagico int,
DanoFlamejante int,
DanoEletrico int,
DanoSombrio int,
Critico int,
BuffMagia int
);

create table Feitiços (
idFeitico int primary key auto_increment,
nome varchar(45),
tipo varchar(45),
descricao varchar(200),
dano decimal(4,3),
cura decimal(4,3),
buff decimal(4,3));

create table Usuario (
idUser int primary key auto_increment,
nome varchar(30),
email varchar(50) unique,
senha varchar(30)
) auto_increment = 10000;

create table Conquista (
idConquista int primary key auto_increment,
nome varchar(45),
jogo varchar(45)
);

create table UserXConquista (
fkUser int,
fkConquista int,
primary key (fkUser, fkConquista),
qtdConquista int
);

insert into Armas values
(null,'Dagger','Adaga', 1.5, 65, 0, 0, 0, 0, 130, 0),
(null,'Parrying Dagger','Adaga', 1, 60, 0, 0, 0, 0, 110, 0),
(null,'Mail Breaker','Adaga', 1.5, 89, 0, 0, 0, 0, 125, 0),
(null,'Bandit knife','Adaga', 1.5, 79, 0, 0, 0, 0, 110, 0),
(null,'Rotten Ghru Dagger','Adaga', 2, 64, 0, 0, 0, 0, 100, 0),
(null,'Corvian GreatKnife','Adaga', 2.5, 93, 0, 0, 0, 0, 110, 0),
(null,'Handmaid Dagger','Adaga', 0.5, 85, 0, 0, 0, 0, 110, 0),
(null,'Scholar Candlestick','Adaga', 1.5, 68, 0, 0, 0, 0, 115, 0),
(null,'Tailbone Short Sword','Adaga', 2, 106, 0, 0, 0, 0, 110, 0),
(null,'Brigand Twindaggers','Adaga', 2.5, 70, 0, 0, 0, 0, 125, 0),
(null,'Harpe','Adaga', 1.5, 62, 0, 0, 0, 0, 0, 0),
(null,'Aquamarine Dagger','Adaga', 1.5, 67, 67, 0, 0, 0, 100, 0),
(null,'Murky Hand Scythe','Adaga', 2, 72, 0, 0, 0, 22, 100, 0),
(null,'Shortsword','Espada Reta', 2, 99, 0, 0, 0, 0, 110, 0),
(null,'Long Sword','Espada Reta', 3, 110, 0, 0, 0, 0, 100, 0),
(null,'BroadSword','Espada Reta', 3, 117, 0, 0, 0, 0, 100, 0),
(null,'Broken Straight Sword','Espada Reta', 1, 70, 0, 0, 0, 0, 100, 0),
(null,'Astora Straight Sword','Espada Reta', 3, 129, 0, 0, 0, 0, 100, 0),
(null,'Lothric Knight Sword','Espada Reta', 4, 103, 0, 0, 0, 0, 110, 0),
(null,'Barbed Straight Sword','Espada Reta', 3, 111, 0, 0, 0, 0, 100, 0),
(null,'Dark Sword','Espada Reta', 4.5, 110, 0, 0, 0, 0, 100, 0),
(null,'Cleric Candlestick','Espada Reta', 2, 70, 77, 0, 0, 0, 100, 0),
(null,'Irithyll Straight Sword','Espada Reta', 4, 124, 0, 0, 0, 0, 100, 0),
(null,'Anri Straight Sword','Espada Reta', 3, 117, 0, 0, 0, 0, 100, 0),
(null,'Sunlight Straight Sword','Espada Reta', 3, 112, 0, 0, 0, 0, 100, 0),
(null,'Morion Blade','Espada Reta', 4, 131, 0, 0, 0, 0, 100, 0),
(null,'Lothric Holy Sword','Espada Reta', 4, 107, 0, 0, 0, 0, 100, 0),
(null,'Gotthard Twinswords','Espada Reta', 6.5, 100, 0, 0, 0, 0, 100, 0),
(null,'Valorheart','Espada Reta', 5.5, 120, 0, 0, 0, 0, 100, 0),
(null,'Ringed Knight Stright Sword','Espada Reta', 4.5, 120, 0, 11, 0, 0, 100, 0),
(null,'Bastard Sword','Grande Espada', 8, 138, 0, 0, 0, 0, 100, 0),
(null,'Claymore','Grande Espada', 9, 138, 0, 0, 0, 0, 100, 0),
(null,'HollowSlayer Greatsword','Grande Espada', 8.5, 145, 0, 0, 0, 0, 100, 0),
(null,'Firelink Greatsword','Grande Espada', 9, 128, 0, 89, 0, 0, 100, 0),
(null,'Black Knight Sword','Grande Espada', 10, 173, 0, 0, 0, 0, 100, 0),
(null,'Flamberge','Grande Espada', 8.5, 158, 0, 0, 0, 0, 100, 0),
(null,'Executioner Greatsword','Grande Espada', 9, 131, 0, 0, 0, 0, 100, 0),
(null,'Wolf Knight Greatsword','Grande Espada', 11.5, 139, 0, 0, 0, 0, 100, 0),
(null,'Wolnir Holy Sword','Grande Espada', 7.5, 151, 0, 0, 0, 0, 100, 0),
(null,'Greatsword Of Judgment','Grande Espada', 9, 111, 86, 0, 0, 0, 100, 0),
(null,'Storm Ruler','Grande Espada', 8, 143, 0, 0, 0, 0, 100, 0),
(null,'Moonlight Greatsword','Grande Espada', 10.5, 69, 130, 0, 0, 0, 100, 0),
(null,'Twin Princes Greatsword','Grande Espada', 9.5, 126, 0, 83, 0, 0, 100, 0),
(null,'Drakeblood Greatsword','Grande Espada', 6, 89, 71, 0, 71, 0, 100, 0),
(null,'Onyx Blade','Grande Espada', 9, 80, 0, 0, 0, 115, 100, 0),
(null,'Gael Greatsword','Grande Espada', 9, 147, 0, 0, 0, 0, 100, 0),
(null,'Zweihander','Ultra Espada Grande', 10, 145, 0, 0, 0, 0, 100, 0),
(null,'Greatsword','Ultra Espada Grande', 20, 159, 0, 0, 0, 0, 100, 0),
(null,'Astora Greatsword','Ultra Espada Grande', 8, 132, 0, 0, 0, 0, 100, 0),
(null,'Farron Greatsword','Ultra Espada Grande', 12.5, 141, 0, 0, 0, 0, 100, 0),
(null,'Fume Ultra Greatsword','Ultra Espada Grande', 25.5, 149, 0, 0, 0, 0, 100, 0),
(null,'Profaned Greatsword','Ultra Espada Grande', 13.5, 161, 0, 0, 0, 0, 100, 0),
(null,'Cathedral Knight Greatsword','Ultra Espada Grande', 15, 149, 0, 0, 0, 0, 100, 0),
(null,'Black Knight Greatsword','Ultra Espada Grande', 16, 185, 0, 0, 0, 0, 100, 0),
(null,'Lorian Greatsword','Ultra Espada Grande', 14, 151, 0, 79, 0, 0, 100, 0),
(null,'Lothric Knight Greatsword','Ultra Espada Grande', 16.5, 131, 0, 0, 87, 0, 100, 0),
(null,'Ringed Knight Paired Greatswords','Ultra Espada Grande', 22.5, 185, 0, 11, 0, 0, 100, 0),
(null,'Crescent Moon Sword','Espada Curva', 2.5, 78, 78, 0, 0, 0, 100, 0),
(null,'Scimitar','Espada Curva', 2.5, 90, 0, 0, 0, 0, 100, 0),
(null,'Pontiff Knight Curved Sword','Espada Curva', 3.5, 12, 0, 0, 0, 0, 100, 0),
(null,'Falchion','Espada Curva', 4, 117, 0, 0, 0, 0, 100, 0),
(null,'Sellsword Twinblades','Espada Curva', 5.5, 99, 0, 0, 0, 0, 100, 0),
(null,'Warden Twinblades','Espada Curva', 6.5, 93, 0, 0, 0, 0, 100, 0),
(null,'Shotel','Espada Curva', 2.5, 104, 0, 0, 0, 0, 100, 0),
(null,'Painting Guardiand Curved Sword','Espada Curva', 1.5, 88, 0, 0, 0, 0, 100, 0),
(null,'Dancer Enchanted Swords','Espada Curva', 8.5, 79, 62, 62, 0, 0, 100, 0),
(null,'Storm Curved Sword','Espada Curva', 5, 110, 0, 0, 0, 0, 100, 0),
(null,'Carthus Curved Sword','Espada Curva', 5.5, 105, 0, 0, 0, 0, 100, 0),
(null,'Carthus Shotel','Espada Curva', 3, 106, 0, 0, 0, 0, 100, 0),
(null,'Rotten Ghru Curved Sword','Espada Curva', 2, 103, 0, 0, 0, 0, 100, 0),
(null,'Follower Sabre','Espada Curva', 4, 112, 0, 0, 0, 0, 100, 0),
(null,'Demon Scar','Espada Curva', 0.5, 0, 0, 99, 0, 0, 110, 110),
(null,'Murakumo','Grande Espada Curva', 11, 132, 0, 0, 0, 0, 100, 0),
(null,'Exile Greatsword','Grande Espada Curva', 17, 148, 0, 0, 0, 0, 100, 0),
(null,'Old Wolf Curved Sword','Grande Espada Curva', 13, 155, 0, 0, 0, 0, 100, 0),
(null,'Carthus Curved Greatsword','Grande Espada Curva', 10.5, 122, 0, 0, 0, 0, 100, 0),
(null,'Harald Curved Greatsword','Grande Espada Curva', 14, 140, 0, 0, 0, 0, 100, 0),
(null,'Darkdrift','Katana', 3.5, 134, 0, 0, 0, 0, 100, 0),
(null,'Uchigatana','Katana', 5.5, 115, 0, 0, 0, 0, 100, 0),
(null,'Washing Pole','Katana', 8.5, 121, 0, 0, 0, 0, 100, 0),
(null,'Onikiri And Ubadachi','Katana', 8.5, 104, 0, 0, 0, 0, 100, 0),
(null,'Black Blade','Katana', 6.5, 122, 0, 0, 0, 0, 100, 0),
(null,'Chaos Blade','Katana', 6, 103, 0, 0, 0, 0, 100, 0),
(null,'Bloodlust','Katana', 5, 105, 0, 0, 0, 0, 100, 0),
(null,'Frayed Blade','Katana', 8, 101, 0, 0, 0, 41, 100, 0),
(null,'Estoc','Lamina de impulso', 3.5, 105, 0, 0, 0, 0, 100, 0),
(null,'Rapier','Lamina de impulso', 2, 95, 0, 0, 0, 0, 130, 0),
(null,'Ricard Rapier','Lamina de impulso', 2.5, 97, 0, 0, 0, 0, 100, 0),
(null,'Crystal Sage Rapier','Lamina de impulso', 2.5, 55, 82, 0, 0, 0, 100, 0),
(null,'Irithyll Rapier','Lamina de impulso', 3, 116, 0, 0, 0, 0, 110, 0),
(null,'Crow Quills','Lamina de impulso', 4, 98, 0, 0, 0, 0, 120, 0),
(null,'Battle Axe','Machado', 4, 125,  0, 0, 0, 0, 100, 0),
(null,'Hand Axe','Machado', 2.5, 110,  0, 0, 0, 0, 100, 0),
(null,'Thrall Axe','Machado', 1.5, 104,  0, 0, 0, 0, 100, 0),
(null,'Brigand Axe','Machado', 3, 124,  0, 0, 0, 0, 100, 0),
(null,'Dragonslayer Axe','Machado', 4, 105,  0, 0, 105, 0, 100, 0),
(null,'Butcher Knife','Machado', 7, 95,  0, 0, 0, 0, 100, 0),
(null,'Winged Knight Twinaxes','Machado', 8.5, 122,  0, 0, 0, 0, 100, 0),
(null,'Eleonora','Machado', 6.5, 156,  0, 0, 0, 0, 100, 0),
(null,'Man Serpent Hatchet','Machado', 4, 125,  0, 0, 0, 0, 100, 0),
(null,'Millwood Battle Axe','Machado', 6.5, 135,  0, 0, 0, 0, 100, 0),
(null,'Greataxe','Grande Machado', 16, 188,  0, 0, 0, 0, 100, 0),
(null,'Dragonslayer Greataxe','Grande Machado', 20, 200,  0, 0, 74, 0, 100, 0),
(null,'Demon Greataxe','Grande Machado', 14.5, 157,  0, 88, 0, 0, 100, 0),
(null,'Great Machete','Grande Machado', 14, 167,  0, 0, 0, 0, 100, 0),
(null,'Yhorm Great Machete','Grande Machado', 19, 185,  0, 0, 0, 0, 100, 0),
(null,'Black Knight Greataxe','Grande Machado', 19.5, 216,  0, 0, 0, 0, 100, 0),
(null,'Earth Seeker','Grande Machado', 17, 154,  0, 0, 0, 0, 100, 0),
(null,'Club','Martelo', 2.5, 108,  0, 0, 0, 0, 100, 0),
(null,'Drang Hammers','Martelo', 9, 110,  0, 0, 0, 0, 100, 0),
(null,'Mace','Martelo', 5, 115,  0, 0, 0, 0, 100, 0),
(null,'Morning Star','Martelo', 5, 122,  0, 0, 0, 0, 100, 0),
(null,'Reinford Club','Martelo', 4, 108,  0, 0, 0, 0, 100, 0),
(null,'Heysel Pick','Martelo', 4.5, 93,  70, 0, 0, 0, 100, 0),
(null,'Warpick','Martelo', 4.5, 113,  0, 0, 0, 0, 100, 0),
(null,'Blacksmith Ghammer','Martelo', 5, 105,  0, 0, 0, 0, 100, 0),
(null,'Gargoyle Flame Hammer','Grande Martelo', 11, 122,  0, 100, 0, 0, 100, 0),
(null,'Great Mace','Grande Martelo', 18, 173,  0, 0, 0, 0, 100, 0),
(null,'Large Club','Grande Martelo', 10, 148,  0, 0, 0, 0, 100, 0),
(null,'Vordt Great Hammer','Grande Martelo', 17, 176,  0, 0, 0, 0, 100, 0),
(null,'Morne Great Hammer','Grande Martelo', 24, 200,  0, 0, 0, 0, 100, 0),
(null,'Great Wooden Hammer','Grande Martelo', 8, 125,  0, 0, 0, 0, 100, 0),
(null,'Great Club','Grande Martelo', 12, 152,  0, 0, 0, 0, 100, 0),
(null,'Smough Great Hammer','Grande Martelo', 24, 205,  0, 0, 0, 0, 100, 0),
(null,'Old King Great Hammer','Grande Martelo', 18.5, 180,  0, 69, 0, 0, 100, 0),
(null,'Pickaxe','Grande Martelo', 8, 140,  0, 0, 0, 0, 100, 0),
(null,'Dragon Tooth','Grande Martelo', 21, 188,  0, 0, 0, 0, 100, 0),
(null,'Spiked Mace','Grande Martelo', 16, 149,  0, 0, 0, 0, 100, 0),
(null,'QuakeStone Hammer','Grande Martelo', 15, 189,  0, 0, 0, 0, 100, 0),
(null,'Great Mace','Grande Martelo', 18, 173,  0, 0, 0, 0, 100, 0),
(null,'Caestus','Punho&Garra', 0.5, 91,  0, 0, 0, 0, 100, 0),
(null,'Demon Fist','Punho&Garra', 5.5, 111,  0, 77, 0, 0, 100, 0),
(null,'Dark Hand','Punho&Garra', 0, 88,  0, 0, 0, 150, 100, 0),
(null,'Claw','Punho&Garra', 1.5, 86,  0, 0, 0, 0, 110, 0),
(null,'Manikin Claws','Punho&Garra', 1.5, 81,  0, 0, 0, 0, 110, 0),
(null,'Crow Talons','Punho&Garra', 3, 91,  0, 0, 0, 0, 110, 0),
(null,'Arstor Spear','Lança', 6.5, 118,  0, 0, 0, 0, 100, 0),
(null,'Drang Twinspears','Lança', 8, 100,  0, 0, 0, 0, 100, 0),
(null,'Gargoyle Flame Spear','Lança', 9.5, 103,  0, 90, 0, 0, 100, 0),
(null,'Spear','Lança', 4.5, 104,  0, 0, 0, 0, 100, 0),
(null,'Tailbone Spear','Lança', 4.5, 118,  0, 0, 0, 0, 100, 0),
(null,'Pike','Lança', 7.5, 105,  0, 0, 0, 0, 100, 0),
(null,'Winged Spear','Lança', 6, 95,  0, 0, 0, 0, 100, 0),
(null,'Four-Pronged Plow','Lança', 6.5, 105,  0, 0, 0, 0, 100, 0),
(null,'Saint Bident','Lança', 8.5, 98,  0, 0, 0, 0, 100, 0),
(null,'Rotten Ghru Spear','Lança', 5.5, 104,  0, 0, 0, 0, 100, 0),
(null,'Partizan','Lança', 6.5, 108,  0, 0, 0, 0, 100, 0),
(null,'Yorshkas Spear','Lança', 6.5, 102,  0, 0, 0, 0, 100, 0),
(null,'Dragonslayer Spear','Lança', 9.5, 113,  0, 0, 70, 0, 100, 0),
(null,'Dragon SwordSpear','Lança', 14.5, 128,  0, 0, 34, 0, 100, 0),
(null,'Golden Ritual Spear','Lança', 3, 73,  77, 0, 0, 0, 100, 0),
(null,'Soldering Iron','Lança', 5, 39,  0, 96, 0, 0, 100, 0),
(null,'Lothric Knight Long Spear','Lança', 8, 112,  0, 0, 0, 0, 100, 0),
(null,'Greatlance','Lança', 10.5, 129,  0, 0, 0, 0, 100, 0),
(null,'Follower Javelin','Lança', 4, 106,  0, 0, 0, 0, 100, 0),
(null,'Lothric War Banner','Lança', 5, 100,  0, 0, 0, 0, 100, 0),
(null,'Ringed Knight Spear','Lança', 9, 126,  0, 12, 0, 0, 100, 0),
(null,'Halberd','Alabarda', 8, 125,  0, 0, 0, 0, 100, 0),
(null,'Lucerne','Alabarda', 7.5, 126,  0, 0, 0, 0, 100, 0),
(null,'Winged Knight Halberd','Alabarda', 14, 145,  0, 0, 0, 0, 100, 0),
(null,'Red Hilted Halberd','Alabarda', 8, 130,  0, 0, 0, 0, 100, 0),
(null,'Glaive','Alabarda', 11, 141,  0, 0, 0, 0, 100, 0),
(null,'Crescent Axe','Alabarda', 6, 119,  0, 0, 0, 0, 100, 0),
(null,'Gundyr Halberd','Alabarda', 13, 145,  0, 0, 0, 0, 100, 0),
(null,'Black Knight Glaive','Alabarda', 9, 159,  0, 0, 0, 0, 100, 0),
(null,'Immolation Tinder','Alabarda', 10, 118,  0, 75, 0, 0, 100, 0),
(null,'Splitleaf Greatsword','Alabarda', 13.5, 132,  0, 0, 0, 0, 100, 0),
(null,'Crucifix Of The Mad King','Alabarda', 12, 124,  0, 0, 0, 74, 100, 0),
(null,'Great Scythe','Foice', 7, 105,  0, 0, 0, 0, 100, 0),
(null,'Pontiff Knight Great Scythe','Foice', 7.5, 100,  0, 0, 0, 0, 100, 0),
(null,'Great Corvian Scythe','Foice', 9, 97,  0, 0, 0, 0, 100, 0),
(null,'Friede Great Scythe','Foice', 13, 110, 77, 0, 0, 0, 100, 0),
(null,'Whip','Chicote', 2, 90,  0, 0, 0, 0, 100, 0),
(null,'Notched Whip','Chicote', 2, 95,  0, 0, 0, 0, 100, 0),
(null,'Witch Lock','Chicote', 3, 77,  0, 80, 0, 0, 100, 0),
(null,'Spotted Whip','Chicote', 2.5, 102,  0, 0, 0, 0, 100, 0),
(null,'Rose Of Ariandel','Chicote', 3.5, 79,  0, 0, 0, 0, 100, 0),
(null,'Black Bow Of Pharis','Arco', 3, 67,  0, 0, 0, 0, 100, 0),
(null,'Longbow','Arco', 4, 82,  0, 0, 0, 0, 100, 0),
(null,'Short Bow','Arco', 2, 77,  0, 0, 0, 0, 100, 0),
(null,'Dragonrider Bow','Arco', 6.5, 110,  0, 0, 0, 0, 100, 0),
(null,'Composite Bow','Arco', 3.5, 73,  0, 0, 0, 0, 100, 0),
(null,'Darkmoon Longbow','Arco', 4.5, 36,  44, 0, 0, 0, 100, 0),
(null,'White Birch Bow','Arco', 2.5, 82,  0, 0, 0, 0, 100, 0),
(null,'Onislayer Greatbow','Grande Arco', 7.5, 111,  0, 0, 0, 0, 100, 0),
(null,'Dragonslayer Greatbow','Grande Arco', 10, 126,  0, 0, 0, 0, 100, 0),
(null,'Millwood Greatbow','Grande Arco', 9, 139,  0, 0, 0, 0, 100, 0),
(null,'Light Crossbow','Besta', 3, 64,  0, 0, 0, 0, 100, 0),
(null,'Knight Crossbow','Besta', 4, 40,  0, 0, 40, 0, 100, 0),
(null,'Arbalest','Besta', 6, 78,  0, 0, 0, 0, 100, 0),
(null,'Sniper Crossbow','Besta', 7.5, 70,  0, 0, 0, 0, 100, 0),
(null,'Avelyn','Besta', 7.5, 64,  0, 0, 0, 0, 100, 0),
(null,'Heavy Crossbow','Besta', 4.5, 72,  0, 0, 0, 0, 100, 0),
(null,'Repeating Crossbow','Besta', 7.5, 83,  0, 0, 0, 0, 100, 0),
(null,'Sorcerer Staff','Cajado', 2, 60,  0, 0, 0, 0, 100, 100),
(null,'Heretic Staff','Cajado', 3, 63,  0, 0, 0, 0, 100, 113),
(null,'Witchtree Branch','Cajado', 2, 57,  0, 0, 0, 0, 100, 114),
(null,'Sage Crystal Staff','Cajado', 2.5, 84,  0, 0, 0, 0, 100, 60),
(null,'Izalith Staff','Cajado', 3, 120,  0, 0, 0, 0, 100, 130),
(null,'Court Sorcerer Staff','Cajado', 2, 60,  0, 0, 0, 0, 100, 105),
(null,'Man-Grub Staff','Cajado', 3, 90,  0, 0, 0, 0, 100, 100),
(null,'Storyteller Staff','Cajado', 2.5, 60,  0, 0, 0, 0, 100, 60),
(null,'Mendicant Staff','Cajado', 2.5, 60,  0, 0, 0, 0, 100, 55),
(null,'Archdeacon Great Staff','Cajado', 2.5, 89,  0, 0, 0, 0, 100, 118),
(null,'Murky Longstaff','Cajado', 3, 86,  0, 0, 0, 0, 100, 55),
(null,'Preacher Right Arm','Cajado', 2, 109,  0, 0, 0, 0, 100, 60),
(null,'Pyromancy Flame','Chama', 0, 0,  0, 100, 0, 0, 100, 144),
(null,'Pyromancy Parting Flame','Chama', 0, 0,  0, 110, 0, 0, 100, 130),
(null,'Talisman','Talismã', 0.5, 52,  0, 0, 0, 0, 100, 100),
(null,'Saint Talisman','Talismã', 0.5, 53,  0, 0, 0, 0, 100, 100),
(null,'Sunlight Talisman','Talismã', 0.5, 53,  0, 0, 0, 0, 100, 60),
(null,'Canvas Talisman','Talismã', 0.5, 52,  0, 0, 0, 0, 100, 112 ),
(null,'White Hair Talisman','Talismã', 0.5, 73,  0, 79, 0, 0, 100, 20),
(null,'Sunless Talisman','Talismã', 0.5, 74,  0, 0, 0, 0, 100, 60),
(null,'Cleric Sacred Chime','Carrilhão', 0.5, 52,  0, 0, 0, 0, 100, 135),
(null,'Priest Chime','Carrilhão', 0.5, 52,  0, 0, 0, 0, 100, 118),
(null,'Crystal Chime','Carrilhão', 0.5, 73,  0, 0, 0, 0, 100, 20),
(null,'Caitha Chime','Carrilhão', 0.5, 74,  0, 0, 0, 0, 100, 60),
(null,'Saint-Tree Bellvine','Carrilhão', 0.5, 52,  0, 0, 0, 0, 100,  100),
(null,'Yorshka Chime','Carrilhão', 0.5, 54,  0, 0, 0, 0, 100, 60),
(null,'Sacred Chime Of Filianore','Carrilhão', 0.5, 74,  0, 0, 0, 0, 100, 142);

insert into Feitiços values
(null, 'Heal Aid', 'Milagre', ' Significantemente restaura HP', 0, 1.1, 0),
(null, 'Heal', 'Milagre', 'Restaura o próprio HP e de todos proximos', 0, 3, 0),
(null, 'Med Heal', 'Milagre', 'Moderadamente restaura HP próprio e de todos proximos', 0, 4.1, 0),
(null, 'Great Heal', 'Milagre', 'Restaura muito HP próprio e de todos próximos', 0, 5.5, 0),
(null, 'Shooting Sunlight', 'Milagre', ' Restaura muito HP em todos na área', 0, 7, 0),
(null, 'Replenishment', 'Milagre', 'Gradualmente cura 5HP por segundo', 0, 0, 0),
(null, 'Bountiful Light', 'Milagre', 'Gradualmente cura 5HP por segundo', 0, 0, 0),
(null, 'Caressing Tears', 'Milagre', 'Retira efeitos de sangramento, veneno e congelamento de todos próximos', 0, 0, 0),
(null, 'Tears Of Denial', 'Milagre', 'Garante a chance de sobreviver ao alcançar 0HP', 0, 0, 0),
(null, 'Homeward', 'Milagre', 'Retorna o conjurador a ultima fogueira em que ele descansou', 0, 0, 0),
(null, 'Seek Guidance', 'Milagre', 'Exibe maís sinais de ajuda de outros mundos', 0, 0, 0),
(null, 'Sacred Oath', 'Milagre', 'Aumenta 10% de dano fisico e 10% de abosorção para todos os tipos de dano', 1.1, 0, 1.1),
(null, 'Force', 'Milagre', 'Emite uma onda de choque que repulsa inimigos e projéteis próximos ', 0, 0, 0),
(null, 'Emit Force', 'Milagre', 'Emita uma onda de choque frontalmente', 1.2, 0, 0),
(null, 'Wrath of The Gods', 'Milagre', 'Emite uma poderosa onda de choque', 3.2, 0, 0),
(null, 'Lightning Spear', 'Milagre', 'Arremessa uma lança de raio', 1.45, 0, 0),
(null, 'Great Lightning Spear', 'Milagre', 'Arremessa uma lança de raio', 1.85, 0, 0),
(null, 'Sunlight Spear', 'Milagre', 'Arremessa uma lança de raio solar', 2.6, 0, 0),
(null, 'Lightning Stake', 'Milagre', 'Finca uma estaca de raio no chão, dando dano em volta', 1.3, 0, 0),
(null, 'Lightning Storm', 'Milagre', 'Provoca uma chuva de raios', 2.35, 0, 0),
(null, 'Divine Pillars of Light', 'Milagre', 'Evoca mult', 1.9, 0, 0),
(null, 'Blessed Weapon', 'Milagre', 'Abençoa a arma direita, acrescentando dano e gradualmente recuperando HP', 0.75, 0, 0),
(null, 'Lightning Blade', 'Milagre', 'Imbuí a arma direita com raios', 0.95, 0, 0),
(null, 'Darkmoon Blade', 'Milagre', 'Imbuí a arma direita com a magia de Darkmoon', 0.95, 0, 0),
(null, 'Magic Barrier', 'Milagre', 'Aumenta a absorção de dano magico, se cobrindo com uma proteção branca', 0, 0, 1.35),
(null, 'Great Magic Barrier', 'Milagre', 'Aumenta muito a absorção de dano magico, se cobrindo com uma proteção branca', 0, 0, 1.35),
(null, 'Dark Blade', 'Milagre', 'Imbuí a arma direita com escuridão', 0.85, 0, 0),
(null, 'Vow Of Silence', 'Milagre', 'Previne o uso de magia na area', 0, 0, 0),
(null, 'Dead again', 'Milagre', 'Abençoa corpos, transformando eles em armadilhas', 0, 0, 1.35),
(null, 'Atonement', 'Milagre', 'Atraí mais atenção de terceiros', 0, 0, 0),
(null, 'Deep Protection', 'Milagre', 'Significantemente aumenta o dano, absorção e resistencia de dano, enquanto aumenta a recuperação de estamina', 1.05, 0, 0.05),
(null, 'Gnaw', 'Milagre', 'Sumona um enxame de insetos', 0.9, 0, 0),
(null, 'Dorhys Gnawing', 'Milagre', 'Sumona um enorme enxame de insetos', 1.2, 0, 0),
(null, 'Lifehunt Scythe', 'Milagre', 'Rouba HP ao usar uma foice ilusória', 2, 0, 0),
(null, 'Way Of White Corona', 'Milagre', 'Fragmentos de discos brancos voam e retornam ao conjurador', 0.85, 0, 0),
(null, 'Projected Heal', 'Milagre', 'Projeta uma magia de cura na área', 0, 1.7, 0),
(null, 'Lightning Arrow', 'Milagre', 'Atira flechas de luz', 1.6, 0, 0),
(null, 'Fireball', 'Piromancia', 'Arremessa uma bola de fogo', 1.7, 0, 0),
(null, 'Fire Orb', 'Piromancia', 'Arremessa um enorme orbe de fogo', 2.25, 0, 0),
(null, 'Bursting Fireball', 'Piromancia', 'Arremessa uma enchurrada de bolas de fogo explosivas', 0.71, 0, 0),
(null, 'Great Chaos Fire Orb', 'Piromancia', 'Arremessa um enorme orbe caótico de chamas', 3.3, 0, 0),
(null, 'Chaos Bed Vestiges', 'Piromancia', 'Arremessa chamas caóticas que queimam as redondezas', 3.4, 0, 0),
(null, 'Fire Surge', 'Piromancia', 'Emite uma rajada de fogo constante', 0.67, 0, 0),
(null, 'Fire Whip', 'Piromancia', 'O conjurador manipula a direção das chamas', 0.65, 0, 0),
(null, 'Firestorm', 'Piromancia', 'Emergem multiplos pilares de chama em volta do conjurador ', 1.75, 0, 0),
(null, 'Chaos Storm', 'Piromancia', 'Chamas caóticas derretem até grandes rochas e criam uma breve onda de lava derretida com o impacto', 1.95, 0, 0),
(null, 'Great Combustion', 'Piromancia', 'Cria uma poderosa e gigante chama em sua mão', 1.95, 0, 0),
(null, 'Sacred Flame', 'Piromancia', 'Queima o alvo de dentro para fora com apenas um toque', 2.3, 0, 0),
(null, 'Profaned Flame', 'Piromancia', 'Engolfa inimigos no alcance e os queima até as cinzas', 2.6, 0, 0),
(null, 'Poison Mist', 'Piromancia', 'Cria uma névoa venenosa', 0, 0, 0),
(null, 'Toxic Mist', 'Piromancia', 'Cria uma densa névoa venenosa ', 0, 0, 0),
(null, 'Acid Surge', 'Piromancia', 'Emite um acido que corrói armas e armaduras', 0, 0, 0),
(null, 'Flash Sweat', 'Piromancia', 'Intensifica o suor corporal, amentando a absorção de dano de flamejante', 0, 0, 0.3),
(null, 'Profuse Sweat', 'Piromancia', 'Aumenta temporareamente a resistencia a sangramento, veneno, congelamento e maldições', 0, 0, 0),
(null, 'Power Within', 'Piromancia', 'Temporariamente aumenta o ataque, mas perde HP gradualmetne', 0.2, 0, 0),
(null, 'Carthus Beacon', 'Piromancia', 'Acrescenta dano com ataques consecutivos', 0.15, 0, 0),
(null, 'Carthus Flame Arc', 'Piromancia', 'Imbuí a arma direita em chamas', 0.9, 0, 0),
(null, 'Warmth', 'Piromancia', 'Cria uma gentil e calorosa chama que cura quem a toca', 0, 0, 0),
(null, 'Rapport', 'Piromancia', 'Encanta o inimigo tornando-o temporariamente em um aliado', 0, 0, 0),
(null, 'Boulder Heave', 'Piromancia', 'Espele uma rocha de sua boca', 1.8, 0, 0),
(null, 'Black Flame', 'Piromancia', 'Cria uma enorme e sombria chama na mão', 2.4, 0, 0),
(null, 'Black Fire Orb', 'Piromancia', 'Arremessa uma bola de fogo negra', 2.4, 0, 0),
(null, 'Black Serpent', 'Piromancia', 'Libera chamas negras e onduladas pelo chão', 1.65, 0, 0),
(null, 'Floating Chaos', 'Piromancia', 'Sumona um orbe caótico que arremessa orbes de fogo', 0.85, 0, 0),
(null, 'Seething Chaos', 'Piromancia', 'Arremessa um aglomerado fervente explosivo', 2, 0, 0),
(null, 'Flame Fan', 'Piromancia', 'Libera uma ventoada de chamas sobre o conjurador', 1.55, 0, 0),
(null, 'Soul Arrow', 'Magia', 'Atira uma flecha feita de almas', 1.275, 0, 0),
(null, 'Great Soul Arrow', 'Magia', 'Atira uma grande flecha feita de almas', 1.5, 0, 0),
(null, 'Heavy Soul Arrow', 'Magia', 'Atira uma flecha de almas pesadas', 2.15, 0, 0),
(null, 'Great Heavy Soul Arrow', 'Magia', 'Atira uma enorme flecha de almas pesadas', 2.425, 0, 0),
(null, 'Farron Dart', 'Magia', 'Atira um dardo feito de almas', 0.52, 0, 0),
(null, 'Great Farron Dart', 'Magia', 'Atira um dardo poderoso feito de almas', 0.59, 0, 0),
(null, 'Farron Hail', 'Magia', 'Dispara uma rajada de dardos feitos de alma', 0.58, 0, 0),
(null, 'Homing Soulmass', 'Magia', 'Libera 5 massas feitas de almas que são teleguiadas', 0.49, 0, 0),
(null, 'Homing Crystal Soulmass', 'Magia', 'Libera algumas massas feitas de almas que são teleguiadas', 0.65, 0, 0),
(null, 'Soul Spear', 'Magia', 'Atira uma lança feita de almas', 2.5, 0, 0),
(null, 'Crystal Soul Spear', 'Magia', 'Atira uma lança feita de almas cristalizadas', 3.05, 0, 0),
(null, 'White Dragon Breath', 'Magia', 'Libera 5 massas feitas de almas que são teleguiadas', 2.65, 0, 0),
(null, 'Soul Stream', 'Magia', 'Libera um enorme raio feito de almas', 1.6, 0, 0),
(null, 'Soul Greatsword', 'Magia', 'Realiza um ataque com uma Grande espada feita de almas', 2, 0, 0),
(null, 'Farron Flashsword', 'Magia', 'Uma adaptação da "Soul Greatsword" feita pelos mortos-vivos da legião de Farron', 1.035, 0, 0),
(null, 'Magic Weapon', 'Magia', 'Reforça a arma direita com magia', 0.75, 0, 0),
(null, 'Great Magic Weapon', 'Magia', 'Reforça a arma direita com magia', 0.85, 0, 0),
(null, 'Crystal Magic Weapon', 'Magia', 'Reforça a arma direita com magia cristalizada', 0.95, 0, 0),
(null, 'Magic Shield', 'Magia', 'Reforça o escudo esquerdo com magia', 0, 0, 0.30),
(null, 'Great Magic Shield', 'Magia', 'Reforça pesadamente o escudo esquerdo com magia', 0, 0, 1),
(null, 'Spook', 'Magia', 'Mascára sons do conjurador e previne o dano ao cair', 0, 0, 0),
(null, 'Aural Decoy', 'Magia', 'Distrai inimigos com um som distante', 0, 0, 0),
(null, 'Pestilent Mist', 'Magia', 'Libera uma densa névoa ue consome o HP de todos da área', 0, 0, 0),
(null, 'Cast Light', 'Magia', 'Invoca uma pequena luz que ilumina em volta', 0, 0, 0),
(null, 'Repair', 'Magia', 'Repara todo o equipamento', 0, 0, 0),
(null, 'Hidden Weapon', 'Magia', 'Torna a arma direita invisivel', 0, 0, 0),
(null, 'Hidden Body', 'Magia', 'Torna um corpo próximo invisivel', 0, 0, 0),
(null, 'Chameleon', 'Magia', 'Transforma o conjurador em um objeto nada suspeito', 0, 0, 0),
(null, 'Twisted Wall Of Light', 'Magia', 'Distorce a luz para refletir magia', 0, 0, 0),
(null, 'Deep Soul', 'Magia', 'Lança retigios de almas sombrias', 1, 0, 0),
(null, 'Great Deep Soul', 'Magia', 'Lança um poderoso emaranhado de almas sombrias', 1.3, 0, 0),
(null, 'Affinity', 'Magia', 'Manifesta uma legião sombria de humanidade', 1.2, 0, 0),
(null, 'Dark Edge', 'Magia', 'Imbuí a arma direita com a escuridão da humanidade', 2.05, 0, 0),
(null, 'Frozen Weapon', 'Magia', 'Imbuí a arma direita com gelo', 0, 0, 0),
(null, 'Snap Freeze', 'Magia', 'Cria uma névoa que congela todos dentro', 0, 0, 0),
(null, 'Great Soul Dregs', 'Magia', 'Lança um enorme emaranhado de algas', 2.55, 0, 0),
(null, 'Old Moonlight', 'Magia', 'Concede a antiga espada da luz lunar', 1.5, 0, 0);


select * from Armas;
select * from Feitiços;

select * from Usuario;

-- Usuário
create user 'insertProjectSouls'@'localhost' identified by 'S0uls6';

grant INSERT,SELECT on Usuario.* to 'insertProjectSouls'@'localhost';
grant INSERT, DELETE, SELECT on UserXConquista.* to 'insertProjectSouls'@'localhost';

flush privileges;

    

