function getBooksTemplate(i) {
    let tableComments = "";
    for (
        let indexComments = 0;
        indexComments < books[i].comments.length;
        indexComments++
    ) {
        tableComments += `        
                <tr>
                    <td>${books[i].comments[indexComments].name}</td>
                    <td>:</td>
                    <td>${books[i].comments[indexComments].comment}</td>
                </tr>`;
    }

  return `
    <div id="content-book">
        <p id="title">${books[i].name}</p>
        <hr>
        <div id="ctn-img-book" >
          <img id="img-book" src="./assets/icons/icons8-literature-100.png" alt="imgBook">
        </div>
        <hr>
        <div class="ctn-book-details">
          <div class="book-details">
            <p id="price">${books[i].price.toFixed(2)} €</p>
            <div class="likes">
              <p id="amount-likes">${books[i].likes}</p>
              <img id="img-heart" src="./assets/icons/icons8-herz-100 (1).png" alt="">
            </div>
          </div>
          <table class="table-book-details">
            <tr>
              <td>Autor</td>
              <td>:</td>
              <td>${books[i].author}</td>
            </tr>
            <tr>
              <td>Erscheinungsjahr</td>
              <td>:</td>
              <td>${books[i].publishedYear}</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>:</td>
              <td>${books[i].genre}</td>
            </tr>
          </table>
        </div>   
        <hr>
        <div class="ctn-comments">
          <p>Kommentare:</p>
          <div id="comments" class="comments">
            <table class="table-comments">
              ${tableComments}
            </table>
          </div>
          <div id="write-comment" class="write-comment">
            <input id="input-comment" type="text" placeholder="Scheibe dein Kommentar ...">
            <img src="./assets/icons/icons8-papierflieger-50.png" alt="Send-Image">
          </div>
        </div>
    </div>`;
}
