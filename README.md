This is a project built on NextJS.

## AIM

The aim of this project is to search restaurants and check restaurant details near you or in any city or across countries where Zomato provides their services.

All APIs used here were provided by Zomato.

## Tech Stack Used

1. NextJS
2. TypeScript
3. React Query
3. SCSS Modules
4. Material UI
5. React Glider
6. Emotion CSS
7. Axios
8. Bootstrap
9. React Error Boundary

## Dev Related Details

1. Used NextJS built in features:
- Server Side Rendering and Client Side Rendering
- Dynamic Imports
- Image component

2. Infinite Scrolling
- Implemented with the help of react-query to load more data based on user requirement.
- This helped us to limit the unnecessary API calls if user finds the restaurant earlier while searching.
- It also helped to have good UI experience by not having pagination but having infinite scroll.

3. Debouncing
- Used debouncing with the help of lodash-es.

4. SEO
- Have used og meta tags to have a good SEO performance.

5. Web Vitals
- Since web vitals is one of the core performance metric of a website, we have used all the required techniques to have good LCP, CLS, TBT score.
- Pre loaded images wherever required to have less LCP.
- Used Emotion CSS, Skeletons to avoid layout shift.
- Used light weight packages like - react glider to have less TBT.

6. Created custom hooks
- Created custom hooks wherever required so as to have easy development.

7. Deployment
- Deployed the application on vercel.

8. PWA
- Have made the application compatible on any device with the help of PWA.
