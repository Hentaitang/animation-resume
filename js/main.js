var result = `/*
 * 面试官你好，我是林智兴
 * 我将以动画的形式介绍一下我自己
 * 只用文字介绍就太单调了
 * 我就用代码来介绍吧
 * 首先准备一些样式
 */

*{
    transition: all 1s;
}

html{
    background: rgb(222,222,222);
}

#pre{
    background-color: #EEEEEE;
    border: 1px solid #AAAAAA;
    padding: 15px;
    
}

/*
 * 现在我加一下代码高亮，让你看起来清晰些
 */

.token.comment{
    color: slategray;
}

.token.selector{
    color: #690;
}

.token.punctuation {
    color: #999;
}

.token.property{
    color: #905;
}

.token.function{
    color: #DD4A68;
}

/* 现在我要开始介绍一下我自己 */
`

var result2 = `
/* 给我腾出点空间 */

#pre{
    width: 30%;
    height: 90vh;
}

/* 准备一张白纸 */

#newPaper{
    position: fixed;
    top: 15px;
    right: 15px;
    width: 65%;
    height: 96vh;
    background-color: white;
    border: 1px solid #AAAAAA;
}

/* 这样我就可以在白纸上写字了，请看右边 */
`
var result3 = `
# 自我介绍
---
我叫 林智兴 1994 年 10 月出生 长春工程学院毕业 自学前端半年 希望应聘前端开发岗位

# 技能介绍
---
熟悉 JavaScript CSS

# 项目介绍
---
* XXX 轮播
* XXX 简历
* XXX 画板

# 联系方式
---
* QQ xxxxxxxx
* Email xxxxxxxx
* 手机 xxxxxxx
`
var result4 = `
/* 接下来我要引用一个优秀的库 marked.js
 * 把 Markdown 文本变成 HTML
 */
`
var result5 = `
/* 整理一下我的简历，让它变得好看一些 */

#newPaper{
    padding: 20px;
}

#newPaper > ul{
    padding-left: 30px;
}
`

writeCode('', result, ()=>{
    createPaper(()=>{
        writeCode(result, result2, ()=>{
            writeMarkDown(result3, ()=>{
                writeCode(result+result2, result4, ()=>{
                    MtoH(()=>{
                        writeCode(result+result2+result4, result5)
                    })
                })
            })
        })
    })
})

function createPaper(callback) {
    var paper = document.createElement('pre')
    paper.id = 'newPaper'
    document.body.appendChild(paper)
    callback()
}

function writeCode(preCode, code, callback) {
    var pre = document.querySelector('#pre')
    var styleTag = document.querySelector('#styleTag')
    var n = 0
    pre.innerHTML = preCode || ''
    var id = setInterval(() => {
        n += 1
        pre.innerHTML = Prism.highlight(preCode + code.slice(0, n), Prism.languages.css, 'css')
        styleTag.innerHTML = preCode + code.slice(0, n)
        pre.scrollTop = pre.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            if(callback) callback()
        }
    }, 0)
}

function writeMarkDown(code, callback) {
    var newPaper = document.querySelector('#newPaper')
    var n = 0
    var id = setInterval(() => {
        n += 1
        newPaper.innerHTML = code.slice(0, n)
        newPaper.scrollTop = newPaper.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            if(callback) callback()
        }
    }, 0)
}

function MtoH(callback){
    var newPaper = document.querySelector('#newPaper')
    newPaper.innerHTML = marked(newPaper.innerText)
    callback()
}