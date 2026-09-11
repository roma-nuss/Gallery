// main.js

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  form,
  hideLoader,
  hideLoadMoreButton,
  loadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

let page = 1;
let currentQuery = '';

async function onSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const { query } = form.elements;

  const searchValue = query.value.trim();

  if (!searchValue) {
    iziToast.error({
      message: 'Empty search',
      position: 'bottomRight',
    });
    return;
  }
  page = 1;
  currentQuery = searchValue;
  hideLoadMoreButton();
  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomRight',
      });
      return;
    }

    form.reset();
    createGallery(data.hits);

    if (page * 15 < data.totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'bottomRight',
    });
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;

  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);
    createGallery(data.hits);
    const galleryItem = document.querySelector('.gallery-item');
    const cardHeight = galleryItem.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
    if (page * 15 >= data.totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomRight',
      });
    }
  } catch (error) {
    page -= 1;
    iziToast.error({
      message: error.message,
      position: 'bottomRight',
    });
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', onSubmit);
loadMoreButton.addEventListener('click', onLoadMore);
