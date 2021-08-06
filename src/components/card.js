import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardDiv = document.createElement('div')
  const headlineDiv = document.createElement('div')
  const authorDiv = document.createElement('div')
  const imgDiv = document.createElement('div')
  const authorImg = document.createElement('img')
  const authNameSpan = document.createElement('span')


  cardDiv.classList.add('card')
  headlineDiv.classList.add('headline')
  authorDiv.classList.add('author')
  imgDiv.classList.add('img-container')

  authorImg.src = article.authorPhoto

  headlineDiv.textContent = article.headline
  authNameSpan.textContent = article.authorName

  cardDiv.appendChild(headlineDiv)
  cardDiv.appendChild(authorDiv)
  authorDiv.appendChild(imgDiv)
  authorDiv.appendChild(authNameSpan)
  imgDiv.appendChild(authorImg)

  cardDiv.addEventListener('click', e =>{
    console.log(headlineDiv)
  })
  
  return cardDiv
  
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const selection = document.querySelector(selector)
  axios.get('http://localhost:5000/api/articles').then(res =>{
    const arr = res.data
    const jsArr = res.data.articles.javascript
    const bsArr = res.data.articles.bootstrap
    const techArr = res.data.articles.technology
    const jqArr = res.data.articles.jquery
    const nodeArr = res.data.articles.node
    
    jsArr.forEach(element => {
      selection.appendChild(Card(element))
    });

    bsArr.forEach(element => {
      selection.appendChild(Card(element))
    });

    techArr.forEach(element => {
      selection.appendChild(Card(element))
    });

    jqArr.forEach(element => {
      selection.appendChild(Card(element))
    });

    nodeArr.forEach(element => {
      selection.appendChild(Card(element))
    });

    // console.log(jsArr)
    // console.log(bsArr)
    // console.log(techArr)
    // console.log(jqArr)
    // console.log(nodeArr)
    // console.log(arr)
  })

}

export { Card, cardAppender }
