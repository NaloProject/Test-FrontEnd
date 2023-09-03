
<br/>

### Rendering stategy
- using next13, everything is server-side rendered (SSR)
- everything but the `<SellerTotalSell/>` component : I forced client~side on it for the sake of an example 

<br/>

#### Npm installs / Potential enhancements
- I would use react-hook-form (or Formik) together with Yup or Zod for forms handling (dead simple validation, better performance ..)
- I would use SWR together with axios to handle client api calls (- automatic caching, simpler api ..)
- I would use i18n for static texts & translations
- I would use a clean way to auto~inline svg icons (eg. SVGr, ..)
- I would use framer-motion for animations
- I would add toasts (react-hot-toast) (e.g. form feedbacks ..)

<br/>

#### A bit overkill ?
- one may argue the 'domain' approach, the sheer amount of barrels - as well as the over~split design system - are overkill for such a small app,  
but I wanted to show how I would scale a bigger project

<br/>

##### Thanks for reading !