### **ALUNA GISLIANE COSTA PEREIRA**


### Exercício 1
**a)**  
Exclui a coluna salário 

**b)**  
Altera a coluna gender para sex e com 6 caracteres

**c)**
Mudqa o número de caracteres da coluna gender para 255 

**d)**
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
**a)**
```
UPDATE Actor
SET 
	name = "Wagner Moura",
	birth_date = "1976-06-27"
WHERE id = "003";
```
**b)**
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```

**c)**
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

**d)** 
```
UPDATE Actor
SET 
	name = "Carla Perez",
	birth_date = "1977-11-16",
    salary = 800000,
    gender = "female"
WHERE id = "005";
```

**e)**
Não afetou nenhuma linha e respondeu "*0 linha (s) afetada (s) Linhas correspondidas: 0 Alteradas: 0 Avisos: 0*". Ou seja, não alterou porque não achou nenhuma correspondência


### Exercício 3
**a)**
```
DELETE FROM Actor 
WHERE name = "Fernanda Montenegro";
```

**b)**
```
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000
```

### Exercício 4
**a)** 
```
SELECT MAX(salary) FROM Actor
```


**b)**
```
SELECT MIN(salary) FROM Actor
WHERE gender = "female"
```

**c)**
```
SELECT COUNT(*) FROM Actor 
WHERE gender = "female"
```

**d)**
```
SELECT SUM(salary) FROM Actor
```

### Exercício 5
**a)**
Dentro da Tabela Actor ele agrupor por Gênero e contou quantas pessaos tinham em cada um. 


**b)**
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```

**c)** 
```
SELECT * FROM Actor
ORDER BY salary ASC;
```

**d)**
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```
 
 **e)**
 ```
 SELECT AVG(salary), gender FROM Actor
GROUP BY gender
```

### Exercício 6
**a)**
```
ALTER TABLE Movie 
ADD playing_limit_date DATE;
```
**b)**
```
ALTER TABLE Movie 
CHANGE rating rating FLOAT;
```
**c)**
```
UPDATE Movie
SET playing_limit_date = "2020-11-02"
WHERE id = "004"

UPDATE Movie
SET playing_limit_date = "2020-05-15"
WHERE id = "002"
```
**d)**
```
DELETE FROM Movie 
WHERE id = "001"

UPDATE Movie
SET synopsis = "Teste de Sinopse"
WHERE id = "001";
```
Não afetou nenhuma linha e respondeu "*0 linha (s) afetada (s) Linhas correspondidas: 0 Alteradas: 0 Avisos: 0*". Não afetou porque o id 001 não existe mais. 


### Exercício 7
**a)**
```
SELECT COUNT(*) FROM Movie 
WHERE rating > 7.5 AND playing_limit_date > current_date();
```
**b)**
```
SELECT AVG(rating) FROM Movie;
```
**c)**
```
SELECT COUNT(*) FROM Movie 
WHERE playing_limit_date > current_date();
```
**d)**
```
SELECT COUNT(*) FROM Movie 
WHERE release_Date > current_date();
```
**e)**
```
SELECT MAX(rating) FROM Movie 
```

**f)**
```
SELECT MIN(rating) FROM Movie 
```

### Exercício 8
**a)**
```
SELECT * FROM Movie 
ORDER BY title asc;
```
**b)**
```
SELECT * FROM Movie 
ORDER BY title LIMIT 5;
```

**c)** 
```
SELECT * FROM Movie 
WHERE release_date < CURDATE()  AND playing_limit_date > current_date()
ORDER BY release_date DESC 
LIMIT 3;
```
**d)**
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```

