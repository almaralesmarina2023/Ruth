import { Injectable } from '@angular/core';
import { Receta } from './receta-clase';

@Injectable({
  providedIn: 'root'
})
export class InfoRecetaService {
  ListaRecetas:Array<Receta>=[];


  constructor() { 
    
    this.ListaRecetas.push(new Receta("Pizza","./assets/pizza.jpg",
    [
    "1. Combina el agua, la levadura, el azúcar y la sal en un tazón pequeño.",
    "2. Deja reposar durante 5 minutos o hasta que la mezcla comience a hacer espuma.",
    "3. Agrega la harina y el aceite de oliva y mezcla hasta que la masa esté suave y elástica.",
    "4. Coloca la masa en un tazón engrasado y cúbrelo con una toalla húmeda. Deja reposar durante 1 hora o hasta que la masa duplique su tamaño.",
    "5. Tritura los tomates pelados en una licuadora o procesador de alimentos.",
    "6. Calienta el aceite de oliva en una sartén a fuego medio.",
    "7. Agrega los tomates triturados, la sal, el azúcar, el orégano y la albahaca.",
    "8. Cocina a fuego lento durante 30 minutos o hasta que la salsa espese.",
    "9. Precalienta el horno a 450°F (230°C).",
    "10. Estira la masa de pizza en una bandeja para hornear.",
    "11. Agrega la salsa de pizza, el queso rallado y los ingredientes de cobertura.",
    "12. Hornea durante 15-20 minutos o hasta que la pizza esté dorada y crujiente."]
  ,"★★★★",
    [['Harina para pan', '3 1/2 tazas'],
    ['Agua tibia', '1 1/2 tazas'],
    ['Levadura seca activa', '1 paquete (2 1/4 cucharaditas)'],
    ['Aceite de oliva', '2 cucharadas'],
    ['Sal', '2 cucharaditas'],
    ['Azúcar', '1 cucharadita'],
    ['Tomates pelados', '1 lata'],
    ['Aceite de oliva', '1 cucharada'],
    ['Sal', '1 cucharadita'],
    ['Azúcar', '1 cucharadita'],
    ['Orégano seco', '1/2 cucharadita'],
    ['Albahaca seca', '1/2 cucharadita'],
    ['Queso rallado', 'al gusto'],
    ['Ingredientes de cobertura', 'al gusto']]));

    this.ListaRecetas.push(new Receta("Empanadas","./assets/empanada.jpg", 

    ["paso 1: Preparar la masa de pizza",
    "1. Prepara la masa de pizza mezclando la harina, el agua tibia, la levadura seca activa, el aceite de oliva, la sal y el azúcar. Amasa hasta que la masa esté suave y elástica. Deja reposar durante 1 hora o hasta que la masa duplique su tamaño.",
    
    "paso 2: Preparar la salsa de pizza",
    "1. Prepara la salsa de pizza triturando los tomates pelados en una licuadora o procesador de alimentos. Calienta el aceite de oliva en una sartén a fuego medio. Agrega los tomates triturados, la sal, el azúcar, el orégano y la albahaca. Cocina a fuego lento durante 30 minutos o hasta que la salsa espese.",
    
    "paso 3: Armar la pizza",
    "1. Precalienta el horno a 450°F (230°C).",
    "2. Estira la masa de pizza en una bandeja para hornear. Agrega la salsa de pizza, el queso rallado y los ingredientes de cobertura.",
    "3. Hornea durante 15-20 minutos o hasta que la pizza esté dorada y crujiente."]
    
    ,"★★★★★",
    [['Harina para pan', '3 1/2 tazas'],
    ['Agua tibia', '1 1/2 tazas'],
    ['Levadura seca activa', '1 paquete (2 1/4 cucharaditas)'],
    ['Aceite de oliva', '2 cucharadas'],
    ['Sal', '2 cucharaditas'],
    ['Azúcar', '1 cucharadita'],
    ['Tomates pelados', '1 lata'],
    ['Aceite de oliva', '1 cucharada'],
    ['Sal', '1 cucharadita'],
    ['Azúcar', '1 cucharadita'],
    ['Orégano seco', '1/2 cucharadita'],
    ['Albahaca seca', '1/2 cucharadita'],
    ['Queso rallado', 'al gusto'],
    ['Ingredientes de cobertura', 'al gusto']]));
    
   
    this.ListaRecetas.push(new Receta("Quesadillas","./assets/Quesadillas.jpg",

    ["paso 1: Calentar una sartén grande a fuego medio-alto.",
    "2. Unta una tortilla con los frijoles refritos y coloca una rebanada de jamón encima.",
    "3. Espolvorea con queso cheddar y cubre con otra tortilla.",
    "4. Cocina durante 2-3 minutos por cada lado o hasta que el queso se derrita y la tortilla esté dorada y crujiente.",
    "5. Repite con las tortillas restantes.",
    "6. Sirve con pico de gallo, crema agria, aguacate y cilantro."]
    ,"★★",
    [['Tortillas de harina', '12 (6 pulgadas, cantidad dividida)'],
    ['Frijoles refritos', '1 lata (15.5 oz)'],
    ['Jamón cocido al horno OSCAR MAYER Baked Cooked Ham', '6 rebanadas'],
    ['Queso cheddar desmenuzado KRAFT Shredded Cheddar Cheese', '1 ½ tazas'],
    ['Pico de gallo', '½ taza'],
    ['Crema agria BREAK STO NE\'S Sour Cream o la de KNUDSEN', '⅓ taza'],
    ['Aguacate', '1 (rebanado)'],
    ['Cilantro fresco', '3 cucharadas (picado)']]));
    
    
    this.ListaRecetas.push(new Receta("Tacos","./assets/tacos.jpg",

    ["paso 1: Picar la cebolla, los pimientos y los dientes de ajo finamente. Calentar un poco de aceite de oliva en una sartén a fuego medio.",
    "2. Agregar la cebolla y el ajo picados a la sartén y cocinar hasta que estén tiernos.",
    "3. Añadir la carne picada a la sartén y cocinar hasta que esté dorada, asegurándote de desmenuzarla con una cuchara de madera mientras se cocina.",
    "4. Agregar los pimientos picados a la sartén y cocinar por unos minutos hasta que estén tiernos.",
    "5. Incorporar el comino, el pimentón, la sal y la pimienta, y mezclar bien.",
    "6. Si decides usar frijoles refritos, puedes calentarlos en una cacerola pequeña mientras la carne se cocina.",
    "7. Calentar las tortillas de maíz en una sartén seca durante unos segundos por cada lado, o envolverlas en papel de aluminio y calentarlas en el horno durante unos minutos.",
    "8. Para armar los tacos, coloca una porción de la mezcla de carne en el centro de cada tortilla, agrega una cucharada de frijoles refritos (si estás usando), y luego añade queso rallado, lechuga, tomate, salsa picante y crema agria al gusto."]
    ,"★★★",[["carne picada", "500g"],
    ["cebolla", "1 unidad"],
    ["dientes de ajo", "2 unidades"],
    ["pimiento rojo", "1 unidad"],
    ["pimiento verde", "1 unidad"],
    ["comino en polvo", "1 cucharadita"],
    ["pimentón dulce", "1 cucharadita"],
    ["sal", "al gusto"],
    ["pimienta", "al gusto"],
    ["frijoles refritos", "1 lata (opcional)"],
    ["tortillas de maíz", "1 paquete"],
    ["aceite de oliva", "al gusto"],
    ["queso rallado", "al gusto"],
    ["lechuga picada", "al gusto"],
    ["tomate en cubitos", "al gusto"],
    ["salsa picante", "al gusto"],
    ["crema agria", "al gusto"]]));
  }
}
