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

### Exercício 4
**a)**
Dentro da Tabela Actor ele agrupor por Gênero e contou quantas pessaos tinham em cada um. 


**b)**
```
SELECT id, name FROM Actor
ORDER BY name DESC;
```