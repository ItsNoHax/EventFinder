import { createSelector } from 'reselect';

export const getImagesById = state => state.images.byId;
export const getImagesAllIds = state => state.images.allIds;

export const getAllImages = createSelector(
  getImagesById,
  getImagesAllIds,
  (imagesById, imagesAllIds) => {
    const allImages = [];
    imagesAllIds.forEach((id) => {
      allImages.push(imagesById[id]);
    });
    return allImages;
  },
);
