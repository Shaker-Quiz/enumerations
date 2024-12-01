export let Buckets: {
  Services: 'Services'
}

export let BucketNames: {
  [Buckets.Services]: 'services'
}

/**
 * Available buckets' folders enumeration
 */
export let Folders: {
  [Buckets.Services]: {
    GameGuides: 'GameGuides'
    GamePhotos: 'GamePhotos'
    ReviewAuthors: 'ReviewAuthors'
  }
}

/**
 * Available buckets folders' names enumeration
 */
export let FolderNames: {
  [Buckets.Services]: {
    [Folders.Services.GameGuides]: 'game-guides'
    [Folders.Services.GamePhotos]: 'game-photos'
    [Folders.Services.ReviewAuthors]: 'review-authors'
  }
}
