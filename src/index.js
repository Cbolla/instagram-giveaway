const puppeteer = require('puppeteer-core')
const UserAgent = require('user-agents')
const profiles = require("./profiles")

const marc1 = profiles.profiles

const Comment = async ()=>{
    const navegator = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    })
    const page = await navegator.newPage()
    const userAgent = new UserAgent();
    await page.setUserAgent(userAgent.toString())
    await page.goto("https://www.instagram.com/")
    await page.waitForTimeout(35000)
    await page.goto("https://www.instagram.com/p/Cg2XTNuBNjG/")
    let temp = []
    for(let x = 1000 ; x < 10000; x++){
        temp.push(x)
    }
    let tempo = temp[Math.floor(Math.random() * temp.length)]
    for(let x = 0 ; x < 10000; x++){
        for(let j = 0 ; x < 1; x++){
        console.log(x)
        
        await page.waitForSelector('[aria-label="Adicione um comentário..."]')
        await page.type('[aria-label="Adicione um comentário..."]', `ganhando R$ ${x} ` + marc1[Math.floor(Math.random() * marc1.length)])
        console.log("tempo sorteado " + tempo)
        await page.waitForTimeout(tempo)
        await page.waitForSelector('[type="submit"]')
        await page.click('[type="submit"]')
        await page.waitForTimeout(5000)
        }
        page.goto("https://www.instagram.com/")
        await page.waitForTimeout(10000)
        
        try {
            await page.waitForSelector('[class="_a9-- _a9_1"]')
            await page.click('[class="_a9-- _a9_1"]')
            await page.evaluate(()=>{
                document.querySelectorAll('[class="_aarh"]')[1].click()
            })
        } catch (error) {
            await page.evaluate(()=>{
                document.querySelectorAll('[class="_aarh"]')[1].click()
            })
        }

        await page.waitForTimeout(2300)
        await page.waitForSelector('[aria-label="Fechar"]')
        await page.click('[aria-label="Fechar"]')
        await page.waitForSelector('[class="_aaav"]')
        await page.click('[class="_aaav"]')
        page.goto("https://www.instagram.com/p/Cg2XTNuBNjG/")
        await page.goto("https://www.instagram.com/p/Cg2XTNuBNjG/")

    }
    
}

Comment()