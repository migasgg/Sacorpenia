const cName = document.querySelector("#name");
const massaCorporal = document.querySelector("#massaCorporal");
const etnia = document.querySelector("#etnia");
const est = document.querySelector("#est");
const sexo = document.querySelector("#sexo");
const idade = document.querySelector("#idade");
const btnPrint = document.querySelector("#imprimir");

btnPrint.addEventListener("click", massaMuscularEsqueletica);

function massaMuscularEsqueletica(event) {
  // event.preventDefault()

  const cNameValue = cName.value;
  const altura = est.value.split("");
  altura.splice(1, 0, ".");
  const massaCorporalValue = Number(massaCorporal.value);
  const alturaValue = Number(altura.join(""));
  const idadeValue = Number(idade.value);
  const sexoValue = Number(sexo.value);
  const etniaValue = Number(etnia.value);

  const mme = (
    0.244 * massaCorporalValue +
    7.8 * alturaValue -
    (0.098 * idadeValue + (6.6 * sexoValue + etniaValue)) -
    3.3
  ).toFixed(2);

  function femaleOrMale(sex) {
    if (sex === 0) {
      return "(x)F ( )M";
    }
    if (sex === 1) {
      return "( )F (x)M";
    }
  }

  const day = new Date();

  const win = window.open("print.html");

  const html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="printStyle.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <title>Document</title>
    </head>
    <body>
      <header>
        <div>
          <h2>Esp. Jancinẽia Oliveira</h2>
          <strong>Cref: 0486-G/PI</strong>
        </div>
        <div>
          <h2>Dr Jancineide Carvalho</h2>
          <strong>Cref: 0274-G/PI</strong>
        </div>
      </header>
      <main>
        <article>
          <h1>DIAGNÓSTICO DE SARCOPENIA</h1>
          <div class="dados">
            <div>
              <p>NOME: <span>${cNameValue.toUpperCase()}</span></p>
              <p>IDADE: <span>${idadeValue}</span> ANOS</p>
            </div>
            <div>
              <p>SEXO: <span>${femaleOrMale(sexoValue)}</span></p>
              <p>DATA: <span>${day.getDate()} / ${day.getMonth()} / ${day.getFullYear()}</span></p>
            </div>
          </div>
          <div class="coleta">
            <div>
              <table>
                <caption>
                  Resultados da Coleta
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Coleta de Dados</th>
                    <th scope="col">Valores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sarc-Calf (somatório dos pontos - referência >= 11)</td>
                    <td>16</td>
                  </tr>
                  <tr>
                    <td>Test TSL (>= 15 seg)</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <td>Bioimpedância (MMEA)</td>
                    <td>${mme}</td>
                  </tr>
                  <tr>
                    <td>Test TUG (>= 20 s)</td>
                    <td>9,8</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <img src="sarcopenia.png" />
            </div>
          </div>
        </article>
        <article class="interpretracao">
          <h2>INTERPRETAÇÃO DOS TESTES</h2>
          <p>Interpretação do Sarc-Calf: Sarcopenia Positiva</p>
          <p>Teste TSL: Fraqueza muscular</p>
          <p>Bioimpedância: Massa muscular normal</p>
          <p>Test TUG (tempo em segundos): Velocidade de caminhada normal</p>
        </article>
        <article class="resultado">
          <h2>RESULTADO FINAL</h2>
          <p>
            Sarcopenia positiva e indicação de treinamento de força progressiva
          </p>
        </article>
      </main>
      <footer>
        <div><img src="logo.png" /></div>
        <div class="loc">
          <p>Espaço MEDFISIO</p>
          <p>Rua Professor Joca Vieira, 1400</p>
          <p>(86) 9 9803-7584</p>
          <p>@bemestar_saudeintegral</p>
          <p>Bairro Fátima, 64049-440</p>
        </div>
      </footer>
    </body>
  </html>`;

  win.document.write(html);
  // setTimeout(win.print(), 30000);
}
