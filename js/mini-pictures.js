const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');
const picturesFragment = document.createDocumentFragment();


const createGallery = (photosArray) => {
  photosArray.slice().forEach(({url, likes, comments})=> {
    pictureTemplate.querySelector('.picture__img').src = url;
    pictureTemplate.querySelector('.picture__likes').textContent = likes;
    pictureTemplate.querySelector('.picture__comments').textContent = comments.length;
    const miniaturePicture = pictureTemplate.cloneNode(true);
    picturesFragment.appendChild(miniaturePicture);
  });
  const gallery = picturesContainer.appendChild(picturesFragment);

  return gallery;
};

export {createGallery};