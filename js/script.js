const articleSocial = document.querySelector('.article__social');
const shareBtn = document.querySelector('.article__share-btn');

const toggleSharePanel = () => {
    articleSocial.classList.toggle('article__social--animation');
};

const hideSharePanel = (e) => {
    if (!e.target.closest('.icon, .article__share-btn') && articleSocial.classList.contains('article__social--animation')) {
        toggleSharePanel()
    } 
}

shareBtn.addEventListener('click', toggleSharePanel);
document.addEventListener('click', hideSharePanel)
