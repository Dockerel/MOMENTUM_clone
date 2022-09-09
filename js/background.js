const apikey = "563492ad6f9170000100000121f47c2fedc341499c55a539cd535b84";

let page_num = Math.floor(Math.random() * 10);

async function CuratedPhotos(page_num) {
  const data = await fetch(
    `https://api.pexels.com/v1/curated?page=${page_num}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: apikey,
      },
    }
  );
  const response = await data.json();
  const photos = response.photos;
  const randomPhoto =
    photos[Math.floor(Math.random() * photos.length)].src.landscape;

  document.body.style.backgroundImage = `url(${randomPhoto})`;
}
CuratedPhotos(page_num);
