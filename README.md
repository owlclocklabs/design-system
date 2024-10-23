# design-system
A simple design system.

## Component List
List of components needed for `1.0.0`

- [ ] **Accordion**
- [ ] **Alert**
- [ ] **Avatar**
- [ ] **Badge**
- [ ] **Breadcrumb**
- [ ] **Button**
- [ ] **ButtonGroup**
- [ ] **Card**
- [ ] **Checkbox**
- [ ] **Chip**
- [ ] **Dropdown**
- [ ] **Feedback / Loaders**
- [ ] **Form**
- [ ] **Icon**
- [ ] **Input**
- [ ] **Modal**
- [ ] **Pagination**
- [ ] **ProgressBar**
- [ ] **RadioButton**
- [ ] **Select**
- [ ] **Slider**
- [ ] **Spinner**
- [ ] **Stepper**
- [ ] **Tabs**
- [ ] **Table**
- [ ] **TextArea**
- [ ] **Toast**
- [ ] **Toggle**
- [ ] **ToggleButton**
- [ ] **Tooltip**

## Styling
Styling should work like this:
- All styles are managed by CSS variables
- :root colors is exportable, BUT is optional.  If another application has different designs, those can be implemented instead.
- Styles should be composable, meaning individual component styles can be imported into stylesheets or components as needed. If a consumer wants to use something like CSS modules, they can create an abstraction to make it more global.

## Exports
- Exports should be exposed in package.json
- All compononent directories should be exportable
- NO barrel-style export