### **ALUNA GISLIANE COSTA PEREIRA**


### Exercício 1

```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);
```
**a)**  
VARCHAR - uma string e neste caso com no máximo 255 caracteres e outro com 6 caracteres
PRIMARY KEY - chave única para cada item
DATE - Comando que cria data no formato YYYY-MM-DD
NOT NUll - não aceta valores nulos
    
**b)** 
O SHOW DATABASES aparece a informação do Schema, já o SHOW TABLES mostra as tabelas que temos no nosso banco,

**c)** 
O DESCRIBE ACTOR mostra as caratcterísticas da Tabeça ator: quais são as colunas, o tipo de cada, se aceita ou não nulo...



### Exercício 2
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

**a)**
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

**b)** 
*Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'* - Este erro ocorre poerque a chave primária é exclusiva de cada linha, não pode se repetir.

**c)** 
*Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1* - Ocorre porque eu coloquei na primeira linha 3 parâmetros e passei 5. 
Código correto:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
 VALUES(
   "003", 
   "Fernanda Montenegro",
   300000,
   "1929-10-19", 
   "female"
 );
 ```
 
 **d)** 
 *Código de erro: 1364. O campo 'name' não tem um valor padrão* - - Ocorreu este erro porque não passei o valor nome e ele não pode ser nulo
 Código correto:
 ```
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Antonio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

 **e)**
 *Código do erro: 1292. Valor incorreto da data: '1950' para a coluna 'birth_date' na linha 1* - - Ocorreu este erro porque o valor birth_date deve ser uma string
 Código correto:
 ```
 INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

 **f)**
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Torres",
  400000,
  "1965-09-15", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Flávio Migliaccio",
  0,
  "1934-08-26", 
  "male"
);
```


### Exercício 3

**a)**
```
SELECT id, name, salary, birth_date 
from Actor 
WHERE gender = "female";
```

**b)**
```
SELECT salary 
from Actor 
WHERE name IN ("Tony Ramos");
```

**c)**
Retornou 0 resultados. Retorna 0 porque a verificaçaõ se é válido ocorre na hora de inserir o dado, ou seja, o prórpio programa vê se o valor é válido
```
SELECT salary 
from Actor 
WHERE gender ="invalid"
```

**d)**
```
SELECT id, name, salary 
from Actor 
WHERE salary <=500000
```
 **e)**  
 *Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'*
 Este erro deu porque troquei a letra a pelo o. Foi registrado name e não nome
```
SELECT id, name 
from Actor 
WHERE id = "002"
```


### Exercício 4
**a)** 
```
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

**b)**
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

**c)**
```
SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";
```

**d)**
```
SELECT * FROM Actor
WHERE ((name LIKE "%g%" OR name LIKE "%G%") OR (name LIKE "%A%" OR name LIKE "%a%")) AND (350000 >= salary <= 900000);
```

### Exercício 5
**a)**
Nesta Query a gente coloca todas as variáveis e os seus tipos, além do se aceita nulo, se é único, etc
```
CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

**b)**
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

**c)**
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Sinopse: Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

**d)**
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Sinopse: `Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.`",
  "2017-11-02", 
  8
);
```

**e)**
```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "	O Filme da Minha Vida",
  "O jovem Tony  decide retornar a Remanso, Serra Gaúcha, sua cidade natal. Ao chegar, ele descobre que Nicolas, seu pai, voltou para França alegando sentir falta dos amigos e do país de origem. Tony acaba tornando-se professor, e se vê em meio aos conflitos e inexperiências juvenis.",
  "2017-08-03", 
  7
);
```

### Exercício 6
**a)**
```
SELECT id, title, rating
from Movie
WHERE id="001";
```

**b)**
```
SELECT *
from Movie
where title ="Dona Flor e Seus Dois Maridos"
```

**c)**
```
SELECT *
from Movie
WHERE release_date <= "2020-07-06";
```

**d)**
```
SELECT *
from Movie
WHERE release_date <= "2020-07-06" AND (title LIKE "%mãe%" OR synopsis LIKE "%mãe%") AND rating >7;
```









