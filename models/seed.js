const seed = [
  {
    name: "Canjica",
    description: "The dish is a porridge made with white de-germed whole maize kernels (canjica), cooked with milk, sugar and cinnamon until tender. Coconut and coconut milk as well as some cloves are also added, mainly in the north/northeastern variety of this recipe. Other ingredients may be added, such as peanuts and sweetened condensed milk.",
    etymology: "",
    img: "https://i.imgur.com/m4DYUfM.jpg",
    recipe: "https://i.imgur.com/lCnz9pK.png"
  },
  {
    name: "Moqueca",
    description: "Moqueca is a Brazilian seafood stew slowly cooked in a terracotta cassole. It can be made with shrimp or fish as a base with tomatoes, onions, garlic, lime and coriander. The name moqueca comes from the term mu'keka in Kimbundu language.",
    etymology: "",
    img: "https://i.imgur.com/9zkbDW9.jpg",
    recipe: "https://i.imgur.com/sce6iT1.png"
  },
  {
    name: "Pão de Queijo",
    description: "Pão de queijo is a small, baked cheese roll or cheese bun and a popular snack and breakfast food in Brazil. It is a traditional Brazilian recipe, from the state of Minas Gerais. Though its origins are uncertain, it is speculated that the recipe has existed since the eighteenth century, although it became popular around the 1950s.With the discovery of mines near Ouro Preto around 1700, 1/5 of the Brazilian population, mainly slaves, occupied a vast territory, moving from the Northeast and shifting the economic hub of the colony towards the Southeast.The mining cycle caused a huge impact and stimulus to the production of staple foods and this is when cheese bread was created. The Northeast and the nearest regions obtained beans, rice, corn and its cornmeal, pork and lard, milk and cheese. More distant areas such as the gaucho pampa, began to offer kind of beef meat. It is said that the cheese bread was offered by slave women to the farmers. At the time, wheat flour, the raw material of classical baking, was hard to find. Typical of temperate regions, the ancient cereal never combined with the warmth of the Brazilian Northeast, and was then imported from Europe to Brazil to serve the King's noblemen.Creatively, Minas Gerais cooks replaced the non-existent wheat with starch derived from cassava tuber with tupiniquins origins. Added the mass cured cheese chips, hardened and grated, and taken to the oven, turned out to like being called bread",
    etymology: "",
    img: "https://i.imgur.com/uhiSp8q.jpg",
    recipe: "https://i.imgur.com/mIMpTxh.png"
  },
  {
    name: "Quindim",
    description: "Quindim is a popular Brazilian baked dessert, made chiefly from sugar, egg yolks and ground coconut. It is a custard and usually presented as an upturned cup with a glistening surface and intensely yellow color. The mixture can also be made in a large ring mold (like a Savarin mold) in which case it is called a 'quindão' and served in slices.The heavy use of egg yolks is characteristic of many Portuguese sweets and pastries, such as the papo de anjo ('angel's double chin') and fios de ovos ('egg threads'). Their combination with coconut and sugar was probably created by African slaves in 17th century Brazilian Northeast, where coconuts were abundant and sugar (from sugarcane) was a major industry",
    etymology: "",
    img: "https://i.imgur.com/vYwSr7i.jpg",
    recipe: "https://www.allrecipes.com/recipe/190357/quindim/"
  },
  {
    name: "Açai na Tigela",
    description: "A Brazilian specialty from Pará and Amazonas. It is a dish made with the frozen and mashed fruit of the açaí palm. It is served as a smoothie in a bowl or glass, and is commonly topped with granola and banana, and then mixed with other fruits and guaraná syrup. Açaí na tigela is popular all over Brazil, but mainly in Pará, Rio de Janeiro, Florianópolis, São Paulo, Goiás and along the northeastern coast, where it is sold in kiosks lining the beach promenade and in juice bars throughout the cities. Preparation differs from region to region. Tapioca pearls are a common topping in northern Brazil. The original recipe, as eaten in the North, contains shrimp or dried fish and tapioca and is usually salty. The sweet variety, which contains granola, banana and other fruits, as well as sugar, is more common in southern parts of the country.",
    etymology: "Mid 19th century: from Portuguese açaí, from Tupi-Guarani asaí",
    img: "https://i.imgur.com/pf0FkNZ.jpg",
    recipe: "https://www.tudogostoso.com.br/receita/58910-acai-na-tigela.html"
  },
  {
    name: "Paçoca",
    description: "Paçoca is a candy made out of ground peanuts, sugar and salt. Some recipes also add flour, such as corn flour, oats flour or cassava flour. It is typical of the Brazilian Caipira cuisine and most present in the countryside of southeastern states of São Paulo and Minas Gerais, being either manufactured or home-made. It is also very common during the Festa Junina, an annual festivity that celebrates the caipira lifestyle. It is known for its distinct dry texture and sweet taste, and is one of the most beloved Brazilian candies.",
    etymology: "The name \"paçoca\" comes from the Tupi word \"posok\" (pronounced /pɔsɔk/) which means \"to crumble\" or \"to shatter,\" and is shared with the salty Paçoca dish. Both are a mix of cassava flour with other ingredients: peanut and sugar in the case of the sweet, and carne-de-sol (sun-dried-beef) for the salty dish. Both dishes seem to have originated from the same Native Brazilian customs, but have grown to be completely different products",
    img: "https://i.imgur.com/1CDsU7l.jpg",
    recipe: "https://www.oliviascuisine.com/pacoca-brazilian-peanut-candy/"
  },
  {
    name: "Papo-de-anjo",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/uZ5Wk5p.jpg",
    recipe: ""
  },
  {
    name: "Tacaca",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/gq4dcE4.jpg",
    recipe: ""
  },
  {
    name: "Brigadeiro",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/pRoIa2j.jpg",
    recipe: ""
  },
  {
    name: "Maniçoba",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/iYMWNtV.jpg",
    recipe: ""
  },
  {
    name: "Vatapa",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/lXb5xrr.jpg",
    recipe: ""
  },
  {
    name: "Barreado",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/XuJY8Ty.jpg",
    recipe: ""
  },
  {
    name: "Beijinho",
    description: "A typical Brazilian birthday party candy prepared with condensed milk, grated desiccated coconut, rolled over caster sugar or grated coconut and topped with a clove. Beijinho is the coconut version of the Brazilian brigadeiro. When rolled, it can be covered with granulated sugar or grated coconut. Traditionally a single clove is stuck in the top of the candy. It is believed that Beijinho was originally called \"Nun's kiss\" and formerly made with almonds, water and sugar.",
    etymology: "",
    img: "https://i.imgur.com/HxdL3B3.png",
    recipe: "https://www.iheartbrazil.com/beijinho-recipe-coconut-brigadeiro/"
  },
  {
    name: "Caipirinha",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/hlH5FeA.jpg",
    recipe: "https://www.thespruceeats.com/caipirinha-recipe-759290"
  },
  {
    name: "Bolinho de Chuva",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/sy2bjhz.jpg",
    recipe: ""
  },
  {
    name: "Acaraje",
    description: "",
    etymology: "",
    img: "https://i.imgur.com/Guj6pse.jpg",
    recipe: ""
  }
]

module.exports = seed
