const cookbooks = [
    {
        "title": "Sabores de México",
        "price": 25.99,
        "genre": "Cocina Mexicana",
        "recipes": ["Tacos al Pastor", "Guacamole", "Enchiladas Verdes", "Pozole"]
      },
      {
        "title": "Delicias Italianas",
        "price": 30.99,
        "genre": "Cocina Italiana",
        "recipes": ["Pizza Margarita", "Tiramisú", "Lasagna de Carne", "Risotto al Funghi"]
      },
      {
        "title": "El Arte del Pan",
        "price": 28.50,
        "genre": "Panadería",
        "recipes": ["Baguette Francesa", "Pan de Masa Madre", "Croissants", "Pan de Ajo"]
      },
      {
        "title": "Secretos de la Parrilla",
        "price": 32.99,
        "genre": "Parrilla",
        "recipes": ["Asado de Tira", "Choripán", "Parrillada de Verduras", "Costillas BBQ"]
      }
]

const recipes = [
        {
          "name": "Tacos al Pastor",
          "cookbook": "Sabores de México",
          "ingredients": "2 lbs de carne de cerdo, 4 chiles guajillos, 2 chiles de árbol, 1/4 de taza de vinagre blanco, 2 dientes de ajo, 1/4 de piña, sal al gusto",
          "steps": ["Marinar la carne con chiles, ajo, vinagre y sal por 4 horas", "Asar la carne junto con la piña", "Servir en tortillas de maíz con cilantro y cebolla picados"]
        },
        {
          "name": "Guacamole",
          "cookbook": "Sabores de México",
          "ingredients": "3 aguacates maduros, 1 tomate, 1/2 cebolla, cilantro, jugo de 1 limón, sal y pimienta al gusto",
          "steps": ["Triturar los aguacates en un molcajete", "Agregar tomate, cebolla y cilantro picados", "Sazonar con limón, sal y pimienta"]
        },
        {
          "name": "Enchiladas Verdes",
          "cookbook": "Sabores de México",
          "ingredients": "12 tortillas de maíz, 500g de pechuga de pollo cocida y deshebrada, 1 litro de salsa verde, 200g de queso rallado, 1/2 cebolla picada",
          "steps": ["Rellenar las tortillas con pollo", "Bañar con salsa verde", "Espolvorear queso y cebolla", "Hornear a 180°C por 10 minutos"]
        },
        {
          "name": "Pozole",
          "cookbook": "Sabores de México",
          "ingredients": "1 kg de maíz para pozole, 500g de carne de cerdo, 5 litros de agua, 1 cebolla, 5 dientes de ajo, lechuga, rábanos, orégano, chile en polvo, sal al gusto",
          "steps": ["Cocer el maíz y la carne en agua con cebolla y ajo", "Servir con lechuga, rábanos, orégano y chile"]
        },
        {
          "name": "Pizza Margarita",
          "cookbook": "Delicias Italianas",
          "ingredients": "Masa para pizza, salsa de tomate, 200g de mozzarella, hojas de albahaca fresca, aceite de oliva",
          "steps": ["Extender la masa", "Agregar salsa de tomate y mozzarella", "Hornear a 220°C por 15 minutos", "Decorar con albahaca y un chorrito de aceite de oliva"]
        },
        {
          "name": "Tiramisú",
          "cookbook": "Delicias Italianas",
          "ingredients": "1 paquete de bizcochos de soletilla, 500g de mascarpone, café fuerte, cacao en polvo",
          "steps": ["Mojar los bizcochos en café", "Mezclar mascarpone y colocar una capa sobre los bizcochos", "Repetir capas y refrigerar", "Espolvorear cacao antes de servir"]
        },
        {
          "name": "Lasagna de Carne",
          "cookbook": "Delicias Italianas",
          "ingredients": "Placas de lasaña, 500g de carne picada, salsa de tomate, bechamel, queso rallado",
          "steps": ["Cocinar la carne con la salsa de tomate", "En un recipiente alternar capas de lasaña, carne y bechamel", "Cubrir con queso y hornear"]
        },
        {
          "name": "Risotto al Funghi",
          "cookbook": "Delicias Italianas",
          "ingredients": "1 taza de arroz arborio, 500g de hongos mixtos, 1 litro de caldo de pollo, 1/2 cebolla, 100g de queso parmesano, mantequilla, aceite de oliva, sal y pimienta, sal y pimienta al gusto",
          "steps": [
            "Sofreír la cebolla en aceite y un poco de mantequilla hasta que esté transparente",
            "Añadir el arroz y tostar ligeramente, asegurando que quede bien impregnado de la mezcla",
            "Incorporar los hongos y añadir el caldo gradualmente, revolviendo constantemente hasta que el arroz esté cocido pero firme",
            "Retirar del fuego, añadir mantequilla y queso parmesano, mezclar bien y servir"
          ]
        },
        {
          "name": "Baguette Francesa",
          "cookbook": "El Arte del Pan",
          "ingredients": "500g de harina, 300ml de agua, 10g de sal, 5g de levadura fresca",
          "steps": [
            "Mezclar los ingredientes y amasar hasta obtener una masa homogénea",
            "Dejar reposar la masa por 2 horas o hasta que duplique su tamaño",
            "Formar las baguettes y hacer cortes diagonales en la superficie",
            "Hornear a 240°C por 25 minutos o hasta que estén doradas"
          ]
        },
        {
          "name": "Pan de Masa Madre",
          "cookbook": "El Arte del Pan",
          "ingredients": "400g de harina, 200g de masa madre, 300ml de agua, 10g de sal",
          "steps": [
            "Mezclar todos los ingredientes y amasar hasta formar una masa elástica",
            "Dejar reposar la masa por varias horas, preferentemente durante la noche",
            "Formar el pan y dejarlo levar hasta que duplique su tamaño",
            "Hornear a 230°C por 30 minutos o hasta que suene hueco al golpearlo"
          ]
        },
        {
          "name": "Croissants",
          "cookbook": "El Arte del Pan",
          "ingredients": "500g de harina, 250ml de leche, 10g de sal, 25g de azúcar, 20g de levadura fresca, 300g de mantequilla para hojaldrar",
          "steps": [
            "Preparar la masa con harina, leche, sal, azúcar y levadura, y dejarla reposar 30 minutos",
            "Incorporar la mantequilla y realizar tres dobleces para hojaldrar, refrigerando entre cada doblez",
            "Cortar triángulos y formar los croissants, dejándolos levar hasta que dupliquen su tamaño",
            "Hornear a 200°C por 15 minutos o hasta que estén dorados"
          ]
        },
        {
          "name": "Pan de Ajo",
          "cookbook": "El Arte del Pan",
          "ingredients": "1 baguette, 100g de mantequilla, 3 dientes de ajo triturados, perejil picado, sal",
          "steps": [
            "Mezclar la mantequilla a temperatura ambiente con el ajo, perejil y sal",
            "Cortar la baguette en rebanadas sin llegar hasta el fondo",
            "Rellenar los cortes con la mezcla de mantequilla de ajo",
            "Hornear a 180°C por 10 minutos o hasta que esté dorado"
          ]
        },
        {
          "name": "Asado de Tira",
          "cookbook": "Secretos de la Parrilla",
          "ingredients": "1 kg de asado de tira, sal gruesa",
          "steps": [
            "Sazonar la carne con sal gruesa por ambos lados",
            "Asar a fuego indirecto por aproximadamente 2 horas, volteando ocasionalmente",
            "Cortar en trozos y servir caliente"
          ]
        },
        {
          "name": "Choripán",
          "cookbook": "Secretos de la Parrilla",
          "ingredients": "4 chorizos para asar, 4 panes para choripán, chimichurri",
          "steps": [
            "Asar los chorizos a fuego medio-alto hasta que estén cocidos y bien dorados",
            "Abrir los panes por la mitad y tostar ligeramente en la parrilla",
            "Servir los chorizos en los panes y añadir chimichurri al gusto"
          ]
        },
        {
          "name": "Parrillada de Verduras",
          "cookbook": "Secretos de la Parrilla",
          "ingredients": "1 berenjena, 2 zucchinis, 2 pimientos rojos, aceite de oliva, sal, pimienta",
          "steps": [
            "Cortar las verduras en rodajas o tiras",
            "Pincelar con aceite de oliva y sazonar con sal y pimienta",
            "Asar a fuego medio hasta que estén tiernas y ligeramente carbonizadas",
            "Servir caliente como acompañamiento"
          ]
        },
        {
          "name": "Costillas BBQ",
          "cookbook": "Secretos de la Parrilla",
          "ingredients": "1 kg de costillas de cerdo, salsa BBQ, sal gruesa",
          "steps": [
            "Sazonar las costillas con sal gruesa",
            "Asar a fuego indirecto durante 3-4 horas, pincelando ocasionalmente con salsa BBQ",
            "Servir caliente con más salsa BBQ al gusto"
          ]
        }
      ]

export {cookbooks, recipes}