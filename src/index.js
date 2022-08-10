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
    for(let x = 23000 ; x < 60000; x++){
        temp.push(x)
    }

    for(let x = 0 ; x < 10000; x++){
        for(let j = 0 ; x < 1; x++){
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

        page.goto("https://www.instagram.com/")
        await page.evaluate(()=>{
           return document.querySelectorAll('[class="_aarh"]')[0].click()
        })
        await page.waitForTimeout(23000)
        await page.goto("https://www.instagram.com/p/Cg2XTNuBNjG/")

    }
    
}

Comment()