import { QAReturn } from "../components/QAReturn";

export const BootstrapPage = () => {
  const QA = [
    {
      Q: `What is Bootstrap? What are the other 5 responsive design frameworks?*`,
      A: `Bootstrap is a popular front-end framework for building responsive websites. Alternatives include Foundation, Bulma, Materialize, Semantic UI, and Tailwind CSS.`,
    },
    {
      Q: `What are the 5 Advantages of using Bootstrap?`,
      A: `Advantages include responsive design, pre-designed components, cross-browser compatibility, customizable styles, and a strong community support.`,
    },
    {
      Q: `What are the 2 ways to include Bootstrap framework for your website.`,
      A: `Include Bootstrap via a CDN link or by downloading and hosting the files locally.`,
    },
    {
      Q: `Explain the Grid System in Bootstrap?*`,
      A: `The grid system uses a series of containers, rows, and columns to layout and align content, creating a responsive design.`,
    },
    {
      Q: `What is the difference between col-xs, col-sm, col-md, col-lg & col-xl?`,
      A: `These classes define column sizes for different screen sizes: xs (extra small), sm (small), md (medium), lg (large), and xl (extra large).`,
    },
    {
      Q: `What are Bootstrap Components? What are Top 10 bootstrap components?*`,
      A: `Bootstrap components are reusable UI elements; top ones include buttons, forms, modals, navbars, cards, carousels, alerts, dropdowns, badges, and pagination.`,
    },
    {
      Q: `What is a Bootstrap Modal component?`,
      A: `A modal is a dialog box/popup window displayed on top of the current page, often used for alerts, forms, or additional content.`,
    },
    {
      Q: `What is a Bootstrap Navigation component?`,
      A: `The navigation component creates responsive navigation bars and menus for site navigation.`,
    },
    {
      Q: `What is Bootstrap Carousel component?`,
      A: `The carousel component creates a slideshow for cycling through elements, like images or text.`,
    },
    {
      Q: `Explain the difference between Bootstrap's container & container-fluid?`,
      A: `The container class provides a responsive fixed-width container, while container-fluid provides a full-width container spanning the entire viewport.`,
    },
    {
      Q: ``,
      A: ``,
    },
  ];

  return <QAReturn QA={QA} />;
};
