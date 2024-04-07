const { Builder, By } = require('selenium-webdriver')
const axios = require('axios')

const coletarDados = async function() {
  let driver = await new Builder().forBrowser('chrome').build()

  try {
    await driver.manage().setTimeouts({ implicit: 10000 })
    await driver.get('https://ti.saude.rs.gov.br/dengue/painel_de_casos.html')

    let iframe = await driver.findElement(By.tagName('iframe'))
    let url_iframe = await iframe.getAttribute('src')
    
    await driver.get(url_iframe)

    let tabela = driver.findElement(By.className('tableExContainer'))
    
    await driver.actions()
        .scroll(0, 0, 0, 0, tabela)
        .perform()
    
    await driver.sleep(5000)
    
    await driver.actions()
        .scroll(0, 0, 0, 7800, tabela)
        .perform()

    await driver.sleep(2000)

    let dataDosDados = await driver.findElement(By.tagName('tspan'))
    await driver.sleep(2000)
    dataDosDados = await dataDosDados.getText()
    console.log('\n\n')
    console.log(dataDosDados)
    console.log('\n')

    let linhaSaoLeopoldo = await driver.findElement(By.css('div.row[row-index="398"]'))
    let colunas = await linhaSaoLeopoldo.findElements(By.tagName('div'))

    let dadosSaoLeopoldo = {
        notificacoes: await colunas[5].getText(),
        confirmados: await colunas[6].getText(),
        incidencia: await colunas[9].getText(),
        obitos: await colunas[12].getText()
    }
    
    console.log('Dados de São Leopoldo:')
    console.log(dadosSaoLeopoldo)


    await axios.post('http://127.0.0.1:8000/salvar-dados', {
      data_atualizacao: dataDosDados,
      dados: dadosSaoLeopoldo
    })
    .then(response => {
        console.log('Resposta do servidor:', response.data)
    })
    .catch(error => {
        console.error('Erro ao fazer a solicitação:', error)
    });
  } catch(error) {
    console.log('ERRO:')
    console.log(error)
  } finally {
    await driver.quit()
  }
}

coletarDados()
