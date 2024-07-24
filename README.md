
# Jogo da Velha

Projeto de estudo realizado no curso da OneBitCode para treinar e aperfeiçoar o uso do DOM no Jacascript

![jogoDaVelha](https://github.com/user-attachments/assets/7777c663-a935-4711-9f8b-31b88cc69d98)






## 📖 Aprendizados

Aperfeiçoado o uso do DOM com JS, limitando os possíveis erros dos usuário como duplo clique no mesmo quadrado de jogo, função para reiniciar o jogo onde limpa todos os dados preenchidos pelos usuários e permite recomeçar e criação da função com as possíveis chances de vitórias de um dos jogadores. 

- função para verificação de vitória
```javascript
function getWinRegions() {
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
    return winRegions
}

```
## 📡 Tecnologias utilizadas

<img src="https://github.com/user-attachments/assets/5bfb3e0f-06a8-46fe-99bf-3a3a9a3ed9d2" width="25px" />  <img src="https://github.com/user-attachments/assets/b530d801-8a35-4b37-9e07-8decf480cacb" width="25px" />  <img src="https://github.com/user-attachments/assets/11388035-3088-45ae-bdb2-ebc672bdc0be" width="25px" />

## 🔎 Link para acessar

https://phlgoncalves.github.io/Tic-tac-toe_DOM_JS/ 

## 📑 Referências

[OneBitCode cursos](https://onebitcode.com/lp/) 


