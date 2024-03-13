// Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

// Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// ------------------------------------------------------------------- // ------------------------------------------------------------------- //

// Acenderia o primeiro interruptor e aguardaria alguns minutos para desliga-lo, após ligaria o segundo interruptor e iria entrar na primeira sala, encontrando as opções:
// opção 01: a lâmpada está acesa -> interruptor 02
// opção 02: a lâmpada está apagada e quente -> interruptor 01
// opção 03: a lâmpada está apagada e fria -> interruptor 03

// Seguindo a mesma lógica iria até a segunda sala e verificaria a próxima lâmpada: se está acesa, quente ou fria

// Dessa forma, conseguiria indetificar qual interruptor pertence a qual lâmpada com apenas duas visitas nas salas.