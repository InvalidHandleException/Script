// Config
world_data.resources = ['holz', 'lehm', 'eisen'];
world_data.resources_en = ['wood', 'stone', 'iron'];
world_data.buildingsSize =
	[
	["main", [5, 6, 7, 8, 9, 11, 13, 15, 18, 21, 24, 28, 33, 38, 45, 53, 62, 72, 84, 99, 116, 135, 158, 185, 216, 253, 296, 347, 406, 475]],
	["barracks", [7, 8, 10, 11, 13, 15, 18, 21, 25, 29, 34, 39, 46, 54, 63, 74, 86, 101, 118, 138, 162, 189, 221, 259, 303]],
	["stable", [8, 9, 11, 13, 15, 18, 21, 24, 28, 33, 38, 45, 53, 62, 72, 84, 99, 115, 135, 158]],
	["garage", [8, 9, 11, 13, 15, 18, 21, 24, 28, 33, 38, 45, 53, 62, 72]],
	["snob", [80, 94, 110]],
	["smith", [20, 23, 27, 32, 37, 44, 51, 60, 70, 82, 96, 112, 132, 154, 180, 211, 247, 289, 338, 395]],
	["place", [0]],
	["market", [20, 23, 27, 32, 37, 44, 51, 60, 70, 82, 96, 112, 132, 154, 180, 211, 247, 289, 338, 395, 462, 541, 633, 740, 866]],
	["wood", [5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 21, 24, 28, 33, 38, 43, 50, 58, 67, 77, 89, 103, 119, 138, 159, 183, 212, 245, 283, 326]],
	["stone", [10, 11, 13, 15, 17, 19, 22, 25, 29, 33, 37, 42, 48, 55, 63, 71, 81, 93, 106, 121, 137, 157, 179, 204, 232, 265, 302, 344, 392, 447]],
	["iron", [10, 12, 14, 16, 19, 22, 26, 30, 35, 41, 48, 56, 66, 77, 90, 105, 123, 144, 169, 197, 231, 270, 316, 370, 433, 507, 593, 696, 811, 949]],
	["farm", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	["storage", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
	["hide", [2, 2, 3, 3, 4, 4, 5, 6, 7, 8]],
	["wall", [5, 6, 7, 8, 9, 11, 13, 15, 18, 21, 24, 28, 33, 38, 45, 53, 62, 72, 84, 99]]
	];

world_data.buildingsPoints =
	[
	["main", [10, 12, 14, 17, 21, 25, 30, 36, 43, 52, 62, 74, 89, 107, 128, 145, 185, 222, 266, 319, 383, 460, 552, 662, 795, 954, 1145, 1648, 1978]],
	["barracks", [16, 19, 23, 28, 33, 40, 48, 57, 69, 83, 99, 119, 143, 171, 205, 247, 296, 355, 426, 511, 613, 736, 883, 1060, 1272]],
	["stable", [20, 24, 29, 35, 41, 50, 60, 72, 86, 103, 124, 149, 178, 214, 257, 308, 370, 444, 532, 639]],
	["garage", [24, 29, 35, 41, 50, 60, 72, 86, 103, 124, 149, 178, 214, 257, 308]],
	["snob", [512, 614, 737]],
	["smith", [19, 23, 27, 33, 39, 47, 57, 68, 82, 98, 118, 141, 169, 203, 244, 293, 351, 422, 506, 607]],
	["place", [0]],
	["market", [10, 12, 14, 17, 21, 25, 30, 36, 43, 52, 62, 74, 89, 107, 128, 154, 185, 222, 266, 319, 383, 460, 552, 662, 795]],
	["wood", [6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192, 230, 276, 331, 397, 477, 572, 687, 824, 989, 1187]],
	["stone", [6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192, 230, 276, 331, 397, 477, 572, 687, 824, 989, 1187]],
	["iron", [6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192, 230, 276, 331, 397, 477, 572, 687, 824, 989, 1187]],
	["farm", [5, 6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192, 230, 276, 331, 397, 477, 572, 687, 824, 989]],
	["storage", [6, 7, 9, 10, 12, 15, 18, 21, 26, 31, 37, 45, 53, 64, 77, 92, 111, 133, 160, 192, 230, 276, 331, 397, 477, 572, 687, 824, 989, 1187]],
	["hide", [5, 6, 7, 9, 10, 12, 15, 18, 21, 26]],
	["wall", [8, 10, 12, 14, 17, 20, 24, 29, 34, 41, 50, 59, 71, 86, 103, 123, 148, 177, 213, 256]]
	];

world_data.unitsSize = { "unit_spear": 1, "unit_sword": 1, "unit_axe": 1, "unit_spy": 2, "unit_light": 4, "unit_heavy": 6, "unit_ram": 5, "unit_catapult": 8, "unit_snob": 100 };
world_data.unitsSpeed = { "unit_spear": 18, "unit_sword": 22, "unit_axe": 18, "unit_spy": 9, "unit_light": 10, "unit_heavy": 11, "unit_ram": 30, "unit_catapult": 30, "unit_snob": 35, "unit_merchant": 6 };


// verklaring XML: http: //forum.die-staemme.de/showthread.php?t=69629

// xml gebouwen etc ophalen: http://help.die-staemme.de/wiki/XML


//alert(localStorage);

/*ajax("interface.php?func=get_config", function (content)
{
alert(content);
}, { contentValue: false });*/

$.extend(world_data, {
	nightbonusFrom: 1,
	nightbonusTill: 7,
	smithyLevels: true,
	hasChurch: false,
	hasArchers: false,
	hasKnight: false,
	hasMilitia: false,
	speed: 1,
	unitSpeed: 1,
	farmLimit: 0,
	minFake: 0,
	coins: false
});

// Archer worlds:
world_data.number = parseInt(game_data.world.substr(2), 10);
switch (world_data.number) {
	case 2: case 3: case 4: case 6: case 7: case 8: case 9:
	case 11: case 12: case 13: case 14: case 15: case 17:
	case 18: case 19: case 20: case 21: case 22: case 23: case 25:case 26:
		if (world_data.number != 26) {
			world_data.hasArchers = true;
		}

		world_data.smithyLevels = false;
		world_data.hasKnight = true;
		world_data.coins = true;
		world_data.buildingsSize.push(["statue", [10]]);
		world_data.buildingsPoints.push(["statue", [24]]);

		// Kerkwerelden
		switch (world_data.number) {
			case 11: case 12: case 14: case 17: case 20: case 21: case 23: case 25: case 26:
				world_data.hasChurch = true;
				world_data.buildingsSize.push(["church", [5000, 7750, 12013]]);
				world_data.buildingsSize.push(["church_f", [5]]);
				world_data.buildings = ["main", "barracks", "stable", "garage", "church", "snob", "smith", "place", "statue", "market", "wood", "stone", "iron", "farm", "storage", "hide", "wall"];
				break;

			default:
				world_data.buildings = ["main", "barracks", "stable", "garage", "snob", "smith", "place", "statue", "market", "wood", "stone", "iron", "farm", "storage", "hide", "wall"];
				break;
		}
		break;
	default:
		world_data.buildings = ["main", "barracks", "stable", "garage", "snob", "smith", "place", "market", "wood", "stone", "iron", "farm", "storage", "hide", "wall"];
		break;
}

if (isNaN(world_data.number)) {
	switch (game_data.world) {
		case 'nlc1':
			world_data.maxNobleWalkingTime = 2695;
			world_data.minFake = 0.02;
			world_data.smithyLevels = false;
				world_data.hasKnight = true;
				world_data.coins = true;
				world_data.buildingsSize.push(["statue", [10]]);
				world_data.buildingsPoints.push(["statue", [24]]);
			world_data.buildings = ["main", "barracks", "stable", "garage", "snob", "smith", "place", "statue", "market", "wood", "stone", "iron", "farm", "storage", "hide", "wall"];
			break;
	}
}
else
	switch (world_data.number)
{
	case 10:
	  world_data.farmLimit = 1800;
	  world_data.minFake = 0.02;
	  world_data.maxNobleWalkingTime = 1470; // 24u30 in minuten = 42 velden
	  break;

	case 1:
		world_data.nightbonusFrom = 0;
		world_data.maxNobleWalkingTime = 35000;
		break;

	case 2:
		world_data.speed = 2;
		world_data.minFake = 0.05;
		world_data.maxNobleWalkingTime = 1225;
		break;

	case 3:
		world_data.smithyLevels = true;
		world_data.minFake = 0.05;
		world_data.maxNobleWalkingTime = 3500;
		break;

	case 4:
		world_data.speed = 1.5;
		world_data.unitSpeed = 0.66666666;
		world_data.minFake = 0.05;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 5:
		world_data.speed = 1.5;
		world_data.unitSpeed = 0.66666666;
		world_data.farmLimit = 1200;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 1470;
		break;

	case 6:
		world_data.speed = 1.5;
		world_data.unitSpeed = 0.66666666;
		world_data.minFake = 0.02;
		world_data.smithyLevels = true;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 7:
		world_data.speed = 2;
		world_data.unitSpeed = 0.5;
		world_data.minFake = 0.01;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 8:
		world_data.speed = 1.5;
		world_data.unitSpeed = 0.66666666;
		world_data.minFake = 0.01;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 9: case 11:
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 12: case 14: case 18:
		world_data.speed = 1.5;
		world_data.unitSpeed = 0.66666666;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 13: case 15:
		world_data.speed = 2;
		world_data.unitSpeed = 0.5;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 16:
		world_data.farmLimit = 2500;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 17:
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 19:
		world_data.speed = 2;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		break;

	case 20:
		world_data.minFake = 0.01;
		world_data.maxNobleWalkingTime = 7000;
		break;

	case 21:
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 7000;
		world_data.hasMilitia = true;
		break;

	case 22:
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		world_data.hasMilitia = true;
		break;

	case 23:
		world_data.speed = 1.5;
		world_data.unitSpeed = 0.66666666;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		world_data.hasMilitia = true;
		break;

	case 24:
		world_data.speed = 1;
		world_data.unitSpeed = 1;
		world_data.minFake = 0.05;
		world_data.maxNobleWalkingTime = 2695;
		world_data.hasMilitia = true;
		world_data.coins = false;
		break;

	case 25:
		world_data.speed = 1.25;
		world_data.unitSpeed = 0.8;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 2695;
		world_data.hasMilitia = true;
		break;
		
	case 26:
			world_data.speed = 1;
		world_data.unitSpeed = 1;
		world_data.minFake = 0.02;
		world_data.maxNobleWalkingTime = 7000;
		world_data.hasMilitia = true;
		world_data.hasKnight = true;
		world_data.smithyLevels = false;
			break;
}
world_data.hasMinFakeLimit = world_data.minFake > 0;
world_data.units_def = ["spear", "sword", "heavy"];
world_data.units_off = ["axe", "light", "heavy"];
if (!world_data.hasArchers && !world_data.hasKnight) {
	world_data.unitsPositionSize = [1, 1, 1, 2, 4, 6, 5, 8, 100];
	world_data.units = ["spear", "sword", "axe", "spy", "light", "heavy", "ram", "catapult", "snob"];
} else {
	world_data.units = ["spear", "sword", "axe"];
	world_data.unitsPositionSize = [1, 1, 1];
	if (world_data.hasArchers) {
		world_data.units_off.push("marcher");
		world_data.units_def.push("archer");
		$.extend(world_data.unitsSize, { "unit_archer": 1 }, { "unit_marcher": 5 });
		$.extend(world_data.unitsSpeed, { "unit_archer": 18 }, { "unit_marcher": 10 });
		world_data.units.push("archer");
		world_data.unitsPositionSize.push(1);
	}
	world_data.units.push("spy");
	world_data.unitsPositionSize.push(2);
	world_data.units.push("light");
	world_data.unitsPositionSize.push(4);
	if (world_data.hasArchers) {
		world_data.units.push("marcher");
		world_data.unitsPositionSize.push(5);
	}
	world_data.units.push("heavy");
	world_data.unitsPositionSize.push(6);
	world_data.units.push("ram");
	world_data.unitsPositionSize.push(5);
	world_data.units.push("catapult");
	world_data.unitsPositionSize.push(8);
	if (world_data.hasKnight) {
		$.extend(world_data.unitsSize, { "unit_knight": 10 });
		$.extend(world_data.unitsSpeed, { "unit_knight": 10 });
		world_data.units.push("knight");
		world_data.unitsPositionSize.push(10);
	}
	world_data.units.push("snob");
	world_data.unitsPositionSize.push(100);

	//world_data.unitsPositionSize = [1, 1, 1, 1, 2, 4, 5, 6, 5, 8, 10, 100];
	//world_data.units = ["spear", "sword", "axe", "archer", "spy", "light", "marcher", "heavy", "ram", "catapult", "knight", "snob"];
}

if (Math.round(world_data.speed * world_data.unitSpeed) != 1) {
	var speedModifier = Math.round(world_data.speed * world_data.unitSpeed);
	$.each(world_data.unitsSpeed, function (index, value) {
		world_data.unitsSpeed[index] = world_data.unitsSpeed[index] / speedModifier;
	});
}