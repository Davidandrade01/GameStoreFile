export const ENV={

    SERVER_HOST:"http://localhost:1337",
    API_URL:"http://localhost:1337/api",
    ENDPOINTS: {
        AUTH: {
          REGISTER: "auth/local/register",
          LOGIN: "auth/local",
        },
        USERS_ME: "users/me",
        USERS: "users",
        PLATFORM: "platforms",
        ADDRESS:"addresses",
        GAME:"games",
        WISHLIST:"wishlists"
       
      
    },
    TOKEN:"token",   // O token.js consome este env ,
    CART:"cart",
    STRIPE_TOKEN:"pk_test_51NhdDYAWxaWuqGfJxMR4fzlksMrx2A2JmRUE1AjOXb9FAyVvREOK02MkHGgVgZmk6rEgt09jNJQ93gRWsqH3wmku00MjTM8Vg2"

    
}