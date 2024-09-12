/*        
Eres el resonsable del pastel de cumpleaños de un niño. Has decidido que el pastel tendra una vela por cada año de su edad 
total. Solo podran soplar las velas mas altas. Cuenta cuantas velas son las mas altas.

velasMasAltas(candles):
input: Todas las velas
output: Las velas mas altas

masAlta <-- -1 
contador <-- 0

FOR vela IN candles DO:
    IF vela > masAlta
        masAlta <-- vela
        contador <-- 1
    ELSE vela = masAlta
        contador <-- contador + 1 
            RETURN contador
*/

function velasMasAltas(candles){
    let masAlta = -1;
    let contador = 0;
    if (vela > masAlta){
        masAlta = vela;
        contador = 1;
    }else if (vela == masAlta){
        contador ++;
    }

    return contador;
}

let velas = [3, 4, 6, 7, 8, 8, 9, 4];
console.log(velasMasAltas(velas));

