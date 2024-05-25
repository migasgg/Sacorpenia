const cName = document.querySelector("#name");
const massaCorporal = document.querySelector("#massaCorporal");
const etnia = document.querySelector("#etnia");
const est = document.querySelector("#est");
const sexo = document.querySelector("#sexo");
const idade = document.querySelector("#idade");
const carregar = document.querySelector("#carregar");
const atravessar = document.querySelector("#atravessar");
const levantar = document.querySelector("#levantar");
const subir = document.querySelector("#subir");
const cair = document.querySelector("#cair");
const CP = document.querySelector("#CP");
const dinamometro = document.querySelector("#dinamometro")
const tsl = document.querySelector("#tsl")
const tug = document.querySelector("#tug")
const gordura = document.querySelector("#gordura")
const aec = document.querySelector("#aec")
const qualidadeGordura = document.querySelector("#qualidadeGordura")
const nivelHidratacao = document.querySelector("#nivelHidratacao")

const btnPrint = document.querySelector("#imprimir");

btnPrint.addEventListener("click", massaMuscularEsqueletica);

function massaMuscularEsqueletica(event) {
  event.preventDefault();

  const cNameValue = cName.value;
  const altura = est.value.split("");
  altura.splice(1, 0, ".");
  const massaCorporalValue = Number(massaCorporal.value);
  const alturaValue = Number(altura.join(""));
  const idadeValue = Number(idade.value);
  const sexoValue = Number(sexo.value);
  const etniaValue = Number(etnia.value);
  const gorduraValue = Number(gordura.value)
  const aecValue = Number(aec.value)
  const qualidadeGorduraValue = qualidadeGordura.value
  const nivelHidratacaoValue = nivelHidratacao.value

  const carregarValue = Number(carregar.value);
  const atravessarValue = Number(atravessar.value);
  const levantarValue = Number(levantar.value);
  const subirValue = Number(subir.value);
  const cairValue = Number(cair.value);
  const CPValue = Number(CP.value);
  const dinamometroValue = Number(dinamometro.value)
  const tslValue = Number(tsl.value)
  const tugValue = Number(tug.value)
  
  const CPponto = () => {
    if (sexoValue === 1) {
      if (CPValue <= 34) return 10;
      else return 0;
    } else {
      if (CPValue <= 33) return 10;
      else return 0;
    }
  };

  const dinamometroForca = () => {
    if (sexoValue === 1) {
      if (dinamometroValue < 27) return "Fraqueza muscular"
      else return testeSentarELevantar()
    }
    if (sexoValue === 0) {
      if (dinamometroValue < 16) return "Fraqueza muscular"
      else return testeSentarELevantar()
    }
  };

  const testeSentarELevantar = () => {
    if (tslValue > 15) return "Fraqueza muscular"
    else return "Força muscular normal"
  }


  function diagnosticoSarcopenia() {
    const soma =
      carregarValue +
      atravessarValue +
      levantarValue +
      subirValue +
      cairValue +
      CPponto();
    return soma;
  }

  const sarcCalfInterpretacao = () => {
    if (diagnosticoSarcopenia() >= 11) return "Sarcopenia Positiva"
    else return "Sarcopenia Negativa"
  }

  const caminhadaInterpretacao = () => {
    if (tugValue < 12.4) return "Caminhada lenta"
    else return "caminhada normal"
  }

  const mme = (
    0.244 * massaCorporalValue +
    7.8 * alturaValue +
    6.6 * sexoValue -
    0.098 * idadeValue +
    (etniaValue - 3.3)
  ).toFixed(2);

  const immea = (Number(mme) / (alturaValue ** 2)).toFixed(2)

  function femaleOrMale(sex) {
    if (sex === 0) return "(x)F ( )M";
    if (sex === 1) return "( )F (x)M";
  }

  const gorduraMin = gorduraValue / 100

  function gorduraEmKg() {
    return (massaCorporalValue * gorduraMin).toFixed(2)
  }

  function bioimpedanciaInterpretacao() {
    if (sexoValue === 1) {
      if (immea > 8.9) return "Baixa massa muscular"
      else return "Massa muscular normal"
    } else {
      if (immea < 6.4) return "Baixa massa muscular"
      else return "Massa muscular normal"
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
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
      <title>${cNameValue}</title>
    </head>
    <body>
      <header>
        <div>
          <h2>Esp. Jancinẽia Oliveira</h2>
          <strong>Cref: 0486-G/PI</strong>
        </div>
        <div>
          <h2>Dra. Jancineide Carvalho</h2>
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
              <p>DATA: <span>${day.getDate()} / ${day.getMonth() + 1} / ${day.getFullYear()}</span></p>
            </div>
          </div>
          <div class="coleta">
            <div>
              <table>
                <caption>
                Analise de força muscular e composição corporal
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Coleta de Dados</th>
                    <th scope="col">Valores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sarc-Calf </td>
                    <td>${diagnosticoSarcopenia()}</td>
                  </tr>
                  <tr>
                    <td>Dinamômetro </td>
                    <td>${dinamometroValue}kg</td>
                  </tr>
                  <tr>
                    <td>TSL</td>
                    <td>${tslValue}s</td>
                  </tr>
                  <tr>
                    <td>Bioimpedância (IMMEA)</td>
                    <td>${immea}kg/m²</td>
                  </tr>
                  <tr>
                    <td>Test TUG</td>
                    <td>${tugValue}m/s</td>
                  </tr>
                  <tr>
                    <td>Gordura</td>
                    <td>${gorduraEmKg()}Kg</td>
                  </tr>
                  <tr>
                    <td>Taxa de AEC</td>
                    <td>${aecValue}%</td>
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
          <p>Interpretação do Sarc-Calf: ${sarcCalfInterpretacao()}</p>
          <p>TSL / Dinamômetro: ${dinamometroForca()}</p>
          <p>Bioimpedância: ${bioimpedanciaInterpretacao()}</p>
          <p>Test TUG: ${caminhadaInterpretacao()}</p>
          <p>Gordura corporal: ${qualidadeGorduraValue}</p>
          <p>Taxa de AEC: ${nivelHidratacaoValue}</p> 
        </article>
        <article class="resultado">
          <h2>RESULTADO FINAL</h2>
          <p>
            <input type="text" id="input" value="Sarcopenia positiva e indicação de treinamento de força progressiva" >
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
  console.log(dinamometroForca());
}
