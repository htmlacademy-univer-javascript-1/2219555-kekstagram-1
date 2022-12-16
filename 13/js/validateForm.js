const hashtagRegularExp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const maxLengthHashtag = 5;
const maxLengthComment = 140;

function onFocusIgnoreEscKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
}

function validateHasgtag(value) {
  if (!value.length) {
    return true;
  }
  const hashtags = value.split(' ');
  const uniqueHashtags = [...new Set(hashtags)];
  for (const hashtag of hashtags) {
    if (!hashtagRegularExp.test(hashtag)) {
      return false;
    }
  }
  return hashtags.length <= maxLengthHashtag && hashtags.length === uniqueHashtags.length;
}

function validateComment(value) {
  return value.length <= maxLengthComment;
}

function validateForm(form, hashtagsInput, commentInput) {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper__error'
  });

  pristine.addValidator(
    hashtagsInput,
    validateHasgtag,
  );

  pristine.addValidator(
    commentInput,
    validateComment,
  );

  return pristine.validate();
}
export { validateForm, onFocusIgnoreEscKeydown };

