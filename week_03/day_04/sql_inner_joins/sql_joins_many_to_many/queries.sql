SELECT victims.name AS "Victim Name", zombies.name AS "Zombie Name", bitings.infected_on AS "Infected On" FROM victims
INNER JOIN bitings
ON bitings.victim_id = victims.id
INNER JOIN zombies
ON zombies.id = bitings.zombie_id;