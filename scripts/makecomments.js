var textComments = JSON.parse(localStorage.getItem('comments'));
if (textComments === null) textComments = [new CommentInfo('./images/Photo15_1.png', 'asdasdasdasdasdasd', '2022-5-12', 'Hello, world')];
var currentPage = JSON.parse(localStorage.getItem('currPage'));
if (currentPage === null) currentPage = 0;
var amountOfPages = showPages(textComments.length);
generateCouple(currentPage, textComments.length);


const postButton = document.getElementById('postComment');
postButton.addEventListener('click', function(ev){
    postComment(ev);
    localStorage.setItem("comments", JSON.stringify(textComments));
});


function generateCouple(currentPage, maxAmount){
    const commentsContainer = document.getElementById('allComments');
    while(commentsContainer.childNodes.length != 0){
        commentsContainer.removeChild(commentsContainer.lastChild);
    }
    
    localStorage.setItem("currPage", JSON.stringify(currentPage));
    let first = currentPage * 5;
    let last = (first + 5 > maxAmount) ? maxAmount : first + 5;
    for (let i = first; i < last; ++i){
        generateComment(textComments[last - i - 1 + first]);
    }
}

function showPages(amountOfPages){
    var maxPages = 5;
    let amount = Math.floor(amountOfPages / maxPages);
    amount = (amountOfPages % maxPages == 0) ? amount : amount + 1;
    const navigator = document.getElementById('pageBar');
    navigator.className= 'navigation_bar';
    while(navigator.childNodes.length){
        navigator.removeChild(navigator.lastChild);
    }

    const arrowLeft = document.createElement('a');
    arrowLeft.href = '#textComment';
    arrowLeft.className = 'text17-1';
    arrowLeft.textContent = '<';
    arrowLeft.addEventListener('click', function(ev){
        if (currentPage != 0){
            generateCouple(--currentPage, textComments.length);
        }
        else{
            generateCouple(currentPage, textComments.length);
        }
        showPages(textComments.length);
    })
    navigator.append(arrowLeft);

    let first = 1;
    let last = amount;
    const MAXPAGES = 12;
    if (amount >= MAXPAGES){
        first = Math.floor((currentPage) / MAXPAGES) * MAXPAGES + 1;
        last = (MAXPAGES + first > amount) ? amount : MAXPAGES + first;
    }

    for (let i = first; i <= last; ++i){
        const page = document.createElement('a');
        page.href = '#textComment';
        page.textContent = i;
        if (i - 1 !== currentPage){
            page.className = 'text17-1';
        }
        else {
            page.className = 'text17-2';
        }
        page.addEventListener('click', function(ev){
            generateCouple(i - 1, textComments.length);
            currentPage = page.textContent - 1;
            console.log(currentPage);
            showPages(textComments.length);
        })
        navigator.append(page);
    }

    const arrowRight = document.createElement('a');
    arrowRight.href = '#textComment';
    arrowRight.className = 'text17-1';
    arrowRight.textContent = '>';
    arrowRight.addEventListener('click', function(ev){
        if (currentPage < amount - 1){
            generateCouple(++currentPage, textComments.length);
        }
        else{
            generateCouple(currentPage, textComments.length);
        }
        showPages(textComments.length);
    })
    navigator.append(arrowRight);

    return amount;
}


function preventEmpty(){
    if (document.getElementById('textComment').value === ""){
        postButton.disabled = true;
    }
    else{
        postButton.disabled = false;
    }
}


function generateComment(commentObject){
    const commentWrapper = document.createElement('div');
    commentWrapper.className = 'comment';
    const commentContent = document.createElement('div');
    commentContent.className = 'bottom-content16';
    
    const profileImage = document.createElement('img');
    profileImage.src = commentObject.image;
    profileImage.className = 'Photo16-2';
    
    const userInfoContainer = document.createElement('div');
    userInfoContainer.className = 'sub-content2';
    
    const userInfoMargin = document.createElement('div');
    userInfoMargin.className = 'center-row16';
    
    const userInfo = document.createElement('div');
    userInfo.className = 'center-comment16';
    

    const postByphrase = document.createElement('span');
    postByphrase.className = 'text16-9';
    postByphrase.textContent = 'post-by';
    const nameAndElements = document.createElement('div');
    nameAndElements.className = 'smuck-reply2';


    const containerNameRef = document.createElement('div');
    const name = document.createElement('span');
    name.className = 'text16-8';
    name.textContent = commentObject.author;
    const replyReference = document.createElement('a');
    replyReference.href = '#reply16-2';
    replyReference.className = 'reply16-2';
    replyReference.textContent = 'reply';
    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'bottom-likes16';
    
    

    const shareAmount = document.createElement('span');
    shareAmount.className = 't456-2';
    shareAmount.textContent = '456';
    const shareIcon = document.createElement('span');
    shareIcon.className = 'share16-2';
    
    const shareFont = document.createElement('i');
    shareFont.className = 'fa fa-share-alt';
    const likesAmount = document.createElement('span');
    likesAmount.className = 't15-2';
    likesAmount.textContent = '15';
    const likesIcon = document.createElement('span');
    likesIcon.className = 'like16-2';
    
    const likesFont = document.createElement('i');
    likesFont.className = 'fa-solid fa-thumbs-up';

    const date = document.createElement('span');
    date.className = 'date16-3';
    date.textContent = commentObject.date;
    const commentText = document.createElement('span');
    commentText.className = 'text16-11';
    commentText.textContent = commentObject.comment;

    const line = document.createElement('div');
    line.className = 'block16-4';

    likesIcon.appendChild(likesFont);
    shareIcon.appendChild(shareFont);
    iconsContainer.append(shareAmount, shareIcon, likesAmount, likesIcon);
    containerNameRef.append(name, replyReference);
    nameAndElements.append(containerNameRef, iconsContainer);
    userInfo.append(postByphrase, nameAndElements, date, commentText);
    userInfoMargin.appendChild(userInfo);
    userInfoContainer.appendChild(userInfoMargin);
    commentContent.append(profileImage, userInfoContainer);
    commentWrapper.append(commentContent, line);
    document.getElementById('allComments').prepend(commentWrapper);
}

function postComment(ev){
    let today = new Date();
    let dateText = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let tmpString = document.getElementById('textComment').value;
    if (tmpString.length < 200){
        let tmpWords = tmpString.split(" ");
        let prevLegth = 0;
        for (let i = 0; i < tmpWords.length; ++i){
            prevLegth += tmpWords[i].length;
            if (prevLegth > 120){
               tmpString = [tmpString.slice(0, 119), '- ', tmpString.slice(119)].join('');
            }
        }
    }
    textComments.unshift(new CommentInfo('./images/anon.png', 'Anonymous', dateText, tmpString));
    currentPage = 0;
    generateCouple(currentPage, textComments.length);
    amountOfPages = showPages(textComments.length);
    
}