import { SearchableQAReturn } from "../components/SearchableQAReturn";

export const rubyOnRailsQA = [
    {
      Q: `What is Ruby on Rails?`,
      A: `Rails is a web framework for Ruby built around MVC. It favors conventions over configuration so teams can build CRUD apps, APIs, and full-stack sites quickly with predictable structure.`,
    },
    {
      Q: `How does routing work in Rails?`,
      A: `Routes in config/routes.rb map URLs to controller actions. resources :posts creates RESTful routes for index, show, new, create, edit, update, and destroy. Rails names routes for use in links and redirects.`,
    },
    {
      Q: `What are the roles of models, views, and controllers?`,
      A: `Models hold data and business rules (often Active Record). Controllers handle requests, load data, and choose a response. Views render HTML (or JSON for APIs) shown to the user.`,
    },
    {
      Q: `What are Strong Parameters?`,
      A: `Strong Parameters whitelist which fields can be mass-assigned from request params. You define permitted keys in the controller so users cannot set protected attributes like admin flags.`,
    },
    {
      Q: `What are Active Record associations?`,
      A: `Associations link models, such as belongs_to, has_many, and has_one. They express relationships in the database and give helpful methods to load related records.`,
    },
    {
      Q: `What are validations and callbacks in Active Record?`,
      A: `Validations check data before save, like presence or uniqueness. Callbacks run code at lifecycle points, such as before_save. Overusing callbacks can hide logic—sometimes a service object is clearer.`,
    },
    {
      Q: `What is the N+1 query problem and how do you fix it?`,
      A: `N+1 happens when you load a list then run one query per row for associations. Fix it by eager loading with includes, preload, or eager_load so related data is fetched in fewer queries.`,
    },
    {
      Q: `What are migrations and schema.rb?`,
      A: `Migrations are versioned Ruby files that change the database schema over time. schema.rb is the generated snapshot of the current schema so new environments can load structure without replaying every migration.`,
    },
    {
      Q: `What is Active Job in Rails?`,
      A: `Active Job is the Rails API for background work, like sending email or processing uploads. Jobs run later via a queue backend such as Sidekiq or Solid Queue instead of blocking the web request.`,
    },
    {
      Q: `What is Hotwire in modern Rails?`,
      A: `Hotwire delivers fast UIs without a heavy client framework. Turbo handles partial page updates and streams; Stimulus adds small JavaScript behaviors. Together they keep most logic on the server.`,
    },
    {
      Q: `What is API-only mode in Rails?`,
      A: `An API-only app skips default browser views and many middleware pieces for HTML. Controllers typically render JSON. It is common for mobile clients or SPAs that have their own front end.`,
    },
    {
      Q: `How does Rails protect against CSRF and mass assignment?`,
      A: `CSRF protection uses authenticity tokens on state-changing browser forms. Mass assignment is limited by Strong Parameters and model attr protection patterns so clients cannot set forbidden columns.`,
    },
  ];

export const RubyOnRailsPage = () => <SearchableQAReturn QA={rubyOnRailsQA} />;
