const puppeteer = require('puppeteer-core')
const UserAgent = require('user-agents')

const Comment = async ()=>{
    const navegator = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe"
    })
    const page = await navegator.newPage()
    const userAgent = new UserAgent();
    await page.setUserAgent(userAgent.toString())
    await page.goto("https://www.instagram.com/")
    await page.waitForTimeout(35000)
    await page.goto("https://www.instagram.com/p/Cg2XTNuBNjG/")
    let marc1 = ["@willian_reis18 @william_fabianojd","@_bubble_styles @noemioliveira295","@noemioliveira295 @william_fabianojd","@willian_reis18 @_bubble_styles","@_bubble_styles @noemioliveira295","@william_fabianojd @_bubble_styles","@nathalya.ayal @lilianmarinho27","@susihahns @sousajayyene","@laneoliver29 @soucleison_","@laristefannysz @isabelinha168","@isabelinha168 @estevaoeloiza","@lisangelafbrandao @eduardapedrosa25","@helenasantana01 @letyoficial31","@xxbruna30 @queel_lovatic","@jacira6506 @maniafemininaa_makeup","@bgmslmg @silva_sefa","@ribeirojack2 @flayaparecida","@123railane @leslye.medeiros","@nana85silva @loira_paulinha","@danii_silva2 @maria200888501","@samarasyllva @heidyalvesda","@akillanathiely.limaa @claudiadanielada","@kayla_freire @danielelagassigonzaga","@helia.silva23 @eleide.souza","@danielacandidomakeup @marciateixxeira","@lucianaewan @niicole.ssantos","@amandacris747    @edinalva_1010","@alanna_mano @vivi_sl28"]
    let temp = []
    for(let x = 30000 ; x < 60000; x++){
        temp.push(x)
    }

    for(let x = 0 ; x < 10000; x++){
        console.log(x)
        let tempo = temp[Math.floor(Math.random() * temp.length)]
        await page.waitForSelector('[aria-label="Adicione um comentário..."]')
        await page.type('[aria-label="Adicione um comentário..."]', `Vamo la ganha ${x} ` + marc1[Math.floor(Math.random() * marc1.length)])
        console.log("tempo sorteado " + tempo)
        await page.waitForTimeout(tempo)
        await page.waitForSelector('[type="submit"]')
        await page.click('[type="submit"]')
        await page.waitForTimeout(5000)
    }
    
}

Comment()