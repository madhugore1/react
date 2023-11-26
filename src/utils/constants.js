const LOGO_URL =
  "https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg";

const CORS_PROXY_URL = "https://corsproxy.io/?";

const SWIGGY_API_URL =
  CORS_PROXY_URL +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const RES_IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";

const RES_CARD_TYPE = "restaurant_grid_listing";

const RES_MENU_URL =
  CORS_PROXY_URL +
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2183307&lng=72.9780897&restaurantId=";

export {
  LOGO_URL,
  SWIGGY_API_URL,
  RES_CARD_TYPE,
  RES_IMAGE_BASE_URL,
  RES_MENU_URL,
};
