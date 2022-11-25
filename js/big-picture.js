const fullScreenPicture = document.querySelector('.big-picture');
const closeButton = document.querySelector('.big-picture__cancel');
const socialComments = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const commentsPart = document.createDocumentFragment();


const getComments = (comments) => {
  comments.forEach((comment) => {
    socialComment.cloneNode(true);
    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;
    commentsPart.appendChild(socialComment);
  });

  socialComments.innerHTML = '';
  socialComments.appendChild(commentsPart);
};

const renderPicture = (picture) => {
  fullScreenPicture.querySelector('.social__comment-count').classList.add('hidden');
  fullScreenPicture.querySelector('.comments-loader').classList.add('hidden');
  getComments(picture.comments);
};

const closePicture = () => {
  document.body.classList.remove('modal-open');
  fullScreenPicture.classList.add('hidden');
};

const onPictureEscKeydown = (evt) => {
  if(evt.key === 'Escape') {
    closePicture();
    document.removeEventListener('keydown', onPictureEscKeydown);
  }
};

const onPictureCloseButton = () => {
  closePicture();
  closeButton.removeEventListener('click', onPictureCloseButton);
  document.removeEventListener('keydown', onPictureEscKeydown);
};


const visualiseBigPicture = (element) => {
  document.body.classList.add('modal-open');
  fullScreenPicture.classList.remove('hidden');
  renderPicture(element);
  closeButton.addEventListener('click', onPictureCloseButton);
  document.addEventListener('keydown', onPictureEscKeydown);
};

export {visualiseBigPicture};