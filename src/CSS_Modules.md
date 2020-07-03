

How to use CSS Modules?
1. First, create a normal CSS file. If your application uses create-react-app, you need to name this file following the [name].module.css convention.
2. Add CSS classes to this file.
3. Import the module you’ve just created from within your component, like this:
          import styles from ‘./data-grid.module.css’; 
4. To use a class defined in your module, just refer to it as a normal property from the styles object, like:
<header className={styles.header}>…</header>
5. When your application runs, the class names in the rendered DOM will be automatically mangled to prevent global conflicts.

Class composition
Another great feature provided by CSS Modules is class composition. This allows developers to compose a new class by inheriting styles from other classes:

.linkButton{...}
.normalLink{...}
.currentRouteLink{
  composes: normalLink;
  font-weight: 300;
}

.standoutLink{
  composes: normalLink linkButton;
  background-color: #33C;
  color: white;
}

Global classes
You can declare global classes in CSS Modules as well. To do so, just prefix the class name with :global, like this:

:global .title{
  font-size: 20px;
}

.linkButton{...}

.normalLink{...}

.normalLink:hover{...}

Multiple classes with CSS Modules
This is a simple way to use multiple classes in a same element:
<a className={`${styles.normalLink} ${styles.linkButton}`}>...</a>
It just uses template literals to separate class names with a space.