import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement('h1',{id:"heading"},"Namaste React 🚀");

// console.log(heading)
// // create a react element  in react  using jsx
// const heading1 = <h1>Namaste react</h1>
// console.log(heading1);
        //components
    //     const body = <span>Hello world!</span>
    //    const Title = () => {
    //     return  (
    //         <>
    //         <h1>My name is raj sharma!</h1>
    //         {body}
    //         </>
    //     );};
    
    //    const number = 700;

    //    const HeadingComponent = () => {
    //     return (
    //         <div>
    //           <h1>  {number}</h1>
    //             {Title()}
    //                                            <h3>Namaste React 🚀</h3>
    //         </div>
    //     )
    //    }
    //    if you can write curlybraces {} inside jsx you can use any type of js code inside {} 
    // const HeadingComponent = () => {
    //     return (
    //         <div>
            //  {}
    //             <Title/>
    //             <h3>Namaste React 🚀</h3>
    //         </div>
    //     )
    //    }


    // create a ui of food delivery website 
    // Header- logo - nav links
    // body - restaurant card - reslist
    //footer - copyright
                        // -- header --
                        const Header  = () => {
                            return (
                                <div className="header">
                                    <div className="logo-container">
                                        <img className="logo" src="https://th.bing.com/th/id/OIP.ggy7nN5cIFgXv4ZOUx4L_gHaD4?w=341&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                                    </div>
                                    <div className="nav-items">
                                        <ul>
                                            <li>Home</li>
                                            <li>About</li>
                                            <li>Contact US</li>
                                            <li>Cart</li>
                                            <img src="https://th.bing.com/th/id/OIP.iA_lGRxU5jy8jMaJO5NmlgHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                        //restaurant card component
                        const RestaurantCard = (props) => {
                            // console.log(props);
                            const {resData} = props;
                            console.log(props);
                            // console.log(props);
                            return(
                                <div className="res-card">
                                    <img  className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} />
                                    <h2>{resData.info.name}</h2>
                                    <h3>{resData.info.cuisines.join(",")}</h3>
                                    <div className="ratings">                                    
                                    <h4>{resData.info.avgRating}⭐</h4>
                                    <h4>{resData.info.costForTwo}</h4>
                                    <h4>{resData.info.sla.deliveryTime} min</h4>
                                    </div>


                                </div>
                            )
                        }
                        const resList = 
                        [
                            {
                                "info": {
                                    "id": "442425",
                                    "name": "Pizza Hut",
                                    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                    "locality": "MC Road",
                                    "areaName": "Thiruvalla",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Pizzas"
                                    ],
                                    "avgRating": 4.2,
                                    "parentId": "721",
                                    "avgRatingString": "4.2",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 54,
                                        "lastMileTravel": 10.8,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "50-55 mins",
                                        "lastMileTravelString": "10.8 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 23:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "40% OFF",
                                        "subHeader": "UPTO ₹80"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/pizza-hut-mc-road-thiruvalla-thiruvalla-442425",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "412645",
                                    "name": "Malabar Fresh Haute Cuisine",
                                    "cloudinaryImageId": "siyowbr28ccuneanqhr9",
                                    "locality": "Mundancavu",
                                    "areaName": "Thiruvalla",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "Biryani",
                                        "Arabian"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "250045",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "10K+",
                                    "sla": {
                                        "deliveryTime": 33,
                                        "lastMileTravel": 4.5,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "30-35 mins",
                                        "lastMileTravelString": "4.5 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png",
                                                "description": "Delivery!"
                                            },
                                            {
                                                "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                                                "description": "Delivery!"
                                            },
                                            {
                                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                "description": "OnlyOnSwiggy"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Kerala%20Food.png"
                                                        }
                                                    },
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                                                        }
                                                    },
                                                    {
                                                        "attributes": {
                                                            "description": "OnlyOnSwiggy",
                                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹125 OFF",
                                        "subHeader": "ABOVE ₹249",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/malabar-fresh-haute-cuisine-mundancavu-thiruvalla-thiruvalla-412645",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "511646",
                                    "name": "Oonu House (Monaiyude Kada)",
                                    "cloudinaryImageId": "n84l1ioijbsccml8ndbl",
                                    "locality": "Kochupurackel Thittamel",
                                    "areaName": "Chengannur",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "Kerala",
                                        "Seafood"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "306057",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 22,
                                        "lastMileTravel": 4.4,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "20-25 mins",
                                        "lastMileTravelString": "4.4 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/oonu-house-monaiyude-kada-kochupurackel-thittamel-chengannur-thiruvalla-511646",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "412454",
                                    "name": "Priya Hotels",
                                    "cloudinaryImageId": "fgmpnjj51qgzyynw3gsl",
                                    "locality": "Christian College Junction",
                                    "areaName": "Chengannur",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "South Indian",
                                        "Chinese",
                                        "Kerala"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "252975",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 29,
                                        "lastMileTravel": 6,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "25-30 mins",
                                        "lastMileTravelString": "6.0 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 21:15:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                "description": "OnlyOnSwiggy"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "OnlyOnSwiggy",
                                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹50"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/priya-hotels-christian-college-junction-chengannur-thiruvalla-412454",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "546610",
                                    "name": "The Smoky Shack",
                                    "cloudinaryImageId": "abrqskbz5fk9ptmrsbvz",
                                    "locality": "Christian College Junction",
                                    "areaName": "Chengannur",
                                    "costForTwo": "₹250 for two",
                                    "cuisines": [
                                        "Arabian",
                                        "Grill",
                                        "Beverages"
                                    ],
                                    "avgRating": 4.5,
                                    "parentId": "328345",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 35,
                                        "lastMileTravel": 6,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "30-35 mins",
                                        "lastMileTravelString": "6.0 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Rolls.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Rolls.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/the-smoky-shack-christian-college-junction-chengannur-thiruvalla-546610",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "477507",
                                    "name": "Hotel Navartna",
                                    "cloudinaryImageId": "w525ezvpyltj717xvmx8",
                                    "locality": "Vellavoor Junction",
                                    "areaName": "Thiruvalla",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Chinese",
                                        "North Indian"
                                    ],
                                    "avgRating": 4.4,
                                    "parentId": "399303",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "100+",
                                    "sla": {
                                        "deliveryTime": 34,
                                        "lastMileTravel": 4.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "30-35 mins",
                                        "lastMileTravelString": "4.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/hotel-navartna-vellavoor-junction-thiruvalla-thiruvalla-477507",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "628306",
                                    "name": "King Foods - Kenchik Fried Chicken",
                                    "cloudinaryImageId": "vnqwoapxmmflrktwgrfn",
                                    "areaName": "Thiruvalla",
                                    "costForTwo": "₹310 for two",
                                    "cuisines": [
                                        "Indian",
                                        "Burgers"
                                    ],
                                    "avgRating": 4.5,
                                    "parentId": "375418",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "50+",
                                    "sla": {
                                        "deliveryTime": 39,
                                        "lastMileTravel": 4.9,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "35-40 mins",
                                        "lastMileTravelString": "4.9 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/king-foods-kenchik-fried-chicken-thiruvalla-thiruvalla-628306",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "232582",
                                    "name": "Club 7 - Phosphorus Multi Cuisine Restaurant",
                                    "cloudinaryImageId": "cvkg43jt70jtvypnbfub",
                                    "locality": "Arcade Main Road",
                                    "areaName": "Thiruvalla",
                                    "costForTwo": "₹450 for two",
                                    "cuisines": [
                                        "Chinese",
                                        "North Indian",
                                        "Biryani"
                                    ],
                                    "avgRating": 4.4,
                                    "parentId": "63930",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 55,
                                        "lastMileTravel": 10.2,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "50-55 mins",
                                        "lastMileTravelString": "10.2 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:00:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Snacks.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Snacks.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹50"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/club-7-phosphorus-multi-cuisine-restaurant-arcade-main-road-thiruvalla-thiruvalla-232582",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "366759",
                                    "name": "Papa Louie's Pizzeria",
                                    "cloudinaryImageId": "szo4effzxbtxucmgkgl1",
                                    "locality": "Scs Junction",
                                    "areaName": "opp. Municipal Park",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "Pizzas",
                                        "Pastas"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "154845",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 51,
                                        "lastMileTravel": 9.8,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "50-55 mins",
                                        "lastMileTravelString": "9.8 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 21:45:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹50"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/papa-louies-pizzeria-scs-junction-opp-municipal-park-thiruvalla-366759",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "491982",
                                    "name": "Al Razi",
                                    "cloudinaryImageId": "uwgnnjjagcubzhwv52yu",
                                    "locality": "Thiruvalla Town",
                                    "areaName": "Muthoor",
                                    "costForTwo": "₹500 for two",
                                    "cuisines": [
                                        "Arabian",
                                        "Lebanese"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "295030",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "500+",
                                    "sla": {
                                        "deliveryTime": 52,
                                        "lastMileTravel": 11.8,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "50-55 mins",
                                        "lastMileTravelString": "11.8 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 23:30:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "10% OFF",
                                        "subHeader": "UPTO ₹40"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/al-razi-town-muthoor-thiruvalla-491982",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "412596",
                                    "name": "Foremost Cafe and Grill",
                                    "cloudinaryImageId": "los8xzbapusbbsj9df19",
                                    "locality": "Bethel Junction",
                                    "areaName": "Chengannur",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "Arabian",
                                        "Beverages",
                                        "Juices"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "454225",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 42,
                                        "lastMileTravel": 4.4,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "40-45 mins",
                                        "lastMileTravelString": "4.4 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹50 OFF",
                                        "subHeader": "ABOVE ₹499",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/foremost-cafe-and-grill-bethel-junction-chengannur-thiruvalla-412596",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "233049",
                                    "name": "Cee Yeem Grill and Barbeque",
                                    "cloudinaryImageId": "ic20qscwkqxk7i2npwqz",
                                    "locality": "Mc Road",
                                    "areaName": "Thukalassery",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Chinese",
                                        "Arabian",
                                        "Kerala"
                                    ],
                                    "avgRating": 3.7,
                                    "parentId": "56207",
                                    "avgRatingString": "3.7",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 45,
                                        "lastMileTravel": 9,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "40-45 mins",
                                        "lastMileTravelString": "9.0 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 23:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "20% OFF",
                                        "subHeader": "UPTO ₹50"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/cee-yeem-grill-and-barbeque-mc-road-thukalassery-thiruvalla-233049",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "637181",
                                    "name": "Bar-B-Que Inn Family Restaurant",
                                    "cloudinaryImageId": "cwbtlkd1ohyqhmkqctn9",
                                    "locality": "Kollam - Theni Highway",
                                    "areaName": "Muthoor",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "Barbecue",
                                        "Chinese",
                                        "North Indian"
                                    ],
                                    "avgRating": 4.2,
                                    "parentId": "384733",
                                    "avgRatingString": "4.2",
                                    "totalRatingsString": "500+",
                                    "sla": {
                                        "deliveryTime": 52,
                                        "lastMileTravel": 12.1,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "50-55 mins",
                                        "lastMileTravelString": "12.1 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "Rxawards/_CATEGORY-Chinese.png",
                                                "description": "Delivery!"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "Delivery!",
                                                            "imageId": "Rxawards/_CATEGORY-Chinese.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹100 OFF",
                                        "subHeader": "ABOVE ₹499",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/bar-b-que-inn-family-restaurant-kollam-theni-highway-muthoor-thiruvalla-637181",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "236256",
                                    "name": "J M Black Pepper",
                                    "cloudinaryImageId": "am0xim6rljfmtkfwzhr8",
                                    "locality": "Muthor",
                                    "areaName": "Thiruvalla Town",
                                    "costForTwo": "₹350 for two",
                                    "cuisines": [
                                        "South Indian",
                                        "Chinese",
                                        "Biryani"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "316597",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 61,
                                        "lastMileTravel": 12.1,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "60-65 mins",
                                        "lastMileTravelString": "12.1 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/j-m-black-pepper-muthor-thiruvalla-town-thiruvalla-236256",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "638745",
                                    "name": "Maya's Pizzeria",
                                    "cloudinaryImageId": "jtmav9ahritxnobuoi8w",
                                    "locality": "Muthoor",
                                    "areaName": "Thiruvalla",
                                    "costForTwo": "₹250 for two",
                                    "cuisines": [
                                        "Pizzas"
                                    ],
                                    "avgRating": 4.5,
                                    "parentId": "472419",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "20+",
                                    "sla": {
                                        "deliveryTime": 64,
                                        "lastMileTravel": 12.1,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "60-65 mins",
                                        "lastMileTravelString": "12.1 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:10:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "50% OFF",
                                        "subHeader": "ABOVE ₹149",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/mayas-pizzeria-muthoor-thiruvalla-thiruvalla-638745",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "578606",
                                    "name": "Thaha Restaurant",
                                    "cloudinaryImageId": "ry5s4v35hdunlguhvrph",
                                    "locality": "Ramanchira",
                                    "areaName": "Muthoor",
                                    "costForTwo": "₹250 for two",
                                    "cuisines": [
                                        "Fast Food",
                                        "Kerala"
                                    ],
                                    "avgRating": 4.4,
                                    "parentId": "346502",
                                    "avgRatingString": "4.4",
                                    "totalRatingsString": "100+",
                                    "sla": {
                                        "deliveryTime": 47,
                                        "lastMileTravel": 11.4,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "45-50 mins",
                                        "lastMileTravelString": "11.4 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 23:30:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "₹50 OFF",
                                        "subHeader": "ABOVE ₹199",
                                        "discountTag": "FLAT DEAL"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/thaha-restaurant-ramanchira-muthoor-thiruvalla-578606",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "652070",
                                    "name": "AlBaris Mandi And Grills",
                                    "cloudinaryImageId": "a7c9f3e05e8295d3d68386acabe3da98",
                                    "locality": "Mulakuzha",
                                    "areaName": "Chengannur",
                                    "costForTwo": "₹250 for two",
                                    "cuisines": [
                                        "Arabian",
                                        "Barbecue"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "392441",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "1K+",
                                    "sla": {
                                        "deliveryTime": 49,
                                        "lastMileTravel": 9.1,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "45-50 mins",
                                        "lastMileTravelString": "9.1 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {
                                        "imageBadges": [
                                            {
                                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                                "description": "OnlyOnSwiggy"
                                            }
                                        ]
                                    },
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {
                                                "badgeObject": [
                                                    {
                                                        "attributes": {
                                                            "description": "OnlyOnSwiggy",
                                                            "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                                        }
                                                    }
                                                ]
                                            },
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/albaris-mandi-and-grills-mulakuzha-chengannur-thiruvalla-652070",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "278124",
                                    "name": "Maa Hotel",
                                    "cloudinaryImageId": "nzqppb8yet1rvqjcn6ep",
                                    "locality": "Ramanchira",
                                    "areaName": "Thiruvalla Town",
                                    "costForTwo": "₹400 for two",
                                    "cuisines": [
                                        "South Indian",
                                        "Chinese",
                                        "Biryani"
                                    ],
                                    "avgRating": 4,
                                    "parentId": "127690",
                                    "avgRatingString": "4.0",
                                    "totalRatingsString": "500+",
                                    "sla": {
                                        "deliveryTime": 45,
                                        "lastMileTravel": 11.4,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "45-50 mins",
                                        "lastMileTravelString": "11.4 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 23:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/maa-hotel-ramanchira-thiruvalla-town-thiruvalla-278124",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "389924",
                                    "name": "Pappa's",
                                    "cloudinaryImageId": "dba8c10486a434fe0944db12308cadfc",
                                    "locality": "Thukalassery",
                                    "areaName": "Thukalassery",
                                    "costForTwo": "₹550 for two",
                                    "cuisines": [
                                        "Pizzas",
                                        "American"
                                    ],
                                    "avgRating": 4.5,
                                    "parentId": "154971",
                                    "avgRatingString": "4.5",
                                    "totalRatingsString": "500+",
                                    "sla": {
                                        "deliveryTime": 51,
                                        "lastMileTravel": 8.3,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "50-55 mins",
                                        "lastMileTravelString": "8.3 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 23:00:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "aggregatedDiscountInfoV3": {
                                        "header": "10% OFF",
                                        "subHeader": "UPTO ₹40"
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/pappas-thukalassery-thiruvalla-389924",
                                    "type": "WEBLINK"
                                }
                            },
                            {
                                "info": {
                                    "id": "412582",
                                    "name": "Zwarma",
                                    "cloudinaryImageId": "ceomklydeebf2w4omdxv",
                                    "locality": "M C Road",
                                    "areaName": "Chengannur",
                                    "costForTwo": "₹200 for two",
                                    "cuisines": [
                                        "Chinese",
                                        "North Indian",
                                        "Biryani"
                                    ],
                                    "avgRating": 4.3,
                                    "parentId": "8466",
                                    "avgRatingString": "4.3",
                                    "totalRatingsString": "500+",
                                    "sla": {
                                        "deliveryTime": 26,
                                        "lastMileTravel": 4.7,
                                        "serviceability": "SERVICEABLE",
                                        "slaString": "25-30 mins",
                                        "lastMileTravelString": "4.7 km",
                                        "iconType": "ICON_TYPE_EMPTY"
                                    },
                                    "availability": {
                                        "nextCloseTime": "2024-06-07 22:30:00",
                                        "opened": true
                                    },
                                    "badges": {},
                                    "isOpen": true,
                                    "aggregatedDiscountInfoV2": {},
                                    "type": "F",
                                    "badgesV2": {
                                        "entityBadges": {
                                            "imageBased": {},
                                            "textBased": {},
                                            "textExtendedBadges": {}
                                        }
                                    },
                                    "differentiatedUi": {
                                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                        "differentiatedUiMediaDetails": {
                                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                            "lottie": {},
                                            "video": {}
                                        }
                                    },
                                    "reviewsSummary": {},
                                    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                    "restaurantOfferPresentationInfo": {}
                                },
                                "analytics": {},
                                "cta": {
                                    "link": "https://www.swiggy.com/restaurants/zwarma-m-c-road-chengannur-thiruvalla-412582",
                                    "type": "WEBLINK"
                                }
                            }
                        ]
                                              

                        const Body = () => {
                            return (
                                <div className="body">
                                    <div className="Search-bar">
                                    <input type="text" className="search" placeholder="seach your favrouite Foods..."/> 
                                    <button className="search-btn">Search</button>
                                    </div>
                                    <div className="res-container">
                                    {/* <RestaurantCard resData={resList[0]}/>
                                         <RestaurantCard resData = {resList[1]}/>
                                         <RestaurantCard resData = {resList[2]}/>
                                         <RestaurantCard resData = {resList[3]}/>
                                         <RestaurantCard resData = {resList[4]}/>
                                         <RestaurantCard resData = {resList[5]}/>
                                         <RestaurantCard resData = {resList[6]}/>
                                         <RestaurantCard resData = {resList[7]}/>
                                         <RestaurantCard resData = {resList[8]}/>
                                         <RestaurantCard resData = {resList[9]}/>
                                         <RestaurantCard resData = {resList[10]}/>
                                         <RestaurantCard resData = {resList[11]}/>  */}
                                {/* /* if number of object is more then you do not use this appproach then use loop the whole array and generate a card one by one */ }
                                { /* use map function on array of objects */}
                                {resList.map( (restaurant) => {
                                return( <RestaurantCard key={restaurant.info.id} resData={restaurant}/>);}
                                )}
               
                           
                                        </div>
                                        </div>
                            );
                        };
                        
                        const Images =
                            [
                                {
                                    "id": "0",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/yC-Yzbqy7PY",
                                    "download_url": "https://picsum.photos/id/0/5000/3333"
                                },
                                {
                                    "id": "1",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/LNRyGwIJr5c",
                                    "download_url": "https://picsum.photos/id/1/5000/3333"
                                },
                                {
                                    "id": "2",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/N7XodRrbzS0",
                                    "download_url": "https://picsum.photos/id/2/5000/3333"
                                },
                                {
                                    "id": "3",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/Dl6jeyfihLk",
                                    "download_url": "https://picsum.photos/id/3/5000/3333"
                                },
                                {
                                    "id": "4",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/y83Je1OC6Wc",
                                    "download_url": "https://picsum.photos/id/4/5000/3333"
                                },
                                {
                                    "id": "5",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3334,
                                    "url": "https://unsplash.com/photos/LF8gK8-HGSg",
                                    "download_url": "https://picsum.photos/id/5/5000/3334"
                                },
                                {
                                    "id": "6",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/tAKXap853rY",
                                    "download_url": "https://picsum.photos/id/6/5000/3333"
                                },
                                {
                                    "id": "7",
                                    "author": "Alejandro Escamilla",
                                    "width": 4728,
                                    "height": 3168,
                                    "url": "https://unsplash.com/photos/BbQLHCpVUqA",
                                    "download_url": "https://picsum.photos/id/7/4728/3168"
                                },
                                {
                                    "id": "8",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/xII7efH1G6o",
                                    "download_url": "https://picsum.photos/id/8/5000/3333"
                                },
                                {
                                    "id": "9",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3269,
                                    "url": "https://unsplash.com/photos/ABDTiLqDhJA",
                                    "download_url": "https://picsum.photos/id/9/5000/3269"
                                },
                                {
                                    "id": "10",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/6J--NXulQCs",
                                    "download_url": "https://picsum.photos/id/10/2500/1667"
                                },
                                {
                                    "id": "11",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/Cm7oKel-X2Q",
                                    "download_url": "https://picsum.photos/id/11/2500/1667"
                                },
                                {
                                    "id": "12",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/I_9ILwtsl_k",
                                    "download_url": "https://picsum.photos/id/12/2500/1667"
                                },
                                {
                                    "id": "13",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/3MtiSMdnoCo",
                                    "download_url": "https://picsum.photos/id/13/2500/1667"
                                },
                                {
                                    "id": "14",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/IQ1kOQTJrOQ",
                                    "download_url": "https://picsum.photos/id/14/2500/1667"
                                },
                                {
                                    "id": "15",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/NYDo21ssGao",
                                    "download_url": "https://picsum.photos/id/15/2500/1667"
                                },
                                {
                                    "id": "16",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/gkT4FfgHO5o",
                                    "download_url": "https://picsum.photos/id/16/2500/1667"
                                },
                                {
                                    "id": "17",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/Ven2CV8IJ5A",
                                    "download_url": "https://picsum.photos/id/17/2500/1667"
                                },
                                {
                                    "id": "18",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/Ps2n0rShqaM",
                                    "download_url": "https://picsum.photos/id/18/2500/1667"
                                },
                                {
                                    "id": "19",
                                    "author": "Paul Jarvis",
                                    "width": 2500,
                                    "height": 1667,
                                    "url": "https://unsplash.com/photos/P7Lh0usGcuk",
                                    "download_url": "https://picsum.photos/id/19/2500/1667"
                                },
                                {
                                    "id": "20",
                                    "author": "Aleks Dorohovich",
                                    "width": 3670,
                                    "height": 2462,
                                    "url": "https://unsplash.com/photos/nJdwUHmaY8A",
                                    "download_url": "https://picsum.photos/id/20/3670/2462"
                                },
                                {
                                    "id": "21",
                                    "author": "Alejandro Escamilla",
                                    "width": 3008,
                                    "height": 2008,
                                    "url": "https://unsplash.com/photos/jVb0mSn0LbE",
                                    "download_url": "https://picsum.photos/id/21/3008/2008"
                                },
                                {
                                    "id": "22",
                                    "author": "Alejandro Escamilla",
                                    "width": 4434,
                                    "height": 3729,
                                    "url": "https://unsplash.com/photos/du_OrQAA4r0",
                                    "download_url": "https://picsum.photos/id/22/4434/3729"
                                },
                                {
                                    "id": "23",
                                    "author": "Alejandro Escamilla",
                                    "width": 3887,
                                    "height": 4899,
                                    "url": "https://unsplash.com/photos/8yqds_91OLw",
                                    "download_url": "https://picsum.photos/id/23/3887/4899"
                                },
                                {
                                    "id": "24",
                                    "author": "Alejandro Escamilla",
                                    "width": 4855,
                                    "height": 1803,
                                    "url": "https://unsplash.com/photos/cZhUxIQjILg",
                                    "download_url": "https://picsum.photos/id/24/4855/1803"
                                },
                                {
                                    "id": "25",
                                    "author": "Alejandro Escamilla",
                                    "width": 5000,
                                    "height": 3333,
                                    "url": "https://unsplash.com/photos/Iuq0EL4EINY",
                                    "download_url": "https://picsum.photos/id/25/5000/3333"
                                },
                                {
                                    "id": "26",
                                    "author": "Vadim Sherbakov",
                                    "width": 4209,
                                    "height": 2769,
                                    "url": "https://unsplash.com/photos/tCICLJ5ktBE",
                                    "download_url": "https://picsum.photos/id/26/4209/2769"
                                },
                                {
                                    "id": "27",
                                    "author": "Yoni Kaplan-Nadel",
                                    "width": 3264,
                                    "height": 1836,
                                    "url": "https://unsplash.com/photos/iJnZwLBOB1I",
                                    "download_url": "https://picsum.photos/id/27/3264/1836"
                                },
                                {
                                    "id": "28",
                                    "author": "Jerry Adney",
                                    "width": 4928,
                                    "height": 3264,
                                    "url": "https://unsplash.com/photos/_WiFMBRT7Aw",
                                    "download_url": "https://picsum.photos/id/28/4928/3264"
                                },
                                {
                                    "id": "29",
                                    "author": "Go Wild",
                                    "width": 4000,
                                    "height": 2670,
                                    "url": "https://unsplash.com/photos/V0yAek6BgGk",
                                    "download_url": "https://picsum.photos/id/29/4000/2670"
                                }
                            ];
                            const ImageCard = (props) => {
                                const {imgData} = props;
                                return(
                                    <div className="img-card">
                                        <img width="100%" height="100%"src={imgData.download_url} />
                                        {/* <h3>{imgData.author}</h3> */}
                                    </div>
                                )
                            }
                        

                        const Footer = () => {
                            return (
                                <div className="footer">
                                    {Images.map((img) => {
                                        return(
                                        <ImageCard imgData={img}/>);
                                    })}
                                   
                                        {/* <ImageCard imgData={Images[0]}/>
                                        <ImageCard imgData={Images[1]}/>
                                        <ImageCard imgData={Images[2]}/>
                                        <ImageCard imgData={Images[3]}/>
                                        <ImageCard imgData={Images[4]}/>
                                        <ImageCard imgData={Images[5]}/>
                                        <ImageCard imgData={Images[6]}/>
                                        <ImageCard imgData={Images[7]}/>
                                        <ImageCard imgData={Images[8]}/>
                                        <ImageCard imgData={Images[9]}/> */}
                                    
                                </div>
                            );
                        }

    const AppLayout = () => {
        return (
            <div>
                <Header/>
                <br/>
                <Body/>
                <br/>
                <Footer/>
            </div>
        )
    }


//for dealing woth browsers we have reactDOM as a seperate packaje
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout/>);