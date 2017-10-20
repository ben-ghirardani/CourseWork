-- SELECT lightsabers.colour FROM lightsabers;


-- declare everything you want to SELECT first, ie. table name / column name, table name / column name, then where it comes from, including any joins. Last is the Primary Key / Foreign Key match. If those 2 match it's displayed. ON is an essential part of INNER JOIN.

-- SELECT jedi.name, lightsabers.colour FROM jedi
-- INNER JOIN lightsabers
-- ON jedi.id = lightsabers.owner_id;



-- LEFT JOIN says that you are favouring the LEFT table, I want to see everything on the left table regardless of a match.

SELECT jedi.*, lightsabers.* FROM jedi
LEFT JOIN lightsabers
ON jedi.id = lightsabers.owner_id;