import {
    swiggy_menu_api_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
} from "../components/constants";

export async function getRestaurantInfo(id) {
    try {
        const response = await fetch(swiggy_menu_api_URL + id);
        const json = await response.json();

        const restaurantData =
            json?.data?.cards
                ?.map((x) => x.card)
                ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
                ?.info || null;

        const menuItemsData =
            json?.data?.cards.find((x) => x.groupedCard)?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards
                ?.map((x) => x.card?.card)
                ?.filter((x) => x["@type"] === MENU_ITEM_TYPE_KEY)
                ?.map((x) => x.itemCards)
                .flat()
                .map((x) => x.card?.info) || [];

        const uniqueMenuItems = [];
        menuItemsData.forEach((item) => {
            if (!uniqueMenuItems.find((x) => x.id === item.id)) {
                uniqueMenuItems.push(item);
            }
        });

        return { restaurantData, menuItems: uniqueMenuItems };
    } catch (error) {
        console.log(error);
        return { restaurantData: null, menuItems: [] };
    }
}
